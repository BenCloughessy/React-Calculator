import './App.css';
import { Card, Button, CardHeader, ButtonGroup } from 'reactstrap';
import { useState } from 'react';

function App() {
  const [leftOperand, setLeftOperand] = useState('')
  const [rightOperand, setRightOperand] = useState('')
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState(null)

  const equation = `${leftOperand}${operator}${rightOperand}`
  
  

  const setOperand = (operand) => {
    if(leftOperand === '') {
      setResult(null)
      setLeftOperand(operand)
    } else {
      setRightOperand(operand)
    }
  }

  const resetEquation = () => {
    setLeftOperand('')
    setRightOperand('')
    setOperator('')
  }

  const calculate = () => {
    switch(operator) {
      case '+':
        setResult(leftOperand + rightOperand)
        resetEquation()
        break;
      case '-':
        setResult(leftOperand - rightOperand)
        resetEquation()
        break;
      case '*':
        setResult(leftOperand * rightOperand)
        resetEquation()
        break;
      case '/':
        setResult(leftOperand / rightOperand)
        resetEquation()
        break;
      default:
        // code block
    }
  }

  return (
    <div className="App">

      <Card className='calculator mx-auto'>
        <CardHeader className='displayScreen'>{result === null ? equation : result}</CardHeader>

        <ButtonGroup className='mb-1'>
          <Button className='mx-1' onClick={() => setOperand(0)}>0</Button>
          <Button onClick={() => setOperand(1)}>1</Button>
          <Button className='mx-1' onClick={() => setOperand(2)}>2</Button>
          <Button onClick={() => setOperand(3)}>3</Button>
          <Button className='mx-1'onClick={() => setOperand(4)}>4</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button className='mx-1' onClick={() => setOperand(5)}>5</Button>
          <Button onClick={() => setOperand(6)}>6</Button>
          <Button className='mx-1' onClick={() => setOperand(7)}>7</Button>
          <Button onClick={() => setOperand(8)}>8</Button>
          <Button className='mx-1' onClick={() => setOperand(9)}>9</Button>
        </ButtonGroup>
        
        <Card className='operators mx-auto'>
          <ButtonGroup className='mb-1 mx-1'>
            <Button onClick={() => setOperator('+')}>+</Button>
            <Button className='mx-1' onClick={() => setOperator('-')}>-</Button>
            <Button onClick={() => setOperator('*')}>*</Button>
            <Button className='ms-1'onClick={() => setOperator('/')}>/</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button onClick={() => calculate()}>=</Button>
          </ButtonGroup>
        </Card>
      
      

      </Card>
    </div>
  )
}

export default App;

// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */
// var isValidSudoku = function(board) {
//   let isValid = true

//   // Check Row
//   for (let i = 0; i < board.length; i++) {    // Loop thru big array
      
//       for (let t = 0; t < board[i].length; t++) {     // loop thru each row
//           let rowArr = []     // Create row array

//           // Populate rowArr with row values if it is a number, and check if already included
//           if ((rowArr.includes(board[i][t])) && (!board[i][t]) === ".") {
//               return isValid = false
//           } else if((!board[i][t]) === ".") {
//               rowArr.push(board[i][t])
//           }
//       }
//   }

//   // Check Col
//   for (let i = 0; i < board.length; i++) {    // Loop thru big array
//       let col = [[]]

//       for (let t = 0; t < board[i].length; t++) {     // loop thru each row

//           // Save each value to respective col array if its a number
//           if (!board[i][t] === ".") {
//               col[t].push(board[i][t])
//           }

//       }
//   }

//   // Check Sub-Boxes
// };
