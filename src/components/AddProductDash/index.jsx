import { Button, Container, Form, Row } from "react-bootstrap";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import useAdmin from "../../hooks/useAdmin";
import { useNavigate } from "react-router-dom"; 
import { toast } from "react-toastify";

export const AddProductDash = () => {
  const navigate = useNavigate(); 
  const { metricsProducts, createProductProvider,getMetricsProducts } = useAdmin();
  const initialValues = {
    title: "",
    price: "",
    description: "",
    brandId: "",
    categoryId: "",
    stock: "",
    offer: false,
    visible: false,
    imageFile: [],
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("El título es obligatorio"),
    price: Yup.number().required("El precio es obligatorio"),
    description: Yup.string().required("La descripción es obligatoria"),
    brandId: Yup.string().required("La marca es obligatoria"),
    categoryId: Yup.string().required("La categoría es obligatoria"),
    stock: Yup.number().required("El stock es obligatorio"),
    offer: Yup.boolean().nullable(),
    visible: Yup.boolean().nullable(),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      values = {
        ...values,
        brandId: parseInt(values.brandId),
        categoryId: parseInt(values.categoryId),
      };

      const formData = new FormData();
      for (const key in values) {
        if (key === "imageFile") {
          for (let i = 0; i < values[key].length; i++) {
            formData.append("imageFiles", values[key][i]);
          }
        } else {
          formData.append(key, values[key]);
        }
      }
      await createProductProvider(formData);

      setTimeout(() => {
        toast.success("Producto creado con éxito");
        navigate("/dashboard/products"); 
        getMetricsProducts()
      }, 2000); 

      await createProductProvider(values);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container className="pt-5">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <div className="d-flex justify-content-between">
              <h4>Agregar Producto </h4>
            </div>
            <hr />
            <Row>
              <Form.Group className="col-12 col-md-6 mb-3">
                <Form.Label htmlFor="name" className="form-label">
                  Título *
                </Form.Label>
                <Field
                  type="text"
                  className={`form-control`}
                  style={{ borderColor: "rgba(206, 206, 206, 0.795)" }}
                  name="title"
                  placeholder="Ingresá el título"
                  onFocus={() => formik.setFieldError("title", "")}
                />
                <ErrorMessage
                  name="title"
                  component={Form.Text}
                  style={{ fontFamily: "Poppins" }}
                  className="text-danger ms-2"
                ></ErrorMessage>
              </Form.Group>
              <Form.Group className="col-12 col-md-6 mb-3">
                <Form.Label htmlFor="price" className="form-label">
                  Precio *
                </Form.Label>
                <Field
                  type="number"
                  className={`form-control`}
                  style={{ borderColor: "rgba(206, 206, 206, 0.795)" }}
                  name="price"
                  placeholder="Ingresá el precio"
                  onFocus={() => formik.setFieldError("price", "")}
                />
                <ErrorMessage
                  name="price"
                  component={Form.Text}
                  style={{ fontFamily: "Poppins" }}
                  className="text-danger ms-2"
                ></ErrorMessage>
              </Form.Group>
              <Form.Group className="col-12 mb-3">
                <Form.Label htmlFor="description" className="form-label">
                  Descripción *
                </Form.Label>
                <Field
                  as="textarea"
                  className={`form-control`}
                  name="description"
                  style={{ resize: "none", borderColor: "rgba(206, 206, 206, 0.795)" }}
                  placeholder="Colocá una descripción"
                  onFocus={() => formik.setFieldError("description", "")}
                ></Field>
                <ErrorMessage
                  name="description"
                  component={Form.Text}
                  style={{ fontFamily: "Poppins" }}
                  className="text-danger ms-2"
                ></ErrorMessage>
              </Form.Group>
              <Form.Group className="col-12 col-md-6 mb-3">
                <Form.Label htmlFor="brandId" className="form-label">
                  Marca *
                </Form.Label>
                <Field as="select" className={`form-control`} name="brandId" style={{ borderColor: "rgba(206, 206, 206, 0.795)" }}>
                  <option hidden defaultValue value="">
                    Seleccione...
                  </option>
                  {metricsProducts.data.map((product, index) => (
                    <option key={index} value={product.brand.id}>
                      {product.brand.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="brandId"
                  component={Form.Text}
                  style={{ fontFamily: "Poppins" }}
                  className="text-danger ms-2"
                ></ErrorMessage>
              </Form.Group>
              <Form.Group className="col-12 col-md-6 mb-3">
                <Form.Label htmlFor="category" className="form-label">
                  Categoría *
                </Form.Label>
                <Field as="select" className={`form-control`} name="categoryId" style={{ borderColor: "rgba(206, 206, 206, 0.795)" }}>
                  <option hidden defaultValue value="">
                    Seleccione...
                  </option>
                  {metricsProducts.data.map((product, index) => (
                    <option key={index} value={product.category.id}>
                      {product.category.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="categoryId"
                  component={Form.Text}
                  style={{ fontFamily: "Poppins" }}
                  className="text-danger ms-2"
                ></ErrorMessage>
              </Form.Group>
              <Form.Group className="col-12 mb-3">
                <Form.Label htmlFor="stock" className="form-label">
                  Stock *
                </Form.Label>
                <Field
                  type="number"
                  className={`form-control`}
                  style={{ borderColor: "rgba(206, 206, 206, 0.795)" }}
                  name="stock"
                  placeholder="Colocá un stock"
                  onFocus={() => formik.setFieldError("stock", "")}
                />
              </Form.Group>
              <ErrorMessage
                name="stock"
                component={Form.Text}
                style={{ fontFamily: "Poppins" }}
                className="text-danger ms-2"
              ></ErrorMessage>
              <Form.Group className="col-4 mb-3">
                <div className="d-flex justify-content-around">
                  <div className="form-check form-switch">
                    <Field
                      className="form-check-input"
                      type="checkbox"
                      name="offer"
                      id="flexSwitchCheckOffer"
                    />
                    <Form.Label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckOffer"
                    >
                      Oferta
                    </Form.Label>
                  </div>
                </div>
              </Form.Group>
              <Form.Group className="col-4 mb-3">
                <div className="d-flex justify-content-around">
                  <div className="form-check form-switch">
                    <Field
                      className="form-check-input"
                      type="checkbox"
                      name="visible"
                      id="flexSwitchCheckVisible"
                    />
                    <Form.Label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckVisible"
                    >
                      Visible
                    </Form.Label>
                  </div>
                </div>
                <ErrorMessage
                  name="visible"
                  component={Form.Text}
                  style={{ fontFamily: "Poppins" }}
                  className="text-danger ms-2"
                ></ErrorMessage>
              </Form.Group>
              <Form.Group className="col-12 mb-3">
                <Form.Label htmlFor="">Imágenes * <small>(máx 3 archivos)</small></Form.Label>
                <div className="input-group">
                  <input
                    type="file"
                    name="imageFile"
                    id="imageFile"
                    className="form-control"
                    style={{ borderColor: "rgba(206, 206, 206, 0.795)" }}
                    multiple
                    onChange={(event) => {
                      formik.setFieldValue("imageFile", event.target.files);
                    }}
                  />
                </div>
              </Form.Group>

              <div className="col-12 mb-3">
                <hr />
                <div className="d-flex align-items-center justify-content-end">
                  <button
                    type="button"
                    className="mx-2 btn btn-success"
                    onClick={() => document.getElementById("imageFile").click()}
                  >
                    Seleccionar
                  </button>
                  <Button
                    variant="dark"
                    className="mx-2"
                    onClick={formik.resetForm}
                  >
                    Limpiar
                  </Button>
                  <Button className="mx-2" type="submit">
                    Guardar
                  </Button>
                </div>
              </div>

              <div className="col-12"></div>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
