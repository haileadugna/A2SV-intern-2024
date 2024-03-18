import Card from "@/components/card";
import { StaticImageData } from "next/image";
import logo from "../public/assets/myfoto.jpg";

const Opportunities = () => {
    // const logo = "/assets/myfoto.jpg";


return (
    <div>
        <Card 
            title="Social Media Assistant" 
            organization="Young Men Christians Association" 
            location="Addis Ababa, Ethiopia" 
            description="As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers." 
            tags={["In person", "Education", "IT"]} 
            image={logo as StaticImageData} // Cast 'logo' to 'StaticImageData'
        />
    </div>
);
}

export default Opportunities;