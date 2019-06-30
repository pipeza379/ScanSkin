import firebase from '../../firebaseDB'

export function getAllProduct() {
    let database = firebase.database().ref('initial');
    database.once('value', snapshot => {
        let data = snapshot.val()
        console.log("OK")
        return data
    })
}
