/*Go through each requirements and solve it: 
1.  Define a function named sayHello when called alert saying "Hello JavaScript".
Call above function 
Store the return value in a variable named one
What is the typeof the value in one*/

```js

// function sayHello(){
//     alert ("Hello JavaScript");
// }

// let one = sayHello();
// typeof one;

// output 
// 'undefined'

```

2. /*Change function (from Part 1 above) to accept name from user 
   using prompt and store it in a variable named usename and alert message saying Hello [username].
   Call above function.
   Store the return value in a variable named two
  What is the typeof the value in two */

 function sayHello(){
    let username = prompt("Enter The name");
    alert (`Hello ${username}`);
}
let two = sayHello();
typeof two;

//  output 
'undefined'


3.  /* Change the function (from Part 2 above) to accept 
username as a parameter not from prompt.*/

function sayHello(username){
    alert (`Hello ${username}`);
}
// sayHello("shivam")

 

   /*Change (from Part 3 above) return the message Hello username instead of alerting it.
   Call above function.
   Store the return value in a variable named four
   What is the typeof the value in four  */

   function sayHello(username){
        return (`Hello ${username}`);
    }
    let four = sayHello("shivam123");
    typeof four

    // output
    'string'
    