import React from "react";
import two from './imges/two.jpg'
import js from './imges/js.jpg'
import Object from "../Props1";
import Text from "../props2";
const Section1 = () => {
    return (
        <>
            <div className="section_one" style={{ width: "100%" }}>
                <div className="perantdiv">
                    <Object img={js} title="Time to get Your House Clean and in order" text="Don't worry about being a small fish in a big pond you want to always" button="Read article" />
                    
                    <Object img={two} title="Time to get Your House Clean and in order" text="Don't worry about being a small fish in a big pond you want to always" button="Read article" />
                </div>
                <div className="sectionone_1" style={{
                    width: "30%",
                }}>
                    <Text title="How VOC Affects Your Indoor Air Quality" text="Don't worry about being a small fish in a big pond -- you want to always" link="Read in 3 minutes" />

                    <Text title="Time to get Your House Clean and in order" text="Don't worry about being a small fish in a big pond -- you want to always" link="Read in 3 minutes" />

                    <Text title="Time to get Your House Clean and in order" text="Don't worry about being a small fish in a big pond -- you want to always" link="Read in 3 minutes" />
                </div>
            </div>


        </>
    );
}

export default Section1;