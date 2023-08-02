import { useState, createContext } from "react";
import PropTypes from 'prop-types'

const ModalContext = createContext()

function ModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)

    function toogleModal() {
        setIsOpen(!isOpen)
    }


    const modalValues = {
        isOpen,
        toogleModal
    }

    return (
        <ModalContext.Provider value={modalValues}>
            {children}
        </ModalContext.Provider>
    )
}

ModalProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export { ModalContext, ModalProvider }