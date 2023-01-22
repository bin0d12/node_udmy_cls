const fruits = ['mango', 'peach', 'banana'];

for(let i = 0; i < fruits.length; i++){
    console.log(i);
}

for(let fruit of fruits){
    console.log(fruit);
}

for(let fruit in fruits){
    console.log(fruit);
}