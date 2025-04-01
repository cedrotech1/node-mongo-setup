const mongoese = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const DatabaseConnection= async ()=>{
    try{
        await mongoese.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Database connected successfully")
    }
    catch(error){
        console.log("Error in connecting to database",error);
        
    }
    
}
module.exports=DatabaseConnection;