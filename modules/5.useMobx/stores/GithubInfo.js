import api from '../../../utils/api'
import { action, observable } from 'mobx'

export default class {
    @observable
    loading = true

    @observable
    userData = null

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
