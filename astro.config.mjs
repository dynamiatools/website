import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

export const dynamiaToolsVersion = '26.11.0'


// https://astro.build/config
export default defineConfig({
    vite: {
        define: {
            _TOOLS_VERSION_: JSON.stringify(dynamiaToolsVersion)
        }
    },
    site: 'https://dynamia.tools',
    integrations: [
        starlight({
            plugins: [starlightLinksValidator({exclude: ['http://localhost:8080', 'http://localhost:8080/**']})],
            title: 'DynamiaTools',
            logo: {
                light: './src/assets/dynamia-tools-light.svg',
                dark: './src/assets/dynamia-tools-dark.svg',
                replacesTitle: true,
            },
            favicon: '/favicon.png',
            head: [
                {
                    tag: 'link',
                    attrs: {
                        rel: 'icon',
                        href: '/favicon.png',
                        sizes: '32x32',
                    },
                },
            ],
            customCss: [
                './src/styles/custom.css'
            ],
            editLink: {
                baseUrl: 'https://github.com/dynamiatools/website',
            },
            social: [
                {icon: 'github', label: 'GitHub', href: 'https://github.com/dynamiatools/framework'}
            ],

            locales: {
                root: {label: 'English', lang: 'en'},
                es: {label: 'Español', lang: 'es'}
            },
            sidebar: [
                {
                    label: 'Start Here',
                    translations: {
                        es: 'Comienza Aquí'
                    },
                    items: [
                        'getting-started',
                        'key-concepts',
                        'custom-setup'
                    ]
                },
                {
                    label: 'Domain & Data',
                    translations: {
                        es: 'Dominio y Datos'
                    },
                    items: [
                        'guides/entities',
                        'guides/crud-service',
                        'guides/crud-listeners',
                        'guides/validators',
                        'guides/converters'
                    ]
                },
                {
                    label: 'Screens & Actions',
                    translations: {
                        es: 'Pantallas y Acciones'
                    },
                    items: [
                        'view-descriptors',
                        'guides/view-customizers',
                        'guides/navigation',
                        'guides/actions',
                        'guides/ui-ports',
                        'guides/list-filters'
                    ]
                },
                {
                    label: 'Frontend',
                    translations: {
                        es: 'Frontend'
                    },
                    items: [
                        'frontend-sdk',
                        'vue-support',
                        'guides/microfrontends'
                    ]
                },
                {
                    label: 'Extensions',
                    translations: {
                        es: 'Extensiones',
                    },
                    autogenerate: {directory: 'extensions'},
                },
                {
                    label: 'Reference',
                    translations: {
                        es: 'Referencia',
                    },
                    items: [
                        'reference/quick-reference',
                        'guides/development-patterns',
                        'reference/release-notes'
                    ]
                },
                {
                    label: 'Ecosystem',
                    translations: {
                        es: 'Ecosistema',
                    },
                    items: [
                        {
                            label: 'Buckie — File Server',
                            translations: { es: 'Buckie — Servidor de Archivos' },
                            link: 'buckie/',
                        },
                        {
                            label: 'CLI',
                            translations: { es: 'CLI' },
                            link: 'ecosystem/cli',
                        },
                        {
                            label: 'Templates & Themes',
                            translations: { es: 'Plantillas y Temas' },
                            link: 'ecosystem/themes',
                        }
                    ]
                },
                {
                    label: 'About',
                    translations: {
                        es: 'Acerca de'
                    },
                    items: [
                        'history',
                        {
                            label: 'Github',
                            link: 'https://github.com/dynamiatools',

                        }
                    ]
                }
            ],
        }),
    ],
});
