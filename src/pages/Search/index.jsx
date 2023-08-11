import { useContext } from "react";
import SearchForm from "../../components/SearchForm";
import ShoppingCart from "../../components/CartModal";
import PaginationSearch from "../../components/PaginationSearch";
import WhatsApp from "../../components/WhatsApp";
/* import CarouselCategories from "../../components/CarouselCategories"; */
import { ProductContext } from "../../context/productProvider";
/* import styles from './Search.module.css' */

export default function Search() {
    const { updateFilter } = useContext(ProductContext);

    return (
        <div>
            <SearchForm updateFilter={updateFilter} />
          {/*   <CarouselCategories updateFilter={updateFilter} /> */}
            <PaginationSearch />
            <WhatsApp />
            <ShoppingCart />
        </div>
    )
}
