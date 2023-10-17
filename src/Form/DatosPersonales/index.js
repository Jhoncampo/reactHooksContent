import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarNombre, validarApellidos, validarTelefono } from "./validaciones";

const DatosPersonales = ({updateStep}) => {

  const [ name, setName ] = useState({ value: "", valid: null })
  const [ lastName, setLastName ] = useState({ value: "", valid: null })
  const [ phone, setPhone ] = useState({ value: "", valid: null })

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={ (e) =>{
        e.preventDefault()
        if( name.valid && lastName.valid && phone.valid){
          updateStep(2)
        }else{
          console.log("Error")
        }

      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={name.value}
        error={ name.valid === false}
        helperText={ name.valid === false && "Ingresa al menos 2 caracteres y máximo 30 caracteres."}
        onChange={ (input) =>{
          const name = input.target.value
          validarNombre(name)
          setName({value: name, valid: validarNombre(name)})
        }}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={lastName.value}
        error={ lastName.valid === false}
        helperText={ lastName.valid === false && "Ingresa al menos 2 caracteres y máximo 30 caracteres."}
        onChange={ (input) =>{
          const lastName = input.target.value
          validarApellidos(lastName)
          setLastName({value: lastName, valid: validarApellidos(lastName)})
        }}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={phone.value}
        error={ phone.valid === false}
        helperText={ phone.valid === false && "Ingresa al menos 2 digitos y máximo 14 digitos"}
        onChange={ (input) =>{
          const phone = input.target.value
          validarTelefono(phone)
          setPhone({value: phone, valid: validarTelefono(phone)})
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
