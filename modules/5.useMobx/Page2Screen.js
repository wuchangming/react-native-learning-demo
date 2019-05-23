import React from 'react'
import { Text, ScrollView, View } from 'react-native'
import api from '../../utils/api'
import InfoItem from './components/InfoItem'
import Button from './components/Button'
import InfoParent from './components/InfoParent'
import Awesome5Badge from './components/Awesome5Badge'
import headerHOC from './hocs/headerHOC'
import slideAnimatedHOC from './hocs/slideAnimatedHOC'
import { observer,inject } from 'mobx-react';

const AnimatedRight = slideAnimatedHOC('right')(InfoItem)
const AnimatedLeft = slideAnimatedHOC('left')(InfoItem)

@inject('githubInfo')
@headerHOC('5.Mobx')
@observer
export default class extends React.Component {
    render() {
        const githubInfo = this.props.githubInfo
        const userData = githubInfo.userData
        const display = userData && githubInfo.loading === false
        return (
            <ScrollView style={{ flex: 1 }}>
                {display ? (
                    <InfoParent
                        avatarUri={userData.avatar_url}
                        renderBadge={count => {
                            return <Awesome5Badge count={count} />
                        }}
                    >
                        <AnimatedRight title="followers" value={userData.followers} />
                        <AnimatedLeft title="following" value={userData.following} />
                        <AnimatedRight title="repos" value={userData.public_repos} />
                    </InfoParent>
                ) : (
                    <Text>loading...</Text>
                )}
                <Button onPress={githubInfo.updateInfo} />
            </ScrollView>
        )
    }
}
