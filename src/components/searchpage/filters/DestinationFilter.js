import { useEffect, useState } from 'react';
import React from 'react';
import Collapsible from 'react-collapsible'; // https://www.npmjs.com/package/react-collapsible
import { DESTINATIONS_URL } from "../../../config";

export default function DestinationFilter() {

    const [destinations, setDestinations] = useState([])

    useEffect(() => {
        fetch(DESTINATIONS_URL)
        .then(r => r.json())
        .then(data => setDestinations(data))
    }, [])

    return (
        <Collapsible trigger="Destination" triggerTagName="ul">
            {destinations.map(destination => {
                return(
                    <li key={destination.id} className="checkboxblock">
                        <input type="radio" name="destination" id={destination.id} /><label htmlFor={destination.id}>{destination.name}</label>
                    </li>
                )
            })}
        </Collapsible>
    )
}
