import { useState } from "react";

export const useFormFields = (initialState) => {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function(event, value) {
      setValues({
        ...fields,
        [event.target.name || event.target.id]: value || event.target.value
      });
    }
  ];
}