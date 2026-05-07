import { Link, useParams, useNavigate } from "react-router-dom"
import axios from "axios";
import { useState, useEffect } from "react";

import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";

// import del context per il loader
import { useGlobal } from "../contexts/GlobalContext";


function BookPage() {

    const redirect = useNavigate();

    // prendiamo dal context il valore che ci serve
    const { setIsLoading } = useGlobal();

    // funzione di disattivazione loader
    const loadingFalse = () => {
        // settiamo il loading attivo
        setIsLoading(false)
    }

    // recuperiamo id da param dinamico
    const { id } = useParams();

    // set di var di stato
    const [book, setBook] = useState({});

    // definiamo funzione chiamata a BE
    const fetchBook = () => {
        // settiamo il loading attivo
        setIsLoading(true);

        axios.get("http://localhost:3000/api/books/" + id)
            .then(response => { setBook(response.data) })
            .catch(err => {
                console.log(err);
                if (err.status === 404) redirect('/404')
            })
            .finally(loadingFalse())
    }

    // definizione funzione rendering reviews
    const renderReview = () => {
        return book.reviews?.map((review) => <ReviewCard key={review.id} review={review} />)
    }

    // chiamata da useEffect
    useEffect(fetchBook, []);

    return (
        <>
            <header id="book" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    {book?.image && <img className="book-img" src={book?.image} alt={book?.title} />}
                </div>

                <h1>{book?.title}</h1>
                <h3 className="text-muted"><i>By {book?.author}</i></h3>
                <p>{book?.abstract}</p>
            </header>
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>
                {renderReview()}
            </section>
            <section>
                {book?.id && <ReviewForm book_id={book.id} refreshReviews={fetchBook} />}
            </section>
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
        </>
    )
}

export default BookPage