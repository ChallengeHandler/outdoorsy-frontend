import { useCallback, useRef, useState } from 'react';
import { getRentals } from '../services/rentals';
import { ImageAttributes, ImageData } from '../types/metas';
import { Rental, RentalsConfig } from '../types/rentals';
import { RentalsResponse } from '../types/services';

export type ImageBase = {
  [key: string]: ImageAttributes & {
    id: string,
  }
}

const useRentals = () => {
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
    rentalsData.included && parseImageData(rentalsData.included);
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

  return {
    rentals,
    imageBase,
    update
  }
}

export { useRentals };