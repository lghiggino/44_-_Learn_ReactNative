import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { View, Text, Image } from 'dripsy';
// const shoe = require('../app/assets/SeekPng.com_tennis-shoe-png_4960577.png')

// import { Container } from './styles';

const Landing: React.FC = () => {

  return (
    <View
      sx={{
        backgroundColor: ['#a84019', '#ebbc84']
      }}
    >
      <View
        sx={{
          margin: ['$1', '$3', '$5'],
          backgroundColor: 'white',
          borderRadius: 20,
          width: ['auto'],
          height: [500]
        }}
      >
        <View>
          <Text>eu sou o header</Text>
        </View>
        <View
          sx={{
            flexDirection: ['column', 'column', 'column', 'row']
          }}
        >
          <View
            sx={{
              marginLeft: ['$1', '$2', '$3', '$4'],
              maxWidth: ['100%', '100%', '100%', '50%']
            }}
          >
            <Text
              sx={{
                fontSize: [40, 60, 90, 110]
              }}
            >
              New Collection
            </Text>
          </View>
          <View>
            <View>
              {/* <Image source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
                width={200}
                height={200}
                style={{ backgroundColor: 'red', width: 200, height: 200 }}
              /> */}
              <Image source={require('./greenShoesWhiteBackground.jpg')}
                style={{ backgroundColor: 'red', width: 200, height: 200 }}
              />
            </View>
          </View>
        </View>
      </View>

    </View>
  );
}

export default Landing;