import "./styles.css";
import { Button } from "../../Button";

export function LandingPage({ setPage }) {
  return (
    <main className="main_inicio">
      <div>
        <img src="./img/logo1.svg" alt="logo" />
        <h1>Centralize o controle das suas finanças</h1>
        <span>de forma rápida e segura</span>
        <Button 
        text    = "Iniciar"
        classes = "button_default"
        func    = {() => setPage("HomePage")}
        />
      </div>
      <img src="./img/illustration.svg" alt="ilustração" />
    </main>
  );
}
