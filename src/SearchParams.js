import { useState } from "react"

export const SearchParams = () => {
    const [location, setLocation] = useState("Seatle, WA")
    return (
        <div className="search-params">
            <form action="">
                <label htmlFor="location">
                    Location
                    <input  id="location" onChange={(e) => setLocation(e.target.value)} value={location} placeholder="Location"/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}
