import React from 'react';
import { FlatList } from 'react-native';

import { styles } from '../../../pages/Feed/styles';
import Post, { IPost } from '../../organisms/Post';
export interface IPosts {
    renderData: IPost[]
}

const PostsList: React.FC<IPosts> = ({ renderData }) => {
    return (
        <FlatList
            data={renderData}
            style={styles.posts}
            showsVerticalScrollIndicator={false}
            keyExtractor={post => post.id}
            renderItem={({ item }) => <Post data={item}/>}
        />
    );
}

export default PostsList;