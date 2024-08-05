import React from 'react';
import Button from './components/Button';
import Button_Addition from './components/Button_Addition';
import Button_Subtraction from './components/Button_Subtraction';
import Button_Multiplication from './components/Button_Multiplication';
import Button_Division from './components/Button_Division';
import Button_Calculate from './components/Button_Calculate';
import './App.css'
import { Text } from 'react-desktop/windows'; 
import { useState } from 'react';


function App() {

  const [text, setText] = useState('');

  const appendNumber = (number) => {
      setText( prevText => prevText + number );
  };

  const appendSummation = ( prevText ) => {
    setText(prevText => {
      const numbersArray = prevText.split(/[^0-9]+/).filter(Boolean);
      const sum = numbersArray.reduce((acc, num) => acc + Number(num), 0);
      return prevText + "=" + sum;
    });
  };

  return (
    <div className="card-title"> Calculator
      <h5 className="card-title text-center">{text}</h5>
      <div style={{ 
      display: 'block', width: 700, paddingLeft: 30 
    }}> 
      <h4>React Desktop Windows Text Component</h4> 
      <Text 
        background="lightblue"
        width="40%"
        padding="10px">  
        Hello, This is a sample text to demonstrate  
        the Text Component of React Desktop Library  
        in ReactJS. How are you? 
      </Text> 
    </div> 
      <div className="container text-center">

        {/* Row 1*/}
        <div className="row">
          <div className="col">
            <Button number={"%"} appendNumber={appendNumber}/>
          </div>
          <div className="col">
            <Button number={"CE"} appendNumber={appendNumber}/>
          </div>
          <div className="col">
            <Button number={"C"} appendNumber={appendNumber}/>
          </div>
          <div className="col">
            <Button number={"Back"} appendNumber={appendNumber}/>
          </div>
        </div>

        {/* Row 1*/}
        <div className="row">
          <div className="col">
            <Button number={"1/x"} appendNumber={appendNumber}/>
          </div>
          <div className="col">
            <Button number={"X^2"} appendNumber={appendNumber}/>
          </div>
          <div className="col">
            <Button number={5} appendNumber={appendNumber}/>
          </div>
          <div className="col">
            <Button_Multiplication appendNumber={appendNumber}/>
          </div>
        </div>

        {/* Row 1*/}
        <div className="row">
          <div className="col">
            <Button number={7} appendNumber={appendNumber}/>
          </div>
          <div className="col">
            <Button number={8} appendNumber={appendNumber}/>
          </div>
          <div className="col">
            <Button number={9} appendNumber={appendNumber}/>
          </div>
          <div className="col">
            <Button_Division appendNumber={appendNumber}/>
          </div>
        </div>

        {/* Row 2*/}
        <div className="row">
          <div className="col">
            <Button number={4} appendNumber={appendNumber}/>
          </div>
          <div className="col">
            <Button number={5} appendNumber={appendNumber}/>
          </div>
          <div className="col">
            <Button number={6} appendNumber={appendNumber}/>
          </div>
          <div className="col">
            <Button_Subtraction appendNumber={appendNumber}/>
          </div>
        </div>

        {/* Row 3*/}
        <div className="row">
          <div className="col">
            <Button number={1} appendNumber={appendNumber}/>
          </div>
          <div className="col">
            <Button number={2} appendNumber={appendNumber}/>
          </div>
          <div className="col">
            <Button number={3} appendNumber={appendNumber}/>
          </div>
          <div className="col">
            <Button_Addition appendNumber={appendNumber}/>
          </div>
        </div>

        {/* Row 4*/}
        <div className="row">
          <div className="col">
            <Button number={"+/-"} appendNumber={appendNumber}/>
          </div>
          <div className="col">
            <Button number={0} appendNumber={appendNumber}/>
          </div>
          <div className="col">
            <Button number={"."} appendNumber={appendNumber}/>
          </div>
          <div className="col">
            <Button_Calculate appendSummation={appendSummation}/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;