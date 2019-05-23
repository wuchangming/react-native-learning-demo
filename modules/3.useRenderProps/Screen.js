import React from 'react'
import { Text, ScrollView, View } from 'react-native'
import api from '../../utils/api'
import InfoItem from './components/InfoItem'
import Button from './components/Button'
import InfoParent from './components/InfoParent'
import Awesome5Badge from './components/Awesome5Badge'

export default class extends React.Component {
    static navigationOptions = {
        title: '3.RenderProps',
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
                    <InfoParent
                        avatarUri={userData.avatar_url}
                        renderBadge={count => {
                            return <Awesome5Badge count={count} />
                        }}
                    >
                        <InfoItem title="账号" value={userData.name} />
                        <InfoItem title="所在地区" value={userData.location} />
                        <InfoItem title="followers" value={userData.followers} />
                        <InfoItem title="following" value={userData.following} />
                        <InfoItem title="repos" value={userData.public_repos} />
                    </InfoParent>
                ) : (
                    <Text>loading...</Text>
                )}
                <Button onPress={this.updateInfo} />
            </ScrollView>
        )
    }
}
