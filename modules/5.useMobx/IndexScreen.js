import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import ListItem from '../../components/ListItem'
import { inject } from 'mobx-react'
import headerHOC from '../4.useHOC/hocs/headerHOC'

@inject('githubInfo')
@headerHOC('5.Mobx')
export default class HomeScreen extends React.Component {
    componentDidMount() {
        this.props.githubInfo.updateInfo()
    }
    routeNavigate = route => () => {
        this.props.navigation.push(route)
    }
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <ListItem title={'mobx-1'} onPress={this.routeNavigate('5-1')} />
                <ListItem title={'mobx-2'} onPress={this.routeNavigate('5-2')} />
            </ScrollView>
        )
    }
}
