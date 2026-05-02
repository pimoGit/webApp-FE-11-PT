import axios from "axios";
import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";


function HomePage() {

    // creiamo la var di stato
    const [books, setBooks] = useState([]);

    // definizione funzione per chiamata ajax a BE
    const fetchBooks = () => {
        axios.get("http://localhost:3000/api/books")
            .then(response => { setBooks(response.data) })
            .catch(err => {
                console.log(err);
            })
    }

    // definizione funzione rendering per card books
    const renderBooks = () => {
        return books.map((book) => {
            return (
                <div className="col" key={book.id}>
                    <BookCard book={book} />
                </div>
            )
        })
    }

    useEffect(fetchBooks, []);

    return (
        <>
            <h1 className="text-primary">Bool Books</h1>
            <h2><i>The nerdest book community</i></h2>

            <div className="row row-cols-3 mt-4">
                {renderBooks()}
            </div>
        </>
    )
}

export default HomePage