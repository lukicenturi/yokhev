import qrcode

# Google Maps link
google_maps_link = "https://maps.app.goo.gl/vJvcphZiqHZS1FAi9"

# Generate QR code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=2,
)
qr.add_data(google_maps_link)
qr.make(fit=True)

# Create an image from the QR Code instance
img = qr.make_image(fill_color="black", back_color="white")

# Save the image to a file
img.save("google_maps_qr.png")
