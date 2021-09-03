import React,{useState,useEffect} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {MdPerson,MdEmail,MdLocationOn,MdPhone,MdLock} from 'react-icons/md';
import {FaBirthdayCake} from 'react-icons/fa';
import axios from 'axios';
import swal from 'sweetalert'

const VendorRequest = (props) => {
    const {} = props
    let [reqDetail,setDetails] = useState({
        "storeName":"",
        "address":"",
        "contact":"",
        "logo":"",
        "citizenShip":"",
        "config":{
            "headers":{
                "authorization":`Bearer ${localStorage.getItem("token")}`
            }
        }
    })

    const changeHandler = (e)=>{
        var {name,value} = e.target;
        setDetails({
            ...reqDetail,
            [name]:value
        })
    }

    const imageHandler = (e)=>{
        var {name,files} = e.target;
        setDetails(
            {
                ...reqDetail,
                [name]:files[0]
            }
        )
    }

    const requestVendor = (e)=>{
        e.preventDefault();
        var datas = new FormData();
        datas.append('storeName',reqDetail.storeName)
        datas.append('address',reqDetail.address)
        datas.append('contact',reqDetail.contact)
        datas.append('logo',reqDetail.logo)
        datas.append('citizenShip',reqDetail.citizenShip)
        axios.post("http://localhost:90/swiftedAPI/request/beAVendor",datas,reqDetail.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                swal({
                    "title":"Success",
                    "text":response.data.message,
                    "icon":"success"
                })
                window.location.href="/category"
            }
            else
            {
                swal({
                    "title":"Error",
                    "text":response.data.message,
                    "icon":"error"
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

   
    return (
        <React.Fragment>
             <Container>

<Row>
    <Col className="reg__form">
        <div className="reg__title">
            <p style={{fontWeight:"bolder",padding:"12px"}}>  Request for customers if they want to become the vendor. </p>
        </div>
        <div className="welcome__message">
            <p> Add your details here: </p>
        </div>
        <div style={{width:"100%",border:"1px solid grey",background:"grey"}}></div>
        <p style={{fontWeight:"bolder",color:"#525252",margin:"10px 0px 0px 40px",fontSize:"22px"}}> Please fill the form to request. </p>

        <Row>

            <Col lg={2} className="d-none d-md-none d-lg-block"></Col>
            <Col lg={8}>
                <form className="reg__form" method="post" onSubmit={requestVendor}>
                <div className="form-group">
                    <label> Store Name</label>
                    <input type="text" className="form-control" name='storeName' value={reqDetail['storeName']} onChange={(event)=>{changeHandler(event)}} required />
                </div>


                <div className="form-group">
                    <label> Address</label>
                    <div className="input-group">
                        <div className="input-group-append">
                            <span className="input-group-text">
                            <MdPerson style={{color:"black",fontSize:"17px"}}/>
                            </span>
                        </div>
                        <input type="text" className="form-control" name='address' value={reqDetail['address']} onChange={(event)=>{changeHandler(event)}} required 
                          
                        />
                    </div>
              
                </div>

                <div className="form-group">
                    <label> Contact</label>
                    <div className="input-group">
                        <div className="input-group-append">
                            <span className="input-group-text">
                            <MdEmail style={{color:"black",fontSize:"17px"}}/>
                            </span>
                        </div>
                        <input type="text" maxLength="10" className="form-control" name='contact' value={reqDetail['contact']} onChange={(event)=>{changeHandler(event)}}  required 
                             
                        />
                    </div>
                   
                </div>



                <div className="form-group">
                    <label>CitizenShip</label>
                   
                        
                        <input type="file" className="form-control-file" name='citizenShip' onChange={(event)=>{imageHandler(event)}} accept="image/*" required 
                            
                        />
                    
                   
                </div>

                <div className="form-group">
                    <label>Logo</label>
                   
                        
                        <input type="file" className="form-control-file" name='logo' onChange={(event)=>{imageHandler(event)}} accept="image/*" required 
                            
                        />
                    
                   
                </div>


            
                    
                <div style={{width:"100%",border:"1px solid grey",background:"grey"}}></div>    
                    
                    
                <button type="submit"  className="btn my__reg__btn" id="registrationButton"  name="register" > Request </button>
  
                </form>
            </Col>
            <Col lg={2} className="d-none d-md-none d-lg-block"></Col>
        </Row>


    </Col>

</Row>

</Container>
        </React.Fragment>
    )
}

export default VendorRequest
