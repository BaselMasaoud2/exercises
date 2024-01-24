

// Exercise 1 
// import React from 'react';
// function App() {
//   const showCompany = (name, revenue) => {
//     return (
//       <div id={name}>
//         {name} makes {revenue} every year
//       </div>
//     );
//   }

//   let companies = [
//     { name: "Tesla", revenue: 140 },
//     { name: "Microsoft", revenue: 300 },
//     { name: "Google", revenue: 600 }
//   ];

//   return (
//     <div className="ex-space">
//       <h4 className='ex-title'>Exercise 1</h4>
//       <div className="exercise" id="ex-1">
//         {companies.map(company => showCompany(company.name, company.revenue))}
//       </div>
//     </div>
//   );
// }

// export default App;




/* Exercise 2
import React, { useState } from 'react';
import './App.css';

function App() {
  const [temperature, setTemperature] = useState(25);

  const getClassName = (temperature) => {
    if (temperature < 15) {
      return "freezing";
    } else if (temperature >= 15 && temperature <= 30) {
      return "fair";
    } else {
      return "hell-scape";
    }
  }

  const className = getClassName(temperature);

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
        <div id="weatherBox" className={className}></div>
        <p>Current Temperature: {temperature}</p>
        <button onClick={() => setTemperature(10)}>Freezing</button>
        <button onClick={() => setTemperature(20)}>Fair</button>
        <button onClick={() => setTemperature(35)}>Hell-scape</button>
      </div>
    </div>
  );
}

export default App;

*/ 