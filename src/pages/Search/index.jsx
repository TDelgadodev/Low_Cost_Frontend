import SearchForm from "../../components/SearchForm";
import ShoppingCart from "../../components/CartModal";
import PaginationSearch from "../../components/PaginationSearch";
import WhatsApp from "../../components/WhatsApp";
/* import styles from './Search.module.css' */

export default function Search() {
    return (
        <div>
            <SearchForm />

            <PaginationSearch />

            <WhatsApp></WhatsApp>

            <ShoppingCart />
        </div>
    )
}