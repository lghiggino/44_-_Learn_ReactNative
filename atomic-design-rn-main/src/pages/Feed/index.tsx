import React from 'react';

import {
  View,
  Text,
  Image,
  FlatList
} from 'react-native';

import {
  MessengerIcon,
  CameraIcon,
  LogoIcon,
  IgtvIcon,
} from '../../global/styles/icons';


import { profiles } from '../../utils/profiles';
import { posts } from '../../utils/posts';

import { styles } from './styles';
import Posts from '../../components/templates/Posts';
import Stories from '../../components/templates/Stories';
import Header from '../../components/templates/Header';

export function Feed() {
  return (
    <View style={styles.container}>
      <Header />

      <Stories renderData={profiles} />

      <Posts renderData={posts}/>

    </View>
  );
}