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
  },
  userProfileAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20
  },
  thumbInformation: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contentBox: {
    width: '50%',
    marginBottom: 10
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
})