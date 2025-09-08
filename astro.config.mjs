import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

export const dynamiaToolsVersion = '5.4.5'


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
            favicon: './src/assets/favicon.png',
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
                        'custom-setup'
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
