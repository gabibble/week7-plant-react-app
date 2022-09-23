import React from "react";
import { DeleteDialog } from "../DeleteDialog";

interface ViewPlantProps {
  id?: any;
  data?: any;
}

export const ViewPlant = (props: ViewPlantProps) => {
    if (props.id == "") {
    return <div></div>;
  } else {
    console.log(props.data);
    return (
      <div>
        <h1>{props.data.commom_name}</h1>
        <h3>{props.data.species_name}</h3>
        <p>
          {" "}
          Grows {props.data.size}. Originates from {props.data.origin}. Needs{" "}
          {props.data.light}. {props.data.shade}. Grows best in{" "}
          {props.data.soil}. {props.data.fertilize}
        </p>
        <DeleteDialog id={props.id} />
      </div>
    );
  }
};
