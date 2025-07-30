const querystring = require('querystring');

// Object to query string
const obj = { name: 'Murali', city: 'hyderabad' };
const str = querystring.stringify(obj);
console.log('Query string:', str);

// Query string to object
const parsed = querystring.parse('name=Murali&city=hyderabad');
console.log('Parsed object:', parsed);
