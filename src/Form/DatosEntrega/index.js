import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarDireccion, validarCiudad, validarEstado } from "./validaciones";

const DatosEntrega = ({updateStep}) => {

  const [ address, setAddress] = useState({value: "", valid: null})
  const [ city, setCity] = useState({value: "", valid: null})
  const [ province, setProvince] = useState({value: "", valid: null})

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
        if (address.valid && city.valid && province.valid) {
          updateStep(3)
        }else{
          console.log("Error")
        }
        
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={address.value}
        error={address.valid === false}
        helperText={ address.valid === false && "Ingrese almenos 4 caracteres"}
        onChange={ (input) =>{
          const direccion = input.target.value
          validarDireccion(direccion)
          setAddress({value: direccion, valid: validarDireccion(direccion)})
        }}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={city.value}
        error={city.valid === false}
        helperText={ city.valid === false && "Ingrese almenos 4 caracteres"}
        onChange={ (input) =>{
          const ciudad = input.target.value
          validarCiudad(ciudad)
          setCity({value: ciudad, valid: validarCiudad(ciudad)})
        }}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={province.value}
        error={province.valid === false}
        helperText={ province.valid === false && "Ingrese almenos 4 caracteres"}
        onChange={ (input) =>{
          const estado = input.target.value
          validarEstado(estado)
          setProvince({value: estado, valid: validarEstado(estado)})
        }}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
