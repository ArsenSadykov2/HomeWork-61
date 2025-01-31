export interface Countries {
    alpha3Code: string;
    name: string;
}

export interface InfoOfCountries {
    name: string;
    capital: string;
    population: number;
    flags: {
        png: string;
    };
    borders?: string[];
}