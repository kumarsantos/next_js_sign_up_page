import React from "react";
import { FormInputElement } from "./FormInputElement";
import { FormDropDownElement } from "./FormDropDownElement";

const FormElements = ({ element, register, idx }) => {
  switch (element.type) {
    case "input":
      return (
        <FormInputElement
          key={idx}
          img={element.img}
          placeholder={element.placeholder}
          register={register}
          name={element.name}
        />
      );
    case "selection":
      return (
        <FormDropDownElement
          key={idx}
          placeholder={element.placeholder}
          options={element.options}
          img={element.img}
          name={element.name}
          register={register}
        />
      );
    default:
      null;
  }
};

export default FormElements;
