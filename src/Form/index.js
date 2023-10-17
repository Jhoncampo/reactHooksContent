import React, {useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace,  FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";
// Validaciones
import { ValidarEmail, ValidarPassword } from "./DatosUsuario/validaciones";

const Form = () => {

  const [step, setStep] = useState(0)
  const [ pasos, setPasos] = useState({})

  useEffect(()=>{
    console.log("Se ha actualizado el step: ", step)
  }, [step])

  // useEffect( async ()=>{
  //   try {
  //     const data = await fetch("https://jsonplaceholder.typicode.com/todos/1/posts")
  //     const posts = await data.json()
  //     console.log(posts)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // })

  const updateStep = (step) =>{
    setStep(step)
  

  }

  const steps = {
    0: <DatosUsuario updateStep={updateStep}/>, 
    1: <DatosPersonales updateStep={updateStep}/>, 
    2: <DatosEntrega updateStep={updateStep}/>, 
    3: <Complete />
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    let newStep = step + 1
    setStep(newStep)
    console.log("newStep", newStep)
    console.log("Step", step)
  }

  const handleChange = (element, position, currentStep, validator) =>{
    const value = element.target.value
    const valid = validator(value)
    console.log(value)
    console.log("valid", valid)
    console.log("Position", position)
    console.log("CurrentStep", currentStep)
    console.log("Validator", validator)
  }

  const stepsFlow = {
    0: {
      inputs: [
        {
          label: "Correo electrónico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresar un correo válido",
          validator: ValidarEmail,
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperTex: "Ingresa una contraseña válida, al menos 8 caracteres y máximo 20.",
          validator: ValidarPassword,
        },
      ],
      buttonText: "Siguiente",
      onSubmit: onSubmit,
    },
    1: {
      inputs: [
        {
          label: "Correo electrónico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresar un correo válido",
          validator: ValidarEmail,
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperTex: "Ingresa una contraseña válida, al menos 8 caracteres y máximo 20.",
          validator: ValidarPassword,
        },
      ],
      buttonText: "Siguiente",
      onSubmit: onSubmit,
    }
  }

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        { step < 3 && <Stepper step={step}/>}
        {
          //steps[step]//steps[step]
        }
        <Step data={stepsFlow[step]} step={step} />
      </FormSpace>
    </Box>
  );
};

export default Form;
