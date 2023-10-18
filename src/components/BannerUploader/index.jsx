import { Component } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import CarouselBanner from "../CarouselBanner";

class BannerUploader extends Component {
  state = {
    images: [],
    uploadedImages: [],
    uploadMessage: "",
    errorMessage: "",
  };

  handleFileChange = (e) => {
    const files = e.target.files;
    this.setState({ images: files });
  };

  handleUpload = async () => {
    const { images } = this.state;
    const formData = new FormData();

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      /* const response = await axios.post("http://localhost:3000/api/upload/upload-images", formData, { */
      const response = await axios.post("https://gabriellanzillotti.wnpower.host/api/upload/upload-images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      this.setState({
        uploadedImages: response.data.data,
        uploadMessage: "Imágenes cargadas con éxito",
        images: [], // Restablece el estado de las imágenes
      });

      toast.success(
        "Imágenes cargadas con éxito."
      );

      setTimeout(() => {
        window.location.reload();
      }, 2000);

    } catch (error) {
      this.setState({
        errorMessage: "Error al cargar las imágenes: " + error.message,
      });

      toast.error(
        "Error al cargar las imágenes."
      );
    }
  };
  handleDeleteOldImages = async () => {
    try {
      /* const response = await axios.delete("http://localhost:3000/api/upload/delete-images"); */
      const response = await axios.delete("https://gabriellanzillotti.wnpower.host/api/upload/delete-images");

      if (response.data.ok) {
        this.setState({
          uploadMessage: "",
          errorMessage: "",
        });

        toast.success(
          "Imágenes anteriores eliminadas con éxito."
        );

        setTimeout(() => {
          window.location.reload();
        }, 2000);

      } else {
        this.setState({
          errorMessage: "Error al eliminar las imágenes antiguas.",
        });
        toast.error(
          "Error al eliminar las imágenes anteriores."
        );
      }
    } catch (error) {
      this.setState({
        errorMessage: "Error al eliminar las imágenes antiguas: " + error.message,
      });
    }
  };

  render() {
    const { uploadMessage, errorMessage } = this.state;

    return (
      <div>
        <h3 className='pb-3'>Cargar Banners para Carrusel del Home</h3>
        <p>A continuación debe cargar 3 imágenes para el carrusel, en el caso de que no se cargue ningúna se establecerá una imagen por defecto.</p>
        <p>En el caso de que quiera sustituir imágenes cargadas por usted mismo anteriormente, primero seleccione el botón Eliminar Imágenes Anteriores.</p>
        <p>Para cargar imágenes primero seleccione Elegir archivos, cargue 3 banners y luego presione Subir Banners.</p>
        <p className='pb-3'>Atención: Los archivos deben estar en formato JPG/PNG y con dimensiones de 2670px por 625px en horizontal.</p>
        <input type="file" multiple accept="image/*" onChange={this.handleFileChange} />
        <button onClick={this.handleUpload} className='mx-3' style={{ color: 'white', backgroundColor: '#007BFF' }}>Subir Banners</button>
        <button onClick={this.handleDeleteOldImages} style={{ color: 'white', backgroundColor: '#007BFF' }}>Eliminar Imágenes Anteriores</button>
        {uploadMessage && <p>{uploadMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
        <div className='pt-5'>
          <p>Vista previa:</p>
          <CarouselBanner images={[]} />
        </div>
      </div>
    );
  }
}

export default BannerUploader;
