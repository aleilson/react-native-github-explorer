import React, 
{ 
  createContext,
  ReactNode,
  useState,
} from 'react';
import { showMessage } from 'react-native-flash-message';
import { Loading } from '../components/Loading';

import { api } from '../services/api';

export type User = {
  id: string;
  username: string;
  avatar: string;
  bio?: string;
  location?: string;
  email: string;
  followers: number,
  following: number
}

type UserContexType = {
  user: User;
  loading: boolean;
  handleSearchUser:  (event: any) => Promise<void>;
  setUser: (event: User) => void;
}

type UserContextProps = {
  children: ReactNode;
}

export const userContext = createContext<UserContexType>({} as UserContexType);

export function UserContextProvider({ children }: UserContextProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  async function handleSearchUser(nameUser: string) {
    try {
      setLoading(true);

      await api.get(nameUser).then(response => {
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
      }).catch((error) => {
        if (error.response.status == 404) {
          setUser({} as User);
          showMessage({
            message: "Usuário não encontrado, tente novamente.",
            type: "danger",
            statusBarHeight: 20,
            titleStyle: {
              fontSize: 17
            }
          });
        }
      });
    } catch(error) {
      throw new Error('Não foi possível encontrar o usuário!');
    } finally {
      setLoading(false);
    }
  }

  return (
    <userContext.Provider value={{ user, setUser, loading, handleSearchUser }}>
      {children}
    </userContext.Provider>
  )
}