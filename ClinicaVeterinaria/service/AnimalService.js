import { Animal } from "../model/Animal.js";

export function getAnimals(){
    const animal1  = new Animal(1, "Moix", "M", null, "CAT");
    const animal2  = new Animal(2, "Paco", "M", 345, "DOG");
    const animal3  = new Animal(3, "Marta", "F", 678, "BIRD");
    const animal4  = new Animal(4, "Romeu", "M", 967, "DOG");
    const animal5  = new Animal(5, "Messi", "M", 482, "FISH");
    const animal6  = new Animal(6, "Po", "F", null, "BIRD");
    const animal7 = new Animal(7, "Tor", "M", 777, "PANDA");

return [animal1,animal2,animal3,animal4,animal5,animal6,animal7];
}

export function getAnimal(idAnimal){
    const animals = getAnimals();
    /*for(let i = 0; i<animals.length;i++){
        if (animals[i] === idAnimal){
            return animals[i];
        }
    }*/

    return animals.find(ani=> ani.id === idAnimal);
}  

function getDogs(){
    const animals = getAnimals();

    return animals.filter(dog=> dog.type === "DOG");
}