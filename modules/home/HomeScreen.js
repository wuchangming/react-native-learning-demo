import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import ListItem from '../../components/ListItem'

export default class HomeScreen extends React.Component {
    routeNavigate = route => () => {
        this.props.navigation.push(route)
    }
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <ListItem title={'基础'} onPress={this.routeNavigate('/0')} />
            </ScrollView>
        )
    }
}
