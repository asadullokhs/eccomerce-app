import React from "react";
import "./ProdCard.scss";
import { Link } from "react-router-dom";
import { useMyStore } from "../../context/Mystore";
import axios from "axios";
import { toast } from "react-toastify";

const ProdCard = ({ selected, prod }) => {
  const { id, category, description, price, rating, title, image } = prod;

  const { setSelectedProd, selectedProd } = useMyStore();

  const handleSelect = (prod) => {
    setSelectedProd((prev) => [...prev, prod]);
  };

  const handleCancel = (id) => {
    setSelectedProd((prev) => prev.filter((item) => item.id !== id));
  };

  const Delete = async (id) => {
    try {
      let response = await axios.delete(
        `https://fakestoreapi.com/products/${id}`
      );
      console.log(response);
      toast.info(`Mana shu ${id} raqamli prod ochirildi `);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
      <div className="card mb-3">
        <Link to={`/product/${id}`}>
          <div className="card-header p-0">
            <img
              style={{ height: "280px", objectFit: "cover" }}
              src={image}
              alt="alt poduct"
              className="card-img-top img-fluid"
            />
            <span className="text-white" style={{ fontWeight: "600" }}>
              {category}
            </span>
          </div>
        </Link>

        <div className="card-body">
          <Link to={`/product/${id}`}>
            <h4 className="card-title">{title}</h4>
            <p className="text-d">{description}</p>
          </Link>
          <div className="d-flex justify-content-between align-items-center">
            <span className="badge bg-info">{price}$</span>
            <div>
              <span className="fa-solid fa-star text-warning"></span>
              <span className="fa-solid fa-star text-warning"></span>
              <span className="fa-solid fa-star text-warning"></span>
              <span className="fa-solid fa-star text-warning"></span>
              <span className="fa-solid fa-star text-warning"></span>
            </div>
            {selected ? (
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleCancel(id)}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
            ) : (
              <button
                className="btn btn-sm btn-info text-white add-selected"
                onClick={() => handleSelect(prod)}
              >
                <i className="fa-solid fa-shopping-cart"></i>
              </button>
            )}
            <button
              onClick={() => Delete(id)}
              className="btn btn-danger text-white "
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdCard;
