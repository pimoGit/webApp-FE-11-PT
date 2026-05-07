import HomePage from "./pages/HomePage"
import BookPage from "./pages/BookPage"
import CreateBookPage from "./pages/CreateBookPage"
import DefaultLayout from "./layouts/DefaultLayout"

import { BrowserRouter, Routes, Route } from "react-router-dom"

// import del provide per warappare l'app per uso del context
import { GlobalProvider } from "./contexts/GlobalContext"


function App() {

    return (
        <GlobalProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<DefaultLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/books/create" element={<CreateBookPage />} />
                        <Route path="/books/:id" element={<BookPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </GlobalProvider>
    )
}

export default App
