import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { Search } from '../../components/Search';

import { styles } from './styles';

import logGithub from '../../assets/logo.png';
import { Button } from '../../components/Button';
import { useHero } from '../../hooks/useUser';

export function Home() {
  const { handleSearchUser, user } = useHero();
  const [nick, setNick] = useState('');

  function handleClickSearch() {
    handleSearchUser(nick)
  }

  return (
    <View style={styles.container}>

      <View  style={styles.contentSearch}>
        <Image
          source={logGithub}
          style={styles.image}
          resizeMode="stretch"
        />
        <Search
          onChangeText={setNick}
        />
      </View>
      <Button 
        title="Buscar"
        onPress={handleClickSearch}
      />
    </View>
  )
}