let pets = [
  { animalType: "cat", name: ["sill", "dill", "mill"] },
  { animalType: "dog", name: ["dog1", "dog2", "dog3"] },
];


let data = pets.map(data1 => {
    return data1.animalType
})
console.log(data, "datatatatataa");
console.log(pets[0].animalType, pets[1]);