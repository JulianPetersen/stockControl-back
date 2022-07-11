import mongoose from "mongoose";


mongoose.connect('mongodb://localhost/stockcontrol')
    .then(db => console.log('db is connected'))
    .catch(error => console.log(error))