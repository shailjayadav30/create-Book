import axios from "axios"
import {  useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Backbutton from "../Components/Backbutton"
import Spinner from "../Components/Spinner"
import { useSnackbar } from "notistack"


const Editbook = () => {
    const [title,settitle]=useState("")
    const [author,setauthor]=useState("")
    const [publishyear,setpublishyear]=useState("")
    const [loading,setloading]=useState(false)
    const navigate=useNavigate()
    const {enqueueSnackbar}=useSnackbar();
const {id}=useParams()
  useEffect(()=>{
    setloading(true)
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response)=>{
      settitle(response.data.title)
      setauthor(response.data.author)
      setpublishyear(response.data.publishyear)
      setloading(false)
    }).catch((error)=>{
      alert("An error happened.Please check console")
      console.log(error)
    })
  },[])
    const handleeditbook=()=>{
        const data={
            title,
            author,
            publishyear,
        }
        setloading(true)
         axios
         .put(`http://localhost:5555/books/${id}`,data)
         .then(()=>{
            setloading(false)
            enqueueSnackbar("Book Edited Successfully",{variant:"success"})
            navigate("/")
         })
         .catch((error)=>{
            setloading(false)
            // alert("An error occured.Please Check console")
            enqueueSnackbar("Error",{variant:"error"})
console.log(error)
         })
    }
  return (
    <div className="p-4">
        <Backbutton/>
        <h1  className="text-3xl my-4">Edit Book</h1>
        {loading?<Spinner/>:""}
        <div className="flex flex-col border-2  border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4"> 
            <label htmlFor="title" className="text-xl mr-4 text-gray-500">Title</label>
            <input type="text"  value={title}  onChange={(e)=>settitle(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full rounded-md"/>
          </div>
          <div className="my-4"> 
            <label htmlFor="author" className="text-xl mr-4 text-gray-500">Author</label>
            <input type="text"  value={author}  onChange={(e)=>setauthor(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full rounded-md"/>
          </div>
          <div className="my-4"> 
            <label htmlFor="year" className="text-xl mr-4 text-gray-500">Publish Year</label>
            <input type="text"  value={publishyear}  onChange={(e)=>setpublishyear(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full rounded-md"/>
          </div>
          <button  className="p-2 bg-sky-300 m-8 rounded-md"  onClick={handleeditbook}>Save</button>
        </div>
      
    </div>
  )
}

export default Editbook
