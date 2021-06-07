import React from 'react';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import image1 from '../../images/port.2.PNG'
import image2 from '../../images/port.3.PNG'
import home from '../../images/port.1.PNG'
import book1 from '../../images/book1.PNG'
import book2 from '../../images/book2.PNG'
import book3 from '../../images/book3.PNG'
import league1 from '../../images/football1.PNG'
import league2  from '../../images/football2.PNG'
import league3 from '../../images/football3.PNG'
import player1 from '../../images/team1.PNG'
import player2 from '../../images/team2.PNG'
import player3 from '../../images/team3.PNG'
import './DispalyProjects.css'
const DispalyProjects = () => {
 
    
    const projects = [
        {
            imgUrl1: image1,
            imgUrl2: image2,
            details:'This project is about car ride service. Here customer can book their best car at affordable price whenever they want. Customer can also review our service. Other part of this project is admin. Admin can add and manage our service.',
           link1:'https://car-carry.netlify.app',
           link2:'https://github.com/hridoyjr/car-service',
            id:1
        },
        {
            imgUrl1: book2,
            imgUrl2: book3,
            details:"From this site customer can buy many kind of books of many writers. Here the admin of this website can add new book and manage book. Admin also can see customer's order.",
            link1:'https://onnorokom-book-shope.netlify.app/',
            link2:'https://github.com/hridoyjr/book-shop',
            name:'CAR',
            id:2
           
        },
        {
           imgUrl1: league2,
           imgUrl2: league3,
           details:"This website is about Premier League. Here, in home page anyone can see all Premier League team's List. After explore anyone can get all information of the team.",
          link1:'https://premier-league-team.netlify.app/',
          link2:'https://github.com/hridoyjr/premier-league',
            name:'BUS',
            id:3
        },
        {   imgUrl1: player2,
            imgUrl2: player3,
            link1:'https://my-football-team.netlify.app/',
            link2:'https://github.com/hridoyjr/my-football-team',
            name:'TRAIN',
            id:4
        }

    ]
    return (
        <div>
            <body onload="window.location.reload()"></body>
            <Navbar></Navbar>
            <h3 className="text-center text-light mt-2 ">My Project</h3>
            <div className=" project-container">
              
            <div className='card card-container'  >
                    <img className="card-img" src={home} alt=""/>
                   <div className="card-img-overlay">
                   <button  type="button" className='btn btn-container  btn-outline-light ' data-toggle="modal" data-target="#myModal1">See Details</button>
                   </div>
                </div>
                <div className='card card-container'  >
                    <img className="card-img" src={book1} alt=""/>
                   <div className="card-img-overlay">
                   <button type="button" className='btn btn-container btn-outline-light  ' data-toggle="modal" data-target="#myModal2">See Details</button>
                   </div>
                </div>
                <div className='card card-container'  >
                    <img className="card-img" src={league1} alt=""/>
                   <div className="card-img-overlay">
                   <button type="button" className='btn btn-container  btn-outline-light ' data-toggle="modal" data-target="#myModal3">See Details</button>
                   </div>
                </div>
                <div className='card card-container'  >
                    <img className="card-img" src={player1} alt=""/>
                   <div className="card-img-overlay">
                   <button type="button" className='btn btn-container btn-outline-light ' data-toggle="modal" data-target="#myModal4">See Details</button>
                   </div>
                </div>
            </div>
           
           {
               projects.map(project => <Projects project={project}></Projects>)
           }
           
           
        </div>
    );
};

export default DispalyProjects;