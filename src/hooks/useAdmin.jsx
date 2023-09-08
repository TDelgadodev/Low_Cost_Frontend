import { useContext } from 'react'
import { AdminContext } from '../context/adminProvider'


const useAdmin = () => {
  return useContext(AdminContext)
}

export default useAdmin