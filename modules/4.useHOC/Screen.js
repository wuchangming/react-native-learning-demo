import React from 'react'
import { Text, ScrollView, View } from 'react-native'
import api from '../../utils/api'
import InfoItem from './components/InfoItem'
import Button from './components/Button'
import InfoParent from './components/InfoParent'
import Awesome5Badge from './components/Awesome5Badge'
import headerHOC from './hocs/headerHOC'
import slideAnimatedHOC from './hocs/slideAnimatedHOC';
import slideToRightAnimatedHOC from './hocs/slideToRightAnimatedHOC';

const AnimatedInfoItem = slideToRightAnimatedHOC(InfoItem)

const AnimatedRight = slideAnimatedHOC('right')(InfoItem)
const AnimatedLeft = slideAnimatedHOC('left')(InfoItem)


@headerHOC('4.HOC')
export default class extends React.Component {
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
                        <AnimatedInfoItem title="账号" value={userData.name} />
                        <AnimatedInfoItem title="所在地区" value={userData.location} />
                        <AnimatedInfoItem title="followers" value={userData.followers} />
                        <AnimatedInfoItem title="following" value={userData.following} />
                        <AnimatedInfoItem title="repos" value={userData.public_repos} />
                    </InfoParent>
                ) : (
                    <Text>loading...</Text>
                )}
                <Button onPress={this.updateInfo} />
            </ScrollView>
        )
    }
}
