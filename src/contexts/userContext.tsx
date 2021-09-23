import React, 
{ 
  createContext,
  ReactNode,
  useState,
} from 'react';

import { api } from '../services/api';

type User = {
  id: string;
  username: string;
  avatar: string;
  bio?: string;
  location?: string
  email: string;
  followers: number,
  following: number
}

type UserContexType = {
  user: User | undefined;
  loading: boolean;
  handleSearchUser:  (event: any) => void;
}

type UserContextProps = {
  children: ReactNode;
}

export const userContext = createContext<UserContexType>({} as UserContexType);

export function UserContextProvider({ children }: UserContextProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  function handleSearchUser(nameUser: string) {
    try {
      setLoading(true);

      api.get(nameUser).then(response => {
        const { id, name, avatar_url, bio, email, followers, following, location } = response.data;

        setUser({
          id: id,
          avatar: avatar_url,
          email: email,
          followers: followers,
          following: following,
          username: name,
          bio: bio,
          location: location
        });
      });
    } catch {
      throw new Error('Não foi possível encontrar o usuário!');
    } finally {
      setLoading(false);
    }
  }

  return (
    <userContext.Provider value={{ user, loading, handleSearchUser }}>
      {children}
    </userContext.Provider>
  )
}