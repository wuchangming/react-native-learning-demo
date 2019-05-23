export default title => Comp => {
    Comp.navigationOptions = {
        title,
        headerStyle: {
            backgroundColor: '#05a5d1'
        }
    }
    return Comp
}
