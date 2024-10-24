import { useEffect, useState } from "react";


export const useGetData = () => {

    const [ clients, setClients ] = useState([])
    let username = 'coalition';
    let password = 'skills-test';
    let auth = btoa(`${username}:${password}`);
    const fetchList = async () => {
        try {
            const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
              headers: {
                  'Authorization': `Basic ${auth}`
              }
          });
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            setClients(json)
          } catch (error) {
            console.error(error.message);
          }
    }
    useEffect(() => {
        fetchList()
    },[])

    return { clients }
  }