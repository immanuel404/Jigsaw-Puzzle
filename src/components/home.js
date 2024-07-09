import React from 'react';
import { Link } from 'react-router-dom';
import {Animated} from "react-animated-css";


function Home() {
    return (
        <div className="Home">
            <Animated animationIn="zoomInUp" animationOut="fadeOut" isVisible={true}>
            <div id="title">
                <h1>Puzzle</h1>
            </div>
            </Animated>
            <div className="container">
                <Link to={"/puzzle1"}><div className="image1"><p>Puzzle 1</p></div></Link>
                <Link to={"/puzzle2"}><div className="image2"><p>Puzzle 2</p></div></Link>
                <Link to={"/puzzle3"}><div className="image3"><p>Puzzle 3</p></div></Link>
            </div>
            <div className="footer">
                <p>&copy;<a href="https://emmani.vercel.app/">Jigsaw Puzzle</a></p>
            </div>
        </div>
    );
  }
  export default Home;