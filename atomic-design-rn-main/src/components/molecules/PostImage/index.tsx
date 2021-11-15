import React from 'react';
import { Image, ImageProps } from 'react-native';

import { styles } from '../../../pages/Feed/styles';
import CoverImage from '../../atoms/CoverImage';


const PostImage: React.FC<ImageProps> = ({ ...rest }) => {
    return (
        <CoverImage {...rest} />
    );
}

export default PostImage;