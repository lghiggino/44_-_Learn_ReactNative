import React from 'react';
import { View, Text, Image } from 'dripsy';
const shoe = require('../expo/assets/SeekPng.com_tennis-shoe-png_4960577.png')

// import { Container } from './styles';

const Landing: React.FC = () => {
  console.log(shoe)
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
          height: [600]
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
              <Image source={shoe} width={20} height={20}/>
            </View>
          </View>
        </View>
      </View>

    </View>
  );
}

export default Landing;