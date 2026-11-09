// Text of the home page, in the two languages of the site.
// Code samples and data are shared; only words change.

export type Lang = 'en' | 'es';

export const copy = {
	en: {
		stage: {
			label: 'A Java entity, a YAML descriptor and an action turn into a working screen',
			youWrite: 'You write',
			generated: 'Built at runtime, no code generated',
			preview: 'Generated screen',
			rest: 'Also served as REST',
			autoplayPause: 'Pause the demo',
			autoplayPlay: 'Play the demo',
			ui: {
				title: 'Books',
				search: 'Search',
				status: 'Status',
				all: 'All',
				newItem: 'New',
				edit: 'Edit',
				delete: 'Delete',
				copyIsbn: 'Copy ISBN',
				cols: ['Title', 'Author', 'ISBN', 'Status', 'Price'],
				states: { available: 'Available', reserved: 'Reserved', out: 'Out of stock' },
				page: '1 to 4 of 128',
				a11y:
					'A books list with a search box, a status filter, New, Edit and Delete buttons, a table of four books and a row menu with Edit and Copy ISBN.',
			},
		},
		principles: {
			title: 'Nothing to generate, nothing to keep in sync',
			lead: 'The platform works from your entity and its descriptors as they are, so the model stays the single source of truth.',
			items: [
				['No code generation', 'Screens and endpoints are built at runtime from your entity and its descriptor. There are no generated classes to commit, review or regenerate when the model changes.'],
				['Automatic DTO conversion', 'Entities are converted to BeanMaps, plain key-value maps that carry only the properties the view declares. Your frontend stays independent of the entity classes, and you write no DTOs.'],
				['Java, Kotlin or Groovy', 'Write the backend in the JVM language you prefer. The annotations, descriptors and APIs are the same.'],
			],
			langs: ['Java', 'Kotlin', 'Groovy'],
		},
		layers: {
			title: 'One model, every layer',
			lead: 'You describe the entity once. The platform builds the rest of the stack from it, and each layer stays open to your own code.',
			items: [
				['Entity', 'A JPA class with Bean Validation. The single source of truth.', '@Entity'],
				['Crud service and listeners', 'Persistence, queries and lifecycle hooks behind one interface.', 'CrudService'],
				['REST API', 'Endpoints per page, with filtering, sorting and paging through one query message.', 'POST /api/{path}/find'],
				['Vue components', 'Pages, forms and tables that render themselves from the server metadata, over the same API.', '<DynamiaCrudPage>'],
				['ZK screens', 'Server-rendered CRUD views from the same YAML descriptors, built in when you prefer server-side screens.', 'view: crud'],
			],
			more: 'Read the key concepts',
		},
		frontend: {
			title: 'Bring your own frontend',
			lead: 'The TypeScript SDK talks to the generated API with typed calls. The Vue package renders pages from the server metadata, so a new entity needs no new screen code.',
			sdkFile: 'books.ts',
			vueFile: 'main.ts',
			links: [
				['Frontend SDK', '/frontend-sdk/'],
				['Vue support', '/vue-support/'],
			],
		},
		extensions: {
			title: 'Enterprise features, already built',
			lead: 'Add what a business application needs as modules, with backend and frontend pieces that share the same version.',
			items: [
				['SaaS', 'Multi-tenancy, accounts, and tenant export, import and clone.', '/extensions/saas/'],
				['Reports', 'Stored queries, filters, charts, exports and a public REST API.', '/extensions/reports/'],
				['Dashboard', 'Dashboard pages and custom widgets.', '/extensions/dashboard/'],
				['Security', 'Users, profiles, permissions, JWT and Spring Security.', '/extensions/security/'],
				['Entity files', 'Attach files to entities with local, S3 or Buckie storage.', '/extensions/entity-files/'],
				['Email and SMS', 'Asynchronous email, SMS and one-time codes.', '/extensions/email-sms/'],
				['File importer', 'Spreadsheet imports with progress monitoring.', '/extensions/file-importer/'],
				['Finances', 'Totals, taxes, discounts and withholdings for documents.', '/extensions/finances/'],
				['HTTP functions', 'Versioned calls to third-party APIs.', '/extensions/http-functions/'],
			],
		},
		release: {
			title: 'New in 26.11.0',
			all: 'Read the release notes',
			items: [
				['UI ports', 'Actions that pick entities, preview files, copy and navigate without importing ZK.', '/guides/ui-ports/'],
				['Queries and filters', 'POST /find with a standard QuerySpec, and toolbar filters that ZK and Vue both draw.', '/guides/list-filters/'],
				['Row menu', 'Actions publish menuSupported and position, and Vue lists them in order.', '/guides/actions/#row-menu-and-ordering'],
				['Headless actions', 'Declare @RunsOn(ActionRuntime.HEADLESS). HeadlessCapable is deprecated.', '/guides/actions/#publishing-actions-to-remote-clients-runson'],
			],
		},
		proof: {
			text: ['13+ years of development.', '10+ projects in production.', '40+ modules in use.'],
			note: 'Built on Spring Boot 4, Java 25, JPA, Vue and ZK 10, and used by companies across Latin America and Europe.',
			link: 'Read our history',
			linkHref: '/history/',
		},
		start: {
			title: 'Start in five minutes',
			steps: [
				['Create a Spring Boot 4 project on Java 25.'],
				['Add the starter dependency.'],
				['Enable the platform and run it.'],
			],
			copy: 'Copy',
			copied: 'Copied',
			primary: ['Open the getting started guide', '/getting-started/'],
			secondary: ['Browse the guides', '/guides/entities/'],
		},
	},
	es: {
		stage: {
			label: 'Una entidad Java, un descriptor YAML y una acción se convierten en una pantalla funcionando',
			youWrite: 'Tú escribes',
			generated: 'Se construye al ejecutar, sin generar código',
			preview: 'Pantalla generada',
			rest: 'También como REST',
			autoplayPause: 'Pausar la demostración',
			autoplayPlay: 'Reproducir la demostración',
			ui: {
				title: 'Libros',
				search: 'Buscar',
				status: 'Estado',
				all: 'Todos',
				newItem: 'Nuevo',
				edit: 'Editar',
				delete: 'Eliminar',
				copyIsbn: 'Copiar ISBN',
				cols: ['Título', 'Autor', 'ISBN', 'Estado', 'Precio'],
				states: { available: 'Disponible', reserved: 'Reservado', out: 'Agotado' },
				page: '1 a 4 de 128',
				a11y:
					'Una lista de libros con cuadro de búsqueda, filtro de estado, botones Nuevo, Editar y Eliminar, una tabla de cuatro libros y un menú de fila con Editar y Copiar ISBN.',
			},
		},
		principles: {
			title: 'Nada que generar, nada que mantener sincronizado',
			lead: 'La plataforma trabaja con tu entidad y sus descriptores tal como están, así que el modelo sigue siendo la única fuente de verdad.',
			items: [
				['Sin generación de código', 'Las pantallas y los endpoints se construyen al ejecutar, a partir de tu entidad y su descriptor. No hay clases generadas que versionar, revisar ni regenerar cuando cambia el modelo.'],
				['Conversión automática a DTO', 'Las entidades se convierten en BeanMaps, mapas clave-valor que llevan solo las propiedades que declara la vista. Tu frontend queda independiente de las clases de entidad y no escribes DTOs.'],
				['Java, Kotlin o Groovy', 'Escribe el backend en el lenguaje de la JVM que prefieras. Las anotaciones, los descriptores y las APIs son los mismos.'],
			],
			langs: ['Java', 'Kotlin', 'Groovy'],
		},
		layers: {
			title: 'Un modelo, todas las capas',
			lead: 'Describes la entidad una sola vez. La plataforma construye el resto de la pila a partir de ella, y cada capa sigue abierta a tu propio código.',
			items: [
				['Entidad', 'Una clase JPA con Bean Validation. La única fuente de verdad.', '@Entity'],
				['Crud service y listeners', 'Persistencia, consultas y ganchos del ciclo de vida tras una sola interfaz.', 'CrudService'],
				['API REST', 'Endpoints por página, con filtros, orden y paginación en un solo mensaje de consulta.', 'POST /api/{path}/find'],
				['Componentes Vue', 'Páginas, formularios y tablas que se dibujan solos desde los metadatos del servidor, sobre la misma API.', '<DynamiaCrudPage>'],
				['Pantallas ZK', 'Vistas CRUD en el servidor desde los mismos descriptores YAML, incluidas si prefieres pantallas en el servidor.', 'view: crud'],
			],
			more: 'Lee los conceptos clave',
		},
		frontend: {
			title: 'Trae tu propio frontend',
			lead: 'El SDK de TypeScript habla con la API generada con llamadas tipadas. El paquete de Vue dibuja las páginas desde los metadatos del servidor, así que una entidad nueva no necesita código de pantalla nuevo.',
			sdkFile: 'books.ts',
			vueFile: 'main.ts',
			links: [
				['SDK Frontend', '/es/frontend-sdk/'],
				['Soporte Vue', '/es/vue-support/'],
			],
		},
		extensions: {
			title: 'Funciones empresariales ya construidas',
			lead: 'Agrega lo que necesita una aplicación de negocio como módulos, con piezas de backend y frontend que comparten la misma versión.',
			items: [
				['SaaS', 'Multi-tenant, cuentas, y exportación, importación y clonación de tenants.', '/es/extensions/saas/'],
				['Reportes', 'Consultas guardadas, filtros, gráficos, exportación y una API REST pública.', '/es/extensions/reports/'],
				['Dashboard', 'Páginas de dashboard y widgets personalizados.', '/es/extensions/dashboard/'],
				['Seguridad', 'Usuarios, perfiles, permisos, JWT y Spring Security.', '/es/extensions/security/'],
				['Entity files', 'Adjunta archivos a entidades con almacenamiento local, S3 o Buckie.', '/es/extensions/entity-files/'],
				['Email y SMS', 'Email, SMS y códigos de un solo uso, de forma asíncrona.', '/es/extensions/email-sms/'],
				['File importer', 'Importación de hojas de cálculo con monitoreo de progreso.', '/es/extensions/file-importer/'],
				['Finances', 'Totales, impuestos, descuentos y retenciones para documentos.', '/es/extensions/finances/'],
				['HTTP functions', 'Llamadas versionadas a APIs de terceros.', '/es/extensions/http-functions/'],
			],
		},
		release: {
			title: 'Novedades de la 26.11.0',
			all: 'Lee las notas de versión',
			items: [
				['Puertos de UI', 'Acciones que eligen entidades, previsualizan archivos, copian y navegan sin importar ZK.', '/es/guides/ui-ports/'],
				['Consultas y filtros', 'POST /find con un QuerySpec estándar, y filtros de barra que dibujan ZK y Vue.', '/es/guides/list-filters/'],
				['Menú de fila', 'Las acciones publican menuSupported y position, y Vue las lista en orden.', '/es/guides/actions/#menú-de-fila-y-orden'],
				['Acciones headless', 'Declara @RunsOn(ActionRuntime.HEADLESS). HeadlessCapable está obsoleta.', '/es/guides/actions/#publicar-acciones-a-clientes-remotos-runson'],
			],
		},
		proof: {
			text: ['Más de 13 años de desarrollo.', 'Más de 10 proyectos en producción.', 'Más de 40 módulos en uso.'],
			note: 'Construida sobre Spring Boot 4, Java 25, JPA, Vue y ZK 10, y usada por empresas de Latinoamérica y Europa.',
			link: 'Lee nuestra historia',
			linkHref: '/es/history/',
		},
		start: {
			title: 'Empieza en cinco minutos',
			steps: [
				['Crea un proyecto Spring Boot 4 en Java 25.'],
				['Agrega la dependencia del starter.'],
				['Habilita la plataforma y ejecútala.'],
			],
			copy: 'Copiar',
			copied: 'Copiado',
			primary: ['Abre la guía de inicio', '/es/getting-started/'],
			secondary: ['Explora las guías', '/es/guides/entities/'],
		},
	},
} as const;
