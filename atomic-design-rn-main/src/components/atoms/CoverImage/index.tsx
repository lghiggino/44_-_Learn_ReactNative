import React from 'react';
import { Image, ImageProps } from 'react-native';

import { styles } from './styles';

const CoverImage: React.FC<ImageProps> = ({ ...rest }) => {
    return <Image {...rest} style={styles.cover} />;
}

export default CoverImage;