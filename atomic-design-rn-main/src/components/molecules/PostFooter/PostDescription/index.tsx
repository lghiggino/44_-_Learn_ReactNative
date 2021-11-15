import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../../../pages/Feed/styles';

type PostDescriptionProps = {
    description: string
}

const PostDescription: React.FC<PostDescriptionProps> = ({ description }) => {
    return <Text style={styles.description}>{description}</Text>;
}

export default PostDescription;