import React, { useState } from "react";
import "./imbd.css";
import { FaPlay } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
import Movie from "./imbddata";

function Imbd(props) {
    const [rating, updateRating] = useState(0);

    function Ratingchange(event) {
        
        updateRating(event.target.value);
    }
    return (
        <div id="Main-container">
            <select id="rating" onChange={Ratingchange}>
                <option value="none">Choose RAting</option>
                <option value="Greater"> Greater than 5</option>
                <option value="lesser">  less than 5</option>
            </select>

            <img src={props.Path} alt=""></img>
            <br />
            <div className="Star1">&#9733;
                <span className="Rate">{props.rating}</span>
                <div className="Star"> <BiStar /></div>
            </div>
            <br />
            <a className="link" href={props.link}>
                {props.Moviename}
            </a>
            <button id="watchbtn"> Watch option</button>
            <div className="child">
                <p className="glyphicon"> <FaPlay /></p>
                <p className="Trailer">Trailer</p>
                <div className="info"> <BiInfoCircle /> </div>
            </div>
         

        </div>

    );
}

export default Imbd;
