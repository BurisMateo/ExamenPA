import React from "react";
import { ConsultaApi } from "../Api";

const ProductCard = ({ productcard }) => {
  const {
    title,
    price,
    currency_id,
    condition,
    available_quantity,
    thumbnail
  } = productcard;
  //Ejemplo de bootstrap implementado https://getbootstrap.com/docs/4.3/components/card/#horizontal
  return (
    <div class="col d-flex justify-content-center">
      <div
        className="card mb-3"
        style={{
          minHeight: "250px",
          minWidth: "750px",
          maxHeight: "250px",
          maxWidth: "750px"
        }}
      >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img className="card-img" src={thumbnail} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                Precio: ${price} {currency_id}
              </p>
              <p className="card-text">Condicion: {condition}</p>
              <p className="card-text">Cantidad: {available_quantity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;