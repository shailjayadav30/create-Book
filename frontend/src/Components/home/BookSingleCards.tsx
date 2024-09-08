import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BiShow, BiUserCircle } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import BookModal from "./BookModal";

interface Book {
    _id: string;
    title: string;
    author: string;
    publishyear: string;
  }
  
  interface BookSingleCardProps {
    book: Book;
  }

const BookSingleCards:React.FC<BookSingleCardProps> = ({book}) => {
    const [showmodal,setshowmodal]=useState(false)
  return (
    <div
    key={book._id}
    className="border-2 border-gray-500 rounded-lg px-2 py-2 m-4 relative hover:shadow-xl"
  >
    <h2 className="absolute top-3   right-1 px-4 py-1 bg-red-300 rounded-lg">
      {book.publishyear}
    </h2>
    <h4 className="my-2 text-gray-500">{book._id}</h4>
    <div className="flex justify-start items-center gap-x-2">
      <PiBookOpenTextLight className="text-red-300 text-2xl" />
      <h2 className="my-1">{book.title}</h2>
    </div>
    <div className="flex justify-start items-center gap-x-2">
      <BiUserCircle className="text-red-300 text-2xl" />
      <h2 className="my-1">{book.author}</h2>
    </div>
    <div className="flex justify-start items-center gap-x-2 mt-4 p-4">
        <BiShow className="text-3xl text-blue-800 hover:text-black cursor-pointer" onClick={()=>setshowmodal(true)}/>
      <Link to={`/books/details/${book._id}`}>
        <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
      </Link>
      <Link to={`/books/edit/${book._id}`}>
        <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
      </Link>
      <Link to={`/books/delete/${book._id}`}>
        <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
      </Link>
    </div>
    {
        showmodal && (
            <BookModal book={book} onclose={() =>setshowmodal(false)}/>
        )
    }
  </div>
  )
}

export default BookSingleCards
