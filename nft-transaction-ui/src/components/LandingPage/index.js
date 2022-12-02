import { React, useState } from "react";
import { Button, Modal } from 'antd';
import { Link } from "react-router-dom";

import RegisterForm from "../RegisterForm";
import { getUserNFTs } from "../../redux/actions";
import "./index.css";


export default function LandingPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div style={BodyStyle}>
            <section className="vh-100 gradient-custom la-bg-img">
                <div className="container py-1 h-50 ">
                    <div className="row d-flex justify-content-center align-items-center h-50">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            {/* <div className="card bg-dark text-white" style={{ borderRadius: "1rem;" }}> */}
                            <form className="card bg-opacity-75 card-body p-3 text-center cont-img">
                                <div className="mb-md-2 mt-md-4 pt-md-1 pb-1">
                                    {/* <form action="/dashboard" className="card-body p-5 text-center"> */}
                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-black mb-3">Please enter your login and password!</p>
                                    <div className="form-outline form-white mb-4">
                                    <label className="form-label">Email</label>
                                        <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                                        
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                    <label className="form-label">Password</label>
                                        <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                                        
                                    </div>

                                    <p className="small mb-2 pb-lg-2"><a className="text-black" href="#!">Forgot password?</a></p>

                                    <Link to="/dashboard">
                                        <button className="primary-button" >log in</button>
                                    </Link>
                                    {/* </form> */}
                                </div>
                                <div>
                                    <p className="mb-0 mr-1 pb-2">Don't have an account?</p>
                                    {/* <Link to="/register"> */}
                                    <Button type="primary" onClick={showModal}>
                                        Register
                                    </Button>
                                    {/* </Link> */}
                                </div>

                            </form>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <>
                <Modal title="Basic Modal"
                    open={isModalOpen}
                    // onOk={handleOk} 
                    onCancel={handleCancel}
                    footer={null}
                >
                    <RegisterForm />
                </Modal>
            </>
        </div>

    )
}

const BodyStyle = {
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background: "linear-gradient(225deg, rgba(0,1,36,1) 10%, rgba(89,9,121,1) 85%, rgba(139,0,255,1) 100%)"
}