import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (email, password, name, surname, middleName, phone) => {
    const {data} = await $host.post('api/registration', {email, password, name, surname, middleName, phone})
    return {
        token: jwtDecode(data.token),
        userId: data.id
    }
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/login', {email, password})
    localStorage.setItem("token", data.token)
    return {
        token: jwtDecode(data.token),
        userId: data.id
    }
}
export const check = async () => {
    const {data} = await $authHost.post('api/auth')
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token)
}

