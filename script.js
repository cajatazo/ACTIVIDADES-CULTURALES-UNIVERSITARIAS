// Aplicación CRUD para Gestión de Reservas Culturales Universitarias

// Clase para representar una reserva
class Reserva {
    constructor(id, nombre, matricula, actividad, fecha) {
        this.id = id;
        this.nombre = nombre;
        this.matricula = matricula;
        this.actividad = actividad;
        this.fecha = fecha;
    }
}

// Clase principal de la aplicación
class ReservaApp {
    constructor() {
        // Elementos del DOM
        this.form = document.getElementById('reservaForm');
        this.tablaReservas = document.getElementById('tablaReservas');
        this.sinReservas = document.getElementById('sinReservas');
        this.btnLimpiar = document.getElementById('btnLimpiar');
        this.btnGuardar = document.getElementById('btnGuardar');
        this.modal = new bootstrap.Modal(document.getElementById('confirmModal'));
        
        // Campos del formulario
        this.campos = {
            id: document.getElementById('reservaId'),
            nombre: document.getElementById('nombre'),
            matricula: document.getElementById('matricula'),
            actividad: document.getElementById('actividad'),
            fecha: document.getElementById('fecha')
        };
        
        // Mensajes de error
        this.errores = {
            nombre: document.getElementById('nombreError'),
            matricula: document.getElementById('matriculaError'),
            actividad: document.getElementById('actividadError'),
            fecha: document.getElementById('fechaError')
        };
        
        // Almacenamiento de reservas
        this.reservas = JSON.parse(localStorage.getItem('reservas')) || [];
        this.reservaEditando = null;
        this.nextId = this.reservas.length > 0 ? Math.max(...this.reservas.map(r => r.id)) + 1 : 1;
        
        // Inicializar la aplicación
        this.inicializarEventos();
        this.actualizarTabla();
    }
    
    // Método para inicializar los eventos
    inicializarEventos() {
        // Evento submit del formulario
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.guardarReserva();
        });
        
        // Evento click del botón limpiar
        this.btnLimpiar.addEventListener('click', () => {
            this.limpiarFormulario();
        });
        
        // Evento para validar matrícula en tiempo real
        this.campos.matricula.addEventListener('input', () => {
            this.validarMatricula(this.campos.matricula.value);
        });
        
        // Evento para validar fecha en tiempo real
        this.campos.fecha.addEventListener('change', () => {
            this.validarFecha(this.campos.fecha.value);
        });
    }
    
    // Método para validar el formulario
    validarFormulario() {
        let valido = true;
        
        // Validar nombre
        if (!this.campos.nombre.value.trim()) {
            this.errores.nombre.textContent = 'El nombre es requerido';
            valido = false;
        } else {
            this.errores.nombre.textContent = '';
        }
        
        // Validar matrícula
        if (!this.validarMatricula(this.campos.matricula.value)) {
            valido = false;
        }
        
        // Validar actividad
        if (!this.campos.actividad.value) {
            this.errores.actividad.textContent = 'Seleccione una actividad';
            valido = false;
        } else {
            this.errores.actividad.textContent = '';
        }
        
        // Validar fecha
        if (!this.validarFecha(this.campos.fecha.value)) {
            valido = false;
        }
        
        return valido;
    }
    
    // Método para validar la matrícula
    validarMatricula(matricula) {
        const regex = /^[a-zA-Z0-9]{8}$/;
        
        if (!matricula) {
            this.errores.matricula.textContent = 'La matrícula es requerida';
            return false;
        } else if (!regex.test(matricula)) {
            this.errores.matricula.textContent = 'La matrícula debe tener exactamente 8 caracteres alfanuméricos';
            return false;
        } else {
            this.errores.matricula.textContent = '';
            return true;
        }
    }
    
    // Método para validar la fecha
    validarFecha(fecha) {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        const fechaSeleccionada = new Date(fecha);
        
        if (!fecha) {
            this.errores.fecha.textContent = 'La fecha es requerida';
            return false;
        } else if (fechaSeleccionada < hoy) {
            this.errores.fecha.textContent = 'La fecha debe ser hoy o en el futuro';
            return false;
        } else {
            this.errores.fecha.textContent = '';
            return true;
        }
    }
    
    // Método para guardar una reserva (crear o actualizar)
    guardarReserva() {
        if (!this.validarFormulario()) return;
        
        const reservaData = {
            nombre: this.campos.nombre.value.trim(),
            matricula: this.campos.matricula.value.trim(),
            actividad: this.campos.actividad.value,
            fecha: this.campos.fecha.value
        };
        
        if (this.reservaEditando) {
            // Actualizar reserva existente
            const index = this.reservas.findIndex(r => r.id === this.reservaEditando);
            this.reservas[index] = new Reserva(
                this.reservaEditando,
                reservaData.nombre,
                reservaData.matricula,
                reservaData.actividad,
                reservaData.fecha
            );
            
            this.reservaEditando = null;
            this.btnGuardar.innerHTML = '<i class="fas fa-save me-1"></i> Guardar Reserva';
        } else {
            // Crear nueva reserva
            const nuevaReserva = new Reserva(
                this.nextId++,
                reservaData.nombre,
                reservaData.matricula,
                reservaData.actividad,
                reservaData.fecha
            );
            
            this.reservas.push(nuevaReserva);
        }
        
        // Guardar en localStorage
        localStorage.setItem('reservas', JSON.stringify(this.reservas));
        
        // Actualizar la tabla y limpiar el formulario
        this.actualizarTabla();
        this.limpiarFormulario();
        
        // Mostrar notificación de éxito
        this.mostrarNotificacion('Reserva guardada exitosamente', 'success');
    }
    
    // Método para editar una reserva
    editarReserva(id) {
        const reserva = this.reservas.find(r => r.id === id);
        if (!reserva) return;
        
        this.reservaEditando = id;
        this.campos.id.value = id;
        this.campos.nombre.value = reserva.nombre;
        this.campos.matricula.value = reserva.matricula;
        this.campos.actividad.value = reserva.actividad;
        this.campos.fecha.value = reserva.fecha;
        
        this.btnGuardar.innerHTML = '<i class="fas fa-sync-alt me-1"></i> Actualizar Reserva';
        
        // Desplazarse al formulario
        document.querySelector('.form-container').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Método para eliminar una reserva
    eliminarReserva(id) {
        this.reservaAEliminar = id;
        this.modal.show();
    }
    
    // Método para confirmar la eliminación
    confirmarEliminacion() {
        this.reservas = this.reservas.filter(r => r.id !== this.reservaAEliminar);
        localStorage.setItem('reservas', JSON.stringify(this.reservas));
        this.actualizarTabla();
        this.modal.hide();
        
        // Mostrar notificación de éxito
        this.mostrarNotificacion('Reserva eliminada exitosamente', 'danger');
    }
    
    // Método para actualizar la tabla de reservas
    actualizarTabla() {
        if (this.reservas.length === 0) {
            this.tablaReservas.innerHTML = '';
            this.sinReservas.style.display = 'block';
            return;
        }
        
        this.sinReservas.style.display = 'none';
        this.tablaReservas.innerHTML = '';
        
        this.reservas.forEach(reserva => {
            const fila = document.createElement('tr');
            
            // Formatear fecha para mostrarla mejor
            const fechaObj = new Date(reserva.fecha);
            const fechaFormateada = fechaObj.toLocaleDateString('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
            
            fila.innerHTML = `
                <td>${reserva.nombre}</td>
                <td>${reserva.matricula}</td>
                <td>${reserva.actividad}</td>
                <td>${fechaFormateada}</td>
                <td>
                    <button class="btn btn-sm btn-action btn-editar editar" data-id="${reserva.id}" title="Editar">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-action btn-eliminar eliminar" data-id="${reserva.id}" title="Eliminar">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            `;
            
            this.tablaReservas.appendChild(fila);
        });
        
        // Agregar eventos a los botones de editar y eliminar
        document.querySelectorAll('.editar').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.editarReserva(parseInt(e.currentTarget.getAttribute('data-id')));
            });
        });
        
        document.querySelectorAll('.eliminar').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.eliminarReserva(parseInt(e.currentTarget.getAttribute('data-id')));
            });
        });
        
        // Configurar el botón de confirmar eliminación
        document.getElementById('btnConfirmarEliminar').onclick = () => {
            this.confirmarEliminacion();
        };
    }
    
    // Método para limpiar el formulario
    limpiarFormulario() {
        this.form.reset();
        this.reservaEditando = null;
        this.campos.id.value = '';
        
        // Limpiar mensajes de error
        Object.values(this.errores).forEach(error => {
            error.textContent = '';
        });
        
        this.btnGuardar.innerHTML = '<i class="fas fa-save me-1"></i> Guardar Reserva';
    }
    
    // Método para mostrar notificaciones
    mostrarNotificacion(mensaje, tipo) {
        const notificacion = document.createElement('div');
        notificacion.className = `alert alert-${tipo} alert-dismissible fade show position-fixed`;
        notificacion.style.top = '20px';
        notificacion.style.right = '20px';
        notificacion.style.zIndex = '9999';
        notificacion.style.minWidth = '300px';
        notificacion.role = 'alert';
        
        notificacion.innerHTML = `
            ${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        
        document.body.appendChild(notificacion);
        
        // Eliminar la notificación después de 3 segundos
        setTimeout(() => {
            notificacion.remove();
        }, 3000);
    }
}

// Inicializar la aplicación cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const app = new ReservaApp();
});
