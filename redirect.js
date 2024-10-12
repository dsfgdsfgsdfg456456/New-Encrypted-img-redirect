// List of URLs
const urls = [
    "https://alcashzone.com",
    "https://alcashedu.com",
    "https://youtube.com/@alcashzone"
];

// Redirect to a random URL
const randomUrl = urls[Math.floor(Math.random() * urls.length)];
window.location.href = randomUrl;
