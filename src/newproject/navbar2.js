import React from "react";
import home from './imges/home.jpg'
const Navbar = () => {
    return (
        <>
        <div className="header">
            <div className="navhead">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <h2>SmartUV. <span><i class="fa fa-snowflake-o" aria-hidden="true"></i></span> </h2>
                <div className="links">
                <a href="/">Home</a>
                <a href="/">Products</a>
                <a href="/">How It Works</a>
                <a href="/">Blogs</a>
                <a href="/"><i class="fa fa-lock" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className="images">
                <img src={home}/>
                <div className="time">
                <h1><b>Time to Get Your House <br></br> Clean and in Order</b></h1>
                <p className="imagetext"> To have good air quality s not as 
                simple as moving away from the city to a <br></br> quiet suburb or rural environment</p>
                <button id="btn">Read Article</button>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Navbar;