function ReviewCard({ review }) {

    // const { review } = props;

    const { text, vote, name } = review;


    return (
        <div className="card mb-4">
            <div className="card-body">
                <p className="card-text">{text}</p>
                <strong>Vote: {vote}/5</strong>
                <address><i>By {name}</i></address>
            </div>
        </div>
    )
}

export default ReviewCard