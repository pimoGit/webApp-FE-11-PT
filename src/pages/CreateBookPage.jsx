import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

function CreateBookPage() {

    // inizializza il navigate
    const navigate = useNavigate();

    // creiamo url dell'endpoint da chiamare
    const apiUrl = `http://localhost:3000/api/books/`

    // valore default oggetto info form
    const initialValueForm = {
        "title": "",
        "author": "",
        "image": null,
        "abstract": ""
    };

    // settiamo var di stato (oggetto con info form)
    const [formData, setFormData] = useState(initialValueForm);

    // funzione di gestione dati form all'onChange
    const setFieldValue = e => {
        // destrutturiamo il target dell'evento
        const { name, value } = e.target;
        // settiamo valore in oggetto della var di stato
        if (name === "image") setFormData({ ...formData, image: e.target.files[0] });
        else setFormData({ ...formData, [name]: value })
    }

    // funzione di gestione dell'invio dei dati del form
    const handleSubmit = e => {
        // blocchiamo comportamento di default del form
        e.preventDefault();
        // chiamata axios per la rotta di store con info per il body
        axios.post(apiUrl, formData, { headers: { 'Content-Type': "multipart/form-data" } })
            .then(() => {
                // svuota il form
                setFormData(initialValueForm);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <header className="border-bottom border-1 mb-3">
                <h1>Add a new book</h1>
            </header>

            <section id="book-form">

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label>Title:</label>
                        <input
                            className="form-control"
                            name="title"
                            type="text"
                            value={formData.title}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Author:</label>
                        <input
                            className="form-control"
                            name="author"
                            type="text"
                            value={formData.author}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Image:</label>
                        <input
                            className="form-control"
                            name="image"
                            type="file"
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Abstract:</label>
                        <textarea
                            value={formData.abstract}
                            className="form-control"
                            name="abstract"
                            onChange={setFieldValue}
                            required
                        ></textarea>
                    </div>
                    <div className="border-top mb-3 pt-3 d-flex justify-content-between">
                        <Link className="btn btn-secondary" to="/">Back</Link>
                        <button className="btn btn-success" type="submit">
                            Add Book
                        </button>
                    </div>
                </form>
            </section>
        </>
    )

}

export default CreateBookPage