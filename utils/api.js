import axios from 'axios'
let i = 0
export default function(username = 'wuchangming') {
    i++
    return axios.get(`https://api.github.com/users/${username}?${i}`)
}
