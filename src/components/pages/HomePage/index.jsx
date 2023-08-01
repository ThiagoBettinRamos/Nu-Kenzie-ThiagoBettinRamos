import "./style.css";
import { Header } from "../../Header";
import { Form } from "../../Form";
import { useState } from "react";
import { Button } from "../../Button";
import { TransactionCard } from "../../TransactionCard";
import { EmptyArr } from "../../EmptyArr";

export function HomePage({ setPage }) {
  const [listTransactions, setListTransactions] = useState([{description : "Salário", type : "Entrada", value : 50000, id : 1}, {description : "Conta de Luz", type : "Saída", value : -875, id : 2}])
  const [category, setCategory] = useState("")
  const filteredTransactions = listTransactions.filter(transaction => transaction.type.includes(category))
  const [totalValue, setTotalValue] = useState(49125)
  return (
    <div>
      <Header setPage={setPage} />
      <main>
        <section className="left">
        <Form 
        list           = {listTransactions}
        setList        = {setListTransactions}
        totalValue     = {totalValue}
        setTotalValue  = {setTotalValue}
        />
        {filteredTransactions.length > 0 && 
         (<div className="container_total_value">
         <div>
          <h2>Valor total:</h2>
          <span>R$ {totalValue}</span>
         </div>
         <span>O valor se refere ao saldo</span>
       </div>
        )}
        </section>
        <section className="right">
          <div>
            <h2>Resumo financeiro</h2>
            <div>
              <Button
                text    = "Todos"
                classes = "button_resume"
                func = {
                  () => setCategory("")
                }
                isSelected={category === "" ? true : false}
              />
              <Button
                text    = "Entradas"
                classes = "button_resume"
                func = {
                  () => setCategory("Entrada")
                }
                isSelected={category === "Entrada" ? true : false}
              />
              <Button
                text    = "Despesas"
                classes = "button_resume"
                func = {
                  () => setCategory("Saída")
                }
                isSelected={category === "Saída" ? true : false}
              />
            </div>
          </div>
    
            {listTransactions.length === 0 ?
            (<EmptyArr/>) : 
            (<ul>
            {filteredTransactions.map( transaction => 
            <TransactionCard
              description    = {transaction.description}
              value          = {transaction.value}
              type           = {transaction.type}
              id             = {transaction.id}
              key            = {transaction.id}
              transaction    = {listTransactions}
              setTransaction = {setListTransactions}
              totalValue     = {totalValue}
              setTotalValue  = {setTotalValue}
            />)}
            </ul>)}   
        </section>
      </main>
    </div>
  );
}
