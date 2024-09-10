characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];

  //q1
console.log("_____________Q1___________________")
console.log(characters[0].name)

  //q4
console.log("_____________Q4___________________")

for (var i = 0; i < characters.length; i++) {
    console.log(characters[i].name);
}

  //q6
  console.log("_____________Q6___________________")

for (var i = 0; i < characters.length; i++) {
    console.log(characters[i].height);
}


// let massArray
// for (var i = 0; i < characters.length; i++) {
//     massArray=characters[i].mass;
//     massArray.sort(function(a, b) {
//         return a - b;
//       });
// }

// massArray.sort(function(a, b) {
//   return a - b;
// });

// console.log(massArray)
