import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { colors } from '../../../global/styles/colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  postAvatar: {
    width: 32,
    height: 32,
    marginRight: 9
  }
});