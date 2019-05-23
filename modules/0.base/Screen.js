import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import api from '../../utils/api'

export default class extends React.Component {
    static navigationOptions = {
        title: '0.基础',
        headerStyle: {
            backgroundColor: '#05a5d1'
        }
    }
    state = {
        userData: null,
        loading: false
    }
    updateInfo = () => {
        this.setState({
            loading: true
        })
        api().then(
            res => {
                this.setState({
                    userData: { ...res.data },
                    loading: false
                })
            },
            () => {
                this.setState({
                    loading: false
                })
            }
        )
    }
    componentDidMount() {
        this.updateInfo()
    }
    render() {
        const userData = this.state.userData
        const display = userData && this.state.loading === false

        return (
            <ScrollView style={{ flex: 1 }}>
                {display ? (
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <View style={styles.imgContainer}>
                                <Image
                                    style={{
                                        width: 50,
                                        height: 50
                                    }}
                                    source={{ uri: userData.avatar_url }}
                                />
                            </View>
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>4</Text>
                            </View>
                        </View>
                        <View style={styles.ListItem}>
                            <View style={styles.text}>
                                <Text>账号: </Text>
                            </View>
                            <View style={styles.text}>
                                <Text>{userData.name}</Text>
                            </View>
                        </View>

                        <View style={styles.ListItem}>
                            <View style={styles.text}>
                                <Text>所在地区: </Text>
                            </View>
                            <View style={styles.text}>
                                <Text>{userData.location}</Text>
                            </View>
                        </View>

                        <View style={styles.ListItem}>
                            <View style={styles.text}>
                                <Text>followers: </Text>
                            </View>
                            <View style={styles.text}>
                                <Text>{userData.followers}</Text>
                            </View>
                        </View>

                        <View style={styles.ListItem}>
                            <View style={styles.text}>
                                <Text>following: </Text>
                            </View>
                            <View style={styles.text}>
                                <Text>{userData.following}</Text>
                            </View>
                        </View>
                    </View>
                ) : (
                    <Text>loading...</Text>
                )}
                <TouchableOpacity onPress={this.updateInfo}>
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
                        <Text style={{ fontSize: 16, color: '#FFF' }}>刷新</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }
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
