const fruits = require(`../fruits.json`)

class Fruit{
    constructor(fruit){
        this.genus = fruit.genus
        this.name = fruit.name
        this.id = fruit.id
        this.family = fruit.family
        this.order = fruit.order
        this.nutritions = fruit.nutritions
    }


    static showAll(){
        return fruits.map(f => new Fruit(f))
    }

    static show(name){
        //go through the array and create a new array
        //(fruit) is each element in our array
        // if the elements fruit name equals the name written assign it to fruit variable
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name)

        //if fruit exists then create a new object fruit 
        if (fruit){
            return new Fruit(fruit)
        }else{
            throw "The fruit does not exist"
        }
    }

    static create(data){
        const newFruit = data
        //assign fruit variable if match
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == data.name.toLowerCase())

        // if exists then dont add
        if (fruit){
            throw "Already exists"
        }else{
            //same as newFruit.id
            newFruit["id"] = fruits.length+1 //set id
            fruits.push(newFruit) // add fruit to fruits array
            return new Fruit(newFruit) //create new object 
        }

    }

    //instance method as it is object specific
    update(data){
        //We use this. since it is the object itself calling this method
        const updatedFruit = fruits.find((fruit) => fruit.name.toLowerCase() === this.name.toLowerCase())

        //if the fruit exists we want to update it and create a new fruit object
        if(updatedFruit){
            updatedFruit.name = data.name
            updatedFruit.family = data.family
            return new Fruit(updatedFruit)
        }else{
            throw "Fruit not found"
        }
    }

    destroy(){
        //We use this. since it is the object itself calling this method
        const deletedFruit = fruits.find((fruit) => fruit.name.toLowerCase() === this.name.toLowerCase())

        //if the fruit exists we want to update it and create a new fruit object
        if(deletedFruit){
            //get index of deleted fruit element
            const index = fruits.indexOf(deletedFruit)
            //splice to remove index and count is 1
            fruits.splice(index,1)

        }else{
            throw "Fruit not found"
        }
    }


}

module.exports = Fruit