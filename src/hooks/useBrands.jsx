import { useContext } from "react";
import { BrandsContext } from '../context/BrandsProvider';

export function useBrands() {
    return useContext(BrandsContext);
}