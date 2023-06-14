import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = null
        this._admin = ''
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    setAdmin(role) {
        this._admin = role
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
    get admin() {
        return this._admin
    }
}