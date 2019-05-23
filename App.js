import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import routeUtil from './utils/routeUtil'
import modules from './modules'
import { Provider as MobxProvider } from 'mobx-react'
import stores from './modules/5.useMobx/stores'

const AppNavigator = createStackNavigator(routeUtil(modules), {
    initialRouteName: 'home',
    headerLayoutPreset: 'center'
})

const Com = createAppContainer(AppNavigator)

export default class extends Component {
    render() {
        return (
            <MobxProvider {...stores}>
                <Com {...this.props} />
            </MobxProvider>
        )
    }
}
