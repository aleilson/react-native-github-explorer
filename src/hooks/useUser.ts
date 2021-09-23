import { useContext } from 'react';
import { userContext } from '../contexts/userContext';

export function useHero() {
  const value = useContext(userContext);

  return value;
}