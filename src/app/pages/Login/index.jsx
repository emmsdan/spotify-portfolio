import React from "react"
import Logo from "../../components/Logo/Logo"
import { useNavigation } from "../../hooks/useNavigation"
import { CustomButton } from "../../components/Button"
import style from "./style.module.css"
import { FaApple, FaFacebook } from "react-icons/fa6";
import { ReactComponent as GoogleIcon } from "../../assets/icons/google.svg"
import { CustomInput } from "../../components/Input"
export const LoginPage = () => {
    const { url, navigate } = useNavigation()
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
                <CustomInput type="email" placeholder={'Email address or username'} label={'Email address or username'} />
                <CustomInput type="password" placeholder={'Password'} label={'Password'} />

                <a href="/forgot-password" className={style.forgot}>Forgot your password?</a>
                <div className={style.flex}>
                <div>
                    <input type="checkbox" />
                    <label>Remember me</label>
                </div>
                
                <CustomButton className={style.login} onClick={() => navigate('dashboard')}>
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