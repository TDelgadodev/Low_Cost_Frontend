import { useEffect, useState } from 'react';
import { useParams,useNavigate  } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useProducts } from '../../hooks/useProduct'; 
import { toast } from 'react-toastify';
import { deleteProductService } from '../../services/admin.service';
import  useAdmin  from '../../hooks/useAdmin'; 


const DeleteProduct = () => {
  const { id } = useParams();
  const { getProduct } = useProducts(); 
  const navigate = useNavigate(); 
  const { getMetricsProducts } = useAdmin(); 



  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 


  useEffect(() => {
    const fetchProduct = async () => {
        setIsLoading(true); 
      try {
        const productData = await getProduct(id);
        setProduct(productData);
      } catch (error) {
        console.error(error.message);
      }finally {
        setIsLoading(false); 
      }
    };

    fetchProduct();
  }, [getProduct, id]);

  const handleDelete = async () => {
    setIsLoading(true); 
    try {
        await deleteProductService(id);
        toast.success(`El producto ${product.name} fue eliminado con exito`);
        navigate('/dashboard/products');
        getMetricsProducts();
    } catch (error) {
        console.log(error);
      console.error(error.message);
    }finally {
        setIsLoading(false); 
    }
  };

  if (isLoading) {
    return <div>Cargando...</div>; 
  }

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h4>Eliminar Producto</h4>
      <p>¿Estás seguro de que deseas eliminar el producto {product.name}?</p>
      <Button variant="danger" onClick={handleDelete}>
        Confirmar Eliminación
      </Button>
    </div>
  );
};

export default DeleteProduct;
