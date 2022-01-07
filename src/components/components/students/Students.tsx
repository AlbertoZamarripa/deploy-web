import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  IconButton,
  TextField,
} from "@material-ui/core";
import Delete from "@material-ui/icons/DeleteForever";
import Update from "@material-ui/icons/Create";
import { Alert, AlertTitle, Autocomplete } from "@material-ui/lab";
import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { useGlobalStyles } from "../../../styles/global";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../redux/reducers";
import StudentsActions from "./redux/actions/student";
import { ReactTable } from "../shared/table";
import { IStudents, IUpdateStudent } from "./entities";
import { useModalStyles } from "../../../styles/modal";
import { randomInt } from "crypto";
import { useSnackbar, VariantType } from "notistack";
import { useConfirm } from "material-ui-confirm";

export const Students = () => {
  const dispatch = useDispatch();
  const [open, setopen] = useState(false);
  const [update, setupdate] = useState(false);
  const [valueInput, setvalueInput] = useState("");
  const Selected = useRef("");
  const confirm = useConfirm();
  const [checkedList, setcheckedList] = useState(true);
  const globalClasses = useGlobalStyles();
  const classes = useModalStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { handleSubmit, register, errors } = useForm();
  const { courseList } = useSelector<State>((store) => store.course) as any;
  const { studentList, editing, selectedCourse, error } = useSelector<State>(
    (store) => store.students
  ) as any;
  const handleClose = () => {
    setopen(false);
    setupdate(false);
  };

  useEffect(() => {
    if (error) {
      notification(`${error.response.data.message}`, "error");
    }
  }, [error]);
  useEffect(() => {
    dispatch(StudentsActions.getListCourses());
  }, []);
  useEffect(() => {
    console.log(selectedCourse);
    Selected.current = selectedCourse.course.id;
  }, [selectedCourse]);

  const handleOpen = (student: IStudents) => {
    setopen(true);
    setupdate(true);
    dispatch(StudentsActions.editStart(student));
    //console.log(id);
  };
  const handleClickOpen = () => {
    setopen(true);
  };
  const handleDelete = (id: string) => {
    confirm({
      title: "",
      description: "¿Estas seguro que deseas eliminar este estudiante?",
      cancellationText: "Cancelar",
    }).then(() => {
      const DeleteStudent = {
        idStudent: id,
        idCourse: Selected.current,
      };

      dispatch(StudentsActions.deleteStudent(DeleteStudent));
    });
  };
  const handleUpdate = (student: any) => {
    const _student = {
      ...student,
      id: editing.student.id,
    };
    dispatch(StudentsActions.updateStudent(_student));
    handleClose();
  };
  const columns = useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "nombre",
        Cell: (props: { row: { original: { nombre: string } } }) => (
          <Fragment>
            {props.row.original.nombre
              ? props.row.original.nombre.toUpperCase()
              : ""}{" "}
          </Fragment>
        ),
      },
      {
        Header: "Apellido",
        accessor: "apellido",
        Cell: (props: { row: { original: { apellido: string } } }) => (
          <Fragment>
            {props.row.original.apellido
              ? props.row.original.apellido.toUpperCase()
              : ""}{" "}
          </Fragment>
        ),
      },
      {
        Header: "Segundo apellido",
        accessor: "segApe",
        Cell: (props: { row: { original: { segApe: string } } }) => (
          <Fragment>
            {props.row.original.segApe
              ? props.row.original.segApe.toUpperCase()
              : ""}{" "}
          </Fragment>
        ),
      },
      {
        Header: "Estatus",
        accessor: "status",
        Cell: (props: { row: { original: { status: string } } }) => (
          <Fragment>
            {props.row.original.status == "A" ? "ACTIVO" : "INACTIVO"}{" "}
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
                onClick={() => handleDelete(value.row.original.id)}
                color="secondary"
              >
                <Delete />
              </IconButton>
            </Fragment>
          );
        },
      },
    ],
    []
  );
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
        <DialogTitle>Formulario de estudiantes</DialogTitle>
        <DialogContent>
          <DialogContentText>Ingresa los campos requeridos</DialogContentText>

          <TextField
            defaultValue={update ? editing.student.nombre : ""}
            variant="outlined"
            margin="dense"
            id="nombre"
            name="nombre"
            label="Nombre(s)*"
            fullWidth
            inputRef={register({
              required: true,
            })}
            className={errors.nombre && classes.textField}
          />
          <TextField
            defaultValue={update ? editing.student.apellido : ""}
            variant="outlined"
            margin="dense"
            id="apellido"
            name="apellido"
            label="Apellido*"
            fullWidth
            inputRef={register({
              required: true,
            })}
            className={errors.apellido && classes.textField}
          />
          <TextField
            defaultValue={update ? editing.student.segApe : ""}
            variant="outlined"
            margin="dense"
            id="segApe"
            name="segApe"
            label="Segundo Apellido (opcional)"
            fullWidth
            inputRef={register({
              required: false,
            })}
            className={errors.segApe && classes.textField}
          />

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
      <div className={globalClasses.form} style={{ width: "200px" }}>
        <Autocomplete
          id="nba teams"
          onChange={(event, newValue) => {
            setvalueInput(newValue?.name as string);
            setcheckedList((checkedList) => !checkedList);
            dispatch(StudentsActions.getListStudents(newValue?.id as string));
            dispatch(
              StudentsActions._selectedCourse({
                id: newValue?.id as string,
                name: newValue?.name as string,
              })
            );
          }}
          options={courseList}
          renderInput={(params) => (
            <TextField
              {...params}
              label={
                selectedCourse.course.name !== ""
                  ? selectedCourse.course.name
                  : "Seleccione una clase"
              }
              variant="outlined"
            />
            //style={{ width: 270 }}
          )}
          getOptionLabel={(option: { id: string; name: string }) => {
            return option.name;
          }}
        />
      </div>

      {studentList.length > 0 ? (
        <Fade in={checkedList}>
          <ReactTable columns={columns as any} data={studentList}></ReactTable>
        </Fade>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
          }}
        >
          <Fade in={studentList.length > 0 ? false : true}>
            <Alert
              severity="info"
              style={{
                marginTop: "",
                width: "40%",
                height: "50px",
                background: "#242526",
                color: "white",
              }}
            >
              <AlertTitle>{valueInput}</AlertTitle>
              No tiene alumnos registrado en este curso
            </Alert>
          </Fade>
        </div>
      )}
    </main>
  );
};
