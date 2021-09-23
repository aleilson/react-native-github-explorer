import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    
  },
  titleInput: {
    color: theme.colors.highlight,
    fontSize: 22,
    fontFamily: theme.fonts.title700
  },
  input: {
    height: 40,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: theme.colors.secondary50,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text500,
    marginTop: 20,
    padding: 10
  }
});