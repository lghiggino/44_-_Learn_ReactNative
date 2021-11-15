import React from 'react';
import { Text } from 'react-native';

import { styles } from '../../../pages/Feed/styles';
import TextDescription from '../../atoms/TextDescription';

type PostDescriptionProps = {
    description: string
}

const PostDescription: React.FC<PostDescriptionProps> = ({ description }) => {
    return <TextDescription textValue={description} />
}

export default PostDescription;