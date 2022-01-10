import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { State } from "../../../redux/reducers";
import { useGlobalStyles } from "../../../styles/global";
import califActions from "./redux/actions/generalCalif";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useTableStyles } from "../../../styles/table";
import Save from "@material-ui/icons/Save";
import { createStyles, Theme, withStyles } from "@material-ui/core";
import { CSVLink } from "react-csv";

export const GeneralCalif = () => {
  const dispatch = useDispatch();
  const ref = useRef([] as any);
  const { idCourse } = useParams<{ idCourse: string }>();
  const globlalStyles = useGlobalStyles();
  const { studentListCalif, data } = useSelector<State>(
    (store) => store.califications
  ) as any;
  interface prueba {
    nombre: string;
    entregadas: number;
    sinEntregar: number;
    calif: any;
  }

  let arrayCSV = [] as any;
  let calif = [] as any;
  useEffect(() => {
    console.log(idCourse);
    dispatch(califActions.listCalifications(idCourse));
  }, [idCourse]);
  useEffect(() => {
    studentListCalif.students.forEach((student, i) => {
      /*arrayCSV[i] = {
        nombre: student.nombre,
        entregadas: student.entregadas,
        sinEntregar: student.sinEntregar,
      };
      student.listadoTareas.forEach((tarea) => {
        arrayCSV[i] = Object.assign(arrayCSV[i], {
          [tarea.name]: tarea.calificacion,
        });
      });
      arrayCSV[i] = Object.assign(arrayCSV[i], {
        promedio: student.promedio,
      });
*/
      console.log("entra");
      let datos = {
        nombre: student.nombre,
        entregadas: student.entregadas,
        sinEntregar: student.sinEntregar,
      };
      arrayCSV[i] = datos;
      student.listadoTareas.forEach(
        (tarea) =>
          (arrayCSV[i] = { ...arrayCSV[i], [tarea.name]: tarea.calificacion })
      );

      arrayCSV[i] = Object.assign(arrayCSV[i], {
        promedio: student.promedio,
      });
      console.log(arrayCSV);
      calif = [];
    });
    ref.current = arrayCSV;
    console.log(arrayCSV);
  }, [studentListCalif]);
  const classes = useTableStyles();

  return studentListCalif.students.length > 0 ? (
    <main className={globlalStyles.content}>
      <div style={{ width: "90%" }}>
        {" "}
        <h2
          style={{
            color: "white",
            width: "100%",
            margin: "0px",
            padding: "0px",
            textAlign: "center",
          }}
        >
          {studentListCalif.nombreCurso}
        </h2>
        <h4
          style={{
            color: "#dd0040",
            width: "100%",
            margin: "0px",
            padding: "0px",
            textAlign: "right",
          }}
        >
          Promedio grupal: {studentListCalif.promedioGeneral}
        </h4>
        <h4
          style={{
            color: "#dd0040",
            width: "100%",
            margin: "0px",
            padding: "0px",
            textAlign: "right",
          }}
        >
          Total tareas del curso: {studentListCalif.totalTareas}
        </h4>
        <h2 style={{ color: "white", textAlign: "center" }}>
          Listado de estudiantes
        </h2>
        <IconButton>
          <CSVLink data={data}>
            <Save style={{ color: "white", float: "right" }} />
          </CSVLink>
          ;
        </IconButton>
        <TableContainer component={Paper} style={{ background: "#1c1c1c" }}>
          <Table className={classes.table} aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    background: "#1c1c1c",
                    color: "white",
                  }}
                >
                  Nombre estudiante
                </TableCell>
                <TableCell
                  style={{
                    background: "#1c1c1c",
                    color: "white",
                  }}
                >
                  Total tareas entregadas
                </TableCell>
                <TableCell
                  style={{
                    background: "#1c1c1c",
                    color: "white",
                  }}
                  align="right"
                >
                  Total tareas entregadas
                </TableCell>
                <TableCell
                  style={{
                    background: "#1c1c1c",
                    color: "white",
                  }}
                  align="right"
                >
                  Total tareas sin entregar
                </TableCell>
                <TableCell
                  style={{
                    background: "#1c1c1c",
                    color: "white",
                  }}
                  align="right"
                >
                  Promedio
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentListCalif.students.map((row) => (
                <CollapsibleTable row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </main>
  ) : (
    <main className={globlalStyles.content}>
      <h2 style={{ color: "white", textAlign: "center" }}>No existe</h2>
    </main>
  );
};

export function CollapsibleTable(props: { row }) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <KeyboardArrowUpIcon
                style={{
                  color: "white",
                }}
              />
            ) : (
              <KeyboardArrowDownIcon
                style={{
                  color: "white",
                }}
              />
            )}
          </IconButton>
        </TableCell>
        <TableCell
          style={{
            background: "#1c1c1c",
            color: "white",
          }}
          component="th"
          scope="row"
        >
          {row.nombre}
        </TableCell>
        <TableCell
          style={{
            background: "#1c1c1c",
            color: "white",
          }}
          align="right"
        >
          {row.entregadas}
        </TableCell>
        <TableCell
          style={{
            background: "#1c1c1c",
            color: "white",
          }}
          align="right"
        >
          {row.sinEntregar}
        </TableCell>
        <TableCell
          style={{
            background: "#1c1c1c",
            color: "white",
          }}
          align="right"
        >
          {row.promedio}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0, color: "white" }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Lista de tareas
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        background: "#1c1c1c",
                        color: "white",
                      }}
                    >
                      Fecha
                    </TableCell>
                    <TableCell
                      style={{
                        background: "#1c1c1c",
                        color: "white",
                      }}
                    >
                      Nombre tarea
                    </TableCell>
                    <TableCell
                      style={{
                        background: "#1c1c1c",
                        color: "white",
                      }}
                      align="right"
                    >
                      Calificacion
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.listadoTareas.map((historyRow) => (
                    <TableRow
                      style={{
                        background: "#1c1c1c",
                        color: "white",
                      }}
                      key={historyRow.fecha}
                    >
                      <TableCell
                        style={{
                          background: "#1c1c1c",
                          color: "white",
                        }}
                        component="th"
                        scope="row"
                      >
                        {historyRow.fecha}
                      </TableCell>
                      <TableCell
                        style={{
                          background: "#1c1c1c",
                          color: "white",
                        }}
                      >
                        {" "}
                        {historyRow.name}
                      </TableCell>
                      <TableCell
                        style={{
                          background: "#1c1c1c",
                          color: "white",
                        }}
                        align="right"
                      >
                        {historyRow.calificacion}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}
