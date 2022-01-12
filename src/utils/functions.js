import React,{useState,useEffect} from 'react';
import firebase from "./firebase"
import {getDatabase,ref,set,push,onValue,query} from "firebase/database"

export const addInfo=(info)=>{
    const db = getDatabase()
    const userRef = ref(db,"contact");
    const newUserRef = push(userRef)
    set(newUserRef,{
        userName : info.userName,
        phoneNumber : info.phoneNumber,
        email : info.email
    })
    console.log("veri eklendi");
}

export const useFetch =()=>{
    const [contacts,setContacts] = useState()
    const [isLoading,setIsLoading] = useState();
    useEffect(() => {
      setIsLoading(true);

      const db = getDatabase();
      const userRef = ref(db, "contact");

      onValue(query(userRef), (snapshot) => {
        const contacts = snapshot.val();
        // send an array of the values in database
        const contactArray = [];
        for (let id in contacts) {
          contactArray.push({ id, ...contacts[id] });
        }
        setContacts(contactArray);
        setIsLoading(false);
      });
    }, []);
    return { isLoading, contacts };
}