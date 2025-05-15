# 📚 Gestión de Reservas para Actividades Culturales Universitarias 🎭
<a href="https://actividades-universitarias-uch.web.app"><img src="https://i.ibb.co/wZ1kfmGX/Icono-relacionado-con-la-gesti-n-de-reservas-para-actividades-culturales-universitarias-que-incluya.png" alt="Icono-relacionado-con-la-gesti-n-de-reservas-para-actividades-culturales-universitarias-que-incluya" border="0"></a>


Un sistema CRUD completo desarrollado para la oficina de Bienestar Universitario que permite gestionar las reservas de actividades culturales de los estudiantes.

## 🌟 Características Principales

### 📋 Funcionalidades CRUD Completo
- **Creación** de nuevas reservas con validación de datos
- **Visualización** de reservas en tabla interactiva
- **Actualización** de reservas existentes
- **Eliminación** con confirmación modal

### ✅ Validaciones Avanzadas 🛠️
- ✏️ Validación de nombre completo (campo requerido)
- 🔠 Validación de matrícula (8 caracteres alfanuméricos)
- 📅 Validación de fecha (no permite fechas pasadas)
- 🎭 Selección obligatoria de actividad cultural (visual de errores en tiempo real)

### 🎨 Interfaz Profesional Profesional
- Diseño responsive con **Bootstrap 5**
- Iconografía profesional con **Font Awesome**
- **Feedback visual** para todas las acciones (Efectos visuales y transiciones suaves)
- **Notificaciones** emergentes para operaciones exitosas (Notificaciones de acciones exitosas)
- **Modales de confirmación** para acciones críticas


### 💾 Persistencia de Datos
- Almacenamiento local con **localStorage**
- Los datos persisten al recargar la página
- Estructura de datos organizada con clases JavaScript

## 🚀 Cómo Usar la Aplicación

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Conexión a Internet (para cargar Bootstrap y Font Awesome)

### Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```
2. Abre el archivo `index.html` en tu navegador.

### Guía de Uso
1. **Agregar nueva reserva**:
   - Completa todos los campos del formulario
   - Haz clic en "Guardar Reserva"

2. **Editar reserva existente**:
   - Haz clic en el botón de edición (✏️) en la tabla
   - Modifica los campos necesarios
   - Haz clic en "Actualizar Reserva"

3. **Eliminar reserva**:
   - Haz clic en el botón de eliminar (🗑️) en la tabla
   - Confirma la eliminación en el modal

## 📦 Estructura del Proyecto 🛠️
```
reservas-culturales/
├── index.html          # Archivo principal con la estructura HTML
├── script.js           # Lógica completa de la aplicación JavaScript
└── README.md           # Este archivo de documentación
```

## 📝 Validaciones Implementadas
| Campo        | Validación                                  | Mensaje de Error                          |
|--------------|--------------------------------------------|------------------------------------------|
| Nombre       | Campo obligatorio                          | "El nombre es requerido"                 |
| Matrícula    | Exactamente 8 caracteres alfanuméricos     | "La matrícula debe tener 8 caracteres..."|
| Actividad    | Selección obligatoria                      | "Seleccione una actividad"               |
| Fecha        | No puede ser fecha pasada                  | "La fecha debe ser hoy o en el futuro"   |

## 📊 Tecnologías Utilizadas


- 
## 🚀 Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|------------|---------|-----|
|  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | - | Estructura base de la aplicación |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | - | Lógica de la aplicación |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white) | 5.3.0 | Diseño y componentes UI |
| ![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white) | 6.0.0 | Iconos y elementos visuales |
| ![localStorage](https://img.shields.io/badge/localStorage-2F3337?style=for-the-badge&logo=html5&logoColor=white) | - | Persistencia de datos |


## 📸 Capturas de Pantalla

### Formulario de Reserva
![Formulario](https://i.ibb.co/sp1cyHcc/Formulario-de-Reserva.png)

### Listado de Reservas
![Tabla](https://i.ibb.co/jkQcynCV/Listado-de-Reservas.png)

### Modal de Confirmación
![Modal](https://i.ibb.co/Fq6sPTJz/Confirmar-Eliminaci-n.png)

## 🛠️ Requisitos del Sistema

- Navegador web moderno (Chrome 90+, Firefox 88+, Edge 90+, Safari 14+)
- Conexión a Internet (para cargar CDNs de Bootstrap y Font Awesome)
- Resolución mínima recomendada: 1024x768

## 🚀 Cómo Usar

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/cajatazo/ACTIVIDADES-CULTURALES-UNIVERSITARIAS.git
   ```

2. **Abrir el proyecto**:
   - Navegar hasta la carpeta del proyecto
   - Abrir el archivo `index.html` en tu navegador favorito

3. **Funcionamiento**:
   - Completa el formulario con los datos del estudiante
   - Haz clic en "Guardar Reserva"
   - Para editar, haz clic en el ícono de lápiz
   - Para eliminar, haz clic en el ícono de basura y confirma


## 📝 Estructura del Código

El proyecto sigue una arquitectura modular basada en clases:

```javascript
class Reserva {
  // Representa una reserva individual
}

class ReservaApp {
  // Clase principal que maneja toda la lógica de la aplicación
  constructor() { ... }
  inicializarEventos() { ... }
  validarFormulario() { ... }
  guardarReserva() { ... }
  editarReserva() { ... }
  eliminarReserva() { ... }
  actualizarTabla() { ... }
  // ... más métodos
}
```
## 🧪 Pruebas Realizadas

| Caso de Prueba | Descripción | Resultado |
|----------------|-------------|-----------|
| CRE-001 | Creación de reserva válida | ✅ Éxito |
| VAL-001 | Creación con campos vacíos | ❌ Validación activa |
| VAL-002 | Matrícula incorrecta (7 caracteres) | ❌ Validación activa |
| VAL-003 | Fecha en el pasado | ❌ Validación activa |
| UPD-001 | Edición de reserva existente | ✅ Éxito |
| DEL-001 | Eliminación con confirmación | ✅ Éxito |
| PER-001 | Persistencia en localStorage | ✅ Éxito |

## 📊 Métricas del Proyecto

- **Líneas de código HTML**: 292+
- **Líneas de código JavaScript**: 326+
- **Componentes Bootstrap utilizados**: 15+
- **Íconos Font Awesome**: 8 diferentes

## 📌 Criterios de Evaluación Cumplidos
✅ **Funcionalidad completa del CRUD**
✅ **Validaciones implementadas**
✅ **Uso adecuado de Bootstrap**
✅ **Código organizado y comentado**
✅ **Publicación en GitHub Pages**


## 🌐 Demo en Vivo
####página Web####
Puedes probar directamente en **página Web**:  
[**Gestión de Reservas para Actividades Culturales Universitarias**](https://actividades-universitarias-uch.web.app)

Puedes probar la aplicación directamente en **Github**:  
[**Ver Demo**](https://github.com/cajatazo/ACTIVIDADES-CULTURALES-UNIVERSITARIAS.git)

## 🤝 Contribuciones
Las contribuciones son bienvenidas. Por favor abre un issue o envía un pull request para proponer mejoras.

---

⌨️ con ❤️ por [Jesus Campomanes Zamudio](https://github.com/cajatazo) 😊
