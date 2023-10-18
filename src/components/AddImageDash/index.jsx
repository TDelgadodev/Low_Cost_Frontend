import { useEffect, useState } from "react";
import PropTypes from "prop-types";


export const ProductAddImage = ({file, setFieldValue, main, name}) => {

    const [preview, setPreview] = useState(null);

    useEffect(() => {
        const reader  = new FileReader();
        if(file){
            reader.readAsDataURL(file);
            reader.onload = () => {
                setPreview(reader.result)
            }
        }
     
    }, [file]);

  return (
    <div className="d-flex flex-column align-items-center">
    {file ? (
      <>
        <div className="position-relative">
          <img
            className="mb-3"
            width={"100px"}
            height={"100px"}
            src={preview}
            alt=""
          />
          <button
            style={{ position: "absolute", top: "-5px", right: "-5px" }}
            className="btn btn-sm btn-danger rounded-circle px-2"
            onClick={()=>setFieldValue(name,null)}
          >
            X
          </button>
        </div>
        <input
          className="form-control"
          type="file"
          name={name}
          id={name}
          hidden
          onChange={(event) => {
            setFieldValue(name, event.target.files[0]);
          }}
        />
        <label
          className={`btn btn-sm btn-${main ? "primary" : "secondary"}`}
          htmlFor={name}
        >
          Cambiar
        </label>
      </>
    ) : (
      <>
        <div
          className="border mb-3"
          style={{ width: "100px", height: "100px" }}
        ></div>
        <input
          className="form-control"
          type="file"
          name={name}
          id={name}
          hidden
          onChange={(event) => {
            setFieldValue(name, event.target.files[0]);
          }}
        />
        <label
          className={`btn btn-sm btn-${main ? "primary" : "secondary"}`}
          htmlFor={name}
        >
          {main ? "Principal *" : "Agregar"}
        </label>
      </>
    )}
  </div>
  )
}

ProductAddImage.propTypes = {
    file: PropTypes.object,
    setFieldValue: PropTypes.func,
    main: PropTypes.bool,
    name: PropTypes.string,
    values: PropTypes.object,
  };