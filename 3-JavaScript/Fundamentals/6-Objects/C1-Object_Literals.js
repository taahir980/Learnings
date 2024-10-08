// ========== Object Literal Declaration ==========

const mySym = Symbol("Key1"); // Symbol Declaration

const user = {
  name: "Tahir",
  [mySym]: "Khan", // Symbol Syntax
  "full name": "Tahir Khan",
  age: 22,
  isLearning: true,
  greeting: function () {
    console.log("Hello World");
  },
};

console.log(user);
console.log(user[mySym], "\n"); // Accessing Symbol Value

// ========== Accessing Object Properties ==========

console.log(user.name);
console.log(user["name"], "\n");

// console.log(user.full name); // this is not possible
console.log(user["full name"]); // only way of accessing
console.log(user.age, "\n");

// ========== Modifying Object Properties ==========

user.age = 27;
user["age"] = 33;
console.log(user, "\n"); // In both way possible

// Freeze Object - Now we can't modify the Object by any way like properties, values, keys etc.
Object.freeze(user);

user.age = 44;
console.log(user, "\n");

// ========== Object Method Call ==========

user.greeting();
console.log(user.greeting, "\n"); // Reference of the greeting function

// ========== Nested Object ==========

const address = {
  street: "123 Main St",
  city: "Exampleville",
  zipCode: "12345",
};

const person = {
  firstName: "Alice",
  lastName: "Johnson",
  address: address,
};

const user5 = {
  name: "abc",
  age: 65,
  address: "kolkata",
  call: () => {
    console.log("Mein bakri Hoon");
  },
  nested: {
    "minor val": "zzz",
    value: 78,
  },
};

console.log(person.address.street);
console.log(user5.nested["minor val"], "\n");
