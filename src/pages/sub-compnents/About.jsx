const About = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold"
          style={{
            color: "var(--foreground)",
            background: "hsl(var(--background))",
          }}
        >
          ABOUT <span className="font-extrabold text-tubeLight-effect">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-muted"></span>
      </div>
      <div className="text-center">
        <p
          className="uppercase text-xl"
          style={{ color: "var(--muted-foreground)" }}
        >
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14 px-4">
          <div className="flex justify-center items-center">
            <img
              src="/Profile.jpg"
              alt="avatar"
              className="bg-white p-2 sm:p-4 rotate-[30deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px] mb-6 md:mb-0"
            />
          </div>
          <div
            className="flex justify-center flex-col tracking-[1px] text-xl gap-5 md:px-8"
            style={{ color: "var(--foreground)" }}
          >
            <p>
              Hello, my name is Abhishek Mishra. I&apos;m currently a Computer
              Science Student at Panjab University with a focus on full-stack
              development. I have experience in C, C++, MERN stack, and data
              structures and algorithms. I&apos;m passionate about developing
              efficient and scalable software solutions and am always eager to
              learn and grow in my field.
            </p>
            <p>
              I have interests not only in technology but also in cricket,
              volleyball, movies, series, video games, and cooking.
            </p>
          </div>
        </div>
        <p
          className="tracking-[1px] text-xl px-4 md:px-8"
          style={{ color: "var(--foreground)" }}
        >
          My dedication and perseverance in timely delivery of work are integral
          to me. I maintain the courage to face any challenges for extended
          periods.
        </p>
      </div>
    </div>
  );
};

export default About;
