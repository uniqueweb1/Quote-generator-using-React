
import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState('')
  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(res => {
   console.log(res.data.content)
   setQuote(res.data.content)
    })
    .catch(err => {
  console.log(err)
    })
  }
  var name = "Quote";
  return (
    <div className="App">
       <h1><strong>REACT QUOTE GENERATOR</strong></h1>
      <div className='child'>
<h2> <strong>Generate {name}</strong></h2>
<button onClick={getQuote}>Get quote</button>
{ quote && <p>{quote}</p> }
      </div>
      
    </div>
  );
}

export default App;
