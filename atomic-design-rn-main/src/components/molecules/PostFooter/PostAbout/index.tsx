import React from 'react';
import { View, Image, Text, ImageProps } from 'react-native';

import { styles } from '../../../../pages/Feed/styles';
import PostLikedAvatar from '../../../atoms/PostLikedAvatar';
import TextLiked from '../../../atoms/TextLiked';

type PostAboutProps = {
    avatar: ImageProps,
    likes: string
}

const PostAbout: React.FC<PostAboutProps> = ({ avatar, likes }) => {
    return (
        <View style={styles.postAbout}>
            <PostLikedAvatar source={avatar} />
            <TextLiked textValue={likes} />
        </View>
    );
}

export default PostAbout;