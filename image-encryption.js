// Encrypted image data
const encryptedImageData = "aapka-encrypted-base64-image-data-yahan-paste-karen";

// Password for decryption
const password = "your-password";

// Function to decrypt the image
function decryptImage(encryptedImage, password) {
    return CryptoJS.AES.decrypt(encryptedImage, password).toString(CryptoJS.enc.Utf8);
}

// Fetch the encrypted image and decrypt it
document.addEventListener("DOMContentLoaded", () => {
    const decryptedImage = decryptImage(encryptedImageData, password);
    document.getElementById("decryptedImage").src = decryptedImage;
    document.getElementById("decryptedImage").style.display = 'block';
});

