import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const UpdateProduct = (props) => {
    const { products } = props
    let [product, setProduct] = useState({
        "productName":products.productName,
        "productDescription":products.productDescription,
        "productVendor":products.productVendor,
        "productCategory":products.productCategory,
        "productPrice":products.productPrice,
        "productStocks":products.productStocks,
        "productImage":"",
        "productRating":products.productRating,
        "id": products._id,
        "config": {
            "headers": {
                "authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }
    })
    const changeHandler = (e) => {
        var { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        })
    }

    const fileHandler = (e) => {
        var { name, files } = e.target;
        setProduct({
            ...product,
            [name]: files[0]
        })

    }

    const UpdateProduct = (e) => {

        e.preventDefault();
        var fData = new FormData();
        fData.append("productName",product.productName)
        fData.append("productDescription",product.productDescription)
        fData.append("productVendor",product.productVendor)
        fData.append("productCategory",product.productCategory)
        fData.append("productPrice",product.productPrice)
        fData.append("productStocks",product.productStocks)
        fData.append("productImage",product.productImage)
        fData.append("productRating",product.productRating)
        fData.append('id',product.id)
        
        axios.put("http://localhost:90/swiftedAPI/products/updateProduct", fData, product.config)
            .then((response) => {
            
                if (response.data.success == true) {
                    swal({
                        title: "Success",
                        text: response.data.message,
                        icon: "success"
                    })
                    window.location.reload();
                }
                else {
                    swal({
                        title: "Error",
                        text: response.data.message,
                        icon: "error"
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <React.Fragment>
            <div class="modal fade" id={`product${products._id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Update</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>


                        <div class="modal-body">
                            <form method="put" onSubmit={UpdateProduct}>
                            <div className="form-group">
                                  <label> Product Name </label>  
                                  <input type="text" className="form-control" name="productName" value={product['productName']} onChange={(event)=>{changeHandler(event)}} required/> 
                                </div> 
                                <div className="form-group">
                                  <label> Product Description </label>  
                                  <input type="text" className="form-control" name="productDescription" value={product['productDescription']} onChange={(event)=>{changeHandler(event)}} required/> 
                                </div> 
                                <div className="form-group">
                                  <label> Product Vendor </label>   
                                  <input type="text" className="form-control" name="productVendor" value={product['productVendor']} onChange={(event)=>{changeHandler(event)}} required/> 
                                </div> 
                                <div className="form-group">
                                  <label> Product Image </label>  
                                  <input type="file" accept="image/*" className="form-control-file" name="productImage"  onChange={(event)=>{fileHandler(event)}} required/> 
                                </div> 
                                <div className="form-group">
                                  <label> Product Categories </label>  
                                  <textarea className="form-control" name="productCategory" value={product['productCategory']} onChange={(event)=>{changeHandler(event)}} required></textarea>
                                </div> 
                                <div className="form-group">
                                  <label> Product Price </label>  
                                  <textarea className="form-control" name="productPrice" value={product['productPrice']} onChange={(event)=>{changeHandler(event)}} required></textarea>
                                </div> 
                                <div className="form-group">
                                  <label> Product Stocks </label>  
                                  <textarea className="form-control" name="productStocks" value={product['productStocks']} onChange={(event)=>{changeHandler(event)}} required></textarea>
                                </div> 
                                <div className="form-group">
                                  <label> Product Rating </label>  
                                  <textarea className="form-control" name="productRating" value={product['productRating']} onChange={(event)=>{changeHandler(event)}} required></textarea>
                                </div> 
                                <div className="text-center">
                                    <button className="btn btn-primary w-50 btn-lg" name="updateProduct" type="submit"> Update Product </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UpdateProduct