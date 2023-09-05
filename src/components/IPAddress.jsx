import { useEffect, useState } from "react"
import SearchBar from "./SearchBar"
import Stats from "./Stats"

const IPAddress = () => {
    const [ ipAddress, setIPAddrss ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ timezone, setTimezone ] = useState('');
    const [ ISP, setISP ] = useState('');
    const [ coordinates, setCoordinates ] = useState({});

    const fetchLocation = (ipAddress="") =>{
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_GEOIPIFY_API_KEY}&ipAddress=${ipAddress}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setIPAddrss(data.ip);
            setLocation(`${data.location.city}, ${data.location.country}, ${data.location.postalCode}`)
            setTimezone(`UTC ${data.location.timezone}`)
            setISP(`${data.isp}`);
            setCoordinates({
                lat: data.location.lat,
                lng: data.location.lng,
            });
        });
    }

    useEffect(() => fetchLocation(), []);

  return (
    <div className="flex flex-col h-screen relative">
        <SearchBar />
        <Stats 
            ipAddress={ipAddress}
            location={location}
            timezone={timezone}
            isp={ISP}
        />
    </div>
  )
}

export default IPAddress