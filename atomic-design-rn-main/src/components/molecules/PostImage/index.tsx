import React from 'react';
import { Image, ImageProps } from 'react-native';

import { styles } from '../../../pages/Feed/styles';

type PostImageProps = {
    cover: ImageProps
}

const PostImage: React.FC<PostImageProps> = ({cover}) => {
    return (
        <Image source={cover} style={styles.cover} />
    );
}

export default PostImage;