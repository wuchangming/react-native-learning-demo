import { createStackNavigator, createAppContainer } from 'react-navigation'
import routeUtil from './utils/routeUtil'
import modules from './modules'

const AppNavigator = createStackNavigator(routeUtil(modules), {
    initialRouteName: '4',
    headerLayoutPreset: 'center'
})

export default createAppContainer(AppNavigator)
