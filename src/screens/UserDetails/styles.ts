import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 20
  },
  userProfile: {
    borderWidth: 3,
    borderRadius: 8,
    padding: 10,
    borderColor: theme.colors.secondary50,
    backgroundColor: theme.colors.secondary40,
  },
  userProfileAvatar: {
    height: 40,
    width: 40,
  },
  userProfileBox: {},
  userProfileTitle: {
    color: theme.colors.discord,
    fontFamily: theme.fonts.text500,
    fontSize: 16
  },
  userProfileText: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 14
  },
})