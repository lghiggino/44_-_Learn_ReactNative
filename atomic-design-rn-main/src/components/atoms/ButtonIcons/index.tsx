import React from 'react';
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { styles } from '../../../pages/Feed/styles';

type ButtonIconsProps = BorderlessButtonProps & {
    icon: React.FC<SvgProps>
}

const ButtonIcons: React.FC<ButtonIconsProps> = ({ icon: Icon, ...rest }) => {
    return (
        <BorderlessButton {...rest} style={styles.postOptionsIcon}>
            <Icon />
        </BorderlessButton>
    );
}

export default ButtonIcons;