import SearchForm from "../../components/SearchForm";
import ShoppingCart from "../../components/CartModal";
import PaginationSearch from "../../components/PaginationSearch";
/* import styles from './Search.module.css' */

export default function Search() {
    return (
        <div>
            <SearchForm />

            <PaginationSearch />

            <ShoppingCart />
        </div>
    )
}