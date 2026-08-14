from PIL import Image
import numpy as np

# Load the image
img = Image.open('logo1.png').convert('RGB')
data = np.array(img)

# Get the background color (top-left corner)
bg_color = data[0, 0]
print(f"Background color: {bg_color}")

# Create mask for logo (pixels that are significantly different from background)
# Calculate distance from background color
diff = np.abs(data.astype(float) - bg_color.astype(float))
distance = np.sqrt(np.sum(diff**2, axis=2))

# Threshold to detect logo vs background
threshold = 30  # Adjust if needed
logo_mask = distance > threshold

print(f"Logo pixels found: {np.sum(logo_mask)}")

# Create new RGBA image
new_data = np.zeros((data.shape[0], data.shape[1], 4), dtype=np.uint8)
new_data[:, :, :3] = 255  # White RGB
new_data[:, :, 3] = (logo_mask * 255).astype(np.uint8)  # Alpha channel

# Create image
new_img = Image.fromarray(new_data, mode='RGBA')

# Find bounding box and crop
bbox = new_img.getbbox()
if bbox:
    print(f"Bounding box: {bbox}")
    new_img = new_img.crop(bbox)

    # Add smaller border to make logo bigger
    border = 5
    final_img = Image.new('RGBA',
                          (new_img.width + border*2, new_img.height + border*2),
                          (0, 0, 0, 0))
    final_img.paste(new_img, (border, border))

    # Scale up by 2x
    final_img = final_img.resize((final_img.width * 2, final_img.height * 2), Image.LANCZOS)

    # Save
    final_img.save('causory.png')
    print(f"Success! Final image size: {final_img.size}")
else:
    print("ERROR: Could not find logo bounds")
