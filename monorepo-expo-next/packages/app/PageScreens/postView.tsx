import React from 'react';
import { View, Text, H1, P, FlatList } from 'dripsy'
import { theme } from '../theme'

// import { Container } from './styles';

const data = [
    {
        id: 1,
        title: "article 1",
        author: "Leonardo"
    },
    {
        id: 2,
        title: "title 2",
        author: "Joao"
    },
    {
        id: 3,
        title: "article 3",
        author: "Helaine"
    },

    {
        id: 4,
        title: "title 4",
        author: "Leon"
    },
    {
        id: 5,
        title: "article 5",
        author: "Adriano"
    },
]

const Item = ({ title, author }) => (
    <View >
        <Text >{title}</Text>
        <Text style={{ fontSize: 12 }}>{author}</Text>
    </View>
);

type IArticles = {
    id: number,
    title: string,
    author: string
}

const PageScreens: React.FC = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} author={item.author} />
    );

    return (
        <View>
            <FlatList
                data={data as IArticles[]}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
            />
        </View>
    )
}

export default PageScreens;