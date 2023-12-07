const express = require('express');
const app = express();
const port = 4000;
const mongodb = require('./DB');
const userRoute = require('./Routes/CreateUserRoute')
const fooditems =require('./Routes/ProductsRouter')
const bodyParser = require("body-parser")
const cors = require("cors")
mongodb();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    
    console.log("first");
});
app.use('/api', userRoute)
app.use('/api', fooditems)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
