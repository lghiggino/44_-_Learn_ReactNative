import React from "react";
import { StyleSheet, SafeAreaView, View, Text, FlatList } from 'react-native';
import { Swipeable } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: '#e4e4e4',
        marginLeft: 10
    },
    listItemContainer: {
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    text: {
        color: "#2a2a2a",
        fontSize: 15
    }
})

type IListItem = {
    text: string,
    onSwipeFromLeft: any,
    onRightPress: any
}

const LeftActions = () => {
    <View>
        <Text>Add to Cart</Text>
    </View>
}

const ListItem: React.FC<IListItem> = ({ text, onSwipeFromLeft, onRightPress }) => {
    return (
        <Swipeable
            renderLeftActions={LeftActions}
        >
            <Animated.View style={styles.listItemContainer}>
                <Text style={styles.text}>{text}</Text>
            </Animated.View>
        </Swipeable>

    )
}

const Separator = () => {
    return (
        <View style={styles.separator} />
    )
}

export default function SwipableScreen() {

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={quotes}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ListItem
                        {...item}
                        onSwipeFromLeft={() => { alert("swiped from left!") }}
                        onRightPress={() => { alert("pressed right!") }}
                    />
                )}
                ItemSeparatorComponent={() => <Separator />}
            />
        </SafeAreaView>
    )
}

const quotes = [
    { id: "0", text: "It's just a flesh wound." },
    { id: "1", text: "That is my leat vulnerable spot." },
    { id: "2", text: "This building has to be at lear... three times bigger than this!" },
    { id: "3", text: "I'm serious and don't call me Shirley." },
]