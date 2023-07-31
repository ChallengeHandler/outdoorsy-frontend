import './App.css';
import { RentalCard } from './components/RentalCard';
import { useRentals } from './hooks/useRentals';

function App() {
  const { imageBase, rentals } = useRentals({});
  return (
    <div className="App">
      <div className='flex flex-col items-center'>
      {rentals.map(rental => <RentalCard data={rental} imageBase={imageBase} />)}
      </div>
    </div>
  );
}

export default App;
