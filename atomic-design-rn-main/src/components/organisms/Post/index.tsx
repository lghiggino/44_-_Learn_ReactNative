import React from 'react';
import { View, ImageProps } from 'react-native';

import PostHeader from '../../molecules/PostHeader';

import { styles } from '../../../pages/Feed/styles';
import PostFooter from '../../molecules/PostFooter';
import PostImage from '../../molecules/PostImage';
export interface IPost {
    id: string,
    likes: string,
    cover: ImageProps,
    description: string,
    lastLiked: IProfile,
    postProfilePicture: any,
    postUsername: string,
    postLocation: string
}

export interface IProfile {
    id?: string,
    name?: string,
    avatar?: any
}

type Props = {
    data: IPost
}

const Post: React.FC<Props> = ({ data }) => {
    return (
        <View style={styles.post}>
            <PostHeader postProfilePicture={data.postProfilePicture} postUsername={data.postUsername} postLocation={data.postLocation} />

            <PostImage source={data.cover} />

            <PostFooter lastLiked={data.lastLiked.avatar} likes={data.likes} description={data.description} />
        </View>
    );
}

export default Post;