import { Fragment } from "react";
import classes from "./Output.module.css";

const Output=(props)=>{
    console.log("received...");
    console.log(props.textA);
    console.log(props.textB);
    var outputA="";
    var outputB="";
    var outputAB="";
    var outputAUB="";
    
    for (var i = 0; i < props.textA.length; i++) {
        for (var j = 0; j < props.textB.length; j++) {
            if (props.textA[i] === props.textB[j]) {
                outputAB = outputAB.concat(props.textA[i]);
                outputAB = outputAB.concat("\n");
                break;
            }
        }
        if (j === props.textB.length) {
            outputA = outputA.concat(props.textA[i]);
            outputA = outputA.concat("\n");
        }
    }

    for (var i2 = 0; i2 < props.textB.length; i2++) {
        for (var k = 0; k < props.textA.length; k++) {
            if (props.textB[i2] === props.textA[k]) {
                break;
            }
        }
        if(k===props.textA.length) {
            outputB = outputB.concat(props.textB[i2]);
            outputB = outputB.concat("\n");
        }
    }
    var arrayAUB=props.textA.concat(props.textB);
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    var unique = arrayAUB.filter(onlyUnique);

    for(i=0;i<unique.length;i++)
    {
        outputAUB=outputAUB.concat(unique[i]);
        outputAUB=outputAUB.concat("\n");
    }

    return(
        <Fragment>
            <div className={classes.card}>
                <div className={classes.firstHeading}>
                    <h3 className={classes.headingA}>List A</h3>
                    <h3 className={classes.headingB}>List B</h3>
                </div>
                <div className={classes.firstLayer}>
                    <textarea className={classes.onlyA} value={outputA}></textarea>
                    <textarea className={classes.onlyB} value={outputB}></textarea>
                </div>
                <div className={classes.secondHeading}>
                    <h3 className={classes.headingAB}>List AB Both</h3>
                    <h3 className={classes.headingAUB}>List AUB Unique</h3>
                </div>
                <div className={classes.secondLayer}>
                    <textarea className={classes.bothAB} value={outputAB}></textarea>
                    <textarea className={classes.unionAB} value={outputAUB}></textarea>
                </div>
                <button className={classes.btn} onClick={props.offOutput}>Reset</button>
            </div>
        </Fragment>
    );
};
export default Output;