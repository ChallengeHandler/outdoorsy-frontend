import './App.css';
import { useRentals } from './hooks/useRentals';

function App() {
  const { imageBase, rentals } = useRentals({});
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
