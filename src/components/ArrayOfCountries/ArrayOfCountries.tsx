import React from "react";
import { Countries } from "../../types";

interface Props {
    countries: Countries[];
    onClicked: string | null;
    onClickedCountry: (code: string) => void;
}

const ArrayOfCountries: React.FC<Props> = ({ countries, onClicked, onClickedCountry }) => {
    return (
        <div className="col-md-4">
            <h3>Список стран</h3>
            <div
                className="list-group-container"
                style={{
                    maxHeight: "600px",
                    overflowY: "auto",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                }}
            >
                <ul className="list-group" style={{ padding: 0 }}>
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
                            >
                                {country.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ArrayOfCountries;
