import { Link } from "react-router-dom"

import ReviewCard from "../components/ReviewCard";

const tempBookDetail = {
    "id": 3,
    "title": "1984",
    "author": "George Orwell",
    "abstract": "A dystopian tale of a totalitarian regime and the fight for freedom.",
    "image": "1984.jpg",
    "created_at": "2024-11-26T09:58:09.000Z",
    "updated_at": "2024-12-20T10:30:54.000Z",
    "reviews": [
        {
            "id": 7,
            "book_id": 3,
            "name": "Grace",
            "vote": 5,
            "text": "A chilling and relevant story, even today.",
            "created_at": "2024-11-26T09:58:09.000Z",
            "updated_at": "2024-11-26T09:58:09.000Z"
        },
        {
            "id": 8,
            "book_id": 3,
            "name": "Hank",
            "vote": 4,
            "text": "Dark and thought-provoking.",
            "created_at": "2024-11-26T09:58:09.000Z",
            "updated_at": "2024-11-26T09:58:09.000Z"
        },
        {
            "id": 9,
            "book_id": 3,
            "name": "Ivy",
            "vote": 3,
            "text": "Too bleak for my taste, but well written.",
            "created_at": "2024-11-26T09:58:09.000Z",
            "updated_at": "2024-11-26T09:58:09.000Z"
        },
        {
            "id": 20,
            "book_id": 3,
            "name": "newMarioNN",
            "vote": 5,
            "text": "bello peccato che è così che sta andando il mondo",
            "created_at": "2026-02-25T11:25:23.000Z",
            "updated_at": "2026-02-25T11:25:23.000Z"
        }
    ]
};


function BookPage() {

    return (
        <>
            <header id="book" className="border-bottom border-1 mb-3">
                <h1>{tempBookDetail.title}</h1>
                <h3 className="text-muted"><i>By Nome autore</i></h3>
                <p>lorem ipsm dolor sit amet</p>
            </header>
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>
                <ReviewCard key={tempBookDetail.reviews[0].id} review={tempBookDetail.reviews[0]} />
                <ReviewCard key={tempBookDetail.reviews[1].id} review={tempBookDetail.reviews[1]} />
                <ReviewCard key={tempBookDetail.reviews[2].id} review={tempBookDetail.reviews[2]} />

            </section>
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
        </>
    )
}

export default BookPage