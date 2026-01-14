2.1 Modelos de Ejecución (1.0 punto)
Ejecución de código en el servidor (Backend)
La ejecución en el servidor implica que el código se procesa en una máquina remota antes de enviar el resultado al cliente. El servidor recibe peticiones, ejecuta la lógica de negocio, accede a bases de datos y genera una respuesta (normalmente HTML, JSON o XML) que envía al navegador.
Características principales:

El código fuente no es visible para el usuario final
Requiere conexión continua con el servidor para operaciones
Mayor seguridad para operaciones sensibles y acceso a datos
Procesamiento centralizado y control total sobre el entorno de ejecución

Ejemplos de tecnologías backend:

Node.js: JavaScript en el servidor usando el motor V8
PHP: Lenguaje de scripting del lado del servidor ampliamente utilizado
Python (Django/Flask): Framework para aplicaciones web robustas
Java (Spring Boot): Framework empresarial para aplicaciones de gran escala

Ejecución de código en el cliente web (Frontend)
La ejecución en el cliente significa que el código se descarga al navegador del usuario y se ejecuta localmente en su dispositivo. Esto permite interactividad inmediata sin necesidad de comunicación constante con el servidor.
Características principales:

El código es visible y puede ser inspeccionado (aunque puede estar ofuscado)
Interacción rápida y fluida sin latencia de red
Reduce la carga del servidor al distribuir el procesamiento
Depende de los recursos y capacidades del dispositivo del usuario

Ejemplos de tecnologías frontend:

JavaScript: Lenguaje nativo de los navegadores
TypeScript: Superconjunto tipado de JavaScript
React/Vue/Angular: Frameworks y librerías para crear interfaces dinámicas
WebAssembly: Código compilado de alto rendimiento en el navegador

Diagrama de Flujos
MODELO BACKEND (Servidor)
═══════════════════════════════════════════════════════════

┌─────────────┐                           ┌─────────────┐
│             │   1. Petición HTTP        │             │
│  Navegador  │ ───────────────────────>  │  Servidor   │
│   Cliente   │                           │   Backend   │
│             │                           │             │
│             │                           │  ┌────────┐ │
│             │                           │  │Procesa │ │
│             │                           │  │ lógica │ │
│             │                           │  └────────┘ │
│             │                           │  ┌────────┐ │
│             │                           │  │  Base  │ │
│             │                           │  │  Datos │ │
│             │                           │  └────────┘ │
│             │   2. Respuesta HTML       │             │
│   Renderiza │ <─────────────────────── │   Genera    │
│   contenido │                           │  respuesta  │
└─────────────┘                           └─────────────┘


MODELO FRONTEND (Cliente)
═══════════════════════════════════════════════════════════

┌─────────────┐                           ┌─────────────┐
│             │   1. Solicita recursos    │             │
│  Navegador  │ ───────────────────────>  │  Servidor   │
│   Cliente   │    (HTML, CSS, JS)        │    Web      │
│             │                           │             │
│             │   2. Envía archivos       │             │
│             │ <───────────────────────  │             │
│  ┌────────┐ │                           └─────────────┘
│  │ Motor  │ │
│  │   JS   │ │  3. Ejecuta JavaScript
│  └────────┘ │     localmente
│  ┌────────┐ │
│  │Manipula│ │  4. Actualiza interfaz
│  │  DOM   │ │     sin servidor
│  └────────┘ │
│             │  5. Solo comunica para
│   Interac-  │     datos (API REST)
│   ción local│ ───────────────────────> (Opcional)
└─────────────┘

2.2 Capacidades del Navegador (1.0 punto)
¿Qué es el motor JavaScript y para qué sirve?
El motor JavaScript es un programa que interpreta y ejecuta código JavaScript. Funciona como el "cerebro" del navegador para procesar scripts, transformando el código de alto nivel en instrucciones que la máquina puede ejecutar. Incluye componentes como:

Parser: Analiza el código y construye el AST (Abstract Syntax Tree)
Intérprete: Ejecuta el código rápidamente línea por línea
Compilador JIT (Just-In-Time): Optimiza código frecuentemente ejecutado compilándolo a código máquina
Recolector de basura: Gestiona automáticamente la memoria

Motores JavaScript y navegadores
Motor JavaScriptNavegador(es)Características destacadasV8Google Chrome, Microsoft Edge, Opera, Node.jsAlto rendimiento, compilación JIT agresiva, desarrollo de GoogleSpiderMonkeyMozilla FirefoxPrimer motor JavaScript de la historia, código abierto, optimizaciones continuasJavaScriptCore (Nitro)Safari (navegadores Apple)Optimizado para eficiencia energética, integración con ecosistema AppleChakraMicrosoft Edge Legacy (descontinuado)Compilación en segundo plano, usado antes del cambio a Chromium
5 Capacidades nativas de los navegadores modernos

APIs de almacenamiento local

LocalStorage, SessionStorage, IndexedDB
Permiten guardar datos en el dispositivo del usuario sin servidor


Geolocalización

API de Geolocation para obtener ubicación del usuario
Útil para servicios basados en localización


Notificaciones push

Notifications API y Push API
Enviar alertas al usuario incluso cuando el sitio no está abierto


Acceso multimedia

WebRTC, getUserMedia para cámara y micrófono
Video llamadas, streaming, captura de audio/video


Gráficos avanzados

Canvas API, WebGL para 2D y 3D
Renderizado de gráficos complejos, juegos, visualizaciones



Capacidades adicionales destacables:

Service Workers (funcionamiento offline)
Web Workers (procesamiento en hilos paralelos)
Drag and Drop API
Fetch API (peticiones HTTP modernas)
Web Audio API (procesamiento de sonido)

¿Qué es el DOM y su importancia?
El DOM (Document Object Model) es una representación en forma de árbol de la estructura de un documento HTML o XML. Es una interfaz de programación que permite a JavaScript acceder y manipular dinámicamente el contenido, estructura y estilo de una página web.
Importancia del DOM:

Interactividad: Permite modificar elementos en tiempo real sin recargar la página (añadir, eliminar, modificar contenido)
Respuesta a eventos: Posibilita detectar y responder a acciones del usuario (clics, teclas, movimientos del ratón)
Manipulación dinámica: Actualizar estilos CSS, cambiar atributos, crear elementos nuevos programáticamente
Estándar universal: Todos los navegadores implementan el DOM siguiendo estándares del W3C
Separación de preocupaciones: Mantiene la estructura (HTML) separada de la lógica (JavaScript)

Ejemplo de estructura del DOM:
document
  └── html
      ├── head
      │   ├── title
      │   └── meta
      └── body
          ├── header
          ├── main
          │   ├── section
          │   └── article
          └── footer

2.3 Lenguajes del Lado del Cliente (1.0 punto)
Tabla Comparativa
CaracterísticaJavaScriptTypeScriptWebAssemblyTipo de lenguajeLenguaje de scripting interpretado, dinámico y débilmente tipadoSuperconjunto tipado de JavaScript, lenguaje de scripting con tipado estático opcionalFormato binario de bajo nivel (bytecode) que sirve como objetivo de compilación¿Requiere compilación?No, se interpreta directamente en el navegador (aunque el motor usa JIT internamente)Sí, se transpila a JavaScript antes de ejecutarse en el navegadorSí, se compila desde lenguajes como C, C++, Rust al formato .wasmParadigma principalMulti-paradigma: orientado a objetos (prototipos), funcional, imperativoMulti-paradigma: igual que JavaScript pero con enfoque en tipado estático y POOImperativo, procedimental (depende del lenguaje fuente: C++, Rust, etc.)Ventaja principalNativo en todos los navegadores, ecosistema enorme, curva de aprendizaje suave, flexibilidad máximaDetección de errores en tiempo de desarrollo, mejor autocompletado IDE, código más mantenible en proyectos grandesRendimiento cercano al código nativo, portabilidad, permite usar C/C++/Rust en el navegadorDesventaja principalPropenso a errores en tiempo de ejecución, difícil mantenimiento en grandes proyectos, sin verificación de tiposRequiere paso adicional de compilación, curva de aprendizaje adicional, mayor verbosidadNo puede manipular el DOM directamente, requiere JavaScript como "pegamento", tamaño de archivo mayor

2.4 Programación de Guiones vs Tradicional (1.0 punto)
¿Qué es un lenguaje de guión (scripting)?
Un lenguaje de guión o scripting es un lenguaje de programación diseñado para automatizar tareas, controlar otros programas o añadir funcionalidad dinámica a aplicaciones existentes. Se caracterizan por:

Interpretación: Generalmente se ejecutan mediante un intérprete en lugar de compilarse a código máquina
Tipado dinámico: Las variables no requieren declaración explícita de tipo
Sintaxis simplificada: Diseñados para escritura rápida y desarrollo ágil
Integración: Suelen ejecutarse dentro de un entorno host (navegador, sistema operativo, aplicación)

En el contexto del navegador, JavaScript actúa como lenguaje de guión para controlar el comportamiento de las páginas web, respondiendo a eventos y manipulando el DOM.
3 Ventajas de la programación de guiones en el navegador

Desarrollo rápido e iterativo

No requiere compilación, los cambios se ven inmediatamente
Ciclo de desarrollo ágil: editar, guardar, recargar
Prototipado rápido de funcionalidades


Accesibilidad y facilidad de uso

Sintaxis más simple y permisiva que lenguajes compilados
Menor curva de aprendizaje para principiantes
Gran cantidad de recursos, bibliotecas y frameworks disponibles


Interactividad inmediata

Ejecución directa en el entorno del usuario
Capacidad de responder instantáneamente a eventos (clics, teclado, etc.)
No requiere instalación ni configuración por parte del usuario



3 Limitaciones o desventajas

Rendimiento limitado

Más lento que código compilado nativo (aunque JIT mejora esto)
No adecuado para operaciones computacionalmente intensivas
Limitaciones en procesamiento de gráficos complejos o cálculos pesados


Seguridad y restricciones del sandbox

Ejecución en entorno restringido (sandbox del navegador)
No puede acceder libremente al sistema de archivos local
Limitado acceso a recursos del sistema por razones de seguridad


Falta de verificación de tipos y errores en tiempo de ejecución

Errores solo se detectan al ejecutar el código
Mayor propensión a bugs que pasan desapercibidos en desarrollo
Dificultad para mantener grandes bases de código (aunque TypeScript mitiga esto)



Diferencias con lenguajes compilados tradicionales
AspectoLenguajes de Guión (JavaScript)Lenguajes Compilados (C++, Java)Proceso de ejecuciónInterpretado o JIT en tiempo de ejecuciónCompilado a código máquina/bytecode antes de ejecutarDetección de erroresEn tiempo de ejecución (runtime)En tiempo de compilación (muchos errores detectados antes)TipadoDinámico y débilEstático y fuerte (requiere declaración de tipos)RendimientoMenor rendimiento (aunque V8 y otros motores han mejorado mucho)Mayor rendimiento, optimizaciones del compiladorGestión de memoriaAutomática (recolector de basura)Manual (C++) o automática (Java), con mayor controlPortabilidadAltamente portable (cualquier navegador)Requiere compilación específica por plataformaTiempo de desarrolloRápido, iterativo, sin compilaciónMás lento, requiere compilar tras cada cambioCurva de aprendizajeMás suave, sintaxis permisivaMás pronunciada, requiere entender conceptos como punteros, gestión de memoriaUso principalScripts, automatización, web, prototipadoSistemas operativos, aplicaciones de alto rendimiento, juegos AAA
