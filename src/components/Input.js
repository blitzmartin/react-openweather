import AddIcon from '@mui/icons-material/Add';
import { CityContext } from '../pages/Home';
import { useContext, useState } from 'react';

export default function Input() {




    const { setCity, setIsFetched } = useContext(CityContext);
    const [input, setInput] = useState('')

    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=2820d5bd8091b7e5e561954c1376f240`

    function getCity() {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setIsFetched(true)
                setCity(data);
            })
            .catch((err) => {
                console.log("Something went wrong: " + err)
            })
        setInput('')
        return
    }

    return (
        <div className="inputDiv">
            <label>Input city: </label>
            <input placeholder="city name" onChange={(e) => setInput(e.target.value)} value={input} />
            <button onClick={getCity}><AddIcon sx={{ fontSize: '2rem' }} /></button>
        </div>
    )
}