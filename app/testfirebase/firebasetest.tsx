"use client";

import { useContext } from "react"
import { FirebaseContext } from "../../contexts/firebase"
import { setDoc, doc, getFirestore, collection, getDoc } from "firebase/firestore";

export default async function FirebaseTest() {

    return (
        <p>{await getStuff()}</p>
    )
}

export async function getStuff() {
    const app = useContext(FirebaseContext);
    if (app != null) {
        const db = getFirestore(app);

        const docRef = doc(collection(db, "test"), "tester")

        let data = (await getDoc(docRef)).data();
        if (data === undefined) {
            await setDoc(docRef, {'time': new Date().getTime()}, {'merge': false})
            data = (await getDoc(docRef)).data();
        }

        const time = data === undefined ? null : data['time'];

        return time;
    }
}