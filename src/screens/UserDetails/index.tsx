import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { UserProfile } from '../../components/UserProfile';
import { UserContent } from '../../components/UserContent';
import { useUser } from '../../hooks/useUser';

import { styles } from './styles';
import { Loading } from '../../components/Loading';
import { Header } from '../../components/Header';

export function UserDetails() {
  const { user, loading } = useUser();

  return (
    <>
      <Header
        title='Detalhes do usuário'
      />

      {
        loading ? <Loading />
        : 
        <ScrollView style={styles.container}>

          <UserProfile
            avatar={user.avatar}
            username={user?.username}
            bio={user.bio}
          />
          <UserContent 
            email={user.email}
            location={user.location}
            followers={user.followers}
            following={user.following}
          />
        </ScrollView>
      }
    </>
  )
}