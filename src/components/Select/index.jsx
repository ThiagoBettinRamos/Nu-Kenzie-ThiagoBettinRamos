import { type } from "@testing-library/user-event/dist/type"
import "./style.css"

export function Select({ options, label, name, classes, func}){
    return(
        <div className={classes}>
        <label htmlFor={name}>{label}</label>
        <select onChange={(e) => func(e.target.value)} id={name}>{options.map(option => <option value={option}>{option}</option>)}</select>
        </div>
    )
}