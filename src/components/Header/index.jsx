import "./style.css";
import { Button } from "../Button";

export function Header({ setPage }) {
  return (
    <header>
      <div>
        <img src="./img/logo2.svg" alt="logo" />
        <Button 
        text    = "Inicio"
        classes = "button_secundary"
        func    = {() => setPage("LandingPage")}
        />
      </div>
    </header>
  );
}
