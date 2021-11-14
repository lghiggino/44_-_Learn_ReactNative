import React from 'react';
import { View, FlatList, Image, Text } from 'react-native';

import { styles } from '../../../pages/Feed/styles';

export interface IStories {
    renderData: any[]
}

const Stories: React.FC<IStories> = ({ renderData }) => {
    return (
        <View style={styles.stories}>
            <FlatList
                data={renderData}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.profiles}
                keyExtractor={profile => profile.id}
                renderItem={({ item }) => (
                    <View style={styles.profile}>
                        <Image source={item.avatar} />
                        <Text style={styles.username}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
}

export default Stories;