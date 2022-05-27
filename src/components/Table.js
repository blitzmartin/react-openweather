import { useContext } from 'react';
import { CityContext } from '../pages/Home'

export default function Table() {

    const { city, isFetched } = useContext(CityContext);

     return (
        <table>
            <thead>
                <tr> 
                    <th>CITY</th>
                    <th>COUNTRY</th>
                    <th>TEMP (°C)</th>
                    <th>WEATHER CONDITIONS</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {isFetched &&
                    <tr>
                        <td>{city.name}</td>
                        <td>{city.sys.country}</td>
                        <td>{city.main.temp}</td>
                        <td>{city.weather[0].description}</td>
                        <td><img src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`} alt="icon" /></td>
                    </tr>
                }
            </tbody>
        </ table>
    )
}