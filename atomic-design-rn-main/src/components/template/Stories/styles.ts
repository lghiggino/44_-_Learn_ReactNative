import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { colors } from '../../../global/styles/colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  stories: {
    marginTop: 17,
    borderBottomWidth: 1,
    borderTopColor: colors.gray50,
    borderTopWidth: 1,
    borderBottomColor: colors.gray40,
  },
  profiles: {
    height: 100,
    alignItems: 'center',
    paddingLeft: 15,
  },
  profile: {
    marginRight: 15,
    alignItems: 'center'
  },
  username: {
    fontSize: 12,
  }
});