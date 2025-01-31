import React from "react";
import {Countries} from "../../types";

interface Props {
    countries: Countries[];
    onClicked: string | null;
    onClickedCountry: (code: string) => void;
}


const ArrayOfCountries: React.FC<Props> = ({ countries, onClicked, onClickedCountry }) => {
    return (
        <div className="col-md-4">
            <h3>Список стран</h3>
            <ul className="list-group">
                {countries.map((country) => {
                    let className = "list-group-item";
                    if (onClicked === country.alpha3Code) {
                        className += " active";
                    }

                    return (
                        <li
                            key={country.alpha3Code}
                            className={className}
                            onClick={() => onClickedCountry(country.alpha3Code)}
                            style={{ cursor: "pointer" }}
                        >
                            {country.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};


export default ArrayOfCountries;
