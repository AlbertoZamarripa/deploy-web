import { ListCalifState } from "../../entities";
import { CalifActions } from "../actions/generalCalifActions";
import { GeneralCalifTypes } from "../actions/generalCalifTypes";

const initialState: ListCalifState = {
  data: [],
  studentListCalif: {
    students: [],
    promedioGeneral: 0,
    totalTareas: 0,
    nombreCurso: "",
  },
  isInProgress: false,
};

export default (state = initialState, action: CalifActions): ListCalifState => {
  const { type } = action;
  switch (type) {
    case GeneralCalifTypes.LIST_CALIF_REQUEST:
      return {
        ...state,
        isInProgress: true,
      };
    case GeneralCalifTypes.LIST_CALIF_REQUEST_SUCCESS:
      let arrayCSV = [] as any;
      action.students.students.forEach((student, i) => {
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
      });
      return {
        ...state,
        isInProgress: false,
        studentListCalif: action.students,
        data: arrayCSV,
      };
    case GeneralCalifTypes.LIST_CALIF_REQUEST_FAIL:
      return {
        ...state,
        isInProgress: false,
        error: action.error,
      };
    default:
      return state;
  }
};
