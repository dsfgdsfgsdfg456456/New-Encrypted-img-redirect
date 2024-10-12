// List of URLs
const urls = [
    "https://example1.com",
    "https://example2.com",
    "https://example3.com"
];

// Redirect to a random URL
const randomUrl = urls[Math.floor(Math.random() * urls.length)];
window.location.href = randomUrl;
