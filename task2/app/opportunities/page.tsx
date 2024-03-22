import Card from "@/components/card";
import Link from "next/link";
import { data } from "@/service/opportunitiesData";

const Opportunities = () => {

    return (
        <div className="p-5 gap-5 flex flex-col items-center">

            {data.map((item) => (
              <Link href={`opportunities/detail/${item.id}`} key={item.id}>
               
                  <Card 
                      // key={index}
                      title={item.title}
                      subTitle={item.subTitle}
                      description={item.description}
                      tags={item.relatedTopics} 
                      image={item.imageUrl}
                  />
                
              </Link>
            ))}
        </div>
    );
}

export default Opportunities;