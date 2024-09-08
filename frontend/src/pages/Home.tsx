import { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import { MdOutlineAddBox } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";
import Bookstable from "../Components/home/Bookstable";
import Bookscards from "../Components/home/Bookscards";
interface Book {
  _id: string;
  title: string;
  author: string;
  publishyear: string;
}

const Home = () => {
  const [books, setbooks] = useState<Book[]>([]);
  const [loading, setloading] = useState<boolean>(false);
  const [showtype, setshowtype] = useState("table");
  useEffect(() => {
    setloading(true);
    axios
      .get<{ data: Book[] }>("http://localhost:5555/books")
      .then((response) => {
        console.log(response.data.data);
        setbooks(response.data.data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300  hover:bg-sky-600 px-4 py-1 rounded-lg "
          onClick={() => setshowtype("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300  hover:bg-sky-600 px-4 py-1 rounded-lg "
          onClick={() => setshowtype("card")}
        >
          Card
        </button>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showtype === "table" ? (
        <Bookstable books={books} />
      ) : (
        <Bookscards books={books} />
      )}
    </div>
  );
};

export default Home;
