import { fbApp, fbAuth, fbDB } from './config/firebase'
import { useState, useEffect } from 'react'
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'
//import gameboardimage from './media/gameboard.jpg'
import './App.css'
//import Main from './Main'
import { ErrorBoundary } from 'react-error-boundary'
import LogError from './services/logerror'
//import useSound from 'use-sound'
//import ErrorSound from './media/error.mp3'

function App () {

  const [user, setUser] = useState(fbAuth.currentUser)

  useEffect(() => {
    onAuthStateChanged(fbAuth, (data) => {
      if (data) {
        setUser(fbAuth.currentUser)
      } else {
        setUser(null)
      }
    })
  })

  const logInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(fbAuth, provider)
    .then(()=>{
      setUser(fbAuth.currentUser)
    })
    .catch(()=>{
      setUser(null)
    })
  }

  const logInWithGithub = () => {
    const provider = new GithubAuthProvider()
    signInWithPopup(fbAuth, provider)
    .then(()=>{
      setUser(fbAuth.currentUser)
    })
    .catch(()=>{
      setUser(null)
    })
  }

  const logOut = () => {
    signOut(fbAuth)
    setUser(null)
  }

  const logUser = () => {
    console.log(fbAuth.currentUser)
    console.log(user)
  }

  const ErrorFallback = ({ error, resetErrorBoundary }) => {
    // eslint-disable-next-line no-console
    console.log(error)
    //playError()
    return (
      <div role="alert">
        <button onClick={resetErrorBoundary}>Try again</button>
        <p>Something went wrong (this error has been logged):</p>
        <pre>{error.message}</pre>
      </div>
    )
  }

  const ErrorHandler = (error, info) => {
    LogError(error, info)
  }

  const MainApp = user && fbAuth.currentUser ? <div>Logged in</div> : <div>NOT logged in</div>

  return (
    <div className="App">
      <button onClick={logInWithGoogle}>
        Click to login with Google
      </button>
      <button onClick={logInWithGithub}>
        Click to login with Github
      </button>
      <button onClick={logOut}>
        Click to log out
      </button>
      <button onClick={logUser}>
        PrintUserData
      </button>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={ErrorHandler} onReset={() => { location.reload() }}>
        <MainApp />
      </ErrorBoundary>
    </div>
  )

  /*
  const [user, loadingUser, errorUser] = useAuthState(firebaseApp.auth())
  //const [playError] = useSound(ErrorSound)


  const ErrorFallback = ({ error, resetErrorBoundary }) => {
    // eslint-disable-next-line no-console
    console.log(error)
    //playError()
    return (
      <div role="alert">
        <button onClick={resetErrorBoundary}>Try again</button>
        <p>Something went wrong (this error has been logged):</p>
        <pre>{error.message}</pre>
      </div>
    )
  }

  const ErrorHandler = (error, info) => {
    LogError(error, info)
  }

  if (loadingUser) {
    return (
      <div className="mainContainer">
        <div className="gameBoard">
          GameBoard
        </div>
        <div className="statusBar">Loading...</div>
      </div>
    )
  }

  if (errorUser) {
    return (
      <div className="mainContainer">
        <div className="gameBoard">
          GameBoard
        </div>
        <div className="statusBar">Cant connect please reload page</div>
        <button onClick={() => { location.reload() }}>Try again</button>
      </div>
    )
  }

  if (user && !loadingUser && !errorUser && _.has(user, 'uid')) {
    return (
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={ErrorHandler} onReset={() => { location.reload() }}>
        <div>MAIN</div>
      </ErrorBoundary>)
  }

  return (<Signinform />)
  */
}

export default App