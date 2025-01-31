import React from "react";
import { InfoOfCountrieses } from "../../types";

interface Props {
    infoOfCountries: InfoOfCountrieses | null;
}

const InfoOfCountries: React.FC<Props> = ({ infoOfCountries }) => {
    if (!infoOfCountries) {
        return <p>Выберите страну</p>;
    }

    let borders = "Нет граничащих стран";
    if (infoOfCountries.borders && infoOfCountries.borders.length > 0) {
        borders = infoOfCountries.borders.join(", ");
    }

    return (
        <div className="col-md-8">
            <h3>Информация о стране</h3>
            <h2>{infoOfCountries.name}</h2>
            <img
                src={infoOfCountries.flags.png}
                alt={`Флаг ${infoOfCountries.name}`}
                style={{ width: "100px" }}
            />
            <p>
                <strong>Столица:</strong> {infoOfCountries.capital}
            </p>
            <p>
                <strong>Население:</strong> {infoOfCountries.population.toLocaleString()}
            </p>
            <p>
                <strong>Граничащие страны:</strong> {borders}
            </p>
        </div>
    );
};

export default InfoOfCountries;
