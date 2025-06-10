const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes'); 



const app = express();
app.use(express.json()); 


const mongoUri = 'mongodb://localhost:27017/productdb';
const PORT = 3000;

mongoose.connect(mongoUri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then(() => console.log(' Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));



app.use('/', productRoutes);


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
