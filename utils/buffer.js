// Node.js Buffer examples

// Create a buffer from a string
const buf1 = Buffer.from('Hello, Node.js!');
console.log('Buffer from string:', buf1);

// Create a buffer of a specific size
const buf2 = Buffer.alloc(10); // 10 bytes, filled with zeros
console.log('Allocated buffer:', buf2);

// Write to a buffer
buf2.write('abc');
console.log('Buffer after write:', buf2);

// Convert buffer to string
console.log('Buffer to string:', buf1.toString());

// Slice a buffer
const buf3 = buf1.slice(0, 5);
console.log('Sliced buffer:', buf3.toString()); // Output: Hello

// Buffer from array
const buf4 = Buffer.from([1, 2, 3, 4]);
console.log('Buffer from array:', buf4);
