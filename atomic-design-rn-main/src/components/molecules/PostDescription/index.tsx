import React from 'react';
import TextDescription from '../../atoms/TextDescription';

type PostDescriptionProps = {
    description: string
}

const PostDescription: React.FC<PostDescriptionProps> = ({ description }) => {
    return <TextDescription textValue={description} />
}

export default PostDescription;