let a = [];
let b = [];
let c = [];
let i = 0;
let j = 0;
a = [

    {
        name: "Wade",
        age: 5,
        location: {
            city: "Kiev",
            street: "Shevchenko",
            building: "14A",
        }
    },

    {
        name: "Dave",
        age: 12,
        location: {
            city: "Kiev",
            street: "Shevchenko",
            building: "14B",
        }
    },
    {
        name: "Ivan",
        age: 15,
        location: {
            city: "Kiev",
            street: "Shevchenko",
            building: "14C",
        }
    },

    {
        name: "Riley",
        age: 4,
        location: {
            city: "Kiev",
            street: "Shevchenko",
            building: "14D",
        },
    },

    {
        name: "Jorge",
        age: 10,
        location: {
            city: "Kiev",
            street: "Shevchenko",
            building: "14E",
        }
    },

];



a.forEach((user) => {
    if (user.age > 11) {
         b[i] = user;
         i++;       

    } else {
        c[j] = user;
        j++;
    }    
});
console.log(b);
console.log(c);
