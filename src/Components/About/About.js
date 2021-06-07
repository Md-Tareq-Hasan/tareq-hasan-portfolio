import React from 'react';
import home from '../../images/home.jpg'
import Navbar from '../Navbar/Navbar';
import "./About.css"
const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=" about">
                <div className="col-md-4">
                    <img src={home} alt="" />
                </div>
                <div className="col-md-8">
                    <h2>Hello I'm</h2>
                    <h1>Md. Tareq Hasan Chowdhury</h1>
                    <h3 className="text-danger">Junior Web Developer</h3>
                    <p>Motivated junior web developer looking for a role as full-stack web developer at Software Company. Passionate about building first-class web applications. Developed an e-commerce website for a local fashion retailer while at Daﬀodil International University. Relevant skills include DNS Management, Database, Debugging, and more.</p>
                    <hr className="bg-light"></hr>
                    <div className="d-flex">
                        <div >
                            <h3>Basic Info</h3>
                            <div className="d-flex">
                                <div >
                                    <h6>Date of Birth</h6>
                                    <p>7 April 1999</p>
                                    <h6>Phone</h6>
                                    <p>01735477880</p>

                                </div>

                                <div className="ml-5">
                                    <h6>Email</h6>
                                    <p>hridoyhassan0050@gmail.com</p>
                                    <h6>Address</h6>
                                    <p>Dhanmondi, Dhaka</p>

                                </div>
                            </div>
                        </div>
                        <div className="ml-5">
                             <h3>Skills</h3>
                             <div>
                           <div >
                           <span class="badge badge-info "><h6>Javascript</h6></span>
                             <span class="badge badge-info skill"><h6>React</h6></span>
                             <span class="badge badge-info skill"><h6>React Router</h6></span>
                             <span class="badge badge-info skill"><h6>HTML</h6></span>
                             <span class="badge badge-info skill"><h6>C</h6></span>
                           </div>
                            
                             <span class="badge badge-info "><h6>Node.js</h6></span>
                             <span class="badge badge-info skill"><h6>Express.js</h6></span>
                             <span class="badge badge-info skill"><h6>Mongodb</h6></span>
                             <span class="badge badge-info skill"><h6>Firebase</h6></span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;