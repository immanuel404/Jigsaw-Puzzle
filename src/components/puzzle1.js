import React, { Component }  from 'react';
import applause from './imgs/applause.mp3';
import {Animated} from "react-animated-css";
import image111 from './imgs/img1/img1.1.1.jpg';
import image112 from './imgs/img1/img1.1.2.jpg';
import image113 from './imgs/img1/img1.1.3.jpg';
import image121 from './imgs/img1/img1.2.1.jpg';
import image122 from './imgs/img1/img1.2.2.jpg';
import image123 from './imgs/img1/img1.2.3.jpg';
import image131 from './imgs/img1/img1.3.1.jpg';
import image132 from './imgs/img1/img1.3.2.jpg';
import image133 from './imgs/img1/img1.3.3.jpg';
import image141 from './imgs/img1/img1.4.1.jpg';
import image142 from './imgs/img1/img1.4.2.jpg';
import image143 from './imgs/img1/img1.4.3.jpg';


class Puzzle1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            completion: false,
            dragStartId: '',
        };
        this.dragStart = this.dragStart.bind(this);
        this.dragOver = this.dragOver.bind(this);
        this.dragDrop = this.dragDrop.bind(this);
    }

    
    componentDidMount() {

        //CHECK PUZZLE COMPLETION
        let imgs_shuffled = document.querySelectorAll("img.show");
        let imgs_correct = document.querySelectorAll("img.hide");
        let ifComplete = this.state.completion;
        var sound = new Audio(applause);

        const myGameCheck = () => {
        setInterval(() => {
            var flag = 0;

            // check image match
            for (var i=0; i<12; i++) {
                if(imgs_shuffled[i].src === imgs_correct[i].src) {
                    ++flag;
                }
            }
            // check puzzle completed
            if(flag === 12){
                for (var j=0; j<12; j++) {
                    document.querySelectorAll('.list img')[j].style.margin = "0px";
                }
                document.getElementById('puzzleTitle').style.opacity = "0";
                document.getElementById('clock').style.display = "none";
                document.querySelector('.list').style.boxShadow = "5px 5px 15px black, -5px -5px 15px lightgray";
                document.querySelector('.list').style.transform = "scale(1.2)";
                document.querySelector('.trophy').classList.add("active");
                if(this.state.completion === false){
                    sound.volume = 0.05;
                    sound.play(); 
                }                            
                this.setState({completion: true});
                ifComplete = this.state.completion;
            }
        }, 1000);}
        myGameCheck();


        // START COUNTDOWN-TIMER
        var countdown = 30;
        const myInterval = setInterval(myTimer, 1000);
        function myTimer() {
            countdown = countdown-1;
            document.getElementById('clock').innerHTML = countdown;
            if( ifComplete === true){
                clearInterval(myInterval);
                setTimeout(function(){
                    window.location.replace("/");
                }, 9500);
            }
            if(countdown < 1) {
                document.getElementById('clock').innerHTML = "00";
                document.getElementById('clock').style.backgroundColor = "red";
                setTimeout(function(){
                    window.location.replace("/");
                }, 1000);
            }
        }
    };

    
    // Drag & Drop Listeners
    dragStart(e) {
        // console.log("Start", e.target.id);
        var varStart = e.target.id;
        this.setState({dragStartId: varStart});
    }
    dragOver(e) {
        // console.log('Event: ', 'dragOver');
        e.preventDefault();
    }
    dragDrop(e) {
        e.preventDefault();
        // console.log("End", e.target.id);
        var varEnd = e.target.id;
        this.setState({dragEndIndex: varEnd});
        this.swapItems(this.state.dragStartId, varEnd);
    }
    // Swap List Items
    swapItems(firstId, SecondId) {
        const firstImage = document.getElementById(firstId).src;
        const secondImage = document.getElementById( SecondId).src;
        // console.log(firstClass, secondClass);
        document.getElementById(SecondId).src = firstImage;
        document.getElementById(firstId).src = secondImage;  
    }


    render(){
    return (
        <div className="Puzzle1">      
            <h1 id="puzzleTitle">Puzzle</h1>
            <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                <p id="mobileCompatibility">Incompatible with mobile-devices</p>
                <h2 id="clock">30</h2>
                <div className='trophy'></div>
            </Animated>

            <div className="box">
                <div className="list" >
                    <img src={image111} id="one" draggable="true" alt="puzzle-img" onDragStart={this.dragStart} onDragOver={this.dragOver} onDrop={this.dragDrop} className="show"></img>
                    <img src={image112} id="two" draggable="true" alt="puzzle-img" onDragStart={this.dragStart} onDragOver={this.dragOver} onDrop={this.dragDrop} className="show"></img>
                    <img src={image113} id="three" draggable="true" alt="puzzle-img" onDragStart={this.dragStart} onDragOver={this.dragOver} onDrop={this.dragDrop} className="show"></img>
                    <img src={image121} id="four" draggable="true" alt="puzzle-img" onDragStart={this.dragStart} onDragOver={this.dragOver} onDrop={this.dragDrop} className="show"></img>
                    <img src={image122} id="five" draggable="true" alt="puzzle-img" onDragStart={this.dragStart} onDragOver={this.dragOver} onDrop={this.dragDrop} className="show"></img>
                    <img src={image123} id="six" draggable="true" alt="puzzle-img" onDragStart={this.dragStart} onDragOver={this.dragOver} onDrop={this.dragDrop} className="show"></img>
                    <img src={image131} id="seven" draggable="true" alt="puzzle-img" onDragStart={this.dragStart} onDragOver={this.dragOver} onDrop={this.dragDrop} className="show"></img>
                    <img src={image132} id="eight" draggable="true" alt="puzzle-img" onDragStart={this.dragStart} onDragOver={this.dragOver} onDrop={this.dragDrop} className="show"></img>
                    <img src={image133} id="nine" draggable="true" alt="puzzle-img" onDragStart={this.dragStart} onDragOver={this.dragOver} onDrop={this.dragDrop} className="show"></img>
                    <img src={image141} id="ten" draggable="true" alt="puzzle-img" onDragStart={this.dragStart} onDragOver={this.dragOver} onDrop={this.dragDrop} className="show"></img>
                    <img src={image142} id="eleven" draggable="true" alt="puzzle-img" onDragStart={this.dragStart} onDragOver={this.dragOver} onDrop={this.dragDrop} className="show"></img>
                    <img src={image143} id="twelve" draggable="true" alt="puzzle-img" onDragStart={this.dragStart} onDragOver={this.dragOver} onDrop={this.dragDrop} className="show"></img>
                </div>
                <div className="list" style={{ display:'none' }}>
                    <img src={image111} alt="puzzle-img" className="hide"></img>
                    <img src={image121} alt="puzzle-img" className="hide"></img>
                    <img src={image131} alt="puzzle-img" className="hide"></img>
                    <img src={image141} alt="puzzle-img" className="hide"></img>
                    <img src={image112} alt="puzzle-img" className="hide"></img>
                    <img src={image122} alt="puzzle-img" className="hide"></img>
                    <img src={image132} alt="puzzle-img" className="hide"></img>
                    <img src={image142} alt="puzzle-img" className="hide"></img>
                    <img src={image113} alt="puzzle-img" className="hide"></img>
                    <img src={image123} alt="puzzle-img" className="hide"></img>
                    <img src={image133} alt="puzzle-img" className="hide"></img>
                    <img src={image143} alt="puzzle-img" className="hide"></img>
                </div>
            </div>

            <div className="goBack"><a href="https://jigzaw.vercel.app/">Back</a></div>
            <div className="footer2">
                <p>&copy;<a href="https://emmani.vercel.app/">Jigsaw Puzzle</a></p>
            </div>
        </div>
    ); }
}
export default Puzzle1;