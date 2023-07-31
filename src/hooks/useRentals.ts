import { useCallback, useEffect, useRef } from 'react';
import { getRentals } from '../services/rentals';
import { RentalsConfig } from '../types/rentals';
import { RentalsResponse } from '../types/services';

const useRentals = (config: RentalsConfig) => {
  const abortControllerRef = useRef<AbortController | undefined>(undefined);

  const parseRentalsData = (rentalsData: RentalsResponse) => {
    console.log(rentalsData);
  }

  const update = useCallback(async (config: RentalsConfig) => {
    const abortController = abortControllerRef.current;
    if (abortController) {
      abortController.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      const response = await getRentals(config, controller.signal);
      parseRentalsData(response);
    } catch (err) {
      console.error(err);
    }
    
    abortControllerRef.current = undefined;
  }, []);

  useEffect(() => {
    update(config);
  }, [update, config]);
}

export { useRentals };