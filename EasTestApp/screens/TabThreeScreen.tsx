import React from 'react';
import { View, Text } from 'react-native'
import Draggable from 'react-native-draggable';

export default function TabThreeScreen() {
    return (
        <View >
            <Draggable
                key="A"
                x={75}
                y={100}
                renderSize={56}
                renderColor='black'
                renderText='A'
                isCircle
                shouldReverse
                onShortPressRelease={() => alert('touched!!')}
            />
            <Draggable
                key="B"
                x={200}
                y={300}
                renderColor='red'
                renderText='B'
                onDragRelease={(event) => { console.log(event) }}
            />
            <Draggable />
            <Draggable x={50} y={50}>
                <View>
                    <Text>A</Text>
                </View>
            </Draggable>
        </View>
    );
}
