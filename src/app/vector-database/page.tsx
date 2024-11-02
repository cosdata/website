import { afacad, commonStyles } from "../styles/common";
import HeroSection from "./HeroSection"
import Benefits from "./Benefits"
import FeatureGrid from "./FeatureGrid"
import Resourse from "./Resourse";

export default function VectorDatabase() {
    return (
        <div className="flex flex-col">
            <HeroSection />
            <div className="w-full bg-white">
                <Benefits />
                <FeatureGrid />
                <Resourse/>
            </div>
        </div>
    )
}