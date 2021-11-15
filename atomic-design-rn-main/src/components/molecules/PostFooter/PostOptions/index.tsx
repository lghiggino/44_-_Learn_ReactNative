import React from 'react';
import { View } from 'react-native';
import { CommentIcon, FavoriteIcon, MessengerIcon, SaveIcon } from '../../../../global/styles/icons';

import { styles } from '../../../../pages/Feed/styles';

const PostOptions: React.FC = () => {
    return (
        <View style={styles.postOptions}>
            <View style={styles.postOptionsSide}>
                <FavoriteIcon style={styles.postOptionsIcon} />
                <CommentIcon style={styles.postOptionsIcon} />
                <MessengerIcon style={styles.postOptionsIcon} />
            </View>

            <SaveIcon />
        </View>
    );
}

export default PostOptions;