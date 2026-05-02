import { Link } from "react-router-dom"


function BookCard({ book }) {

    // const { book } = props;

    const { image, title, author, abstract, id } = book;


    return (
        <div className="card mb-4">
            {image && <img src={image} className="card-img-top" alt={title} />}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <address><i>By {author || 'Anonymous'}</i></address>
                <p className="card-text">{abstract}</p>
                <Link to={`books/${id}`} className="btn btn-primary">See more</Link>
            </div>
        </div>
    )
}

export default BookCard