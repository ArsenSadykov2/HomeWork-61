import {Countries, InfoOfCountries} from "./types";
import ArrayOfCountries from "./components/ArrayOfCountries/ArrayOfCountries.tsx";
import {useEffect, useState} from "react";

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
    const [countries, setCountries] = useState<Countries[]>([]);
    const [onClicked, onClickedCountry] = useState<string | null>(null);
    const [countryInfos, setCountryInfos] = useState<InfoOfCountries | null>(null);

    useEffect(() => {
        const loadCountries = async () => {
            const countriesData = await countriesFetch();
            setCountries(countriesData);
        };

        loadCountries();
    }, []);


    useEffect(() => {
        const loadCountryDetails = async () => {
            if (onClicked) {
                const details = await InfoOfCountriesFetch(onClicked);
                setCountryInfos(details);
            }
        };

        loadCountryDetails();
    }, [onClicked]);
    return (
        <div className="container mt-5">
            <div className="row">
                <ArrayOfCountries countries={countries} onClicked={onClicked} onClickedCountry={onClickedCountry} />
            </div>
        </div>
    );
};

export default App;