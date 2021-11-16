import React from 'react';
import { Image, ImageProps } from 'react-native';

import { styles } from '../../../pages/Feed/styles';

const PostLikedAvatar: React.FC<ImageProps> = ({ ...rest }) => {
    return <Image {...rest} style={styles.lastLiked} />;
}

export default PostLikedAvatar;