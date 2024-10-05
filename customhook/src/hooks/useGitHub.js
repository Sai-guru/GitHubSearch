 //import React from 'react';
 // in this what I did is that , I just made the api call from github with my combo of hooks;
import { useState, useEffect } from 'react'

const useGitHub = (username) => {
    const [user, setUser] = useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect(()=> {
        const bringData = async () => {
            setLoading(true);
            try{
                const response = await fetch(`https://api.github.com/users/${username}`);
                const json = await response.json();
                setUser(json);
                console.log("got it")
        }
        catch(error){
            setError(error);
        setLoading(false);
        console.log("didn't get it")
    } 
        };
            bringData();
    },[username]);

  return {
    user,
    error,
    loading
  }
}

export default useGitHub;