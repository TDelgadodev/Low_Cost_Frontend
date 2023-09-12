import { Button, Form, Row } from "react-bootstrap";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import useAdmin from "../../hooks/useAdmin";

export const AddProductDash = () => {
  const { metricsProducts } = useAdmin();
  const initialValues = {
    title: "",
    price: "",
    description: "",
    brandId: "",
    categoryId: "",
    stock: "",
    offer: "",
    visible: false,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("El título es obligatorio"),
    price: Yup.number().required("El precio es obligatorio"),
    description: Yup.string().required("La descripción es obligatoria"),
    brandId: Yup.string().required("La marca es obligatoria"),
    categoryId: Yup.string().required("La categoría es obligatoria"),
    stock: Yup.number().required("El stock es obligatorio"),
    offer: Yup.number().required("La oferta es obligatoria"),
    visible: Yup.boolean().nullable(),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      values = {
        ...values,
        brandId: parseInt(values.brandId),
        categoryId: parseInt(values.categoryId),
      };
      console.log(values);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <div className="d-flex justify-content-between">
            <h4>Agregar Curso </h4>
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
              <Field as="select" className={`form-control`} name="categoryId">
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
              />
            </Form.Group>
            <ErrorMessage
              name="stock"
              component={Form.Text}
              style={{ fontFamily: "Poppins" }}
              className="text-danger ms-2"
            ></ErrorMessage>
            <Form.Group className="col-12 col-md-6 mb-3">
              <Form.Label htmlFor="offer" className="form-label">
                Oferta *
              </Form.Label>
              <Field
                type="number"
                className="form-control"
                name="offer"
                placeholder="Coloque un porcentaje de oferta"
                onFocus={() => formik.setFieldError("offer", "")}
              />
              <ErrorMessage
                name="offer"
                component={Form.Text}
                style={{ fontFamily: "Poppins" }}
                className="text-danger ms-2"
              ></ErrorMessage>
            </Form.Group>
            <Form.Group className="col-12 mb-3">
              <div className="d-flex justify-content-around">
                <div className="form-check form-switch">
                  <Field
                    className="form-check-input"
                    name="visible"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                  />
                  <Form.Label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckChecked"
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
              <Form.Label htmlFor="">Imagenes</Form.Label>
              <div className="d-flex align-items-center justify-content-around"></div>
            </Form.Group>
            <div className="col-12 mb-3">
              <hr />
              <div className="d-flex align-items-center justify-content-end">
                <Button variant="dark" className="mx-2 ">
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
  );
};
