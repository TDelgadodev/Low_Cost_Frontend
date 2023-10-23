import { Button, Container, Form, Row } from "react-bootstrap";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BrandsContext } from "../../context/BrandsProvider";
import { CategoriesContext } from "../../context/CategoriesProvider";

export const EditProductDash = () => {
  const {
    getProductDetailsProvider,
    updateProductProvider,
    getMetricsProducts,
  } = useAdmin();

  const { brands } = useContext(BrandsContext);
  const { categories } = useContext(CategoriesContext);

  const navigate = useNavigate();

  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({
    title: "",
    price: "",
    priceUSD: "",
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
    price: Yup.number(),
    priceUSD: Yup.number().nullable(),
    description: Yup.string().required("La descripción es obligatoria"),
    brandId: Yup.string().required("La marca es obligatoria"),
    categoryId: Yup.string().required("La categoría es obligatoria"),
    stock: Yup.number().required("El stock es obligatorio"),
    offer: Yup.boolean().nullable(),
    visible: Yup.boolean().nullable(),
  });

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await getProductDetailsProvider(id);
        if (response.ok && response.data) {
          const productData = response.data;

          setInitialValues({
            title: productData.name,
            price: productData.price,
            priceUSD: productData.priceUSD || "",
            description: productData.description,
            brandId: productData.brandId,
            categoryId: productData.categoryId,
            stock: productData.stock,
            offer: productData.offer,
            visible: productData.visible,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetails();
  }, [getProductDetailsProvider, id]);

  const handleUpdateProduct = async (values, { setSubmitting }) => {
    try {
      const updatedValues = {
        ...values,
        brandId: parseInt(values.brandId),
        categoryId: parseInt(values.categoryId),
      };
      const updatedProductResponse = await updateProductProvider(
        updatedValues,
        id
      );
      const editedProduct = updatedProductResponse.data?.editedProduct[0];
      if (editedProduct === 1) {
        setTimeout(() => {
          toast.success(
            `El producto ${updatedValues.title} se ha actualizado exitosamente.`
          );
          navigate("/dashboard/products");
          getMetricsProducts();
        }, 2000);
      }
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container className="pt-5">
      <Formik
        initialValues={initialValues}
        onSubmit={handleUpdateProduct}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <div className="d-flex justify-content-between">
              <h4>Editando el Producto: {initialValues.title}</h4>
            </div>
            <hr />
            <Row>
              <Form.Group className="col-12 mb-3">
                <Form.Label htmlFor="title" className="form-label">
                  Título *
                </Form.Label>
                <Field
                  type="text"
                  className={`form-control`}
                  name="title"
                  placeholder="Ingrese el titulo"
                  onFocus={() => formik.setFieldError("title", "")}
                  value={formik.values.title}
                  onChange={formik.handleChange}
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
                  Precio * (Sin punto o coma)
                </Form.Label>
                <Field
                  type="number"
                  className={`form-control`}
                  name="price"
                  placeholder="Ingrese el precio"
                  onFocus={() => formik.setFieldError("price", "")}
                  value={formik.values.price}
                />
                <ErrorMessage
                  name="price"
                  component={Form.Text}
                  style={{ fontFamily: "Poppins" }}
                  className="text-danger ms-2"
                ></ErrorMessage>
              </Form.Group>
              <Form.Group className="col-12 col-md-6 mb-3">
                <Form.Label htmlFor="priceUSD" className="form-label">
                  Precio en USD (Opcional)
                </Form.Label>
                <Field
                  type="number"
                  className={`form-control`}
                  name="priceUSD"
                  placeholder="Ingrese el precio en USD"
                  onFocus={() => formik.setFieldError("priceUSD", "")}
                  value={formik.values.priceUSD}
                />
                <ErrorMessage
                  name="priceUSD"
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
                  value={formik.values.description}
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
                  {brands.map((brands, index) => (
                    <option key={index} value={brands.id}>
                      {brands.name}
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
                <Form.Label htmlFor="categoryId" className="form-label">
                  Categoría *
                </Form.Label>
                <Field as="select" className={`form-control`} name="categoryId">
                  <option hidden defaultValue>
                    Seleccione...
                  </option>
                  {categories.map((categories, index) => (
                    <option key={index} value={categories.id}>
                      {categories.name}
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
                  name="stock"
                  placeholder="Coloque un stock"
                  onFocus={() => formik.setFieldError("stock", "")}
                  value={formik.values.stock}
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
                    /* value={formik.values.offer} */
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
                    /* value={formik.values.visible} */
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
                <Form.Label htmlFor="">
                  Imágenes * <small>(máx 3 archivos)</small>
                </Form.Label>
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
                    className="mx-2 btn btn-success"
                    onClick={() => document.getElementById("imageFile").click()}
                  >
                    Seleccionar
                  </button>
                  <Button variant="dark" className="mx-2">
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
