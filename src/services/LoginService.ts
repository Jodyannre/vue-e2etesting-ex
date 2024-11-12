import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default class LoginService {

    async login(email:string, password:string): Promise<any>{
        const auth = getAuth()
        try{
            const res = await signInWithEmailAndPassword(auth, email, password)
            const user = await res.user.getIdTokenResult()
            //alert("Login success")
            return {result:true, token:user.token}
        }catch(e){
            //alert("Login failed")
            return {result:false, token:null}
        }
    }
}