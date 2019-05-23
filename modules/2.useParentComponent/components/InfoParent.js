import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default ({ avatarUri, children }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.imgContainer}>
                    <Image
                        style={{ width: 50, height: 50, borderRadius: 5 }}
                        source={{ uri: avatarUri }}
                    />
                </View>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{React.Children.count(children)}</Text>
                </View>
            </View>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1
    },
    badge: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        width: 30,
        height: 30,
        borderRadius: 15
    },
    badgeText: {
        color: '#FFF',
        fontWeight: 'bold'
    }
})
