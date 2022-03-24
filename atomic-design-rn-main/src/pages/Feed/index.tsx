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
import PostsList from '../../components/template/Posts';
import Stories from '../../components/template/Stories';
import Header from '../../components/template/Header';

export function Feed() {
  return (
    <View style={styles.container}>
      <Header />

      <Stories renderData={profiles} />

      <PostsList renderData={posts}/>

    </View>
  );
}