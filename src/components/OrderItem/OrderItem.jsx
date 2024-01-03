import React from "react";
import { useMyStore } from "../../context/Mystore";
import "./OrderItem.scss";

const OrderItem = ({ orderInfo }) => {
  const { setSelectedProd } = useMyStore();
  const { image, title, description, rating, price, category, id } = orderInfo;
  const handleDelete = () => {
    setSelectedProd((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className="order-item">
      <div className="row border border-info">
        <div className="col-3">
          <div className="order-item-img">
            <img
              className="img-fluid border-end border-info "
              style={{ padding: "20px" }}
              src={image}
              alt="img"
            />
          </div>
        </div>
        <div className="col-9 d-flex align-items-center">
          <div className="order-item-content ps-5">
            <h3>
              {title}. <small className="d-block text-info">{category}</small>
            </h3>
            <p>{description}</p>
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ width: "600px" }}
            >
              <span className="price">{price}$</span>
              <span className="text-warning">{rating.rate} rate</span>
              <div className="btn-group">
                <button
                  style={{ color: "#444" }}
                  className="btn btn-sm btn-outline-info text-info"
                >
                  -
                </button>
                <button
                  style={{ color: "#444" }}
                  className="btn btn-sm btn-outline-info text-info"
                >
                  1
                </button>
                <button
                  style={{ color: "#444" }}
                  className="btn btn-sm btn-outline-info text-info"
                >
                  +
                </button>
              </div>
              <div
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleDelete(id)}
              >
                <i className="fa-solid fa-trash "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
