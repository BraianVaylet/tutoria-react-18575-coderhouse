---
title: '[Clase 1][Ejercicio] Crear un formulario con HTML y JS'
description: 'Vamos a crear un formulario usando html y javascript para practicar.'
category: 'javascript'
date: '2021-09-06'
tags: 
  - "JavaScript"
  - "HTML"
---

En este ejercicio vamos a crear un formulario para practicar HTML y JavaScript, pero para este caso vamos a ver una forma interesante de plantear el desafío...

Para iniciar abrimos nuestro editor de código favorito, en mi caso VSCode y creamos un archivo index.html. Luego creamos la estructura base de nuestra página HTML.
Debería quedarle algo así:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>

<body></body>

</html>
```

Bien ahora vamos al código en este caso vamos a iniciar creando una etiqueta **div** con un **id** igual a **'form'**, la idea es renderizar nuestro formulario en esa etiqueta.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>

<body>
  <h1>Formulario</h1>
  <div id='form'></div>
</body>

</html>      
```

Ahora que tenemos nuestra estructura html vamos a crear una script para trabajar la lógica que vamos a necesitar. (Pueden crear una etiqueta script dentro del mismo **html**, o crear un archivo **.js**)
Una vez listo eso vamos a necesitar definir un Array con los elementos que formarán nuestro formulario, por ejemplo:

```javascript
// Array de elementos que conforman el Formulario
const inputsForm = [
  {
    label: 'Nombre', // Nombre del label del input que vamos a mostrar
    name: 'name', // propiedad name del input
    type: 'text', // propiedad type del input
    required: true // propiedad required del input
  },
  {
    label: 'Apellido',
    name: 'lastname',
    type: 'text',
    required: true
  },
  {
    label: 'Correo electrónico',
    name: 'email',
    type: 'email',
    required: true
  },
  {
    label: 'Contraseña',
    name: 'password',
    type: 'password',
    required: true
  },
  {
    label: 'Dirección',
    name: 'address',
    type: 'text',
    required: false,
  }
]
```

Lo próximo que vamos a hacer es crear dos componentes, por un lado vamos a tener el componente **Form** y por otro lado nuestro componente **Input**. La idea de estos componentes es poder renderizar el html que necesitamos usando solo JavaScript.

```javascript
// Este método va a renderizar el componente Form.
const Form = inputsForm => {  
  let inputs = ''
  inputsForm.forEach(input => inputs = inputs + Input(input))
  return `
    <form onsubmit='handleSubmit(event)'>                                
      ${inputs}
      <button type='submit'>
        Send!
      </button>
    </form>
  `
}    
// Este método va a renderizar el componente Input.
const Input = data => {
  return `
    <section>
      <label for='${data.name}'>${data.label}</label>
      <input 
        id='${data.name}'
        name='${data.name}'
        type='${data.type}'
        ${data.required && 'required'}
      />
    </section>
  `
}
```

Ahora vamos a crear una funcionalidad para el evento **submit** del botón de nuestro formulario.

```javascript
// Este método va a controlar el submit del formulario.
const handleSubmit = event => {                
  event.preventDefault();
  let response = {}
  inputsForm.forEach(input => {
    const value = document.getElementById(input.name).value
    response[input.name] = value
  })
  console.table(response)
}
```

Para finalizar creamos un método **render** que nos permite renderizar nuestro componente **Form** en nuestro **DOM** y lo ejecutamos.

```javascript
// Este método va a renderizar mi componente en el html.
const render = (component, container) => container.innerHTML = component

// renderizo la aplicación
render(Form(inputsForm), form)
```

Listo! terminamos nuestro formulario, podemos abrir nuestro archivo index.html y veremos nuestro formulario en pantalla

![](https://braianvaylet-blog.vercel.app/_next/static/image/public/images/coderhouse/clase1-ejercicio-crear-un-formulario/clase1-ejercicio-crear-un-formulario-1.png)

Como puede ver, es todo una belleza! y pueden ver su funcionamiento desde la consola.

![](https://braianvaylet-blog.vercel.app/_next/static/image/public/images/coderhouse/clase1-ejercicio-crear-un-formulario/clase1-ejercicio-crear-un-formulario-2.png)

En conclusión, ¿por qué complicarse tanto para hacer un form? Bueno, la razón es para ayudarlos a ver las cosas desde otra perspectiva, esto les va a servir para acercarse a React y a su forma de trabajar.

Les dejo el código completo y el repositorio.

## Codigo completo

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>

<body>
    <h1>Formulario</h1>
    <div id='form'></div>        
</body>

<script> 
  const inputsForm = [
    {
      label: 'Nombre',
      name: 'name',
      type: 'text',
      required: true
    },
    {
      label: 'Apellido',
      name: 'lastname',
      type: 'text',
      required: true
    },
    {
      label: 'Correo electrónico',
      name: 'email',
      type: 'email',
      required: true
    },
    {
      label: 'Contraseña',
      name: 'password',
      type: 'password',
      required: true
    },
    {
      label: 'Dirección',
      name: 'address',
      type: 'text',
      required: false,
    }
  ]

  const Form = inputsForm => {  
    let inputs = ''
    inputsForm.forEach(input => inputs = inputs + Input(input))
    return `
      <form onsubmit='handleSubmit(event)'>                                
          ${inputs}
          <button type='submit'>Send!</button>
      </form>
    `
  }
      
  const Input = data => {
    return `
      <section>
        <label for='${data.name}'>${data.label}</label>
        <input 
            id='${data.name}'
            name='${data.name}'
            type='${data.type}'
            ${data.required && 'required'}
        />
      </section>
    `
  }
 
  const handleSubmit = event => {                
    event.preventDefault();
    let response = {}
    inputsForm.forEach(input => {
        const value = document.getElementById(input.name).value
        response[input.name] = value
    })
    console.table(response)
  }

  const render = (component, container) => container.innerHTML = component 
  render(Form(inputsForm), form)
</script>

</html>
```



---



### Links
 
 - [Clase 1 Coderhouse](https://docs.google.com/presentation/d/1AUo7rwtvlPoGXHbF6XyyKwGM14rOQP6A-aFGKXB1LU0/edit#slide=id.gb18eabcc1d_0_266)
 - [Repositorio](https://github.com/BraianVaylet/tutoria-react-18757-coderhouse/tree/master/clase1-formulario)
