# Introducción

Este es el frontend que respalda la aplicación de comercio electrónico [Low Cost](https://github.com/TDelgadodev/Low_Cost_Frontend), cuyo backend está disponible en el repositorio [Low Cost Backend](https://github.com/gnicolaslan/webLowCost). La plataforma de Low Cost ofrece una amplia gama de productos, que van desde artículos para el hogar hasta dispositivos de tecnología, como teléfonos móviles y televisores.

## Desarrolladores

Este proyecto fue desarrollado por:

- [Thiago Delgado](https://github.com/TDelgadodev)
- [Gabriel Lanzillotti](https://github.com/gnicolaslan)

## Tecnologías Utilizadas

El frontend de Low Cost se desarrolló utilizando un conjunto de tecnologías y herramientas que permiten su funcionamiento eficiente y seguro. Estas tecnologías incluyen:

1. **React**: Como biblioteca de desarrollo de interfaz de usuario, React se utiliza como base de nuestro frontend, lo que permite una creación eficiente y escalable de componentes y vistas.

2. **React Router**: Utilizamos React Router para la gestión de rutas y navegación en la aplicación, lo que facilita la creación de enlaces y rutas dinámicas.

3. **Estado Global con Context API**: Para la gestión del estado global de la aplicación, utilizamos Context API. Los datos se almacenan y se acceden a través de Context Providers, que son consumidos por componentes utilizando Context Hooks.

4. **Axios**: Axios se utiliza para realizar solicitudes HTTP al backend y gestionar la comunicación con el servidor.

5. **Estilos con Bootstrap y Emotion**: Para el diseño y los estilos de la interfaz de usuario, empleamos Bootstrap y Emotion para garantizar una apariencia atractiva y una experiencia de usuario fluida.

6. **Gestión de Carrito**: Implementamos un sistema de gestión de carrito para permitir a los usuarios agregar y gestionar productos en su carrito de compras.

7. **Integración de Mercado Pago**: Integramos la biblioteca Mercado Pago SDK para gestionar pagos y seguimiento de compras en la plataforma.

8. **Autenticación y Seguridad**: Implementamos funcionalidades de autenticación y seguridad para proteger las rutas y recursos de la aplicación, lo que garantiza que los usuarios tengan acceso autorizado.

## Instalación

Siga estos pasos para configurar y ejecutar el frontend de Low Cost en su entorno de desarrollo:

1. Clone el proyecto desde el repositorio en GitHub:
    ```bash
    git clone https://github.com/gnicolaslan/low-cost-frontend
    ```

2. Navegue al directorio del proyecto:
    ```bash
    cd low-cost-frontend
    ```

3. Instale las dependencias del proyecto utilizando npm o yarn:
    ```bash
    npm install
    # o
    yarn install
    ```

4. Con el backend ya configurado y en ejecución, puede configurar el archivo `.env` para el frontend, si es necesario.

5. Inicie el servidor de desarrollo del frontend con el siguiente comando:
    ```bash
    npm run dev
    # o
    yarn dev
    ```

Con estos pasos completados, su entorno de desarrollo estará configurado y listo para ejecutar el frontend de Low Cost.

```javascript
// Aquí se muestra un ejemplo del punto de entrada de la aplicación en React.
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layout';
import { AppRoutes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
```

Asegúrese de que el backend esté en ejecución y configurado para que el frontend pueda comunicarse con él de manera efectiva. Puede consultar [la documentación del backend](https://github.com/gnicolaslan/webLowCost#instalacion) para obtener más información sobre la configuración de las variables de entorno y la ejecución del backend. Con ambos componentes funcionando, podrá utilizar la aplicación de comercio electrónico Low Cost.