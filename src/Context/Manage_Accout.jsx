import { createContext, useState } from "react"



export const AccoutContext = createContext()



export const AccoutProvider = ({children}) => {

  const [isOpen, setIsOpen] = useState(false)

    const value = {
        isOpen,
        setIsOpen
   }

    return (
        <AccoutContext.Provider value={value}>
   {children}
        </AccoutContext.Provider>
    )
}