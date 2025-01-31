import React from 'react';
import {Countries, InfoOfCountries} from "./types";

const countriesFetch = async (): Promise<Countries[]> => {
    try {
        const response = await fetch("https://restcountries.com/v2/all?fields=alpha3Code,name");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка при загрузке стран:", error);
        return [];
    }
};

const InfoOfCountriesFetch = async (code: string): Promise<InfoOfCountries | null> => {
    try {
        const response = await fetch(`https://restcountries.com/v2/alpha/${code}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка при загрузке данных страны:", error);
        return null;
    }
};

const App = () => {
    return (
        <div>
            
        </div>
    );
};

export default App;