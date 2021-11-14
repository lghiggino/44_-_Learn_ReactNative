import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import { CommentIcon, FavoriteIcon, MessengerIcon, SaveIcon } from '../../../global/styles/icons';

import { styles } from '../../../pages/Feed/styles';

export interface IPosts {
    renderData: SinglePost[]
}

export interface SinglePost {
    id: string,
    likes: string,
    cover: any,
    description: string,
    lastLiked: any,
    postProfilePicture: any,
    postUsername: string,
    postLocation: string
}

const Posts: React.FC<IPosts> = ({ renderData }) => {
    return (
        <FlatList
            data={renderData}
            style={styles.posts}
            showsVerticalScrollIndicator={false}
            keyExtractor={post => post.id}
            renderItem={({ item }) => (
                <View style={styles.post}>
                    <View style={styles.postHeader}>
                        <Image source={item.postProfilePicture} style={styles.postAvatar} />
                        <View>
                            <Text style={styles.postUsername}>{item.postUsername}</Text>
                            <Text style={styles.postLocation}>{item.postLocation}</Text>
                        </View>
                    </View>

                    <Image source={item.cover} style={styles.cover} />

                    <View style={styles.postFooter}>
                        <View style={styles.postOptions}>
                            <View style={styles.postOptionsSide}>
                                <FavoriteIcon style={styles.postOptionsIcon} />
                                <CommentIcon style={styles.postOptionsIcon} />
                                <MessengerIcon style={styles.postOptionsIcon} />
                            </View>

                            <SaveIcon />
                        </View>

                        <View style={styles.postAbout}>
                            <Image source={item.lastLiked.avatar} style={styles.lastLiked} />
                            <Text style={styles.likes}>{item.likes}</Text>
                        </View>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                </View>
            )}
        />
    );
}

export default Posts;