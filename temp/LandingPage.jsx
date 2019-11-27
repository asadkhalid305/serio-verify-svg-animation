import React, { Component } from 'react'
import {TweenLite, Power4} from 'gsap';
import './LandingPage.css';

export class LandingPage extends Component {

    constructor(props) {
        super(props);
        // reference to the DOM node
        this.landing = null;
        // reference to the animation
        this.myTween = null;

        this.state = {
            transformY: '1000px'
        }
    }

    setScrollFill = () => {
        // Get a reference to the <path>
        var path = document.querySelector('#star-path');

        // Get length of path... ~577px in this case
        var pathLength = path.getTotalLength();

        // Make very long dashes (the length of the path itself)
        path.style.strokeDasharray = pathLength + ' ' + pathLength;

        // Offset the dashes so the it appears hidden entirely
        path.style.strokeDashoffset = pathLength;

        // Jake Archibald says so
        // https://jakearchibald.com/2013/animated-line-drawing-svg/
        path.getBoundingClientRect();

        // When the page scrolls...
        window.addEventListener("scroll", (e) => {
            console.log('Inner scroll', window.pageYOffset)
            // What % down is it? 
            // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
            // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
            // var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

            var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / 870;

            // var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight/38);


            // console.log(scrollPercentage)
            // Length to offset the dashes
            var drawLength = pathLength * scrollPercentage;

            // console.log("Scroll percentage", scrollPercentage);
            // Draw in reverse
            path.style.strokeDashoffset = pathLength - drawLength;


            // When complete, remove the dash array, otherwise shape isn't quite sharp
            // Accounts for fuzzy math
            if (scrollPercentage >= 0.99) {
                path.style.strokeDasharray = "none";

            } else {
                path.style.strokeDasharray = pathLength + ' ' + pathLength;
                // const scrollUp = this.state.transformY - (scrollPercentage * 10);
                // console.log("Scrollup", scrollUp)
                // this.setState({transformY: scrollUp})
            }
        })

    }


    componentDidMount() {
        // console.log(this.landing)
        // TweenMax.to(logo, 1, { x:-100 , opacity:0 , ease:Power1.easeInOut ,repeat:-1  });
        // use the node ref to create the animation
        if(this.props.initialRender)
        {
            this.myTween = TweenLite.to(this.landing, 3, { y: 0, ease:Power4.easeInOut }, -0.1);
            setTimeout(() => {
                this.setState({transformY: 0})
            }, 3050)
        }
        
        this.setScrollFill();
    }



    render() {
        return (
            <div ref={div => this.landing = div}  
            id="landing" data-ui-view="landing" 
            className="ng-scope"
            style={{transform: `translate(0, ${this.state.transformY})`}}
            >
                <section id="landing" className="landing bg-teal centered-parent ng-scope">
                <div className="svg-con">
                <div className="txt">
                    <h1 className="txt-white">intro<br />ducing<br /><span className="txt-blue">serio<br />verify</span></h1>
                    <p>The leading cloud<br />platform for inside<br />sales optimization.</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 900" id="star-svg">
                <path fill="none" stroke="grey" stroke-width="10" stroke-dashoffset="0"
                stroke-dasharray= "961px" stroke-miterlimit="10" d="M822,376h38v372H664.5v152" />
                <path id="star-path" class="base" fill="none" stroke="#fff" stroke-width="10" stroke-miterlimit="10" d="M822,376h38v372H664.5v152"></path>
                <path class="arrow" fill="#fff" d="M778.5,382h2.2v-11.1h-2.2V382z M773.4,382h3.2v-11.1h-3.2V382z M767.3,382h4.1v-11.1h-4.1L767.3,382
                L767.3,382z M808.3,376.4l-14.3-13v7.4h-11.3V382H794v7.4L808.3,376.4z"></path>
            </svg>
            </div>
                </div>
            </section>
            </div>
        )
    }
}

export default LandingPage
