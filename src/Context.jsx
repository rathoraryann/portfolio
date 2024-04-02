import React, { useContext, useEffect, useReducer } from "react";
import  reducer  from './Reducer';

const AppContext = React.createContext();

const initialState ={
    name: "",
    image: "",
    services: [],
}

const API = "https://thapareactapi.up.railway.app/";


const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState)

    const updateHomePage = () =>{
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "Aryan",
                image: "attachment_140701542.jpg"
            }
        })
    }
    
    const updateAboutPage = () =>{
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                name: "Aryan",
                image: "#"
            }
        })
    }

    // to get the api data 
    const getServices = async (url) =>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            dispatch({type: "GET_SERVICES" , payload: data})
        }catch(error){
            console.log(error);
        }
    }

    // to call api 
    useEffect (() =>{
        getServices(API)
    }, [])

    return <AppContext.Provider value={{...state, updateHomePage, updateAboutPage}}>{children}</AppContext.Provider>
}

// GLOBAL CUSTOM  HOOK

const useGlobalContext = () =>{
    return useContext(AppContext);

}

export {AppContext, AppProvider, useGlobalContext}