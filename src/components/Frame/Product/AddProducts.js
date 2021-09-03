import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import swal from "sweetalert";

//to add product (for admin and vendor)
const AddProducts = () => {
  let [product, setProduct] = useState({
    productName: "",
    productDescription: "",
    productVendor: "",
    productCategory: "",
    productPrice: "",
    productStocks: "",
    productImage: "",
    productRating: "",
    config: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });
  const changeHandler = (e) => {
    var { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const fileHandler = (e) => {
    var { name, files } = e.target;
    setProduct({
      ...product,
      [name]: files[0],
    });
  };

  const addProduct = (e) => {
    e.preventDefault();
    var fData = new FormData();
    fData.append("productName", product.productName);
    fData.append("productDescription", product.productDescription);
    fData.append("productVendor", product.productVendor);
    fData.append("productCategory", product.productCategory);
    fData.append("productPrice", product.productPrice);
    fData.append("productStocks", product.productStocks);
    fData.append("productImage", product.productImage);
    fData.append("productRating", product.productRating);

    axios
      .post(
        "http://localhost:90/swiftedAPI/products/insert",
        fData,
        product.config
      )
      .then((response) => {
        if (response.data.success == true) {
          swal({
            title: "Success",
            text: response.data.message,
            icon: "success",
          });
          window.location.href = "/controlPanel";
        } else {
          swal({
            title: "Error",
            text: response.data.message,
            icon: "error",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <form
              method="post"
              className="mt-2 p-3 "
              style={{ boxShadow: "0px 0px 6px rgba(0,0,0,0.6)" }}
              onSubmit={addProduct}
            >
              <div className="form-group">
                <label> Product Name </label>
                <input
                  id="productName"
                  type="text"
                  className="form-control"
                  name="productName"
                  value={product["productName"]}
                  onChange={(event) => {
                    changeHandler(event);
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <label> Product Description </label>
                <input
                  id="productDescription"
                  type="text"
                  className="form-control"
                  name="productDescription"
                  value={product["productDescription"]}
                  onChange={(event) => {
                    changeHandler(event);
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <label> Product Vendor </label>
                <input
                  id="productVendor"
                  type="text"
                  className="form-control"
                  name="productVendor"
                  value={product["productVendor"]}
                  onChange={(event) => {
                    changeHandler(event);
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <label> Product Image </label>
                <input
                  id="productImage"
                  type="file"
                  accept="image/*"
                  className="form-control-file"
                  name="productImage"
                  onChange={(event) => {
                    fileHandler(event);
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <label> Product Categories </label>
                <textarea
                  id="productCategory"
                  className="form-control"
                  name="productCategory"
                  value={product["productCategory"]}
                  onChange={(event) => {
                    changeHandler(event);
                  }}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label> Product Price </label>
                <textarea
                  id="productPrice"
                  className="form-control"
                  name="productPrice"
                  value={product["productPrice"]}
                  onChange={(event) => {
                    changeHandler(event);
                  }}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label> Product Stocks </label>
                <textarea
                  id="productStocks"
                  className="form-control"
                  name="productStocks"
                  value={product["productStocks"]}
                  onChange={(event) => {
                    changeHandler(event);
                  }}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label> Product Rating </label>
                <textarea
                  id="productRating"
                  className="form-control"
                  name="productRating"
                  value={product["productRating"]}
                  onChange={(event) => {
                    changeHandler(event);
                  }}
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  id="submit"
                  className="btn btn-primary w-50 btn-lg"
                  name="add_product"
                  type="submit"
                >
                  {" "}
                  Add Product{" "}
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default AddProducts;
