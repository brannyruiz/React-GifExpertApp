import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  // target es el evento que se recibe del DOM para el imput
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
    //console.log(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    //no agregar datos cuando es menor a una letra
    if (inputValue.trim().length <= 1) return;

    //añadir categorias
    //setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
