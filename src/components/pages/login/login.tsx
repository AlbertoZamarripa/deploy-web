import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useLoginStyles } from "../../../styles/login";
import { Alert } from "@material-ui/lab";
import { UserLogin } from "../../../redux/entities";
import UserActions from "../../../redux/actions/auth";
import { State } from "../../../redux/reducers";
import logo from "../../../assets/logo_2.png";
import "./login.css";
export const Login = () => {
  const dispatch = useDispatch();
  const classes = useLoginStyles();
  const { handleSubmit, register, errors } = useForm();

  const { error } = useSelector<State>((store) => store.auth) as any;

  const handleLogin = (user: UserLogin) => {
    dispatch(UserActions.login(user.email, user.password));
  };
  return (
    <div
      style={{
        backgroundColor: "#101011",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        component="main"
        style={{
          backgroundColor: "#1b1a1d",
          padding: "20px",
          borderRadius: "10px",
        }}
        maxWidth="xs"
      >
        <CssBaseline />
        <div className={classes.paper}>
          <img src={logo} width={100} height={120} />
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electrónico"
              name="email"
              autoComplete="email"
              inputRef={register({ required: true })}
              className={classes.textField}
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={register({
                required: true,
                minLength: 6,
                maxLength: 30,
              })}
              className={classes.textField}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit(handleLogin)}
            >
              Iniciar Sesión
            </Button>
            {errors.email && (
              <Alert
                severity="error"
                style={{ backgroundColor: "transparent", color: "#fff" }}
              >
                Ingresa tu correo electrónico
              </Alert>
            )}
            {errors.password && (
              <Alert
                severity="error"
                style={{ backgroundColor: "transparent", color: "#fff" }}
              >
                Ingresa tu contraseña
              </Alert>
            )}

            {error && (
              <Alert
                severity="error"
                style={{ backgroundColor: "transparent", color: "#fff" }}
              >
                {error}
              </Alert>
            )}
          </form>
        </div>
      </Container>
    </div>
  );
};
