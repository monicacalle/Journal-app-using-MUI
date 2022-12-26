import { Link as RouterLink } from "react-router-dom";
import { Grid, TextField, Typography, Link, Button } from "@mui/material";
import { useForm } from "../../hooks";
import { AuthLayout } from "../layout/AuthLayout";

const formData = {
  email: "monicacalle369@gmail.com",
  password: "123456",
  displayName: "Monica Calle",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El email debe tener una @."],
  password: [
    (value) => value.length >= 6,
    "El password debe tener mas de 6 caracteres.",
  ],
  displayName: [
    (value) => value.includes >= 1,
    "El campo no debe estar vacio.",
  ],
};

export const RegisterPage = () => {
  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <>
      <AuthLayout title="Register">
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre Completo"
                type="text"
                placeholder="John Doe"
                fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={!displayNameValid}
                helperText={displayNameValid}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="correo"
                type="email"
                placeholder="correo@google.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="contrasena"
                type="password"
                placeholder="contrasena"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Typography sx={{ mr: 1 }}>Ya tienes una cuenta?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/login">
                ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
