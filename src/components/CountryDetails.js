import React from 'react';
import {Link} from 'react-router-dom'
import countries from '../countries.json'


export const CountryDetails = ({location, history}) => {

    console.log("queee es esto???", location);
    return (
        <div style={{width:'100%'}}>
            <h1>{location.state.name.official}</h1>
            <table className = "table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{location.state.capital[0] === "" ? "No tiene capital" : location.state.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{location.state.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {
                                    location.state.borders.length ? 
                                    location.state.borders.map((item,index) => 
                                    <li key={index}>
                                        <Link to={{
                                            pathname: "/detail",
                                            state: countries.find(element => item === element.cca3)
                                        }}>
                                            {item}
                                        </Link>
                                    </li>
                                    ):
                                    <li>No colinda con nada</li>
                                }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
    
};
