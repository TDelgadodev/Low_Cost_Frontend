import { Button, Container, Form, Row } from "react-bootstrap";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { useEffect, useState } from "react";

export const EditProductDash = () => {
  const { metricsProducts, createProductProvider, getProductDetailsProvider } =
    useAdmin();
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({
    title: "",
    price: "",
    description: "",
    brandId: "",
    categoryId: "",
    stock: "",
    offer: false,
    visible: false,
    imageFile: [],
  });

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

      await createProductProvider(values);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await getProductDetailsProvider(id);
        if (data) {
          setInitialValues(data);
        }
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetails();
  }, [getProductDetailsProvider, id]);


  return (
    <Container className="pt-5">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        enableReinitialize={true} 
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <div className="d-flex justify-content-between">
              <h4>Editar Producto </h4>
            </div>
            <hr />
            <Row>
              <Form.Group className="col-12 col-md-6 mb-3">
                <Form.Label htmlFor="name" className="form-label">
                  Titulo *
                </Form.Label>
                <Field
                  type="text"
                  className={`form-control`}
                  name="title"
                  placeholder="Ingrese el titulo"
                  onFocus={() => formik.setFieldError("title", "")}
                  value={initialValues.title}
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
                  name="price"
                  placeholder="Ingrese el precio"
                  onFocus={() => formik.setFieldError("price", "")}
                  value={initialValues.price}
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
                  style={{ resize: "none" }}
                  placeholder="Coloque una descripcion"
                  onFocus={() => formik.setFieldError("description", "")}
                  value={initialValues.description}
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
                <Field as="select" className={`form-control`} name="brandId">
                  <option hidden defaultValue>
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
                <Field as="select" className={`form-control`} name="categoryId">
                  <option hidden defaultValue>
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
              <Form.Group className="col-12 col-md-6 mb-3">
                <Form.Label htmlFor="stock" className="form-label">
                  Stock *
                </Form.Label>
                <Field
                  type="number"
                  className={`form-control`}
                  name="stock"
                  placeholder="Coloque un stock"
                  onFocus={() => formik.setFieldError("stock", "")}
                  value={initialValues.stock}
                />
              </Form.Group>
              <ErrorMessage
                name="stock"
                component={Form.Text}
                style={{ fontFamily: "Poppins" }}
                className="text-danger ms-2"
              ></ErrorMessage>
              <Form.Group className="col-12 col-md-6 mb-3">
                <div className="form-check form-switch">
                  <Field
                    className="form-check-input"
                    type="checkbox"
                    name="offer"
                    id="flexSwitchCheckOffer"
                    value={initialValues.offer}
                  />
                  <Form.Label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckOffer"
                  >
                    Oferta
                  </Form.Label>
                </div>
              </Form.Group>
              <Form.Group className="col-12 mb-3">
                <div className="d-flex justify-content-around">
                  <div className="form-check form-switch">
                    <Field
                      className="form-check-input"
                      type="checkbox"
                      name="visible"
                      id="flexSwitchCheckVisible"
                      value={initialValues.visible}
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
                <Form.Label htmlFor="">Imagenes *</Form.Label>
                <div className="input-group">
                  <input
                    type="file"
                    name="imageFile"
                    id="imageFile"
                    className="form-control"
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
                    className="btn btn-success"
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
