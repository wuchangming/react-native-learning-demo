import React from 'react'
import { Animated } from 'react-native'
import ListItem from '../../components/ListItem'
import { inject, observer } from 'mobx-react'
import headerHOC from '../4.useHOC/hocs/headerHOC'

@inject('githubInfo2')
@headerHOC('6.testNavigation')
@observer
export default class HomeScreen extends React.Component {
    componentDidMount() {
        this.props.githubInfo2.updateInfo()
    }
    routeNavigate = route => () => {
        this.props.navigation.push(route)
    }
    render() {
        return (
            <Animated.ScrollView
                style={{
                    flex: 1,
                    backgroundColor: this.props.githubInfo2.indexBackgroundColor
                }}
            >
                <ListItem title={'mobx-1'} onPress={this.routeNavigate('6-1')} />
                <ListItem title={'mobx-2'} onPress={this.routeNavigate('6-2')} />
            </Animated.ScrollView>
        )
    }
}
