import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default ({ title, value }) => {
    return (
        <View style={styles.ListItem}>
            <View style={styles.text}>
                <Text>{title}: </Text>
            </View>
            <View style={styles.text}>
                <Text>{value}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ListItem: {
        flexDirection: 'row',
        flex: 1,
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F8F9FA',
        paddingLeft: 40,
        paddingRight: 40
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})
