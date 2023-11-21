import { useState } from "react";

export function useToggleBtn(defaultValue) {
  const [value, setvalue] = useState(defaultValue);

  function toggleBtn(value) {
    setvalue((currntValue) =>
      typeof value === "boolean" ? value : !currntValue
    );
  }

  return [value, toggleBtn];
}
