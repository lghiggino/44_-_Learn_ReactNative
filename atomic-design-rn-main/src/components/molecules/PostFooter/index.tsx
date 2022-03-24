import React from 'react';
import { View } from 'react-native';
import PostOptions from './PostOptions';

import { styles } from '../../../pages/Feed/styles';
import PostAbout from './PostAbout';
import PostDescription from '../PostDescription';

type PostFooterProps = {
    lastLiked: any,
    likes: string,
    description: string
}

const PostFooter: React.FC<PostFooterProps> = ({ lastLiked, likes, description }) => {
    return (
        <View style={styles.postFooter}>
            <PostOptions />

            <PostAbout avatar={lastLiked} likes={likes} />

            <PostDescription description={description} />
        </View>
    );
}

export default PostFooter;