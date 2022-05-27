import React, { useState } from 'react'
import Input from '../components/Input'
import Table from '../components/Table'

export const CityContext = React.createContext();

export default function Home() {

    const [city, setCity] = useState({});
    const [ isFetched, setIsFetched ] = useState(false)

    return (
        <>
            <CityContext.Provider value={{ city, setCity, isFetched, setIsFetched }}>
                <Input />
                <Table />
            </CityContext.Provider>
        </>
    )
}