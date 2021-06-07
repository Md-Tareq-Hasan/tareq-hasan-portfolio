import React from 'react';
import "./Project.css"

const Projects = (props) => {
    const { imgUrl1,imgUrl2,link1,link2, details, id } = props.project;
    return (
        <div>
            <div className="container">
                <div className="modal fade" id={"myModal" + id} role="dialog">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-interval="2000" data-pause="false" data-ride="carousel">
                                <div className="carousel-inner ">
                                    <div className="carousel-item  active" >
                                        <img src={imgUrl1} className=" d-block  w-100" alt="" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={imgUrl2} className="d-block  w-100" alt="" />
                                    </div>
                                    
                                   
                                </div>
                             
                            </div>
                            <p className="p-2">{details}</p>
                            

                            <div className="d-flex justify-content-between mb-2">
                            <div className="ml-2 " >
                            <a className="btn  btn-outline-primary" role="button"  href={link1}>Live Link</a>
                            <a className="btn ml-2  btn-outline-success" role="button"  href={link2}>Code Link</a>
                            </div>
                                <button type="button" className="btn mr-2 btn-default" data-dismiss="modal">Close</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
</div>
            </div>

        
    );
};

export default Projects;