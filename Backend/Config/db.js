import mongoose from 'mongoose'
const URI=process.env.MongoDBURI
try {
    mongoose.connect(URI)
    .then(()=>{
        console.log(
            "DB connected ..."
        );
        console.log(URI);
        
        
    })

} catch (error) {
    console.log(`error occured ${error.message}`);
    
}
