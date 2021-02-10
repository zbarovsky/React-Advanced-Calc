import React, { useState, useEffect } from 'react'

const Calculator = props => {

    const [numOne, addNumOne] = useState([])
    const [numTwo, addNumTwo] = useState([])
    const [output, setOutput] = useState([])
    const [mathOperator, setMathOperator] = useState([])

    // get num inputs
    function getNums(e) {
        //console.log(e.target.value)
        if(mathOperator.length <= 0) {
            addNumOne([...numOne, e.target.value])
            console.log('One: ', numOne)
        } else {
            addNumTwo([...numTwo, e.target.value])
            console.log('Two: ', numTwo)
        }
    }

    // Get/Set Math Operators
    function setOperator(e) {
        setMathOperator(e.target.value)
        console.log('operator ', mathOperator)
    }

    // clear all states to []
    function clear() {
        setMathOperator([])
        addNumOne([])
        addNumTwo([])
        setOutput([])
    }
    
    // do them math calculations
    function calculate() {
        let valOne = numOne.join('')
        let valTwo = numTwo.join('')

        if(mathOperator[0] == '+') {
            let answer = parseFloat(valOne) + parseFloat(valTwo)
            //console.log(numOne.join('') + numTwo.join(''))
            setOutput(answer)
        } else if (mathOperator[0] == '-') {
            let answer = parseFloat(valOne) - parseFloat(valTwo)
            setOutput(answer)
        } else if(mathOperator[0] == 'X') {
            let answer = parseFloat(valOne) * parseFloat(valTwo)
            setOutput(answer)
        } else if(mathOperator[0] == '/') {
            let answer = parseFloat(valOne) / parseFloat(valTwo)
            setOutput(answer)
        }
    }

    // display values on calculator
    let display = 0
    if(mathOperator.length <= 0) {
        display = numOne.join('')
    } else {
        display = numTwo.join('')
    }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: {display} </p>
                <div className="answer-box">{output}</div>
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
                    <button className="calc-button calc-button-op" value='=' onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator