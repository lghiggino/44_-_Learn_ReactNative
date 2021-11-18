import React from 'react';
import { View } from 'react-native';
import { CommentIcon, FavoriteIcon, MessengerIcon, SaveIcon } from '../../../../global/styles/icons';
import ButtonIcons from '../../../atoms/ButtonIcons';

import { styles } from './styles';

const PostOptions: React.FC = () => {
    return (
        <View style={styles.postOptions}>
            <View style={styles.postOptionsSide}>
                <ButtonIcons icon={FavoriteIcon} />
                <ButtonIcons icon={CommentIcon} />
                <ButtonIcons icon={MessengerIcon} />
            </View>

            <ButtonIcons icon={SaveIcon} />
        </View>
    );
}

export default PostOptions;