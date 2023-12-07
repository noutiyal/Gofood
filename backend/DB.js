const mongoose = require('mongoose');
const mongooseURL = "mongodb+srv://noutiyalgopal:testgofood@test0.l1fggrc.mongodb.net/newGoFood?retryWrites=true&w=majority";

const mongodb = async () => {
    try {
        await mongoose.connect(mongooseURL);

        console.log(`Connection to MongoDB successful`);

        // Access the 'newGoFood' database and the 'food_items' collection
        const db = mongoose.connection.db;
        const foodItemsCollection = db.collection("Food_items");
        const data = await foodItemsCollection.find({}).toArray();
        global.food = data
        const foodcategoryname = db.collection("FoodCategory")
        const catdata = await foodcategoryname.find({}).toArray()
        global.foodcate = catdata


    } catch (err) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
    }
}

module.exports = mongodb;
