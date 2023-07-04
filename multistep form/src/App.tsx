import { FormEvent, useState } from "react";
import AccountFrom from "./components/AccountForm";
import AddressForm from "./components/AddressForm";
import UserDetailFrom from "./components/UserDetailForm";
import useMultipleForm from "./useMultipleForm";

export type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: ""
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return {...prev, ...fields}
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } = useMultipleForm([
    <UserDetailFrom {...data} updateFields={updateFields}/>,
    <AddressForm {...data} updateFields={updateFields}/>,
    <AccountFrom {...data} updateFields={updateFields}/>
  ]);
  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("Successful account created")
  }
  return (
    <div className="main">
      <form onSubmit={onSubmit} style={{width: "100%"}}>
        <div className="display-step">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="button-container">
          {!isFirstStep && <button type="button" onClick={back} className="btn">Back</button>}
          <button type="submit"  className="btn">{isLastStep ? "Finished" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
