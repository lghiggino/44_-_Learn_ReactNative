import React from 'react';
import { Image, ImageProps } from 'react-native';

import { styles} from '../../../pages/Feed/styles';

const PostAvatar: React.FC<ImageProps> = ({...rest}) => {
  return <Image {...rest} style={styles.postAvatar} />;
}

export default PostAvatar;