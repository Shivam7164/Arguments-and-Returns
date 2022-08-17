// What would the following function return (not output) when called? Write the output next to function call.
-

1. /*function test() {
  alert('Hello');
}
*/
test(); // output
- undefined

2. /*function test() {
  return;
}
*/
test(); // output
- undefined

3. /*function test() {
  return 21;
}
*/
test(); // output
-12

4. /*function test() {
  return null;
}
*/
test(); // output
-null

5. /*function test() {
  console.log('hello');
}
*/
test(); // output
-undefined

6. /*function test() {
  prompt('Enter your age?');
}
*/
test(); // output
-undefined

7. /*function test() {
  return prompt('Enter you age');
}
*/
test(); // output
-string value

8. /*function test() {
  return function second() {};
}
*/
test(); // output
function second () {}

// What will be the value of test variable in the snippet below
/*function sayHello() {
  let username = 'John';
  return `Hello ${username}`;
}
let test = sayHello();
*/
'Hello john'

// What will be the value of test variable and output of console.log() in the snippet below
/*let username = 'Sam';
function sayHello() {
  let username = 'John';
  return `Hello ${username}`;
}
let test = sayHello();
console.log(username);
*/
'Hello john'
'sam'

// What will be the value of test and output of console.log() variable in the snippet below
/*let username = 'Sam';
function sayHello() {
  return `Hello ${username}`;
}
let test = sayHello();
console.log(username);
*/
'Hello sam'
'sam'