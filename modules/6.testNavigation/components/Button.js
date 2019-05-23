import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
export default ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View
                style={{
                    flex: 1,
                    height: 40,
                    alignItems: 'center',
                    borderRadius: 3,
                    justifyContent: 'center',
                    backgroundColor: '#05a5d1',
                    margin: 10
                }}
            >
                <Text style={{ fontSize: 16, color: '#FFF' }}>{title ? title : '刷新'}</Text>
            </View>
        </TouchableOpacity>
    )
}
