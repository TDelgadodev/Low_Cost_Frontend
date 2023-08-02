import { useContext } from 'react'
import { ModalContext } from '../context/modalProvider'

export default function useModal() {
    return useContext(ModalContext)
}