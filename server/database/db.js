
import mongoose from "mongoose";
 

export const Connection =async (USERNAME,PASSWORD)=> {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.uje0amt.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true,  });
        //await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
};

export default Connection;