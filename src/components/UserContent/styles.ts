import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  thumbInformation: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contentBox: {
    width: '50%',
    marginBottom: 10
  },
  userProfileTitle: {
    color: theme.colors.discord,
    fontFamily: theme.fonts.text500,
    fontSize: 16
  },
  userProfileText: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 14,
    flexShrink: 1
  }
});