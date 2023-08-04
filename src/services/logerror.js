import { fbApp, fbAuth, fbDB } from '../config/firebase'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'

function LogError (error, info) {
  // eslint-disable-next-line no-console
  console.error(error)
  // eslint-disable-next-line no-console
  console.error(info)

  const log = async() => {
    await setDoc(doc(fbDB, 'errorLog', 'LA'), {
    name   : 'Los Angeles',
    state  : 'CA',
    country: 'USA'
  })
}


  log().then(() => console.log('then'))

/*

  firebase.database().ref('/serviceCycle/timestampNow').set(firebase.database.ServerValue.TIMESTAMP).then(() => {
    firebase.database().ref('/serviceCycle/timestampNow').once('value')
      .then((snapshot) => {
        const timestampNow = snapshot.val()
        const now = new Date(timestampNow)
        const friendlyTime = now.getFullYear() + '-' + (now.getMonth()+1) + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + ' ' + now.getMilliseconds()
        // eslint-disable-next-line no-console
        console.log(friendlyTime)
        firebase.database().ref().child('errorLog/' + friendlyTime).set(
          {
            error: error.toString(),
            info : {
              componentStack: info.componentStack,
              stackMsg      : error.stack
            },
            timeStamp: firebase.database.ServerValue.TIMESTAMP
          }
        )
      })
  })*/
}

export default LogError