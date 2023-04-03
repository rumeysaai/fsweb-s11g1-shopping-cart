import { createContext } from "react";

export const ProductContext = createContext();

// const ProductProvider = (children) => {
//     const [productState, setProductState] = useState({

//     });
//     return (
//         <ProductContext.Provider value={{productState, setProductState}}>
//             {children}
//         </ProductContext.Provider>
//     )
// }
// export default ProductProvider;