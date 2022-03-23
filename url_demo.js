const url = require('url');

const myUrl = new URL('https://www.youtube.com/watch?v=fBNz5xF-Kx4&t=147s');

// //serialized url
// console.log(myUrl.href);
// console.log(myUrl.toString());

// //host (root domain)
// console.log(myUrl.host);

// //hostname
// console.log(myUrl.hostname);

// //pathname
// console.log(myUrl.pathname);

// //serialized query
// console.log(myUrl.search);

// //params object
// console.log(myUrl.searchParams);

// //append params
// myUrl.searchParams.append('abc', '123');

//loop through params
myUrl.searchParams.forEach((value, name) =>
console.log(`${name}:${value}`));
