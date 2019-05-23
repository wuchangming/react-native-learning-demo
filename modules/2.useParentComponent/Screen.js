import React from 'react'
import { Text, ScrollView } from 'react-native'
import api from '../../utils/api'
import InfoItem from './components/InfoItem'
import Button from './components/Button'
import InfoParent from './components/InfoParent'

export default class extends React.Component {
    static navigationOptions = {
        title: '2.父组件',
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
                    <InfoParent avatarUri={userData.avatar_url}>
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
