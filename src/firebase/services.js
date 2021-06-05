import { myFirebase } from "."

export const addData = (dataInput, entity) => {
    myFirebase.database().ref(`FirebaseIOT/${entity}/`).set(dataInput)
}

export const readData = (ref) => {
    return new Promise((resolve, reject) => {
        const onError = error => reject(error);
        const onData = snap => resolve(snap.val());

        ref.on("value", onData, onError);
    });
}

export const updateData = (id, entity, dataInput) => {
    myFirebase.database().ref(`FirebaseIOT/${entity}/${id}`).set(dataInput)
}

export const deleteData = (id, entity) => {
    myFirebase.database().ref(`FirebaseIOT/${entity}/${id}`).set(null)
}
