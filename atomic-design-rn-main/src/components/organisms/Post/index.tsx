import React from 'react';
import { View, Image, Text, ImageProps } from 'react-native';
import { CommentIcon, FavoriteIcon, MessengerIcon, SaveIcon } from '../../../global/styles/icons';

import { styles } from '../../../pages/Feed/styles';

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
    id: string,
    name: string,
    avatar: ImageProps
}

type Props = {
    data: IPost
}

const Post: React.FC<Props> = ({ data }) => {
    return (
        <View style={styles.post}>
            <View style={styles.postHeader}>
                <Image source={data.postProfilePicture} style={styles.postAvatar} />
                <View>
                    <Text style={styles.postUsername}>{data.postUsername}</Text>
                    <Text style={styles.postLocation}>{data.postLocation}</Text>
                </View>
            </View>

            <Image source={data.cover} style={styles.cover} />

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
                    <Image source={data.lastLiked.avatar} style={styles.lastLiked} />
                    <Text style={styles.likes}>{data.likes}</Text>
                </View>
                <Text style={styles.description}>{data.description}</Text>
            </View>
        </View>
    );
}

export default Post;