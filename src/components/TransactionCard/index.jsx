import "./style.css"
import { Button } from "../Button"

export function TransactionCard({ description, value , type, id, transaction, setTransaction, totalValue, setTotalValue, }){
    return(
        <li className={type === "Entrada" ? "transaction_incoming" : "transaction_charge"}>
            <div className="description_container">
                <h2>{description}</h2>
                <span>{type}</span>
            </div>
            <div className="delete_container">
                <span>R$ {type === "Entrada" ? value.toFixed(2) : -value.toFixed(2)}</span>
                <Button
                classes = "button_delete"
                text ={(<img src="./img/trash.svg" alt="trash" />)}
                func = {() => {
                    setTransaction([...transaction].filter(transaction => transaction.id !== id))
                    setTotalValue(totalValue - value)
                }} 
                />
            </div>
        </li>
    )


}