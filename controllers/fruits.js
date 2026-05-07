const Fruit = require(`../models/Fruit`)

const index = async (req,res)=> {
    try{
        const fruits = await Fruit.showAll()
        res.status(200).send(fruits)
    } catch (error){
        res.status(500).send({error: error})
    }
    
}

const show = async (req,res)=> {
    //get the parameter of the URL and store the name to lower case 
    //name is NOT from json but from the routes key 
    const name = req.params.name.toLowerCase()
    try{
        //fruit.show() is a static function because it is coming from the class
        //stores the fruit object in fruit variable
        const fruit = await Fruit.show(name)
        res.status(200).send(fruit)
    } catch (error){ 
        res.status(404).send({error: error})
    }
    
}

const create = async (req,res) => {
    try{
        //get the data of the fruit we want to create from the bodt of our request
        const newFruit = await Fruit.create(req.body)
        res.status(201).send(newFruit)
    } catch(error){
        res.status(409).send({error: error})
    }
}

const update = async (req,res) => {
    //store the name of the fruit we want to update from the request params 
    const name = req.params.name.toLowerCase()
    try{
        //first we need to find the fruit
        const fruit = await Fruit.show(name)
        // call the function on the object and pass in the request body which contains the update
        const updatedFruit = await fruit.update(req.body)
        res.status(200).send(updatedFruit)
    } catch(error){
        res.status(409).send({error: error})
    }
}

const destroy = async (req,res)=>{
    const name = req.params.name.toLowerCase()

    try{
        const fruit = await Fruit.show(name)
        const deletedFruit = await fruit.destroy()
        res.sendStatus(204) //sendStatus since we have no body to send 

    }catch(error){
        res.sendStatus(409).send({error: error})
    }

}


//export 4 functions
module.exports = {
    index,
    show,
    create,
    update,
    destroy
}