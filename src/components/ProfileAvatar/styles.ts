import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  userProfileAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20
  },
  userProfileBox: {
    width: 300
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
  },
});