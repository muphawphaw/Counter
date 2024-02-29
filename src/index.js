import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"

 

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <Counter/>
  </React.StrictMode>
)

function Counter() {
  const [count,setCount] = useState(0);

  const increment = () => setCount(count + 1)
  const decrement  = () => setCount(count - 1)

  return (
      <div>
          <div className="container">
              <h1 className="number">{count}</h1>
          </div>
          <section className="btn-container">
              <button onClick={increment} className="increment">+</button>
              <button onClick={decrement} className="increment">-</button>
          </section>
      </div>

  
  )
}