import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const age = useSelector((state) => state.age)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h3>Redux Saga Demo</h3>
      <p>Your age: { age }</p>
      <button onClick={() => dispatch({ type: 'AGE_DOWN', value: 1 })}>Decrease Age</button>
      <button onClick={() => dispatch({ type: 'AGE_UP', value: 1 })}>Increase Age</button>
    </div>
  );
}


export default App;
