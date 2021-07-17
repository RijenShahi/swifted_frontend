import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import swal from 'sweetalert'


const AddProducts = () => {
    let [product,setProduct] = useState({
        "pName":"",
        "pDesc":"",
        "pPrice":"",
        "pRating":"",
        "pImage":"",
        "config":{
            "headers":{
                "authorization":`Bearer ${localStorage.getItem("token")}`
            }
        }
    })
    const changeHandler = (e)=>{
        var {name,value} = e.target;
        setProduct({
            ...product,
            [name]:value
        })
        }

    const fileHandler = (e)=>{
        var {name,files} = e.target;
        setProduct({
            ...product,
            [name]:files[0]
        })
        
    }

    const addProduct = (e)=>{
        
        e.preventDefault();
        var fData = new FormData();
        fData.append("pName",product.pName)
        fData.append("pDesc",product.pDesc)
        fData.append("pRating",product.pRating)
        fData.append("pPrice",product.pPrice)
        fData.append("pImage",product.pImage)
        console.log(product)
        axios.post("http://localhost:90/product/insert",fData,product.config)
        .then((response)=>{
           
            if(response.data.success == true)
            {
                swal({
                    title:"Success",
                    text:response.data.message,
                    icon:"success"
                })
                window.location.href="/vendor"
            }
            else
            {
                swal({
                    title:"Error",
                    text:response.data.message,
                    icon:"error"
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <form method="post" className="mt-2 p-3 " style={{boxShadow:"0px 0px 6px rgba(0,0,0,0.6)"}} onSubmit={addProduct}>
                               <div className="form-group">
                                  <label> Product Name </label>  
                                  <input type="text" className="form-control" name="pName" value={product['pName']} onChange={(event)=>{changeHandler(event)}} required/> 
                                </div> 
                                <div className="form-group">
                                  <label> Product Price </label>  
                                  <input type="text" className="form-control" name="pPrice" value={product['pPrice']} onChange={(event)=>{changeHandler(event)}} required/> 
                                </div> 
                                <div className="form-group">
                                  <label> Rating </label>   
                                  <input type="text" className="form-control" name="pRating" value={product['pRating']} onChange={(event)=>{changeHandler(event)}} required/> 
                                </div> 
                                <div className="form-group">
                                  <label> Product Image </label>  
                                  <input type="file" accept="image/*" className="form-control-file" name="pImage"  onChange={(event)=>{fileHandler(event)}} required/> 
                                </div> 
                                <div className="form-group">
                                  <label> Product Description </label>  
                                  <textarea className="form-control" name="pDesc" value={product['pDesc']} onChange={(event)=>{changeHandler(event)}} required></textarea>
                                </div> 
                                <div className="text-center">
                                    <button className="btn btn-primary w-50 btn-lg" name="add_product" type="submit"> Add Product </button>
                                </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default AddProducts;
