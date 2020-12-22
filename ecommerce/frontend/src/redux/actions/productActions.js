import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_FAIL,
} from "../constants/productConstants";

export const actionListProducts = () => async (dispatch) => {
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


export const actionListSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_PRODUCT_REQUEST });
    const res = await fetch(`/api/products/${id}`);
    const data = await res.json();

    dispatch({
      type: SINGLE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
        
      type: SINGLE_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,

    });
  }
};


// const [product, setProduct] = useState({});
//   const productId = match.params.id;

//   useEffect(() => {
//     fetch(`/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => setProduct(data));
//   }, [productId]);