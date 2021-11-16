import React from 'react';
import { View, Image, Text, ImageProps } from 'react-native';

import { styles } from '../../../pages/Feed/styles';
import PostAvatar from '../../atoms/PostAvatar';
import TextPostLocation from '../../atoms/TextPostLocation';
import TextUsername from '../../atoms/TextUsername';

type PostHeaderProps = {
    postProfilePicture: ImageProps
    postUsername: string,
    postLocation: string
}

const PostHeader: React.FC<PostHeaderProps> = ({ postProfilePicture, postUsername, postLocation }) => {
    return (
        <View style={styles.postHeader}>
            <PostAvatar source={postProfilePicture} />
            <View>
                <TextUsername textValue={postUsername}/>
                <TextPostLocation textValue={postLocation} />
            </View>
        </View>
    );
}

export default PostHeader;