import React from 'react'
import { View, Text } from 'react-native'

export default ({ count }) => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: count === 5 ? 'black' : 'red',
                width: 30,
                height: 30,
                borderRadius: count === 5 ? 5 : 15
            }}
        >
            <Text
                style={{
                    color: '#FFF',
                    fontWeight: 'bold'
                }}
            >
                {count}
            </Text>
        </View>
    )
}
