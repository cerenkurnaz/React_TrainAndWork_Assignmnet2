import React, {Component} from 'react';


class Slider extends Component {
    render() {
        return (
            <>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel"
                     style={{marginTop: "50px", marginBottom: "50px"}}>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfSHhsCU32wLcMT2Kiy3fTf-mqLQtf1-tOg&usqp=CAU"
                                 className="d-block w-100" alt="..." style={{height: "700px"}}/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVplqA0fc0vl3qtt5O-fG1fZ9xmW20PpaJIg&usqp=CAU"
                                 className="d-block w-100" alt="..." style={{height: "700px"}}/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1C4Ify1pl_9eK6ho-o7gdyYEPRkDj6fHuw&usqp=CAU"
                                 className="d-block w-100" alt="..." style={{height: "700px"}}/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"
                              style={{backgroundColor: "black"}}/>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"
                              style={{backgroundColor: "black"}}/>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


            </>
        );
    }
}


export default Slider;