import React, { Component } from 'react'
import { Animated } from 'react-native'
import hoistNonReactStatic from 'hoist-non-react-statics'

export default direction => Comp => {
    class Enhancer extends Component {
        translateX = new Animated.Value(direction === 'right' ? -200 : 200)
        componentDidMount() {
            Animated.timing(this.translateX, { toValue: 0, duration: 300 }).start()
        }
        render() {
            return (
                <Animated.View
                    style={{
                        transform: [{ translateX: this.translateX }]
                    }}
                >
                    <Comp {...this.props} />
                </Animated.View>
            )
        }
    }
    // 拷贝 static 方法
    hoistNonReactStatic(Enhancer, Comp)

    return Enhancer
}
