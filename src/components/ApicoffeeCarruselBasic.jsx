
import axios from 'axios'; 
import { useState } from 'react';
import { useEffect } from 'react';

export const ApicoffeeCarruselBasic = () => {

 const [cofeeList, setCoffeeList]= useState([]);

 useEffect(() => {

    const fetchData = async () => {
        try {

            const response = await axios.get('https://api.sampleapis.com/coffee/hot');
            setCoffeeList(response.data);
            console.log(cofeeList);

        } catch (error) {
            console.log('Error al recuperar los datos de la API', error);
        }
    };
    
    fetchData();

 }, []);

     return (
    <div>ApicoffeeCarruselBasic</div>
  );
};
