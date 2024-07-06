import './App.css'
import { useState } from 'react';
import TodoList from "./TodoList.jsx"

function App() {
  return(
    <>
      <TodoList />
    </>
  );
}

export default App;



// import './App.css'
// import { useState } from 'react';
// import TodoList from "./TodoList.jsx"

// function App() {

//   const [amount, setAmount] = useState('');
//   const [currencyFrom, setCurrencyFrom] = useState('INR');
//   const [currencyTo, setCurrencyTo] = useState('EUR');
//   const [convertedAmount, setConvertedAmount] = useState(null);

//   const handleAmountChange = (e) => {
//     setAmount(e.target.value);
//   };

//   const handleCurrencyToChange = (e) => {
//     setCurrencyTo(e.target.value);
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const apiKey = 'YOUR_API_KEY'; // Replace with your exchange rate API key
//     const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyFrom}`);
//     const data = await response.json();
//     const rate = data.rates[currencyTo];
//     const result = amount * rate;
//     setCurrencyFrom(currencyTo);
//     setConvertedAmount(result);
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         {/* <div>
//           <label>Amount:</label>
//           <input type="number" value={amount} onChange={handleAmountChange} />
//         </div> */}
//         <div>
//           <label>From:</label>
//           <input type='text' readOnly value={currencyFrom} />
//         </div>
//         <div>
//           <label>To:</label>
//           <select value={currencyTo} onChange={handleCurrencyToChange}>
//             <option value="INR">INR</option>
//             <option value="USD">USD</option>
//             <option value="EUR">EUR</option>
//             <option value="GBP">GBP</option>
//             {/* Add more currencies as needed */}
//           </select>
//         </div>
//         <button type="submit">Convert</button>
//       </form>
//       {convertedAmount && (
//         <div>
//           <h3>Converted Amount: {convertedAmount.toFixed(2)} {currencyTo}</h3>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
