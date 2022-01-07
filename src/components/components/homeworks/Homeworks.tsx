/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { Fragment, useEffect, useState, useMemo } from "react";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import HomeWorkActions from "./redux/actions/homework";
import Delete from "@material-ui/icons/DeleteForever";
import Update from "@material-ui/icons/Create";
import ListAlt from "@material-ui/icons/ListAlt";
import { useGlobalStyles } from "../../../styles/global";
import { useForm } from "react-hook-form";
import { Add } from "@material-ui/icons";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  IconButton,
  TextField as TextFinal,
} from "@material-ui/core";
import { useModalStyles } from "../../../styles/modal";
import { useDispatch, useSelector } from "react-redux";
import { IHomeworks, IRegister, IUpdateHomework } from "./entities";
import { State } from "../../../redux/reducers";
import { ReactTable } from "../shared/table";
import { useSnackbar, VariantType } from "notistack";
import { useConfirm } from "material-ui-confirm";
import { Link, useParams } from "react-router-dom";
export const Homeworks = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const classes = useModalStyles();
  const [open, setopen] = useState(false);
  const [update, setupdate] = useState(false);
  const globalClasses = useGlobalStyles();
  const { enqueueSnackbar } = useSnackbar();
  const confirm = useConfirm();
  const { handleSubmit, register, errors } = useForm();
  const [value, setValue] = useState<Date | null>(new Date());
  const { homeworkList, editing, error, isInProgress } = useSelector<State>(
    (store) => store.homework
  ) as any;

  useEffect(() => {
    dispatch(HomeWorkActions.getListHomeworks(id));
  }, [id]);
  useEffect(() => {
    setValue(new Date(editing.homework.auxDate));
  }, [editing.homework.auxDate]);
  useEffect(() => {
    if (error) {
      notification(`${error.response.data.message}`, "error");
    }
  }, [error]);

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setopen(false);
    setupdate(false);
  };

  const handleOpen = (homework: IHomeworks) => {
    dispatch(HomeWorkActions.editStart(homework));
    setopen(true);
    setupdate(true);
  };

  const handleClickOpen = () => {
    setopen(true);
  };
  const handleRegister = (a: any) => {
    const val = new Date(value?.toString() as string);
    const fecha = new Date();
    if (val > fecha) {
      const newWork: IRegister = {
        idCourse: id,
        name: a.name,
        dateLimit: value?.valueOf() as number,
        descripcion: a.descripcion,
      };
      dispatch(HomeWorkActions.registerHomework(newWork));
      handleClose();
    } else {
      notification("Fecha de entrega invalida", "error");
    }
  };
  const handleUpdate = (homework: IUpdateHomework) => {
    const newHomework: IUpdateHomework = {
      id: editing.homework.id,
      name: homework.name,
      dateLimit: value?.valueOf() as number,
      descripcion: homework.descripcion,
    };

    dispatch(HomeWorkActions.updateHomework(newHomework));
    handleClose();
  };
  const handleDelete = (homework: IHomeworks) => {
    confirm({
      title: "",
      description: "¿Estas seguro que deseas eliminar esta tarea?",
      cancellationText: "Cancelar",
    }).then(() => {
      dispatch(HomeWorkActions.deleteHomework(homework.id));
    });
  };
  const notification = (message: string, variant: VariantType) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };
  const columns = useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "name",
        Cell: (props: { row: { original: { name: string } } }) => (
          <Fragment>
            {props.row.original.name
              ? props.row.original.name.toUpperCase()
              : ""}{" "}
          </Fragment>
        ),
      },
      {
        Header: "Creada",
        accessor: "createdAt",
        Cell: (props: {
          row: {
            original: {
              createdAt:
                | boolean
                | React.ReactChild
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            };
          };
        }) => (
          <Fragment>
            {props.row.original.createdAt ? props.row.original.createdAt : ""}{" "}
          </Fragment>
        ),
      },
      {
        Header: "Limite",
        accessor: "dateLimit",
        Cell: (props: {
          row: {
            original: {
              dateLimit:
                | boolean
                | React.ReactChild
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            };
          };
        }) => (
          <Fragment>
            {props.row.original.dateLimit ? props.row.original.dateLimit : ""}{" "}
          </Fragment>
        ),
      },

      {
        Header: "Status",
        accessor: "status",
        Cell: (props: { row: { original: { status: string } } }) => (
          <Fragment>
            {props.row.original.status
              ? props.row.original.status.toUpperCase()
              : ""}{" "}
          </Fragment>
        ),
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
              <IconButton
                onClick={() => handleDelete(value.row.original)}
                color="secondary"
              >
                <Delete />
              </IconButton>
              <Link to={`/students-calification/${value.row.original.id}`}>
                <IconButton
                  //onClick={() => handleDelete(value.row.original)}
                  color="secondary"
                >
                  <Delete />
                </IconButton>
              </Link>
            </Fragment>
          );
        },
      },
    ],
    []
  );

  return (
    <main className={globalClasses.content}>
      <IconButton onClick={handleClickOpen} style={{ height: 40 }}>
        <Add style={{ color: "white" }} />
      </IconButton>
      <Link to={`/calification-course/${id}`} style={{ float: "right" }}>
        <IconButton style={{ height: 40 }}>
          <ListAlt style={{ color: "white" }} />
        </IconButton>
      </Link>
      <Link to={`/list-asist/${id}`} style={{ float: "right" }}>
        <IconButton style={{ height: 40 }}>
          <ListAlt style={{ color: "white" }} />
        </IconButton>
      </Link>
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
        <DialogTitle>Formulario de tareas</DialogTitle>
        <DialogContent>
          <DialogContentText>Ingresa los campos requeridos</DialogContentText>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Fecha limite de entrega"
              value={value}
              onChange={handleChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  id="name"
                  name="name"
                  className={globalClasses.form}
                  style={{ color: "white" }}
                />
              )}
            />
          </LocalizationProvider>
          <TextFinal
            defaultValue={update ? editing.homework.name : ""}
            variant="outlined"
            margin="dense"
            id="name"
            name="name"
            label="Nombre de la tarea"
            fullWidth
            inputRef={register({
              required: true,
            })}
            className={errors.name && classes.textField}
          />
          {errors.name && (
            <span style={{ color: "red" }}>Ingresa un nombre válido</span>
          )}
          <TextFinal
            defaultValue={update ? editing.homework.descripcion : ""}
            variant="outlined"
            margin="dense"
            id="descripcion"
            name="descripcion"
            label="Descripcion de la tarea"
            fullWidth
            inputRef={register({
              required: true,
            })}
            className={errors.descripcion && classes.textField}
          />
          {errors.descripcion && (
            <span style={{ color: "red" }}>Ingresa una descripcion válida</span>
          )}
          <DialogActions>
            <Button onClick={handleClose} className={globalClasses.buttonsGen}>
              Cancelar
            </Button>
            {update ? (
              <Button
                type="submit"
                variant="contained"
                className={globalClasses.buttonActions}
                onClick={handleSubmit(handleUpdate)}
              >
                Editar
              </Button>
            ) : (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={globalClasses.buttonActions}
                onClick={handleSubmit(handleRegister)}
              >
                Registrar
              </Button>
            )}
          </DialogActions>
        </DialogContent>
      </Dialog>

      <Fade in={true} timeout={700}>
        <div className={globalClasses.contentTable}>
          <ReactTable columns={columns as any} data={homeworkList} />
        </div>
      </Fade>
    </main>
  );
};
