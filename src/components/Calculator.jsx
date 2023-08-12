import React, { useState } from 'react';

const Calculator = () => {
  const [num, setNum] = useState({ num1: '', num2: '' })
  const [msg, setMsg] = useState({ error: '', success: '' })
  const [result, setResult] = useState('')

  console.log(result, typeof (result))

  function Validate(task) {
    // check if the input fields are not empty and if the numbers entered 
    // are either integers, floating - point numbers, positive, or negative.

    //empty
    if (num.num1 === '' || num.num2 === '') {
      setMsg({ ...msg, success: false, error: true })
    }

    else if (isNaN(num.num1) || isNaN(num.num2)) {
      setMsg({ ...msg, success: false, error: true })
    }

    else {
      setMsg({ ...msg, success: true, error: false })
    }

    operation(task, +num.num1, +num.num2)
  }
  console.log(msg)

  //Calculate the result
  function operation(task, num1, num2) {
    switch (task) {
      case 'addition':
        return setResult((num1) + (num2));
      case 'subtraction':
        return setResult((num1 - num2));
      case 'multiplication':
        return setResult((num1) * (num2));
      case 'division':
        return setResult((num1) / (num2));

      default:
        break;
    }
  }

  return (
    <div id='calculator'>
     <div className="cal">
     <h1 className="calTitle">React Calculator</h1>
      <div className="calBox">
        <input type="text" onChange={(e) => setNum({ ...num, num1: e.target.value })} value={num.num1} name="num1" id="num1" placeholder='Num 1' />
        <input type="text" onChange={(e) => setNum({ ...num, num2: e.target.value })} value={num.num2} name="num2" id="num2" placeholder='Num 2' />
        <div className="btn">
          <button className="addition" onClick={() => { Validate('addition') }} >+</button>
          <button className="subtraction" onClick={() => { Validate('subtraction') }} >-</button>
          <button className="multiplication" onClick={() => { Validate('multiplication') }} >*</button>
          <button className="division" onClick={() => { Validate('division') }} >/</button>
        </div>

        {//display of error message in case of validation failure
          msg.error &&
          <div className='Msg'>
            <p style={{ color: 'red' }}>Error!</p>
            <p>Num Cannot Be Empty</p>
          </div>
        }
        {//display of success message and result with calculated Value
          msg.success &&
          <div className='Msg'>
            <p style={{ color: 'blue' }} >Success!</p>
            <p>Result - {result} </p></div>
        }
     </div>
      </div>
    </div>
  )
}

export default Calculator;