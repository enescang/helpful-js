# Helpful JS
## Getting Started
My aim is creating npm package with typescript using jest and eslint. In addition learning typescript interfaces, enums, types and others.

Installation
----
```
$: ComingSoon
```
Usage
--
Create an instance like this:
``` js 
import HelpfulJs from  'helpful-js';

const helper =  new  HelpfulJs();
```
You can use the <code>set</code> method to insert your input the helper. 

## min 
If the input is less than given number in min methods.
There are 2 overrides:
* min(num: number)
* min(num: number, inclusive: boolean)
The <code>inclusive</code> variable is <b>true</b> as default value.
Check the below example:
``` js
 const myInput = 32;
 helper.set(myInput).min(10); // true: 32 >= 10
 helper.set(myInput).min(40); // false: 32 >= 40
 helper.set(myInput).min(32, false); // false: 32 > 32
 helper.set(myInput).min(32, true); // true: 32 >= 32
```
## max
If the input is greater than given number in max methods.
There are 2 overrides:
* max(num: number)
* max(num: number, inclusive: boolean)
The <code>inclusive</code> variable is <b>true</b> as default value.

``` js
const myInput = 23;
helper.set(myInput).max(10); // false: 23 <= 10
helper.set(myInput).max(40); // true: 32 <= 40
helper.set(myInput).max(23, false); // false: 23 < 23
helper.set(myInput).max(23, true); // true: 23 <= 23
```

## between
If the input is between min and max number in between methods.
``` js
helper.set(12).between(10, 19); // true
helper.set(7).between(0, 6); // false
helper.set(10).between(10, 10); // true
```

## mustInclude
If the input (object) has not the properties that given in mustInclude methods it will throw an Error.
``` js
const obj = {
name: 'foo',
other: 'bar'
};
helper.set(obj).mustInclude(['name', 'surname']); // throw new Error(...);
helper.set(obj).mustInclude(['name', 'other']); // not throwing any Error
```

## canBeAny
If the input value is not match any value of inside the canBeAny paramater it will throw an Error.
``` js
helper.set('enes').canBeAny('can|database'); // throw new Error(...)
helper.set('kodlib').canBeAny('enes|kodlib|github'); // not throwing any Error
helper.set('github').canBeAny(['git', 'helper','db']); //throw new Error(...)
helper.set('hello').canBeAny(['git', 'hello']); // not throwing any Error
```