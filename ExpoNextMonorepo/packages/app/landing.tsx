import React from 'react';
import { View, Text, Image } from 'dripsy';

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
        }}
      >
        <Text> Olá de Landing</Text>
      </View>

    </View>
  );
}

export default Landing;