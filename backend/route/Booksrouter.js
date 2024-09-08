import express from "express";
import { Book } from "../models/bookmodels.js";

const router=express.Router()
router.post("/", async (request,response) => {
    // console.log("Request Body:", request.body); 
    try {
      if (
        !request.body.title ||
        !request.body.author ||
        !request.body.publishyear
      ) {
        return response.status(400).send({
          message: "Send all required fields:title,author, publishyear",
        });
      }
      const newbook = {
        title:request.body.title,
        author:request.body.author,
        publishyear:request.body.publishyear,
      };
      const book = await Book.create(newbook);
      console.log(book);
      return response.status(201).send(book)
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message:error.message });
    }
  });
  //Rouute for getting all books from database
  
  router.get("/",async (request,response)=>{
   try {
    const books=await Book.find({})
    return response.status(200).json({
      count:books.length,
      data:books
    })
   } catch (error) {
    console.log(error.message)
    response.status(500).send({message:error.message})
   }
  })
  
  //Route to get one book form db
  
  router.get("/:id", async (request,response)=>{
    try {
      const {id}=request.params 
      const book=await Book.findById(id)
      return response.status(200).json(book)
    } catch (error) {
      console.log(error.message)
      response.status(500).send({message:error.message})
    }
  })
  //Route to update a book
  
  router.put("/:id" ,async (request,response)=>{
    try {
      if (
        !request.body.title ||
        !request.body.author ||
        !request.body.publishyear
      ) 
      {
        return response.status(400).send({
          message: "Send all required fields:title,author, publishyear",
        });
      }
      const {id}=request.params;
      const result=await Book.findByIdAndUpdate(id,request.body);
  if(!result){
    return response.status(404).json({message:"Book not found"})
  }
  return response.status(200).send({message:"Book updated successfully"})
    } catch (error) {
     console.log(error.message) 
     response.status(500).send({message:error.message})
    }
  })
  
  // Delete a book from mongoose
  
  router.delete("/:id",async (request,response)=>{
    try {
      const {id}=request.params
      const result =await Book.findByIdAndDelete(id)
      if(!result){
        return response.status(404).json({message:"Book not found"})
      }
      return response.status(200).send({message:"Boook deleted successfully"})
    } catch (error) {
      console.log(error.message)
      response.status(500).send({message:error.message})
    }
  })

  export default router;