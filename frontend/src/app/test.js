// test.js

// Check if localStorage is available
function isLocalStorageAvailable() {
    try {
      const testKey = 'test';
      localStorage.setItem(testKey, 'testValue');
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
  
  // In-memory storage fallback
  class InMemoryStorage {
    constructor() {
      this.store = {};
    }
  
    setItem(key, value) {
      this.store[key] = String(value);
    }
  
    getItem(key) {
      return this.store[key] || null;
    }
  
    removeItem(key) {
      delete this.store[key];
    }
  
    clear() {
      this.store = {};
    }
  }
  
  // Use localStorage if available, otherwise use InMemoryStorage
  const storage = isLocalStorageAvailable() ? localStorage : new InMemoryStorage();
  
  if (!isLocalStorageAvailable()) {
    console.warn('localStorage is not available. Using in-memory storage as a fallback.');
  }
  
  // Test the storage
  storage.setItem('myKey', 'myValue');
  console.log(storage.getItem('myKey')); // Output: 'myValue'
  