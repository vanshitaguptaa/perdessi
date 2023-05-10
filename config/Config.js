import mongoose from "mongoose";

const config = async()=>{
    const URL = process.env.DBCONNECT;
try {
   await mongoose.connect(URL);
    console.log('database Connected Successfully')
} catch (err) {
    console.log('Some Error occurs while Connecting database Successfully')
}
} 

export default config;