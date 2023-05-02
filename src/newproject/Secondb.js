import React from "react";
import one from './imges/one.jpg';
import chair from './imges/chair.jpg';
import box from './imges/box.jpg';
import home from './imges/home.jpg';
import Cleaning from "../footer";
const Section2 = () => {
    return (
        <>
            <div className="secondsection" style={{ width: "100%" }}>
                <div className="science" style={{ width: "89%" }}>
                    <h3> The Science Behind SmartUV</h3>
                    <button id="btn2" >Read in 3 minutes</button>
                </div>
                <div className="perantimages" style={{ width: "93%" }}>
                    <div className="chemical" style={{ width: "25%" }}>
                        <div className="images4">
                     <Cleaning img={one} title="Chemical Free Cleaning" text="Don't worry about being a small fish in a big pond you want to always" link="Read in 3 minutes" />
                     </div>
                     </div>
                
                     <div className="chemical-1" style={{ width: "25%" }}>
                        <div className="images4" >
                        <Cleaning img={chair} title="Chemical Free Cleaning" text="Don't worry about being a small fish in a big pond you want to always" link="Read in 3 minutes" />
                        </div>
                        </div>
                            
                     <div className="chemical-2" style={{ width: "25%" }}>
                        <div className="images4">
                        <Cleaning img={box} title="Chemical Free Cleaning" text="Don't worry about being a small fish in a big pond you want to always" link="Read in 3 minutes" />
                        </div>
                        </div>

                      <div className="chemical-3" style={{ width: "25%" }}>
                        <div className="images4">
                        <Cleaning img={home} title="Chemical Free Cleaning" text="Don't worry about being a small fish in a big pond you want to always" link="Read in 3 minutes" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section2;