import BookCard from "../components/BookCard";

const tempBooks = [
    {
        "id": 1,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "abstract": "A novel about the American dream and the tragedy of idealism.",
        "image": "great-gatsby.jpg",
        "created_at": "2024-11-26T09:58:09.000Z",
        "updated_at": "2024-12-20T10:30:54.000Z"
    },
    {
        "id": 2,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "abstract": "A story of racial injustice and moral growth in the Deep South.",
        "image": "to_kill_a_mocking_bird.jpg",
        "created_at": "2024-11-26T09:58:09.000Z",
        "updated_at": "2024-12-20T10:30:54.000Z"
    },
    {
        "id": 3,
        "title": "1984",
        "author": "George Orwell",
        "abstract": "A dystopian tale of a totalitarian regime and the fight for freedom.",
        "image": "1984.jpg",
        "created_at": "2024-11-26T09:58:09.000Z",
        "updated_at": "2024-12-20T10:30:54.000Z"
    },
    {
        "id": 4,
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "abstract": "A romantic story about love and social standings.",
        "image": "pride_and_prejudice.jpg",
        "created_at": "2024-11-26T09:58:09.000Z",
        "updated_at": "2024-12-20T10:28:01.000Z"
    },
    {
        "id": 5,
        "title": "Moby Dick",
        "author": "Herman Melville",
        "abstract": "A tale of obsession and revenge on the high seas.",
        "image": "moby_dick.jpg",
        "created_at": "2024-11-26T09:58:09.000Z",
        "updated_at": "2024-12-20T10:30:54.000Z"
    }
];


function HomePage() {

    return (
        <>
            <h1 className="text-primary">Bool Books</h1>
            <h2><i>The nerdest book community</i></h2>

            <div className="row row-cols-3 mt-4">
                <BookCard key={tempBooks[0].id} book={tempBooks[0]} />
                <BookCard key={tempBooks[1].id} book={tempBooks[1]} />
                <BookCard key={tempBooks[2].id} book={tempBooks[2]} />
            </div>
        </>
    )
}

export default HomePage