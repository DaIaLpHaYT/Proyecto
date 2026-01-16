// ========================================
// VARIABLES GLOBALES
// ========================================
let contador = 0;
let modoOscuro = false;

// ========================================
// 1. MANIPULACIÓN DEL DOM
// ========================================

// Seleccionar elementos del DOM (Requisito: 3 elementos diferentes)
const contadorDisplay = document.getElementById('contador');
const formularioContacto = document.getElementById('contactForm');
const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const asuntoSelect = document.getElementById('asunto');
const mensajeTextarea = document.getElementById('mensaje');

// ========================================
// 2. CONTADOR INTERACTIVO
// ========================================

// Función para incrementar el contador
function incrementar() {
    contador++;
    actualizarContador();
}

// Función para decrementar el contador
function decrementar() {
    contador--;
    actualizarContador();
}

// Función para resetear el contador
function resetear() {
    contador = 0;
    actualizarContador();
}

// Función para actualizar la visualización del contador
// (Modifica contenido de elementos y cambia estilos dinámicamente)
function actualizarContador() {
    // Modificar contenido del elemento
    contadorDisplay.textContent = contador;
    
    // Cambiar estilos dinámicamente según el valor
    if (contador > 0) {
        contadorDisplay.style.color = '#10b981'; // Verde
        contadorDisplay.style.transform = 'scale(1.1)';
    } else if (contador < 0) {
        contadorDisplay.style.color = '#ef4444'; // Rojo
        contadorDisplay.style.transform = 'scale(1.1)';
    } else {
        contadorDisplay.style.color = '#6366f1'; // Azul
        contadorDisplay.style.transform = 'scale(1)';
    }
    
    // Animación de rebote
    setTimeout(() => {
        contadorDisplay.style.transform = 'scale(1)';
    }, 200);
}

// ========================================
// 3. SCROLL SUAVE A SECCIONES
// ========================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// ========================================
// 4. VALIDACIÓN DE FORMULARIO
// ========================================

// Evento: SUBMIT del formulario (Requisito: Evento 1)
formularioContacto.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores del formulario
    const nombre = nombreInput.value.trim();
    const email = emailInput.value.trim();
    const asunto = asuntoSelect.value;
    const mensaje = mensajeTextarea.value.trim();
    
    // Validar campos
    if (!validarFormulario(nombre, email, mensaje)) {
        return;
    }
    
    // Mostrar mensaje de confirmación (Modificar contenido y estilos)
    mensajeConfirmacion.textContent = `✓ ¡Gracias ${nombre}! Tu mensaje ha sido enviado con éxito.`;
    mensajeConfirmacion.style.display = 'block';
    
    // Limpiar formulario
    formularioContacto.reset();
    
    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
        mensajeConfirmacion.style.display = 'none';
    }, 5000);
    
    // Log en consola
    console.log('Formulario enviado:', { nombre, email, asunto, mensaje });
});

// Función de validación del formulario
function validarFormulario(nombre, email, mensaje) {
    // Validar nombre
    if (nombre.length < 3) {
        mostrarError(nombreInput, 'El nombre debe tener al menos 3 caracteres');
        return false;
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mostrarError(emailInput, 'Por favor, introduce un email válido');
        return false;
    }
    
    // Validar mensaje
    if (mensaje.length < 10) {
        mostrarError(mensajeTextarea, 'El mensaje debe tener al menos 10 caracteres');
        return false;
    }
    
    return true;
}

// Función para mostrar errores de validación
function mostrarError(elemento, mensajeError) {
    // Cambiar estilos dinámicamente
    elemento.style.borderColor = '#ef4444';
    elemento.style.backgroundColor = '#fee2e2';
    
    // Crear elemento de error si no existe
    let errorElement = elemento.parentElement.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.style.color = '#ef4444';
        errorElement.style.fontSize = '0.875rem';
        errorElement.style.marginTop = '0.25rem';
        errorElement.style.display = 'block';
        elemento.parentElement.appendChild(errorElement);
    }
    
    errorElement.textContent = mensajeError;
    
    // Restaurar estilos después de 3 segundos
    setTimeout(() => {
        elemento.style.borderColor = '#e2e8f0';
        elemento.style.backgroundColor = 'white';
        if (errorElement) {
            errorElement.remove();
        }
    }, 3000);
}

// ========================================
// 5. VALIDACIÓN EN TIEMPO REAL
// ========================================

// Evento: INPUT en el campo de nombre (Requisito: Evento 2)
nombreInput.addEventListener('input', function() {
    const valor = this.value;
    
    // Cambiar estilos dinámicamente según la validez
    if (valor.length >= 3) {
        this.style.borderColor = '#10b981';
        this.style.backgroundColor = '#f0fdf4';
    } else if (valor.length > 0) {
        this.style.borderColor = '#f59e0b';
        this.style.backgroundColor = '#fffbeb';
    } else {
        this.style.borderColor = '#e2e8f0';
        this.style.backgroundColor = 'white';
    }
});

// Evento: INPUT en el campo de email (Requisito: Evento 3)
emailInput.addEventListener('input', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valor = this.value;
    
    // Validación en tiempo real
    if (emailRegex.test(valor)) {
        this.style.borderColor = '#10b981';
        this.style.backgroundColor = '#f0fdf4';
    } else if (valor.length > 0) {
        this.style.borderColor = '#f59e0b';
        this.style.backgroundColor = '#fffbeb';
    } else {
        this.style.borderColor = '#e2e8f0';
        this.style.backgroundColor = 'white';
    }
});

// Evento: CHANGE en el select de asunto (Requisito: Evento 4)
asuntoSelect.addEventListener('change', function() {
    const valor = this.value;
    
    // Añadir/eliminar clases CSS según selección
    if (valor) {
        this.classList.add('seleccionado');
        this.style.borderColor = '#10b981';
        this.style.fontWeight = '600';
    } else {
        this.classList.remove('seleccionado');
        this.style.borderColor = '#e2e8f0';
        this.style.fontWeight = 'normal';
    }
    
    console.log('Tipo de proyecto seleccionado:', valor);
});

// ========================================
// 6. INTERACCIÓN CON TARJETAS DE PROYECTOS
// ========================================

// Evento: CLICK en tarjetas de proyectos (Requisito: Evento 5)
document.querySelectorAll('.proyecto-card').forEach(card => {
    card.addEventListener('click', function() {
        // Añadir/eliminar clases CSS
        this.classList.toggle('seleccionada');
        
        // Cambiar estilos dinámicamente
        if (this.classList.contains('seleccionada')) {
            this.style.backgroundColor = '#ede9fe';
            this.style.borderColor = '#8b5cf6';
            this.style.transform = 'scale(1.05)';
            
            const titulo = this.querySelector('h3').textContent;
            console.log('Proyecto seleccionado:', titulo);
            
            // Mostrar mensaje temporal
            const mensaje = document.createElement('div');
            mensaje.textContent = '✓ Proyecto seleccionado';
            mensaje.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                background: #10b981;
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 20px;
                font-size: 0.875rem;
                animation: fadeIn 0.3s ease;
            `;
            this.style.position = 'relative';
            this.appendChild(mensaje);
            
            setTimeout(() => mensaje.remove(), 2000);
        } else {
            this.style.backgroundColor = '';
            this.style.borderColor = 'transparent';
            this.style.transform = '';
        }
    });
});

// ========================================
// 7. MODO OSCURO/CLARO (CAMBIO DE TEMA)
// ========================================

// Crear botón de modo oscuro dinámicamente
function crearBotonModoOscuro() {
    const boton = document.createElement('button');
    boton.id = 'btnModoOscuro';
    boton.textContent = '🌙 Modo Oscuro';
    boton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: white;
        border: none;
        padding: 1rem 1.5rem;
        border-radius: 50px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
        z-index: 9999;
    `;
    
    // Evento: CLICK en botón de modo oscuro (Requisito: Evento 6)
    boton.addEventListener('click', toggleModoOscuro);
    
    // Efecto hover
    boton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
    });
    
    boton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
    });
    
    document.body.appendChild(boton);
}

// Función para cambiar entre modo oscuro y claro
function toggleModoOscuro() {
    const body = document.body;
    const boton = document.getElementById('btnModoOscuro');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    
    modoOscuro = !modoOscuro;
    
    if (modoOscuro) {
        // Activar modo oscuro - Añadir clase CSS
        body.classList.add('modo-oscuro');
        
        // Cambiar estilos dinámicamente
        body.style.background = 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)';
        body.style.color = '#e2e8f0';
        
        header.style.background = 'rgba(30, 41, 59, 0.95)';
        header.style.color = '#e2e8f0';
        
        sections.forEach(section => {
            if (section.id !== 'inicio') {
                section.style.background = '#1e293b';
                section.style.color = '#e2e8f0';
            }
        });
        
        footer.style.background = 'rgba(15, 23, 42, 0.95)';
        
        boton.textContent = '☀️ Modo Claro';
        boton.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
        
        console.log('Modo oscuro activado');
    } else {
        // Activar modo claro - Eliminar clase CSS
        body.classList.remove('modo-oscuro');
        
        // Restaurar estilos originales
        body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        body.style.color = '#334155';
        
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.color = '#334155';
        
        sections.forEach(section => {
            if (section.id !== 'inicio') {
                section.style.background = 'white';
                section.style.color = '#334155';
            }
        });
        
        footer.style.background = 'rgba(30, 41, 59, 0.95)';
        
        boton.textContent = '🌙 Modo Oscuro';
        boton.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
        
        console.log('Modo claro activado');
    }
}

// ========================================
// 8. CALCULADORA SIMPLE
// ========================================

// Crear calculadora dinámicamente
function crearCalculadora() {
    const seccionHabilidades = document.getElementById('habilidades');
    
    const calculadoraHTML = `
        <div id="calculadora" style="margin-top: 3rem; padding: 2rem; background: linear-gradient(135deg, #f8fafc, #e2e8f0); border-radius: 12px;">
            <h3 style="color: #1e293b; margin-bottom: 1.5rem; font-size: 1.5rem;">🧮 Calculadora Simple</h3>
            
            <div style="display: flex; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap;">
                <input type="number" id="num1" placeholder="Número 1" style="flex: 1; min-width: 120px; padding: 0.75rem; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1rem;">
                <input type="number" id="num2" placeholder="Número 2" style="flex: 1; min-width: 120px; padding: 0.75rem; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1rem;">
            </div>
            
            <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
                <button onclick="calcular('suma')" class="calc-btn" style="flex: 1; padding: 0.75rem; background: #10b981; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; font-weight: 600;">➕ Suma</button>
                <button onclick="calcular('resta')" class="calc-btn" style="flex: 1; padding: 0.75rem; background: #ef4444; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; font-weight: 600;">➖ Resta</button>
                <button onclick="calcular('multiplicacion')" class="calc-btn" style="flex: 1; padding: 0.75rem; background: #8b5cf6; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; font-weight: 600;">✖️ Multiplicar</button>
                <button onclick="calcular('division')" class="calc-btn" style="flex: 1; padding: 0.75rem; background: #f59e0b; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; font-weight: 600;">➗ Dividir</button>
            </div>
            
            <div id="resultadoCalc" style="text-align: center; font-size: 2rem; font-weight: 700; color: #6366f1; padding: 1rem; background: white; border-radius: 8px; min-height: 60px; display: flex; align-items: center; justify-content: center;">
                Resultado: -
            </div>
        </div>
    `;
    
    seccionHabilidades.insertAdjacentHTML('beforeend', calculadoraHTML);
    
    // Añadir efectos hover a los botones
    document.querySelectorAll('.calc-btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
}

// Función de calculadora
function calcular(operacion) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultadoElement = document.getElementById('resultadoCalc');
    
    // Validar inputs
    if (isNaN(num1) || isNaN(num2)) {
        resultadoElement.textContent = '⚠️ Ingresa números válidos';
        resultadoElement.style.color = '#f59e0b';
        return;
    }
    
    let resultado;
    let simbolo;
    
    switch(operacion) {
        case 'suma':
            resultado = num1 + num2;
            simbolo = '+';
            break;
        case 'resta':
            resultado = num1 - num2;
            simbolo = '-';
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            simbolo = '×';
            break;
        case 'division':
            if (num2 === 0) {
                resultadoElement.textContent = '⚠️ No se puede dividir por cero';
                resultadoElement.style.color = '#ef4444';
                return;
            }
            resultado = num1 / num2;
            simbolo = '÷';
            break;
    }
    
    // Modificar contenido y estilos dinámicamente
    resultadoElement.textContent = `${num1} ${simbolo} ${num2} = ${resultado.toFixed(2)}`;
    resultadoElement.style.color = '#10b981';
    
    // Animación
    resultadoElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
        resultadoElement.style.transform = 'scale(1)';
    }, 200);
    
    console.log(`Operación: ${num1} ${simbolo} ${num2} = ${resultado}`);
}

// ========================================
// 9. NAVEGACIÓN ACTIVA EN SCROLL
// ========================================
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        // Eliminar clase activa
        link.classList.remove('activo');
        link.style.color = '';
        
        if (link.getAttribute('href') === '#' + current) {
            // Añadir clase activa
            link.classList.add('activo');
            link.style.color = '#6366f1';
            link.style.fontWeight = '700';
        }
    });
});

// ========================================
// 10. INICIALIZACIÓN AL CARGAR LA PÁGINA
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM completamente cargado');
    
    // Crear elementos dinámicos
    crearBotonModoOscuro();
    crearCalculadora();
    
    // Mensaje de bienvenida
    console.log('🚀 Portafolio Web cargado correctamente');
    console.log('Funcionalidades activas:');
    console.log('✓ Contador interactivo');
    console.log('✓ Validación de formulario');
    console.log('✓ Calculadora simple');
    console.log('✓ Modo oscuro/claro');
    console.log('✓ Navegación dinámica');
});
