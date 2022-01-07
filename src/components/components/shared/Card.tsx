import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Delete from "@material-ui/icons/DeleteForever";
import Update from "@material-ui/icons/Create";
import React from "react";

import { useGlobalStyles } from "../../../styles/global";
import { Fade, Grow } from "@material-ui/core";
import { Link } from "react-router-dom";

interface props {
  id: string;
  name: string;
  status: string;
  date?: Date;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onClickEliminate: React.MouseEventHandler<HTMLButtonElement>;
  cargar: boolean;
  idCourse: string;
}
export const Cards = ({
  id,
  name,
  status,
  date,
  cargar,
  idCourse,
  onClick,
  onClickEliminate,
}: props) => {
  const globalClasses = useGlobalStyles();

  return (
    <div className="separator">
      <Grow in={cargar} timeout={700}>
        <Card className={globalClasses.card}>
          <CardContent>
            <Link
              to={`/homeworks/${id}`}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {name}{" "}
                <Typography style={{ float: "right" }}>{idCourse}</Typography>
              </Typography>
            </Link>
            <Typography variant="body2" style={{ color: "#dd0040" }}>
              Creado el{" "}
              {new Date(date?.toString() as string).toLocaleDateString()}
            </Typography>
            <Typography variant="body2" style={{ color: "#dd0040" }}>
              Estado: {status == "A" ? "activo" : "inactivo"}
            </Typography>
          </CardContent>
          <IconButton
            edge="start"
            size="small"
            onClick={onClickEliminate}
            className={globalClasses.buttonsGen}
          >
            <Delete />
          </IconButton>
          <IconButton
            edge="start"
            size="small"
            onClick={onClick}
            className={globalClasses.buttonsGen}
          >
            <Update />
          </IconButton>
        </Card>
      </Grow>
    </div>
  );
};
