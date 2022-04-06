# Tabla de contenidos
1. [Objetivo de la entrega](#objetivo-de-la-entrega)
2. [Aspectos a incluir](#aspectos-a-incluir)
3. [GIF de la app](#gif)
4. [Funcionamiento](#funcionamiento-general-de-la-aplicación)
4. [Navegar dentro de la app](#como-navegar-dentro-de-la-app)
5. [Tecnologías utilizadas](#tecnologías-utilizadas)
6. [Installation](#instalación-de-la-app)


## Objetivo de la entrega
***
El estudiante deberá desarrollar la navegabilidad básica de la aplicación, demostrando que la app permite ver el catálogo, y navegar a un detalle

## Aspectos a incluir
***
1. Rutas a configurar

    * ‘/’ navega a <ItemListContainer />

    * ‘/category/:id’ <ItemListContainer />

    * ‘/item/:id’ navega a <ItemDetailContainer />

2. Links a configurar

    * Clickear en el brand debe navegar a ‘/’

    * Clickear un Item.js debe navegar a /item/:id

    * Clickear en una categoría del navbar debe navegar a /category/:categoryId

Para finalizar deberá integrar los parámetros de tus async-mocks para reaccionar a :itemId y :categoryId ¡utilizando efectos y los hooks de parámetros que vimos en clase! Si te encuentras en una categoría deberías poder detectar la navegación a otra categoría y volver a cargar los productos que correspondan a dicha categoría

## Gif
***
El error que presenta el gif se debe a que se inspeccionó la página para mostrar que la misma es responsive
<img src="./src/images/paraElReadme/funcionalidadBasica.gif" width="900" />

# Funcionamiento general de la aplicación
***
La documentación principal sobre el uso de la aplicación se encuentra dentro de la misma, ya que cada archivo se encuentra con un comentario al inicio informando la utilidad del mismo y su funcionalidad
También el funcionamiento de los elementos relevantes dentro de cada archivo

Hago esto debido a que quiero generar la menor cantidad de documentación necesaria y hacer que el código se explique por si mismo

# Como navegar dentro de la app
La manera en la que generé los archivos de la app es la siguiente
Las carpetas NavBar, Footer y Main poseen dentro todos los archivos js y una carpeta donde se guardan los estilos de los mismos

* Componentes (carpeta)
    * Footer (Solo tiene los archivos del footer y se renderiza una sola vez)
    * Main (Dentro van todos los archivos referentes a el cuerpo principal de las páginas)
    * NavBar (En este fue donde utilicé los styled components para experimentar, pero no fui capaz de utilizarlo en otras funcionalidades debido a que no se como generar funciones dentro de los mismos)
* data (Dentro se ubica el archivo donde guardo los arrays que simulan las consultas a APIs)
* images (creo que se explica solo jajaja)
* pages (Es donde se encuentran los diferentes archivos padre de mayor nivel luego de App.js y "renderizan" las páginas)

El archivo App.js es el que se utiliza para generar las rutas que se utilizan en los Links

# Tecnologías utilizadas
***
Lista de tecnologías utilizadas en el proyecto:
* [React](https://es.reactjs.org)
* [React-Router-Dom](https://v5.reactrouter.com/web/guides/quick-start)
* [Styled-Components](https://styled-components.com)

# Instalación de la app
***
Para clonar el repositorio desde la terminal de git:
```
$ git clone https://github.com/Pancho157/Ecommerce-ReactJS.git
$ cd ../path/to/the/file
$ npm install
$ npm start
```
