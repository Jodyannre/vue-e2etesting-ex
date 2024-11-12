import { defineStore } from "pinia"
import { ref } from "vue"
import LoginService from "@/services/LoginService"


export const useAuth = defineStore('useAuth',{
    state: () => {
        return {
            is_auth: ref(false),
            token: ref('')
        }
    },
    actions: {
        init(){
            const token = localStorage.getItem('token')
            if (token) {
                this.is_auth = true
                this.token = JSON.stringify(token)
            } else {
                this.is_auth = false
                this.token = ''
            }
        } ,
        async login(email:string, password:string): Promise<boolean>{
            const loginService: any = new LoginService()
            const {result,token} = await loginService.login(email, password)
            if (result) {
                this.is_auth = true
                this.token = token
                localStorage.setItem('token', token)
            }
            else {
                this.is_auth = false
                this.token = ''
            }
            return result
        },
        logOut(){
            this.is_auth = false
            this.token = ''
            localStorage.removeItem('token')
        }

    }
})