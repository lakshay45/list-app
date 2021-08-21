import { Fragment } from "react";
import classes from "./Input.module.css";
import Output from "./Output";
import { useState } from "react";
const Input=()=>{
    const [isOutput,setIsOutput]=useState(false);
    const submitHandler=(event)=>{
        event.preventDefault();
        console.log("sending...");
        setIsOutput(true);
    }
    const offOuputWindow=()=>{
        document.getElementById("comment1").value="";
        document.getElementById("comment2").value="";
        setIsOutput(false);
    }
    return (
        <Fragment>  

        <div className={classes.card}>
            <div className={classes.layerHeading}>
                <h3 className={classes.label1}>Enter items in List A</h3>
                <h3 className={classes.label2}>Enter items in List B</h3>
            </div>
            <div className="layer">
                <textarea id="comment1" className={classes.inputA} form="usrform"></textarea>
                <textarea id="comment2" className={classes.inputB} form="usrform"></textarea>
            </div>
            <button onClick={submitHandler} className={classes.btn}>Compute</button>
        </div>
        {isOutput && <Output 
            textA={document.getElementById("comment1").value.split("\n")} 
            textB={document.getElementById("comment2").value.split("\n")} 
            offOutput={offOuputWindow}
        />}
    </Fragment>
    );
};

export default Input;