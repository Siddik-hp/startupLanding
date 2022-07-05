import React from "react";
import LongTitle from "../../components/LongTitle";
import TeamCard from "../../components/TeamCard";
import SmallTitle from "./../../components/SmallTitle";
import { v4 as uuidv4 } from "uuid";

const TeamMember = [
  {
    name: "Olivia",
    position: "Software Developer",
    image: "/team/1.jpg",
  },
  {
    name: "Emma",
    position: "App Developer",
    image: "/team/2.jpg",
  },
  {
    name: "Charlotte",
    position: "App Developer",
    image: "/team/3.jpg",
  },
  {
    name: "Amelia",
    position: "MERN Developer",
    image: "/team/4.jpg",
  },
  {
    name: "Ava",
    position: "Front-end Developer",
    image: "/team/5.jpg",
  },
  {
    name: "Elijah",
    position: "Software Developer",
    image: "/team/6.jpg",
  },
  {
    name: "William",
    position: "Software Developer",
    image: "/team/7.jpg",
  },
];
const Team = () => {
  return (
    <>
      <section id="pricing">
        <div>
          <SmallTitle text="Our Team" />
          <LongTitle text="Meet our teem members" />
        </div>
        <div className="my-4 grid grid-cols-2 lg:grid-cols-3 mx-auto container gap-5 p-4 lg:p-0 mt-10">
          {TeamMember.map((member) => {
            return <TeamCard key={uuidv4()} data={member} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Team;
