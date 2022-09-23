import React, { useState } from "react";
import { DataGrid, GridColDef, GridSelectionModel } from "@mui/x-data-grid";
import { useDispatch, useSelector, useStore } from "react-redux";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useGetData } from "../../custom-hooks";
import { serverCalls } from "../../api"; // ADD THIS
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material"; // ADD THESE
import { PlantForm } from "../../components/PlantForm"; // ADD THIS
import { DeleteDialog } from "../DeleteDialog";
import { ViewPlant } from "../ViewPlant";
// import { imageSearch } from "../imageSearch";

const plants = [
  {
    id: 1,
    commom_name: "plant",
    species_name: "plantus planti",
    size: 35,
    origin: "origin",
    light: "light",
    shade: "shade",
    soil: "soil",
    fertilize: "fertilize",
  },
  {
    id: 1,
    commom_name: "plant",
    species_name: "plantus planti",
    size: 35,
    origin: "origin",
    light: "light",
    shade: "shade",
    soil: "soil",
    fertilize: "fertilize",
  },
  {
    id: 1,
    commom_name: "plant",
    species_name: "plantus planti",
    size: 35,
    origin: "origin",
    light: "light",
    shade: "shade",
    soil: "soil",
    fertilize: "fertilize",
  },
  {
    id: 1,
    commom_name: "plant",
    species_name: "plantus planti",
    size: 35,
    origin: "origin",
    light: "light",
    shade: "shade",
    soil: "soil",
    fertilize: "fertilize",
  },
  {
    id: 1,
    commom_name: "plant",
    species_name: "plantus planti",
    size: 35,
    origin: "origin",
    light: "light",
    shade: "shade",
    soil: "soil",
    fertilize: "fertilize",
  },
  {
    id: 1,
    commom_name: "plant",
    species_name: "plantus planti",
    size: 35,
    origin: "origin",
    light: "light",
    shade: "shade",
    soil: "soil",
    fertilize: "fertilize",
  },
];

interface gridData {
  id?: any;
  data?: {};
}

export const DataTable = (props: gridData) => {
  let { plantData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [activeId, setActiveId] = useState("");
  let [activePlant, setActivePlant] = useState({});

  let activateID = (id: any, data: {}) => {
    setActiveId(id);
    setActivePlant(data);
  };

  let photoURL = "https://source.unsplash.com/random";
  // console.log(imageSearch("plant"));

  let handleOpen = () => {
    setOpen(true);
  };

  let handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="md">
        <ViewPlant id={activeId} data={activePlant} />

        <h2>Plant Collection </h2>
        <br />
        <Grid container spacing={4}>
          {/* needed to add ":any to avoid eerors" */}
          {plantData.map((card: any, index: any) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "380px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    pt: "0",
                    height: "150px",
                  }}
                  image={photoURL}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card["commom_name"]}
                  </Typography>
                  <Typography gutterBottom sx={{ fontSize: "16px" }}>
                    {card["species_name"]}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "11px" }}>
                    Grows {card.size}. Originates from {card.origin}. Needs{" "}
                    {card.light}. {card.shade}. Grows best in {card.soil}.{" "}
                    {card.fertilize}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={handleOpen} size="small">
                    Update
                  </Button>
                  <DeleteDialog id={card.id} />
                  <Button onClick={(event) => activateID(card.id, card)}>
                    View
                  </Button>
                </CardActions>
              </Card>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Update plant</DialogTitle>
                <DialogContent>
                  <DialogContentText>Plant: {card.commom_name}</DialogContentText>
                  <PlantForm id={card.id} />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
