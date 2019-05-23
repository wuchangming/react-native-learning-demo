import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View
                style={{
                    flex: 1,
                    height: 60,
                    alignItems: 'left',
                    justifyContent: 'center',
                    backgroundColor: '#F8F9FA',
                    paddingLeft: 40
                }}
            >
                <Text style={{ fontSize: 16 }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
