import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { useMyStore } from "../../context/Mystore";
import "./SingleProduct.scss";
import Navbar from "../../components/Navbar/Navbar";

const SingleProduct = () => {
  const { id } = useParams();
  const [currentProd, setCurrentProd] = useState(null);

  const { loading, setLoading } = useMyStore();
  useEffect(() => {
    const getCurrentProd = async () => {
      setLoading(true);
      let response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setCurrentProd(response.data);
      setLoading(false);
    };
    getCurrentProd();
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <div className="single">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 left">
            <div className="single-img">
              <img
                src={currentProd?.image}
                alt="img"
                className="img-fluid img-thumbnail"
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 right">
            <div className="single-content">
              <h3 className="single-content-title">
                {currentProd?.title}{" "}
                <small className="text-info d-block">
                  {currentProd?.category}
                </small>
              </h3>
              <p>{currentProd?.description}</p>
              <div className="single-content-actions d-flex justify-content-around  ">
                <span className="price">{currentProd?.price}$</span>
                <div className="rate">
                  <span className="fa-solid fa-star text-warning"></span>
                  <span className="fa-solid fa-star text-warning"></span>
                  <span className="fa-solid fa-star text-warning"></span>
                  <span className="fa-solid fa-star text-warning"></span>
                  <span className="fa-solid fa-star text-warning"></span>
                </div>
                <div className="action">
                  <div className="btn-group">
                    <button className="btn btn-outline-info">-</button>
                    <button className="btn btn-outline-info">1</button>
                    <button className="btn btn-outline-info">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
