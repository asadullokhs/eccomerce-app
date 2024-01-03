import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import ProdCard from "../../components/ProdCard/ProdCard";
import { useMyStore } from "../../context/Mystore";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const [tempProducts, setTempProduts] = useState(null);
  const [categories, setCategories] = useState([]);
  const { loading, allProducts, selectedIds } = useMyStore();

  const getCategory = (categ) => {
    setTempProduts(allProducts.filter((item) => item.category === categ));
  };

  useEffect(() => {
    const getAllCategory = async () => {
      let response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      // let upperCat = response.data.map((item) => item.toUppercase());
      setCategories(response.data);
    };
    getAllCategory();
  }, []);

  const handleAll = () => {
    setTempProduts(allProducts);
  };

  useEffect(() => {
    setTempProduts(allProducts);
  }, [allProducts]);
  return loading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <section className="all-prod">
        <div className="container">
          <div className="row pt-5">
            <div className=" pt-5 all-prod-title d-flex align-items-center justify-content-between">
              <h2>Categories</h2>
              <div className="category">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <button
                      onClick={handleAll}
                      className="btn text-uppercase"
                      id="home-tab"
                    >
                      All
                    </button>
                  </li>
                  {categories.length > 0
                    ? categories.map((item, index) => {
                        return (
                          <li key={index} class="nav-item">
                            <button
                              className="btn text-uppercase"
                              onClick={() => getCategory(item)}
                            >
                              {item}
                            </button>
                          </li>
                        );
                      })
                    : ""}
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            {tempProducts?.map((item, index) => {
              return (
                <ProdCard
                  selected={selectedIds.includes(item.id)}
                  key={index}
                  prod={item}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
