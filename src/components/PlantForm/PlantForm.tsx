import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import {
  chooseCName,
  chooseSName,
  chooseSize,
  chooseOrigin,
  chooseLight,
  chooseShade,
  chooseSoil,
  chooseFertilize,
} from "../../redux/slices/rootSlice";
import { Input } from "../sharedComponents/Input";
import { serverCalls } from "../../api";
import { useGetData } from "../../custom-hooks";
import { prototype } from "events";

interface PlantFormProps {
  id?: string;
  data?: {};
}

interface PlantState {
  commom_name: string;
  species_name: string;
  size: string;
  origin: string;
  light: string;
  shade: string;
  soil: string;
  fertilize: string;
}

export const PlantForm = (props: PlantFormProps) => {
  const dispatch = useDispatch();
  let { plantData, getData } = useGetData();
  const store = useStore();
  const commom_name = useSelector<PlantState>((state) => state.commom_name);
  const species_name = useSelector<PlantState>((state) => state.species_name);
  const size = useSelector<PlantState>((state) => state.size);
  const origin = useSelector<PlantState>((state) => state.origin);
  const light = useSelector<PlantState>((state) => state.light);
  const soil = useSelector<PlantState>((state) => state.soil);
  const fertilize = useSelector<PlantState>((state) => state.fertilize);

  //

  const { register, handleSubmit } = useForm({});

  //  const handleChange = async (e) => {
  //    await getData({ ...data, [e.target.name]: e.target.value });
  //  };

  const onSubmit = async (data: any, event: any) => {
    console.log(props.id);

    if (props.id!) {
      await serverCalls.update(props.id!, data);
      console.log(`Updated: ${data} ${props.id}`);
      window.location.reload();
      event.target.reset();
    } else {
      dispatch(chooseCName(data.commom_name));
      dispatch(chooseSName(data.species_name));
      dispatch(chooseSize(data.size));
      dispatch(chooseOrigin(data.origin));
      dispatch(chooseLight(data.light));
      dispatch(chooseShade(data.shade));
      dispatch(chooseSoil(data.soil));
      dispatch(chooseFertilize(data.fertilize));

      await serverCalls.create(store.getState());
      window.location.reload();
      event.target.reset();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="commom_name">Common Name</label>
          <Input
            {...register("commom_name")}
            name="Commom_name"
            placeholder="Common name"
          />
        </div>
        <div>
          <label htmlFor="species_name">species Name</label>
          <Input
            {...register("species_name")}
            name="species_name"
            placeholder="Species name"
          />
        </div>
        <div>
          <label htmlFor="size">Size</label>
          <Input
            {...register("size")}
            name="size"
            placeholder="Size"
            
          />
        </div>
        <div>
          <label htmlFor="origin">Origin</label>
          <Input
            {...register("origin")}
            name="origin"
            placeholder="Origin"
          />
        </div>
        <div>
          <label htmlFor="light">Light</label>
          <Input {...register("light")} name="light" placeholder="Light" />
        </div>
        <div>
          <label htmlFor="shade">Water</label>
          <Input {...register("shade")} name="shade" placeholder="Shade" />
        </div>
        <div>
          <label htmlFor="soil">Soil</label>
          <Input {...register("soil")} name="soil" placeholder="soil" />
        </div>
        <div>
          <label htmlFor="fertilize">Fertilize</label>
          <Input
            {...register("fertilize")}
            name="fertilize"
            placeholder="Fertolize"
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
