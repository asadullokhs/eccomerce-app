import React from "react";
import OrderItem from "../../components/OrderItem/OrderItem";
import { useMyStore } from "../../context/Mystore";
import Navbar from "../../components/Navbar/Navbar";

const OrderList = () => {
  const { selectedProd } = useMyStore();
  return (
    <div className="order-list" style={{ paddingTop: "100px" }}>
      <div className="container">
        <Navbar />
        {selectedProd.length &&
          selectedProd.map((item, index) => {
            return <OrderItem key={index} orderInfo={item} />;
          })}
      </div>
    </div>
  );
};

export default OrderList;
