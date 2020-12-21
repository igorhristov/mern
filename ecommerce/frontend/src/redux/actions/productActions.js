import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const res = await fetch("/api/products");
    const data = await res.json();

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
        
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,

    });
  }
};

// const [products, setProducts] = useState([]);
//   const url = "/api/products";

//   useEffect(() => {
//     const getProductsData = async () => {
//       const res = await fetch(url);
//       const getData = await res.json();
//       setProducts(getData)
//     };

//     getProductsData()
//   }, []);
