import React from 'react';
import { View, Image, Text, ImageProps } from 'react-native';

import { styles } from '../../../pages/Feed/styles';

type PostHeaderProps = {
    postProfilePicture: ImageProps
    postUsername: string,
    postLocation: string
}

const PostHeader: React.FC<PostHeaderProps> = ({ postProfilePicture, postUsername, postLocation }) => {
    return (
        <View style={styles.postHeader}>
            <Image source={postProfilePicture} style={styles.postAvatar} />
            <View>
                <Text style={styles.postUsername}>{postUsername}</Text>
                <Text style={styles.postLocation}>{postLocation}</Text>
            </View>
        </View>
    );
}

export default PostHeader;