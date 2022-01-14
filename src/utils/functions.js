import React,{useState,useEffect} from 'react';
import firebase from "./firebase"
import {getDatabase,ref,set,push,onValue,query,remove,child,update} from "firebase/database"
import {successNote} from "./customToastify"

export const addInfo=(info)=>{
    const db = getDatabase()
    const userRef = ref(db,"contact");
    const newUserRef = push(userRef)
    set(newUserRef,{
        userName : info.userName,
        phoneNumber : info.phoneNumber,
        email : info.email
    })
    successNote("Successfully Added")
}

export const useFetch =()=>{
    const [contacts,setContacts] = useState()
    const [isLoading,setIsLoading] = useState(false);
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

export const deleteContact = (id)=>{

  const db = getDatabase()
  remove(ref(db,"contact/"+id))
  successNote("Successfully Deleted")

}

export const editContact = (info) => {
  const db = getDatabase();
  const newUserKey = push(child(ref(db), "contact/")).key;
  const updates = {};
  updates["contact/" + newUserKey] = info;
  return update(ref(db), updates);
};