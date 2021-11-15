import React from 'react';
import { View, Image, Text, ImageProps } from 'react-native';

import { styles } from '../../../../pages/Feed/styles';

type PostAboutProps = {
    avatar: ImageProps,
    likes: string
}

const PostAbout: React.FC<PostAboutProps> = ({ avatar, likes }) => {
    return (
        <View style={styles.postAbout}>
            <Image source={avatar} style={styles.lastLiked} />
            <Text style={styles.likes}>{likes}</Text>
        </View>
    );
}

export default PostAbout;