import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

// do'konimiz
const MyStore = createContext();

// yaratgan do'konimizdan foydalanish hookimizni yaratamiz.
export const useMyStore = () => useContext(MyStore);

// Do'kon mahsulotlari(malumotlar)
export const MyStoreProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  const [selectedProd, setSelectedProd] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      setLoading(true);
      let response = await axios.get("https://fakestoreapi.com/products");
      setAllProducts(response.data);
      setLoading(false);
    };
    getAllProducts();

    let data = localStorage.getItem("Orders");
    if (data) {
      setSelectedProd(JSON.parse(data));
    } else setSelectedProd([]);
  }, []);

  useEffect(() => {
    setSelectedIds(selectedProd?.map((item) => item.id));
    localStorage.setItem("Orders", JSON.stringify(selectedProd));
  }, [selectedProd]);

  const data = {
    loading,
    setLoading,
    allProducts,
    setAllProducts,
    selectedProd,
    setSelectedProd,
    selectedIds,
    setSelectedIds,
  };

  return (
    <MyStore.Provider value={data}>
      <MyStore.Consumer>{() => children}</MyStore.Consumer>
    </MyStore.Provider>
  );
};
