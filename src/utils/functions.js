import React,{useState,useEffect} from 'react';
import firebase from "./firebase"
import {getDatabase,ref,set,push} from "firebase/database"

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
    const [isLoading,setIsLoading] = useState(false);
    useEffect(()=>{
        setIsLoading(true)
    },[])
    return {isLoading}
}