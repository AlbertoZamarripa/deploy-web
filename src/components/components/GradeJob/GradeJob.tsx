import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Delete from "@material-ui/icons/DeleteForever";
import Update from "@material-ui/icons/Create";
import { useGlobalStyles } from "../../../styles/global";
import gradeJobsActions from "./redux/actions/gradeJobs";
import { IconButton } from "@material-ui/core";
import { State } from "../../../redux/reducers";
import { ReactTable } from "../shared/table";
import { IListStudents, IUpdateStudent } from "./entities";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  TextField,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useModalStyles } from "../../../styles/modal";
import { ICalificacion } from "../homeworks/entities";
import { useSnackbar, VariantType } from "notistack";
import { Chart } from "react-google-charts";
export const GradeJob = () => {
  const globalClasses = useGlobalStyles();
  const classes = useModalStyles();
  const { idHomework } = useParams<{ idCourse: string; idHomework: string }>();
  const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useForm();
  const [open, setopen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { studentList, editing, error } = useSelector<State>(
    (store) => store.gradeJobs
  ) as any;
  useEffect(() => {
    if (error) notification(`${error.response.data.message}`, "error");
  }, [error]);
  useEffect(() => {
    dispatch(gradeJobsActions.getListStudents(idHomework));
  }, []);
  useEffect(() => {}, [errors.calificacion]);
  const columns = useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "nombre",
        Cell: (props: { row: { original: { nombre: string } } }) => (
          <Fragment>{props.row.original.nombre}</Fragment>
        ),
      },
      {
        Header: "Calificación",
        accessor: "calificacion",
        Cell: (props: {
          row: {
            original: {
              calificacion: number;
            };
          };
        }) => <Fragment>{props.row.original.calificacion}</Fragment>,
      },

      {
        Header: "",
        id: "action",
        accessor: "id",
        Cell: (value: { id: string; row: any }) => {
          return (
            <Fragment>
              <IconButton
                onClick={() => handleOpen(value.row.original)}
                color="primary"
              >
                <Update />
              </IconButton>
            </Fragment>
          );
        },
      },
    ],
    []
  );
  const handleClose = () => {
    setopen(false);
  };
  const handleOpen = (homework: IUpdateStudent) => {
    setopen(true);
    dispatch(gradeJobsActions.editStart(homework));
  };
  const handleUpdate = (calificacion: ICalificacion) => {
    const send = {
      idHomework: idHomework,
      idStudent: editing.student.idStudent,
      calificacion: calificacion.calificacion,
    };
    dispatch(gradeJobsActions.updateStudent(send));
    handleClose();
  };
  const notification = (message: string, variant: VariantType) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };
  return (
    <main className={globalClasses.content}>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          classes: {
            root: globalClasses.modal,
          },
        }}
        className={globalClasses.form}
      >
        <DialogTitle>Actualización de calificación</DialogTitle>
        <DialogContent>
          <DialogContentText>Ingresa los campos requeridos</DialogContentText>

          <TextField
            defaultValue={open ? editing.student.calificacion : ""}
            variant="outlined"
            margin="dense"
            id="calificacion"
            name="calificacion"
            label="Calificación*"
            fullWidth
            type="number"
            inputRef={register({
              required: true,
              valueAsNumber: true,
              min: 0,
              max: 10,
            })}
            className={errors.calificacion && classes.textField}
          />
          {errors.calificacion && (
            <span style={{ color: "red" }}>
              Ingresa una calificación valida
            </span>
          )}
          <DialogActions>
            <Button onClick={handleClose} className={globalClasses.buttonsGen}>
              Cancelar
            </Button>

            <Button
              type="submit"
              variant="contained"
              className={globalClasses.buttonActions}
              onClick={handleSubmit(handleUpdate)}
            >
              Editar
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>

      <div className={globalClasses.contentTable}>
        <ReactTable columns={columns as any} data={studentList}></ReactTable>
      </div>
    </main>
  );
};
