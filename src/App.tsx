import './App.css';
import { RentalList } from './components/RentalList';
import { useRentals } from './hooks/useRentals';
import { useSearchBox } from './hooks/useSearchBox';

function App() {
  const { imageBase, rentals } = useRentals({});
  const { query, SearchBox } = useSearchBox();
  console.log(query);
  return (
    <div className="App flex flex-col items-center">
      {SearchBox}
      <RentalList rentals={rentals} imageBase={imageBase} />
    </div>
  );
}

export default App;
