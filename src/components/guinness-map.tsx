import { 
    Map,
    MapMarker,
    MarkerContent,
    MarkerPopup,
 } from "@/components/ui/map";

export function GuinnessMap() {
    const guinnesses = [
        {
            id: 1,
            name: "The Burren",
            label: "The Burren",
            category: "Bar",
            description: "Thursday night spot for Tufts kids.",
            rating: {
                pour: 9,
                head: 7,
                experience: 9,
            },
            photos: ["abc", "efg"],
            date: "June 9, 2025",
            lng: 42.3970,
            lat: -71.1224,
        },
    ]

    
    return (
        <Map center={[-74.006, 40.7128]} zoom={11}> 
            {guinnesses.map(guinness => (
                <MapMarker
                    key={guinness.id}
                    longitude={guinness.lng}
                    latitude={guinness.lat}
                >
                    <MarkerContent>
                        {/* Guinness pint logo */}
                    </MarkerContent>
                    <MarkerPopup>
                        <></>
                    </MarkerPopup>
                </MapMarker>
            ))}
        </Map>
    );
}