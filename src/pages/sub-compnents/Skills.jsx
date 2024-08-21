import { Card } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const getMySkills = async () => {
      const { data } = await axios.get(
        "https://portfolio-backend-b5dh.onrender.com/api/v1/skills/getAllSkills",
        { withCredentials: true }
      );
      console.log("data", data);
      setSkills(data.data);
    };
    getMySkills();
  }, []);

  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12">
      <h1
        className="text-tubeLight-effect text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
      lg:text-[3.8rem] tracking-[15px] dancing_text mx-auto w-fit"
      >
        SKILLS
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills &&
          skills.map((element) => {
            return (
              <Card
                className="h-fit p-7 flex flex-col justify-center items-center gap-3
                transition-transform transform hover:scale-105 hover:shadow-lg
                hover:bg-gray-100"
                key={element._id}
              >
                <img
                  src={element.svg && element.svg.url}
                  alt="skill"
                  className="h-12 sm:h-24 w-auto transition-transform transform hover:scale-110"
                />
                <p className="text-muted-foreground text-center">
                  {element.title}
                </p>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default Skills;
