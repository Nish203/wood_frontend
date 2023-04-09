import React from 'react';
import img1 from "../images/About/A3.jpg";
import img2 from "../images/About/A6.jpg";
import img3 from "../images/About/A4.jpg";
import img4 from "../images/About/A5.jpg";
import img5 from "../images/About/A7.jpg";
import img6 from "../images/About/A12.jpg";
import img7 from "../images/About/A11.jpg";
import img8 from "../images/About/A10.jpg";
import img9 from "../images/About/A2.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Contact/About.css";


function About() {
  return (
    <div className='container'>
        <div class=" ml-10 font-bold text-4xl py-3 mt-5 border-b border-black  text-[#7f5539]"> Making of Solid Wood Furniture </div>
        <div className='row'>
            <div className='col-sm '>
                <img src={img1} className="imgl"/>
            </div>
            <div className='col-sm'>
                <h2 className='head'>This is Where is Starts.</h2>
                <p className='text'>We source direct wooden logs, handpicked by our experienced selectors and brought to the manufacturing unit for further processes</p>
            </div>
        </div>

        <div className='row'>
            <div className='col-sm '>
                <h2 className='head'>Getting in Size.</h2>
                <p className='text'>Our In-house saw machines cuts the wooden logs into desired sizes to achieve the strength and stability in your wooden bed, sofa dining & everything else solid wood.</p>
            </div>
            <div className='col-sm'>
                <img src={img2} className="imgr"/>
            </div>
        </div>

        <div className='row'>
            <div className='col-sm '>
                <img src={img3} className="imgl"/>
            </div>
            <div className='col-sm'>
                <h2 className='head'>Treatment</h2>
                <p className='text'>Each & every piece of wood, however big or small, thick or thin, straight or not :) , is treated with the industry specified techniques, making it termite resistance, Forever.</p>
            </div>
        </div>

        <div className='row'>
            <div className='col-sm '>
                <h2 className='head'>Seasoning the Wood.</h2>
                <p className='text'>More commonly known as drying the wood. As simple as it seems with the way we do it, it actually is a very scientific process. Maintaining the pressure levels, moistures, depending on the duration and atmosphere and get the right seasoning done, the right way.</p>
            </div>
            <div className='col-sm'>
                <img src={img4} className="imgr"/>
            </div>
        </div>

        <div className='row'>
            <div className='col-sm '>
                <img src={img5} className="imgl"/>
            </div>
            <div className='col-sm'>
                <h2 className='head'>Now Making it.</h2>
                <p className='text'>And now the treated & seasoned wood planks are used by our experienced and skilled craftsmen to make your solid wood furniture the way you expect it to be.</p>
            </div>
        </div>

        <div className='row'>
            <div className='col-sm '>
                <h2 className='head'>The Final Touch.</h2>
                <p className='text'>All the products made & finished the given the final quotes, based on your selection of finish and making sure that you get a no-maintenance finished product. Thoroughly inspected by our supervisors to make sure that the product is up to the mark</p>
            </div>
            <div className='col-sm'>
                <img src={img6} className="imgr"/>
            </div>
        </div>

        <div className='row'>
            <div className='col-sm '>
                <img src={img7} className="imgl"/>
            </div>
            <div className='col-sm'>
                <h2 className='head'>Product Standards</h2>
                <p className='text'>Products are made in bulk with standardizations, so that each product has that technical and visual greatness that every furniture for home should have.</p>
            </div>
        </div>

        <div className='row'>
            <div className='col-sm '>
                <h2 className='head'>The Right Finish.</h2>
                <p className='text'>Getting your products packed the right way so that it reaches just the way we made it for you :.</p>
            </div>
            <div className='col-sm'>
                <img src={img8} className="imgr"/>
             </div>
        </div>

        <div className='row'>
            <div className='col-sm '>
                <img src={img9} className="imgl"/>
            </div>
            <div className='col-sm'>
                <h2 className='head'>Packaging.</h2>
                <p className='text'>Getting your products packed the right way so that it reaches just the way we made it for you :)</p>
            </div>
        </div>
    </div>
);
}

export default About