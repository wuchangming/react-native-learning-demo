import api from '../../../utils/api'
import { action, observable } from 'mobx'
import { Animated } from 'react-native'

export default class {
    @observable
    loading = true

    @observable
    userData = null

    @observable
    animatedV = new Animated.Value(150)

    @observable
    indexBackgroundColor = this.animatedV.interpolate({
        inputRange: [0, 150],
        outputRange: ['rgba(0,0,0,1)', 'rgba(255,255,255,1)']
    })

    @action
    changeColor = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.animatedV, {
                    toValue: 150,
                    duration: 300
                }),
                Animated.timing(this.animatedV, {
                    toValue: 0,
                    duration: 300
                })
            ])
        ).start()
    }

    @action
    updateInfo = () => {
        this.loading = true
        api().then(
            res => {
                this.userData = res.data
                this.loading = false
            },
            () => {
                this.loading = false
            }
        )
    }
}
