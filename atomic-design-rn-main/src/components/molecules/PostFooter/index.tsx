import React from 'react';
import { View, Image, Text } from 'react-native';
import { CommentIcon, FavoriteIcon, MessengerIcon, SaveIcon } from '../../../global/styles/icons';
import { IProfile2 } from '../../organisms/Post';

import { styles } from '../../../pages/Feed/styles';

type PostFooterProps = {
    lastLiked: IProfile2,
    likes: string,
    description: string
}

const PostFooter: React.FC<PostFooterProps> = ({ lastLiked, likes, description }) => {
    return (
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
                <Image source={lastLiked.avatar} style={styles.lastLiked} />
                <Text style={styles.likes}>{likes}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
}

export default PostFooter;