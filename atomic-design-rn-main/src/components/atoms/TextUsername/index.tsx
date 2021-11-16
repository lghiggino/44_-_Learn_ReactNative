import React from 'react';
import { Text, TextProps } from 'react-native';

import { styles } from '../../../pages/Feed/styles';

type TextUsernameProps = TextProps & {
    textValue: string
}

const TextUsername: React.FC<TextUsernameProps> = ({ textValue }) => {
    return <Text style={styles.postUsername}>{textValue}</Text>;
}

export default TextUsername;