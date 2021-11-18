import React from 'react';
import { ImageProps } from 'react-native';
import CoverImage from '../../atoms/CoverImage';


const PostImage: React.FC<ImageProps> = ({ ...rest }) => {
    return (
        <CoverImage {...rest} />
    );
}

export default PostImage;