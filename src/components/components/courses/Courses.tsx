import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../redux/reducers";
import { useGlobalStyles } from "../../../styles/global";
import { useModalStyles } from "../../../styles/modal";
import { Cards } from "../shared/Card";
import { ICourse, INewCourse, IUpdateCourse } from "./entities";
import "../../components/shared/css/card.css";
import CourseActions, { editCourse } from "./redux/actions/curse";
import { useConfirm } from "material-ui-confirm";
import { useSnackbar, VariantType } from "notistack";
export const Courses = () => {
  const globalClasses = useGlobalStyles();
  const dispatch = useDispatch();
  const [open, setopen] = useState(false);
  const [update, setupdate] = useState(false);
  const classes = useModalStyles();
  const confirm = useConfirm();
  const { handleSubmit, register, errors } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const { courseList, editing, error } = useSelector<State>(
    (store) => store.course
  ) as any;

  useEffect(() => {
    dispatch(CourseActions.getListCourses());
  }, []);

  useEffect(() => {
    if (error) {
      notification(`${error.response.data.message}`, "error");
    }
  }, [error]);
  const handleClose = () => {
    setopen(false);
    setupdate(false);
  };

  const handleOpen = (course: ICourse) => {
    setopen(true);
    setupdate(true);
    dispatch(editCourse(course));
  };

  const handleClickOpen = () => {
    setopen(true);
  };

  const handleRegsiter = (course: INewCourse) => {
    dispatch(CourseActions.registerCourse(course));
    setopen(false);
    setupdate(false);
  };

  const handleEliminate = (course: ICourse) => {
    confirm({
      title: "",
      description: "¿Estas seguro que deseas eliminar este curso?",
      cancellationText: "Cancelar",
    }).then(() => {
      dispatch(CourseActions.deleteCourse(course.id as string));
    });
  };

  const handleUpdate = (name: IUpdateCourse) => {
    const course: IUpdateCourse = {
      id: editing.course.id,
      name: name.name,
    };
    dispatch(CourseActions.updateCourse(course));
    setupdate(false);
    setopen(false);
  };
  const notification = (message: string, variant: VariantType) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };
  return (
    <main className={globalClasses.content}>
      <IconButton onClick={handleClickOpen} style={{ height: 40 }}>
        <Add style={{ color: "white" }} />
      </IconButton>
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
        <DialogTitle>Formulario de cursos</DialogTitle>
        <DialogContent>
          <DialogContentText>Ingresa los campos requeridos</DialogContentText>

          <TextField
            defaultValue={update ? editing.course.name : ""}
            variant="outlined"
            margin="dense"
            id="name"
            name="name"
            label="Nombre del curso"
            fullWidth
            inputRef={register({
              required: true,
            })}
            className={errors.name && classes.textField}
          />
          {errors.name && (
            <span style={{ color: "red" }}>Ingresa un nombre válido</span>
          )}
          <DialogActions>
            <Button onClick={handleClose} className={globalClasses.buttonsGen}>
              Cancelar
            </Button>
            {update && editing.course.status ? (
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
                onClick={handleSubmit(handleRegsiter)}
              >
                Registrar
              </Button>
            )}
          </DialogActions>
        </DialogContent>
      </Dialog>
      <div className={globalClasses.contentBody}>
        {courseList.map((a: ICourse) => (
          <Cards
            id={a.id as string}
            name={a.name}
            status={a.status}
            date={a.createdAt}
            onClick={() => {
              handleOpen(a);
            }}
            onClickEliminate={() => handleEliminate(a)}
            cargar={true}
            idCourse={a.idCourse}
          ></Cards>
        ))}
      </div>
    </main>
  );
};
