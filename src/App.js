import { MainSpace, ImageSpace, FormSpace } from "./styles";
import Form from "./Form";
import { Button } from "@mui/material";
import { CounterContext } from "./Context";
import { useContext } from "react";


function App() {
  const counterData = useContext(CounterContext)
  console.log(counterData)
  return (
    <MainSpace>
      <ImageSpace />
      <FormSpace>
        <Form />
        <div>
        <Button variant="contained" onClick={()=> counterData.resta()}>-</Button>
        <Button variant="contained" onClick={ () => counterData.suma()}>+</Button>
        </div>
      </FormSpace>
    </MainSpace>
  );
}

export default App;
