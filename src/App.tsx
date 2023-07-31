import './App.css';
import { useRentals } from './hooks/useRentals';

function App() {
  useRentals({});
  
  return (
    <div className="App">
    </div>
  );
}

export default App;
