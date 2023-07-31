import './App.css';
import { RentalList } from './components/RentalList';
import { useRentals } from './hooks/useRentals';

function App() {
  const { imageBase, rentals } = useRentals({});
  return (
    <div className="App">
      <RentalList rentals={rentals} imageBase={imageBase} />
    </div>
  );
}

export default App;
