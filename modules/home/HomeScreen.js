import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import ListItem from '../../components/ListItem'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'RN-Demo',
        headerStyle: {
            backgroundColor: '#05a5d1'
        }
    }
    routeNavigate = route => () => {
        this.props.navigation.push(route)
    }
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <ListItem title={'0.基础'} onPress={this.routeNavigate('0')} />
                <ListItem title={'1.组件'} onPress={this.routeNavigate('1')} />
                <ListItem title={'2.父组件'} onPress={this.routeNavigate('2')} />
                <ListItem title={'3.RenderProps'} onPress={this.routeNavigate('3')} />
                <ListItem title={'4.HOC'} onPress={this.routeNavigate('4')} />
                <ListItem title={'5.Mobx'} onPress={this.routeNavigate('5')} />
            </ScrollView>
        )
    }
}
