import { useEffect, useState } from 'react'
import firebase from '../../config/firebase'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

function Signinform () {
  const [eMail, setEmail] = useState('')
  const [name, setName] = useState('')
  const [pwd, setPwd] = useState('')
  const [status, setStatus] = useState('')
  const [showSignUp, setShowSignup] = useState('')

  useEffect(() => {
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions   : [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: '/terms'
    }

    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)
    return () => {
      const ui = firebaseui.auth.AuthUI.getInstance()
      ui.delete()
    }
  }, [])

  const createUser = () => {
    try {
      if (eMail.length > 2 && name.length > 2 && pwd.length > 5) {
        firebase.auth().createUserWithEmailAndPassword(eMail, pwd)
          .then((userCredential) => {
            const user = userCredential.user
            user.updateProfile({
              displayName: name
            }).then(function () {
            // setStatus('User created! You can log in with the e-mail option.') will unmount
            // eslint-disable-next-line handle-callback-err
            }).catch(function (error) {
              setStatus('User created! But could not set user name.')
            })
          })
          .catch((error) => {
            setStatus('Something went wrong! Can\'t create user in firebase')
            // eslint-disable-next-line no-console
            console.error(error)
          })
      } else {
        setStatus('Input too short, try min 5 letters password and 2 letter name.')
      }
    } catch (error) {
      setStatus('Something went wrong!')
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  return (
    <div style={{ textAlign: 'center', margin: 'auto' }}><div><h1 style={{marginTop: '15%'}}>Tentacles!&trade;</h1></div>
      <div className="signin-field">
        <div id="firebaseui-auth-container" />
      </div><div><p style={{width: '400px', margin: 'auto', marginTop: '35px', fontWeight: 'bold'}}>If you don't have an account it will be created when you try to sign in the first time with any option above!</p>

      </div>
    </div>
  )
}

export default Signinform
