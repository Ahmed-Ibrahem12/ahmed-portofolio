import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">
          I am a passionate Frontend Developer with a strong focus on building
          innovative user interfaces that deliver an exceptional user
          experience. With solid experience in React JS, I work on creating
          seamless and interactive web applications using the latest
          technologies and best practices. I believe that good design and smooth
          interaction are key to creating outstanding user experiences, and I am
          always striving to enhance my skills in line with the rapid
          advancements in the programming world. My experience includes working
          on a variety of projects, from developing user interfaces to
          optimizing performance and user experience, with an emphasis on
          efficient and creative solutions. I am always looking for
          opportunities to learn new technologies and collaborate with creative
          teams to make a positive impact on the projects I am involved in.
        </p>
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
