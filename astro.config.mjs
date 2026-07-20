import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

export const dynamiaToolsVersion = '26.7.0'


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
                        'es': 'Comieza Aqui'
                    },
                    items: [
                        'getting-started',
                        'key-concepts',
                        'custom-setup',
                        'view-descriptors',
                        'frontend-sdk',
                        'vue-support'
                    ]
                },
                {
                    label: 'Guides',
                    translations: {
                        es: 'Guías',
                    },
                    autogenerate: {directory: 'guides'},
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
                        'reference/quick-reference'
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
