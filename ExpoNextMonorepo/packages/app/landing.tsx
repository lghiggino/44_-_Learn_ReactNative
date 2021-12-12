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
            flexDirection: ['column', 'column', 'row']
          }}
        >
          <View
            sx={{
              maxWidth: ['100%', '50%']
            }}
          >
            <Text
              sx={{
                fontSize: [40, 110, 160]
              }}
            >
              New Collection
            </Text>
          </View>
          <View>
            <Text>Image</Text>
          </View>
        </View>
      </View>

    </View>
  );
}

export default Landing;