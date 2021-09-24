import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { Search } from '../../components/Search';
import { showMessage } from "react-native-flash-message";
import { useNavigation } from '@react-navigation/core';

import { styles } from './styles';

import logGithub from '../../assets/logo.png';
import { Button } from '../../components/Button';
import { useUser } from '../../hooks/useUser';

export function Home() {
  const { handleSearchUser, user } = useUser();
  const [nick, setNick] = useState('');
  const navigation = useNavigation();

  function handleClickSearch() {
    if (nick.length <= 3 && nick != '') {
      showMessage({
        message: "Insira um usuário válido.",
        type: "danger",
        statusBarHeight: 20,
        titleStyle: {
          fontSize: 17
        }
      });
      setNick('');
    } else if (nick == '') {
      showMessage({
        message: "Preencha o campo abaixo.",
        type: "danger",
        statusBarHeight: 20,
        titleStyle: {
          fontSize: 17
        }
      });
    } else {
      handleSearchUser(nick);
      if (user.id !== (null || undefined)) {
        navigation.navigate('UserDetails')
      }
    }
  }

  return (
    <>
      <View style={styles.container}>
        <View  style={styles.contentSearch}>
          <Image
            source={logGithub}
            style={styles.image}
            resizeMode="stretch"
          />
          <Search
            value={nick}
            onChangeText={setNick}
          />
        </View>
        <Button 
          title="Buscar"
          onPress={handleClickSearch}
        />
      </View>
    </>
  )
}