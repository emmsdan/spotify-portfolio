import React from "react"
import Logo from "../../components/Logo/Logo"
import { useNavigation } from "../../hooks/useNavigation"
import { CustomButton } from "../../components/Button"

export const LoginPage = () => {
    const {url, navigate} = useNavigation()
    return (
        <section>
            <Logo />
            <h1>I am a {url} page</h1>
            <CustomButton onClick={()=> navigate('home')}>
                Home 
            </CustomButton>
            <CustomButton onClick={()=> navigate('playlist')}>
                Playist 
            </CustomButton>
            <CustomButton onClick={()=> navigate('dashboard')}>
                Dahb 
            </CustomButton>
            <br />
            <br />
            <br />
        </section>
    )
}