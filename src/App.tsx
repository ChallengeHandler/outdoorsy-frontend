import { useEffect } from 'react';
import './App.css';
import { RentalList } from './components/RentalList';
import { useRentals } from './hooks/useRentals';
import { useSearchBox } from './hooks/useSearchBox';

function App() {
  const { query, SearchBox } = useSearchBox();
  const { imageBase, rentals, update } = useRentals();

  useEffect(() => {
    update({
      filter: query
    })
  }, [query]);

  return (
    <div className="App flex flex-col items-center">
      {SearchBox}
      <RentalList rentals={rentals} imageBase={imageBase} />
    </div>
  );
}

export default App;
