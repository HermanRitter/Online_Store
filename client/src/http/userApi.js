import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode"
import axios from "axios";

export const registration = async (email, password, role) => {
    const {data} = await $host.post('api/user/registration', {email, password, role})
    localStorage.setItem('token', data.tokens.accessToken)
    return jwt_decode(data.tokens.accessToken)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    console.log(data)
    localStorage.setItem('token', data.tokens.accessToken)
    return jwt_decode(data.tokens.accessToken)
}

export const logout = async () => {
    const response = await $host.post('api/user/logout', )
    localStorage.removeItem('token')
}

export const check = async () => {
        const {data} = await $authHost.get('api/user/auth')
    console.log(data)
        localStorage.setItem('token', data.tokens.accessToken)
        return jwt_decode(data.tokens.accessToken)
}

export const refresh = async () => {
    try {
        const {data} = await $authHost.get('api/user/refresh')
        console.log(data)
        localStorage.setItem('token', data.tokens.accessToken)
        return jwt_decode(data.tokens.accessToken)
    } catch (e) {
        console.log(e)
    }
}