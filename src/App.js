import React, {useState, useEffect} from 'react';
import './App.css';

export default () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [deduction, setDeduction] = useState(1);

  useEffect(()=>{
    document.title = `Your wealth: ${count}`;
  });

  return (
    <React.Fragment>
      <p> You have ${count}!</p>
      <button onClick={() => setCount(count+increment)}> Give Me Money! </button>
      <button onClick={()=>{
        if (deduction <= count){
          setCount(count-deduction)
          setDeduction(deduction * 2)
          setIncrement(increment  * 2)
          console.log('deduction', deduction);
          console.log('count', count);
        } else {
          alert(`not enough money! You need ${deduction}`)
        }
      }
        }> Upgrade Moneymaker </button>
    </React.Fragment>
  )
}
