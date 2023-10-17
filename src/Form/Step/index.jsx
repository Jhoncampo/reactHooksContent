import React, {useState, useContext} from "react";
import { TextField, Button, Box } from "@mui/material";
import { CounterContext } from "../../Context";
import  UseAuth from "../../Hooks/useAuth";

const Step = ({ data, step}) => {

    const { inputs, buttonText, onSubmit } = data
    const counterData = useContext(CounterContext)
    const access = UseAuth(counterData.user.jwt)
    console.log(access)
    

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
            onSubmit={onSubmit}
        >
            <strong>El valor del contador es: { counterData.count} </strong>
            {
                inputs.map( (input, i) => {
                    const {label, type, value, valid, onChange, helperText, validator } = input
                    return(
                        <TextField
                            key = {i}
                            label= { label }
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            type={ type }
                            error={valid === false}
                            helperText={valid === false && { helperText}}
                            value={ value }
                            onChange={ (e) => onChange(e, i, step, validator) }
                        />
                    )
                })
            }
            <Button variant="contained" type="submit">
                { buttonText }
            </Button>
        </Box>
      );
}

export default Step;