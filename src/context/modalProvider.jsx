import { useState, createContext } from "react";
import PropTypes from 'prop-types'

const ModalContext = createContext()

function ModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)

    function toggleModal() {
        setIsOpen(!isOpen)
    }


    const modalValues = {
        isOpen,
        toggleModal
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