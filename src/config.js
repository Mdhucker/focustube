
// src/config.js

// ✅ Define this before using it
const IS_LOCAL = true; // or false depending on environment

const CONFIG = {
  API_BASE_URL: IS_LOCAL
    ? "http://localhost:8000/api"
    : "https://api.focustube.online/api",
};

export default CONFIG;


