import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import api from '../../utils/api'
import InfoItem from './components/InfoItem'
import Button from './components/Button'

export default class extends React.Component {
    static navigationOptions = {
        title: '1.组件',
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
                        <InfoItem title="账号" value={userData.name} />
                        <InfoItem title="所在地区" value={userData.location} />
                        <InfoItem title="followers" value={userData.followers} />
                        <InfoItem title="following" value={userData.following} />
                    </View>
                ) : (
                    <Text>loading...</Text>
                )}
                <Button onPress={this.updateInfo} />
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
