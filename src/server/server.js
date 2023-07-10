import axios from "axios";

const general = "http://127.0.0.1:8080"

const server = {
    getLink(result) {
        return axios.get(general + "/getLink", {
            params: {
                result: result,
            }
        })
    },
    getResult(initial, only_result) {
        return axios.get(general + "/getResult", {
            params: {
                initial: initial,
                only_result: only_result
            }
        })
        
    }
}

export {server}