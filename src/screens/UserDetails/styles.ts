import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderColor: theme.colors.secondary50,
    backgroundColor: theme.colors.secondary40,
    borderWidth: 3,
    borderRadius: 8
  }
})