import React from 'react';
import { Text, TextProps } from 'react-native';

import { styles } from './styles';

type TextPostLocationProps = TextProps & {
    textValue: string
}

const TextPostLocation: React.FC<TextPostLocationProps> = ({ textValue }) => {
    return <Text style={styles.postLocation}>{textValue}</Text>;
}

export default TextPostLocation;