import React from 'react';
import { Text, TextProps } from 'react-native';

import { styles } from './styles';

type TextDescriptionProps = TextProps & {
    textValue: string
}

const TextDescription: React.FC<TextDescriptionProps> = ({ textValue }) => {
    return <Text style={styles.description}>{textValue}</Text>;
}

export default TextDescription;