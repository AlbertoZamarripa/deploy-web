import { Fade, IconButton } from "@material-ui/core";
import { useConfirm } from "material-ui-confirm";
import { useSnackbar } from "notistack";
import React, {
  Fragment,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { State } from "../../../redux/reducers";
import { useGlobalStyles } from "../../../styles/global";
import { useModalStyles } from "../../../styles/modal";
import { ReactTable } from "../shared/table";
import AsistActions from "./actions/asistencia";
import CheckCircle from "@material-ui/icons/CheckCircle";
import Clear from "@material-ui/icons/Clear";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/lab";
import moment from "moment";
export const Asistencia = () => {
  const { id } = useParams<{ id: string }>();
  const [value, setValue] = useState<Date | null>(new Date());
  const globalClasses = useGlobalStyles();
  const dispatch = useDispatch();
  const [open, setopen] = useState(false);
  const [update, setupdate] = useState(false);
  const [fecha, setfecha] = useState("");
  const classes = useModalStyles();
  const confirm = useConfirm();
  const { handleSubmit, register, errors } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const { AsistList, editing, error } = useSelector<State>(
    (store) => store.asistencia
  ) as any;
  useEffect(() => {
    setfecha(moment(Date.now()).format("DD-MM-YYYY"));
    dispatch(
      AsistActions.getListAsist(id, moment(Date.now()).format("DD-MM-YYYY"))
    );
  }, [id]);
  useEffect(() => {}, [AsistList]);
  useEffect(() => {
    setfecha(moment(value).format("DD-MM-YYYY"));
  }, [value]);
  const fechaaux = useRef("");
  const handleChange = (newValue: Date | null) => {
    setfecha(moment(newValue).format("DD-MM-YYYY"));

    dispatch(
      AsistActions.getListAsist(id, moment(newValue).format("DD-MM-YYYY"))
    );
    setValue(newValue);
    fechaaux.current = moment(newValue).format("DD-MM-YYYY");
  };

  const handleUpdateAsist = (idStudent: string) => {
    dispatch(AsistActions.updateAsist(id, fechaaux.current, idStudent));
  };
  const columns = useMemo(
    () => [
      {
        Header: "Nombre completo",
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
        Header: "Asistencia",
        accessor: "status",
        Cell: (props: {
          row: {
            original: {
              status: boolean;
            };
          };
        }) => (
          <Fragment>
            {props.row.original.status ? "Asistio" : "No asistio"}{" "}
          </Fragment>
        ),
      },

      {
        Header: "Estatus",
        id: "action",
        accessor: "idStudent",
        Cell: (value: { idStudent: string; row: any }) => {
          return (
            <Fragment>
              {!value.row.original.status ? (
                <IconButton
                  onClick={() =>
                    handleUpdateAsist(value.row.original.idStudent)
                  }
                  color="primary"
                >
                  <CheckCircle />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() =>
                    handleUpdateAsist(value.row.original.idStudent)
                  }
                  color="secondary"
                >
                  <Clear />
                </IconButton>
              )}
            </Fragment>
          );
        },
      },
    ],
    []
  );

  return (
    <main className={globalClasses.content}>
      <Fade in={true} timeout={700}>
        <div className={globalClasses.contentTable}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Fecha asistencias"
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
          <ReactTable columns={columns as any} data={AsistList} />
        </div>
      </Fade>
    </main>
  );
};
