import React from 'react'
import { Text, ScrollView } from 'react-native'
import InfoItem from './components/InfoItem'
import Button from './components/Button'
import InfoParent from './components/InfoParent'
import Awesome5Badge from './components/Awesome5Badge'
import headerHOC from './hocs/headerHOC'
import slideAnimatedHOC from './hocs/slideAnimatedHOC'
import { observer, inject } from 'mobx-react';

const AnimatedRight = slideAnimatedHOC('right')(InfoItem)
const AnimatedLeft = slideAnimatedHOC('left')(InfoItem)

@inject('githubInfo')
@headerHOC('5-1.Mobx')
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
                        <AnimatedRight title="账号" value={userData.name} />
                        <AnimatedLeft title="所在地区" value={userData.location} />
                    </InfoParent>
                ) : (
                    <Text>loading...</Text>
                )}
                <Button onPress={githubInfo.updateInfo} />
            </ScrollView>
        )
    }
}
