import { Card } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";

const MyApps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const getMyApps = async () => {
      const { data } = await axios.get(
        "https://portfolio-backend-b5dh.onrender.com/api/v1/softwareApplication/getAll",
        { withCredentials: true }
      );
      setApps(data.data);
    };
    getMyApps();
  }, []);

  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12">
      <h1 className="text-tubeLight-effect text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] tracking-[15px] dancing_text mx-auto w-fit">
        MY APPS
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {apps &&
          apps.map((element) => {
            return (
              <Card
                className="h-fit p-7 flex flex-col justify-center items-center gap-3 transition-transform transform hover:scale-105 hover:bg-white"
                key={element._id}
              >
                <img
                  src={element.svg && element.svg.url}
                  alt={element.name}
                  className="h-12 sm:h-24 w-auto transition-transform duration-300 ease-in-out hover:scale-110"
                />
                <p className="text-muted-foreground text-center transition-colors duration-300 ease-in-out hover:text-primary">
                  {element.name}
                </p>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default MyApps;
