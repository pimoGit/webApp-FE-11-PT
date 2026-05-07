import axios from "axios";
import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";

// import del context per il loader
import { useGlobal } from "../contexts/GlobalContext";


function HomePage() {

    // prendiamo dal context il valore che ci serve
    const { setIsLoading } = useGlobal();

    // funzione di disattivazione loader
    const loadingFalse = () => {
        // settiamo il loading attivo
        setIsLoading(false)
    }


    // creiamo la var di stato
    const [books, setBooks] = useState([]);

    // definizione funzione per chiamata ajax a BE
    const fetchBooks = () => {
        // settiamo il loading attivo
        setIsLoading(true);

        axios.get("http://localhost:3000/api/books")
            .then(response => { setBooks(response.data) })
            .catch(err => {
                console.log(err);
            })
            .finally(setTimeout(loadingFalse, 2000))
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