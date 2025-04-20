import { useState } from "react";

export function useFormularioPaciente() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    edad: "",
    correo: "",
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const validar = () => {
    const nuevosErrores = {};
    if (!formulario.nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio";
    if (!formulario.edad.trim()) nuevosErrores.edad = "La edad es obligatoria";
    if (!formulario.correo.trim()) nuevosErrores.correo = "El correo es obligatorio";
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  return {
    formulario,
    errores,
    handleChange,
    validar,
  };
}
