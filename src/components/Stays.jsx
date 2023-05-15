"use client"
//context
import { useContext } from "react";
import { StaysContext } from "@/context/StaysContext.js";

//components
import Stay from "./Stay";

function Stays(props) {
  const { state:stays } = useContext(StaysContext)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:auto-cols-max gap-9">
      {stays.map((stay) => (
        <Stay key={stay.title} stay={stay} />
      ))}

    </div>
  );
}

export default Stays;
