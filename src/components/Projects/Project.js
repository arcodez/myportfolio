import React from "react";
import { gallery } from "../../configs";

function Project() {
  const GenerarProjects = () => {
    return gallery.map((proyecto, index) => {
      const { name, desc, image } = proyecto;
      return(
        <div key={index}>
          <img src={image} alt=""/>
          <p>{desc}</p>
          <h1>{name}</h1>
        </div>
      );
    })
  }

  return (
    <>

    {GenerarProjects()}
    </>
   );
}

export default Project;
