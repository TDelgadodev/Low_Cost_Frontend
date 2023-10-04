import { Component } from "react";
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
      const response = await axios.post("http://localhost:3000/api/upload/upload-images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });


      this.setState({
        uploadedImages: response.data.data,
        uploadMessage: "Imágenes cargadas con éxito",
        images: [], // Restablece el estado de las imágenes
      });
    } catch (error) {
      this.setState({
        errorMessage: "Error al cargar las imágenes: " + error.message,
      });
    }
  };
  handleDeleteOldImages = async () => {
    try {
      const response = await axios.delete("http://localhost:3000/api/upload/delete-images");

      if (response.data.ok) {
        this.setState({
          uploadMessage: "",
          errorMessage: "",
        });
        alert("Imágenes antiguas eliminadas con éxito.");
      } else {
        this.setState({
          errorMessage: "Error al eliminar las imágenes antiguas.",
        });
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
        <h2>Cargar Banners</h2>
        <input type="file" multiple accept="image/*" onChange={this.handleFileChange} />
        <button onClick={this.handleUpload}>Subir Banners</button>
        <button onClick={this.handleDeleteOldImages}>Eliminar Imágenes Antiguas</button>
        {uploadMessage && <p>{uploadMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
        <CarouselBanner images={[]} />
      </div>
    );
  }
}

export default BannerUploader;
