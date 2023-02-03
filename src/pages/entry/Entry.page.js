
import React, { useState, useEffect } from "react";
import { Login } from '../../components/login/Login.comp'
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp'

import './entry.style.css'

export const Entry = () => {

    const [formLoad, setFormLoad] = useState("login")

    const formSwitcher = formType => {
        setFormLoad(formType);
    };
    useEffect(()=>{
        console.log(formLoad)

    })
    return (
        <div className="entry-page bg-info">
            <div className="form-box">
                
                {formLoad === "login" && <Login  formSwitcher={formSwitcher} />}
                {formLoad ==="reset" && <ResetPassword formSwitcher={formSwitcher} />}
            </div>
            
        </div>
    )
}

