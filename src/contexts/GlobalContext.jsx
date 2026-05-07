import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {

    // var di stato
    const [isLoading, setIsLoading] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}


// Definiamo un hook per consumare il contesto
function useGlobal() {
    const context = useContext(GlobalContext);
    return context;
}

// Esportiamo il nostro provider ed il nostro hook
export { GlobalProvider, useGlobal }