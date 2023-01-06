import './App.css';
import { Card, CardTitle, Button, CardHeader, Row, Col, ButtonGroup } from 'reactstrap';
import { useState } from 'react';

function App() {
  const [leftOperand, setLeftOperand] = useState(null)
  const [rightOperand, setRightOperand] = useState(null)
  const [operator, setOperator] = useState(null)
  const [result, setResult] = useState(null)

  const equation = `${leftOperand}${operator}${rightOperand}`

  const setOperand = (operand) => {
    if(leftOperand === null) {
      setLeftOperand(operand)
    } else {
      setRightOperand(operand)
    }
  }

  const calculate = () => {
    switch(operator) {
      case '+':
        setResult(leftOperand + rightOperand)
        break;
      case '-':
        setResult(leftOperand - rightOperand)
        break;
      case '*':
        setResult(leftOperand * rightOperand)
        break;
      case '/':
        setResult(leftOperand / rightOperand)
        break;
      default:
        // code block
    }
  }

  return (
    <div className="App">

      <Card className='calculator mx-auto'>
        <CardHeader className='displayScreen'>{result === null ? equation : result}</CardHeader>

        <ButtonGroup>
          <Button onClick={() => setOperand(0)}>0</Button>
          <Button onClick={() => setOperand(1)}>1</Button>
          <Button onClick={() => setOperand(2)}>2</Button>
          <Button onClick={() => setOperand(3)}>3</Button>
          <Button onClick={() => setOperand(4)}>4</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button onClick={() => setOperand(5)}>5</Button>
          <Button onClick={() => setOperand(6)}>6</Button>
          <Button onClick={() => setOperand(7)}>7</Button>
          <Button onClick={() => setOperand(8)}>8</Button>
          <Button onClick={() => setOperand(9)}>9</Button>
        </ButtonGroup>
        
        <Card className='operators mx-auto'>
          <ButtonGroup>
            <Button onClick={() => setOperator('+')}>+</Button>
            <Button onClick={() => setOperator('-')}>-</Button>
            <Button onClick={() => setOperator('*')}>*</Button>
            <Button onClick={() => setOperator('/')}>/</Button>
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
