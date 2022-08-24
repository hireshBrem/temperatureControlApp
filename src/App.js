
import './App.css';
import {useState} from 'react';

function App() {
  const [initialTemp, changeTemp] = useState(10)
  let styling = "rounded-full w-40 h-40 bg-blue-500 max-w-md m-auto pt-10 text-[45px] text-white"

  const increaseTemp = (initialTemp) => {
    let newTemp = initialTemp + 1
    changeTemp(newTemp)
  }
  
  const decreaseTemp = (initialTemp) => {
    let newTemp = initialTemp - 1
    changeTemp(newTemp)
  }
  
  if(initialTemp >= 15) {
    styling = "rounded-full w-40 h-40 bg-red-600 max-w-md m-auto pt-10 text-[45px] text-white"
  }

  return (
    <div className='text-center'>
      <h1 className='text-[30px] my-4 underline'>React Temperature Control App</h1>
      <div className="h-72 bg-blue-800 rounded-xl w-64 max-w-xl m-auto">
        <div className="pt-5">
          <div className={styling}>
            {initialTemp}
          </div>   
        </div>
        <button className="w-20 h-20 rounded-full text-white text-[40px] bg-blue-500 mx-5" onClick={() => decreaseTemp(initialTemp)}>-</button>
        <button className="w-20 h-20 rounded-full text-white text-[40px] bg-blue-500 mx-5" onClick={() => increaseTemp(initialTemp)}>+</button>
      </div>
    </div>
  );
}

export default App;
