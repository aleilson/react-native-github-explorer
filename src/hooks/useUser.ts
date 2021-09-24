import { useContext } from 'react';
import { userContext } from '../contexts/userContext';

export function useUser() {
  const value = useContext(userContext);

  return value;
}