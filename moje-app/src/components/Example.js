import "./Example.css"
import { useState } from "react"


const Example = () => {
    
    const [title, setTitle] = useState("Muj první title")
    const [buttonText, setButtonText] = useState("Změněný název")


    const buttonHandler = () => {
        setTitle("Nový text v titlu")
    }

    const buttonHandler2 = () => { 
        setTitle("XXXXXXXXX")
  }
  const deleteAll = () => { 
    setTitle("")
  }
  const change = () => { 
    setTitle("Nový text tlačíčka")
  }
  const buttonChange = () => { 
    setButtonText("Nový text tlačítka")
  }






    return (
        <div className="text-button-changer">
            <h2>{title}</h2>
            <button type="button" onClick={buttonHandler}>Změnit title</button>
            <button type="button" onClick={buttonHandler2}>Opět změnit</button>
            <button type="button" onClick={deleteAll}>Vymazat title</button>
            <button type="button" onClick={buttonChange}>{buttonText}</button>
        </div>
    )
}

export default Example
