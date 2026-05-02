import HomePage from "./pages/HomePage"
import BookPage from "./pages/BookPage"
import DefaultLayout from "./layouts/DefaultLayout"

import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/books/:id" element={<BookPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
