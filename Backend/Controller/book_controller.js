import Book from "../model/book_model.js"
const getBook= async(req,res)=>{
    try {
        const book=await Book.find();
        res.status(200).json(book)
    } catch (error) {
      console.log(`error,${error}`);
      res.status(500).json(error)
        
    }
}
const setBook=async (req,res)=>{
    try {
        const book=await Book.create(req.body);
        res.status(200).send({msg:"Book set sucessfully",
            "book":book
        })


    } catch (error) {
        console.log(`error,${error}`);
        res.status(500).json(error)  
    }
}
export {getBook,setBook};