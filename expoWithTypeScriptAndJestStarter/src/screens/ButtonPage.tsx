import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../constants/colors';
import { Text } from '../components/Text';
import { Button } from '../components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
});

const ButtonPage = () => {
  const [textVisible, setTextVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text type="header">This is a header</Text>
      <Text type="subheader">This is a subheader</Text>
      <Text>This is normal text</Text>
      <Button
        onPress={() => {
          setTextVisible(true);
        }}
      >
        Press Me
      </Button>
      {textVisible && (
        <View>
          <Text>Render from button press</Text>
        </View>
      )}
    </View>
  );
};

export default ButtonPage;
