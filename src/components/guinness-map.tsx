import { Map } from "@/components/ui/map";

export function GuinnessMap() {
    return (
        <div className="w-screen h-screen">
            <Map center={[-74.006, 40.7128]} zoom={11} />
        </div>
    );
}