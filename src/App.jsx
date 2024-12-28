import { useState } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import "./App.css";
import useMultistepForm from "./useMultistepForm";
import { UserForm } from "./UserForm";
import Background from "./Background";
/* 
steps =>  array of jsx components representing eact step. one component for a step
*/
const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "a@b.com",
  password: "",
};
function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const [animation, setAnimation] = useState("slide-enter");

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, isFirstStep, isLastStep, step, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields}></UserForm>,
      <AddressForm {...data} updateFields={updateFields}></AddressForm>,
      <AccountForm {...data} updateFields={updateFields}></AccountForm>,
    ]);

  function onSubmit(e) {
    e.preventDefault();
    if (isLastStep) alert("Successful Account Creation");
  }
  const nextStep = () => {
   
    if (currentStepIndex < steps.length - 1) {
      setAnimation("slide-exit");

      setTimeout(() => {
        next();
     
        setAnimation("slide-enter");
      }, 100);
    }
  };
  const prevStep = () => {
    if (currentStepIndex > 0) {
      setAnimation("slide-exit");
      setTimeout(() => {
        back();
        setAnimation("slide-enter");
      }, 100);
    }
  };

  return (
    <>
    <Background></Background>
    <div className="container">

      <form onSubmit={onSubmit}>
        <div className="step-number">
          {currentStepIndex + 1} / {steps.length}
        </div>
        <h2>STEP {currentStepIndex + 1}</h2>
        <div className={`form-step ${animation}`}>{step}</div>

        <div className="footer">
          {!isFirstStep && (
            <button type="button" onClick={prevStep}>
              Back
            </button>
          )}
          <button type="submit" onClick={nextStep}>
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default App;
