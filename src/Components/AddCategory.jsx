import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  //recibimos el prop
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); //evito que se reinicie el form
    if (inputValue.trim().length <= 1) return;
    //setCategories((categories) => [inputValue, ...categories]); //coloco la nueva categoria adelante del resto.
    onNewCategory(inputValue.trim());
    setInputValue(""); //Para que el input value vuelva a estar vacio.
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
