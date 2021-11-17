import React from 'react';
import { View, Text, TextProps } from 'react-native';

import { styles } from './styles';

type TextLiked = TextProps & {
    textValue: string
}

const TextLiked: React.FC <TextLiked>= ({ textValue }) => {
    return <Text style={styles.likes}>{textValue}</Text>;
}

export default TextLiked;