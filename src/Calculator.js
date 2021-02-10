import React, { useState, useEffect } from 'react'

const Calculator = props => {
    // Declare state variables -- DONE
    // need something to hold values -- DONE
    // need way to calculate what math function it is -- DONE
    // need way to update values for num1/num2/output -- DONE
    // need to calculate math
    // need to output appropriate info

    const [numOne, addNumOne] = useState([])
    const [numTwo, addNumTwo] = useState([])
    const [output, setOutput] = useState([])
    const [mathOperator, setMathOperator] = useState([])

    // get num inputs
    function getNums(e) {
        //console.log(e.target.value)
        if(mathOperator.length <= 0) {
            addNumOne([...numOne, e.target.value])
            // let join = numOne.join('')
            console.log('One: ', numOne)
        } else {
            addNumTwo([...numTwo, e.target.value])
            console.log('Two: ', numTwo)
        }
    }

    // Get/Set Math Operators
    function setOperator(e) {
        //console.log(e.target.value)
        setMathOperator([e.target.value, ...mathOperator])
        if(mathOperator.length >= 2 && mathOperator[1] != "=") {
            //setMathOperator([])
            mathOperator[0] = setMathOperator(e.target.value)
        }
        console.log('operator ', mathOperator)
    }

    // clear all states to []
    function clear() {
        setMathOperator([])
        addNumOne([])
        addNumTwo([])
        //console.log(mathOperator)
    }



    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clear}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" value='/' onClick={setOperator}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value='7' onClick={getNums}>7</button>
                    <button className="calc-button" value='8' onClick={getNums}>8</button>
                    <button className="calc-button" value='9' onClick={getNums}>9</button>
                    <button className="calc-button calc-button-op" value='X'onClick={setOperator}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value='4' onClick={getNums}>4</button>
                    <button className="calc-button" value='5' onClick={getNums}>5</button>
                    <button className="calc-button" value='6' onClick={getNums}>6</button>
                    <button className="calc-button calc-button-op" value='-' onClick={setOperator}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value='1' onClick={getNums}>1</button>
                    <button className="calc-button" value='2' onClick={getNums}>2</button>
                    <button className="calc-button" value='3' onClick={getNums}>3</button>
                    <button className="calc-button calc-button-op" value='+' onClick={setOperator}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" value='0' onClick={getNums}>0</button>
                    <button className="calc-button" value='.' onClick={getNums}>.</button>
                    <button className="calc-button calc-button-op" value='=' onClick={setOperator}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator