import { createContext,useEffect,useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] =useState()
    const [products, setProducts] = useState();
    const [cartItems, setCartItem] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [showSuccess,setShowSuccess] =useState(false)
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0,0)
    },[location])

    useEffect(() => {
        let totalPrice = 0;
        cartItems.map(item => totalPrice += item.attributes.price * item.attributes.quantity);
        let totalQuantity = 0;
        cartItems.map((item) => totalQuantity += item.attributes.quantity)
        setCartCount(totalQuantity)

        setCartSubTotal(totalPrice)
        
    }, [cartItems]);
    const handleAddtoCart = (product, quantity) => {
        let items = [...cartItems];
        let index = items.findIndex((p) => p.id === product.id);
        if (index !== -1) {
            items[index].attributes.quantity += quantity;
        } else {
            product.attributes.quantity = quantity;
            items=[...items,product]
        }
        setCartItem(items)
    }
    const handleRemoveCart = (product) => {
        let items = [...cartItems];
        items = items.filter((p) => p.id !== product.id)
        setCartItem(items)
    }
    const handleCartProductQnty = (type, product) => {
        let items = [...cartItems];
        let index = items.findIndex((p) => p.id === product.id);
        if (type === "inc") {
            items[index].attributes.quantity += 1;
        } else if (type === "dec") {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        setCartItem(items)

    }
    return (

        <Context.Provider value={{
            categories,
            setCategories,
            products,
            setProducts,
            cartCount,
            setCartCount,
    
            setCartItem,
            cartItems,
            cartSubTotal,
            setCartSubTotal,
            handleAddtoCart,
            handleRemoveCart,
            showSuccess,
            setShowSuccess,
            handleCartProductQnty
        }}>
            {children}
        </Context.Provider>
    )
}
export default AppContext