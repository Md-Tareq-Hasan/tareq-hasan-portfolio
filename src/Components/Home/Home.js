import React from 'react';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import './Home.css'
import './Home.scss'
import home from '../../images/home.jpg'

const Home = () => {


    return (
        <div className="home">
            <div id="particle-container">
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
            </div>
            <Navbar></Navbar>
           <div  className="text-light home-container">
               <div className="text-container" >
                   <h1>Hello I'm</h1>
                   <h1>Md. Tareq Hasan Chowdhury</h1>
                   <h3 className="text-danger">Junior Web Developer</h3>
                   <p>Motivated junior web developer looking for a role as full-stack web developer at Software Company. Passionate about building first-class web applications. Developed an e-commerce website for a local fashion retailer while at Daﬀodil International University. Relevant skills include DNS Management, Database, Debugging, and more.</p>
                    <a class="btn btn-danger" href="https://drive.google.com/uc?export=download&id=13qhHlswN0VVL1IzvyTH-9QJAlo6HJKVQ" role="button" >Download Resume</a>
               </div>
               <div className="image-container">
                   <img src={home} alt=""/>
               </div>
           </div>
        </div>
    );
};

export default Home;