import React, { useEffect, useState } from "react"
import Logo from "../../components/Logo/Logo"
import { useNavigation } from "../../hooks/useNavigation"
import { CustomButton } from "../../components/Button"
import style from "./style.module.css"
import { FaApple, FaFacebook } from "react-icons/fa6";
import { ReactComponent as GoogleIcon } from "../../assets/icons/google.svg"
import { CustomInput } from "../../components/Input"
import toast from 'react-hot-toast';
import { isUserLogin } from "../../../utils/user"
import { routes } from "../../routes"

export const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("")

    const { navigate } = useNavigation()
    
       
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }  
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }  
    const handleRememberMeCheckbox = (event) => {
        setRememberMe(event.target.checked)
    }

    const handleLogin = async () => {
        setIsSubmitting(true)
        const payload = { 
            username: email, 
            password, 
            rememberMe 
        }
        console.log({payload}, "I'm inside handleLogin" )
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        const data = await response.json()
        if (response.status >= 400) {
            toast.error(error.message);
            setError(error.message);
        } else {
            console.log("I got a login success", data)
            localStorage.setItem('user', JSON.stringify(data))
            window.location.href = routes.dashboard()
        }
        setIsSubmitting(false)
    }

    useEffect(()=>{
        const user = isUserLogin()
        if (user) {
            window.location.href = routes.dashboard()
        }
    }, [])
    return (
        <section>
            <header className={style.header}>
                <Logo />
            </header>
            <main className={style.main}>

                <CustomButton className={style.facebook} onClick={() => navigate('home')}>
                    <FaFacebook size={'1rem'} /> &nbsp;
                    Continue with Facebook
                </CustomButton>
                <CustomButton onClick={() => navigate('playlist')}>
                    <FaApple size={'1rem'} /> &nbsp; Continue with Apple
                </CustomButton>
                <CustomButton className={style.google} onClick={() => navigate('dashboard')}>
                    <GoogleIcon />
                    &nbsp;
                    Continue with Google
                </CustomButton>
                <br />
                <div className={style.divider}>
                    <span>OR</span>
                </div>
                {
                    error &&
                    <div className={style.error}>{error}</div>    
                }
                <CustomInput onChange={handleEmail} id="email" type="email" placeholder={'Email address or username'} label={'Email address or username'} />
                <CustomInput onChange={handlePassword} type="password" placeholder={'Password'} label={'Password'} />

                <a href="/forgot-password" className={style.forgot}>Forgot your password?</a>
                <div className={style.flex}>
                <div>
                    <input id="remember-me" type="checkbox" onChange={handleRememberMeCheckbox} />
                    <label htmlFor="remember-me" >Remember me</label>
                </div>
                
                <CustomButton 
                    className={style.login} 
                    onClick={handleLogin}
                    disabled={isSubmitting}
                    >
                    Login
                </CustomButton>
                </div>
                <div className={style.divider}></div>
                <br />
                <p>Don't have an account?</p>
                <CustomButton className={style.google} onClick={() => navigate('dashboard')}>
                Sign up for Spotify
                </CustomButton>
            </main>
        </section>
    )
}
