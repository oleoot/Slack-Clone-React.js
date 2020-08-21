import React from 'react'
import './Login.css'
import { Button } from "@material-ui/core"
import { auth, provider } from '../../firebase'
import { useStateValue } from '../../stateProvider'
import { actionTypes } from '../../reducer'

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => {
                alert(error.message)
            })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://www.kansasfest.org/wp-content/uploads/slack.png" alt="" />

                <h1>Sign in to Oleg Kuts Slack Clone</h1>
                <p>http://oleg-kuts.netlify.com/</p>
                <Button className="login__button" onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
