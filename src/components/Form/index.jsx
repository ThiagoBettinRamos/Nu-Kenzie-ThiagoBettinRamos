import "./style.css";
import { Input }    from "../Input";
import { Select }   from "../Select";
import { Button }   from "../Button";
import { useState } from "react";

export function Form({ list, setList, totalValue, setTotalValue }) {
  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")
  const [type, setType]   = useState("Entrada")
  const lastId            = list.length > 0 ? [...list].reverse()[0].id : 0
  const newTransaction    = {
    description :  description,
    value : type === "Saída" ? Number(-value) : Number(value), 
    type  : type,
    id    : lastId + 1
  }
  return (
    <form className = "form-container" onSubmit={(e) => {
      e.preventDefault()
      setTotalValue(totalValue + Number(type === "Entrada" ? value : -value))
      setList([...list, newTransaction])
      setDescription("")
      setValue("")
      
      }}>
        {console.log(list)}
      <Input
        classes     = "input_description"
        label       = "Descrição"
        name        = "description"
        type        = "text"
        placeholder = "Digite aqui sua descrição"
        span        = "Ex: Compra de roupas"
        func        = {setDescription}
        value       = {description}
      />
      <Input
        classes = "input_value"
        label   = "Valor"
        name    = "value"
        type    = "number"
        span    = "R$"
        func    = {setValue}
        value   = {value}
      />
      <Select 
        classes = "select_type"
        label   = "Tipo de valor"
        name    = "type"
        options = {["Entrada", "Saída"]}  
        func    = {setType}

      />
      <Button
        text    = "Inserir valor"
        classes = "button_insert"
        />
    </form>
  );
}
