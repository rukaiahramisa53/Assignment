# Assignment
1) What is the difference between null and undefined?
answer: Undefined হলো যখন কিছু define করা হয় না।
আর  Null অর্থ হলো এটার কোনো value নেই।

Undefined Js নিজেই বলে দেয়। যেমন, কোনো ফাংশন আমরা কল করলাম কিন্তু কোনো প্যারামিটার দেয়া হয় না বা ফাংশন কিছু রিটার্ন করে না, তাইলে রেজাল্ট Undefined হবে।
js ই এটা দেখাবে 

আবার, Null আমরা নিজেরাই সেট করি। নাল মানেই হলো নাই।
It is assigned by the programmer himself to say something doesn’t have any value.
Also type of null is object
And type of undefined is undefined.

2) What is the use of the map() function in JavaScript? How is it different from forEach()?

Answer: Map use করা হয় যখন একটা array এর উপাদান এর উপর কাজ করে new array বানানো লাগে। 
It helps in changing the elements of an array, working on those elements and creating a new array. 
 ForEach নিয়ে কাজ করলে আমরা কোনো array এর উপাদানগুলোর উপর কাজ করতে পারবো বাট নিউ array বানাতে পারবো না।
It Doesn't return Anything.

3) What is the difference between == and ===?
Ans: Triple equal checks the data type and the value but double equal only checks the value. 
যদি আমরা একটা নাম্বার 5 আর স্ট্রিং 5 compare করি, তাইলে === ইউজ করলে false দেখাবে। কারণ ডাটা টাইপ আলাদা। 
বাট, == ইউজ করলে সেম ভেবে ট্রু দেখাবে। কারণ, == টাইপকে convert করে স্ট্রিংকে নাম্বার এ নিবে দেন নাম্বার ২ টা compare করে  result true দেখাবে।
 4) What is the significance of async/await in fetching API data?

 Ans: Async/await use করা হয় asynchronous কাজ, যেমন API থেকে data আনা, সহজভাবে handle করার জন্য।
Async keyword ব্যবহার করা হয় একটি function কে asynchronous বানানোর জন্য।
এটা Promise-কে synchronous code এর মতো দেখায়, তাই code readable ও বোঝা সহজ হয়।
 await ব্যবহার করলে JavaScript অপেক্ষা করে যতক্ষণ না API থেকে response আসে, তারপর পরের লাইন execute করে।

5) Explain the concept of Scope in JavaScript (Global, Function, Block)

Scope বলতে বোঝায়, একটি variable কোথায় declare করা হয়েছে এবং কোডের কোন অংশ থেকে সেটি access করা যাবে।
JavaScript-এ মূলত তিন ধরনের scope আছে: Global Scope, Function Scope, এবং Block Scope।

1.যে variable কোনো function বা block-এর বাইরে declare করা হয়, সেটি Global Scope-এর মধ্যে পড়ে।
এই ধরনের variable পুরো প্রোগ্রামের যেকোনো জায়গা থেকে access করা যায়।
2.যে variable কোনো function-এর ভিতরে declare করা হয়, সেটি শুধু ওই function-এর ভিতরেই ব্যবহার করা যায়।
Function-এর বাইরে থেকে এটিকে access করা যায় না।
3. যে variable { }( while,if, loops) এর ভিতরে let বা const দিয়ে declare করা হয়, সেটি Block Scope-এর মধ্যে পড়ে।
Block-এর বাইরে থেকে সেটি access করা যায় না।


