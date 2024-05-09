import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const History = () => {

    const [name, setName] = useState([])

    async function getData() {
        const response = await axios.get("https://api.spacexdata.com/v3/launches")
        const result = await response.data;
        console.log(result);
        setName(result)

    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>All Launches</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        name.map((ad) => {
                            return (
                                <div className="card">
                                    <p>Mission Name : {ad.mission_name} </p>
                                    <p>Flight Number : {ad.flight_number}</p>
                                    <p>Launch Date : {new Date(ad.launch_date_local).toLocaleString()} </p>
                                    <p>Details : {ad.details}</p>
                                    <img className="img" src= {ad.links.mission_patch}></img>
                                </div>
                               
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}
export default History