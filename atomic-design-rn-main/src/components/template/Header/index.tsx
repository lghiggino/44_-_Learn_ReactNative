import React from 'react';
import { View } from 'react-native';
import { CameraIcon, IgtvIcon, LogoIcon, MessengerIcon } from '../../../global/styles/icons';

import { styles } from '../../../pages/Feed/styles';

const Header: React.FC = () => {
    return (
        <View style={styles.header}>
            <View style={styles.headerSide}>
                <CameraIcon />
            </View>

            <LogoIcon />

            <View style={styles.headerSide}>
                <IgtvIcon />
                <MessengerIcon style={styles.messengerIcon} />
            </View>
        </View>
    );
}

export default Header;