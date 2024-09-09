import { useState } from "react";
import { AddCategory, GifGrid } from "./Components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Jujutsu Kaisen"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return; //Para que no haya categorias duplicadas
    setCategories([newCategory, ...categories]);
  };
  console.log(categories);

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {/* Atra ves de props le paso la nueva categoria*/}

      {
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        )) //Key para que react renderize bien el map.
      }
    </>
  );
};
