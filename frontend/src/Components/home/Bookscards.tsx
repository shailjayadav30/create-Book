import BookSingleCards from "./BookSingleCards";


interface Book {
    _id: string;
    title: string;
    author: string;
    publishyear: string;
  }

  interface BookscardsProps {
    books: Book[];
  }
const Bookscards:React.FC<BookscardsProps> = ({books}) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {books.map((item) => (
     <BookSingleCards key={item._id} book={item}/>
    ))}
  </div>
  );
};

export default Bookscards;
