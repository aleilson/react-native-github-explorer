import React from 'react';
import { Text, TextInput, TextInputProps, View} from 'react-native';

import { styles } from './styles';

export function Search({...rest}: TextInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleInput}>
        Busque por um usuário do Github
      </Text>
      <TextInput 
        style={styles.input} 
        {...rest}
      />
    </View>
  )
}
