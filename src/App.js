import "./styles.css";

import { useToggleBtn } from "./toggleButton";
import Button from "./customButton";

export default function App() {
  const [value, toggleButton] = useToggleBtn(false);
  const [close, setClose] = useToggleBtn(true);
  const [cuBtn, setCuBtn] = useToggleBtn(true);

  return (
    <div className="App">
      <h1>Custom Button Implement for in the App</h1>

      {value && <p>show the message when button click</p>}
      <Button
        onClick={toggleButton}
        childern="click"
        style={{
          background: "blue",
          color: "white",
          border: "none",
          width: "50px",
          height: "30px",
          borderRadius: "10px",
          cursor: "pointer"
        }}
      />
      <div style={{ display: "flex" }}>
        <div
          style={{
            background: "black",
            width: "500px",
            padding: "20px",
            margin: "19px"
          }}
        >
          <h4
            style={{
              fontSize: "19px",
              color: "green",
              textDecoration: "underline"
            }}
          >
            CustomButtonComponent
          </h4>
          {cuBtn && (
            <p style={{ color: "white", textAlign: "left" }}>
              The children property is interesting because it is handled
              automatically by React and does not need to be explicitly passed
              when defining a component. The property can either take in an
              entirely new node if you were to define any more React nodes in
              the future. Otherwise, you can pass in text which will show up on
              top of the button, as we will be doing for the sake of simplicity
              in this article.
            </p>
          )}
          <Button
            onClick={setCuBtn}
            childern={`${cuBtn ? "close" : "ReadMore"}`}
            style={{
              background: "green",
              color: "white",
              border: "none",
              width: "auto",
              height: "30px",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          />
        </div>
        <div
          style={{
            background: "black",
            width: "500px",
            padding: "20px",
            margin: "19px"
          }}
        >
          <h4
            style={{
              fontSize: "19px",
              color: "green",
              textDecoration: "underline"
            }}
          >
            useToggle is a custom React hook
          </h4>
          {close && (
            <p style={{ color: "white", textAlign: "left" }}>
              useToggle is a custom React hook that allows a component to toggle
              a value between true and false. It uses the useState hook to
              manage its state. First, the hook accepts a defaultValue argument
              to initialize the value state. Then, it returns an array with two
              elements: the current value and a function called toggleValue that
              toggles the value between true and false. The function accepts one
              parameter. It sets the value to the parameter If the parameter is
              boolean. Otherwise, it toggles the current value.
            </p>
          )}
          <Button
            onClick={setClose}
            childern={`${close ? "close" : "ReadMore"}`}
            style={{
              background: "red",
              color: "white",
              border: "none",
              width: "auto",
              height: "30px",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          />
        </div>
      </div>
    </div>
  );
}
