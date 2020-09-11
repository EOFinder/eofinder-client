import React from "react"
import { RegisterProvider } from "./RegisterContext"
import RegisterForm from "./RegisterForm"

const Register = () => {
    return (
        <RegisterProvider>
            <RegisterForm />
        </RegisterProvider>
    )
}

export default Register