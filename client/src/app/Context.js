import React, {createContext, useState, Children} from 'react'
const Context = createContext()
import Axios from 'axios'


const Provider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")


    const val =  {
        isAuth,
        email,
        password,
        changeEmail: (e) => {
            console.log()
            setEmail(e.target.value)
        } ,
        changePassword: (e) => {
            setpassword(e.target.value)
        },
        submit: (e) => {
            e.preventDefault()
            Axios('/api/users/login',{
                method: 'POST',
                data: {email, password}
            })
            .then(res => { 
                if(res.data.status === "success") {
                    setIsAuth(!isAuth)
                }else{
                    const error = new Error(res.error)
                    console.error(err)
                    console.log('ee')
                    throw error
                }
            })
            .catch(err => {
                console.error(err)
                alert('Error iniciando sesión')
            });
        }
    }

    return (
        <Context.Provider value={val} >
            {children}
        </Context.Provider>
    )
}

export default {
    Provider,
    Consumer: Context.Consumer
}