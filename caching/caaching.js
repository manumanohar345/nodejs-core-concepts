
// Simple in-memory cache example for beginners
// This cache just stores and retrieves values by key (no expiration)

const cache = {};

// Store a value in the cache
function setCache(key, value) {
    cache[key] = value;
    console.log(`Cache set: ${key} =`, value);
}

// Get a value from the cache
function getCache(key) {
    if (cache.hasOwnProperty(key)) {
        console.log(`Cache hit: ${key} =`, cache[key]);
        return cache[key];
    } else {
        console.log(`Cache miss: ${key}`);
        return undefined;
    }
}

module.exports = { setCache, getCache };
