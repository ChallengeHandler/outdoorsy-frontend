import { useCallback, useEffect, useRef, useState } from 'react';
import { getRentals } from '../services/rentals';
import { ImageAttributes, ImageData } from '../types/metas';
import { Rental, RentalsConfig } from '../types/rentals';
import { RentalsResponse } from '../types/services';

type ImageBase = {
  [key: string]: ImageAttributes & {
    id: string,
  }
}

const useRentals = (config: RentalsConfig) => {
  console.log('rerender')
  const abortControllerRef = useRef<AbortController | undefined>(undefined);
  const [imageBase, setImageBase] = useState<ImageBase>({});
  const [rentals, setRentals] = useState<Rental[]>([]);

  const parseImageData = useCallback(async (imageData: ImageData[]) => {
    const newBase: ImageBase = {};

    for (let datum of imageData) {
      newBase[datum.id] = {
        ...datum.attributes,
        id: datum.id
      };
    }
      
    setImageBase(newBase);
  }, []);

  const parseRentalsData = useCallback(async (rentalsData: RentalsResponse) => {
    parseImageData(rentalsData.included);
    setRentals(rentalsData.data);
  }, [parseImageData]);

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
  }, [parseRentalsData]);

  useEffect(() => {
    update(config);
    // eslint-disable-next-line
  }, []);

  return {
    rentals,
    imageBase,
  }
}

export { useRentals };