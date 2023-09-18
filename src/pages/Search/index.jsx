import SearchForm from "../../components/SearchForm";
import ShoppingCart from "../../components/CartModal";
import PaginationSearch from "../../components/PaginationSearch";
import WhatsApp from "../../components/WhatsApp";

export default function Search() {

    return (
        <div>
            <SearchForm />
            <PaginationSearch />
            <WhatsApp />
            <ShoppingCart />
        </div>
    )
}
