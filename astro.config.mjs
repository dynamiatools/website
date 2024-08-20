import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'DynamiaTools',
            social: {
                github: 'https://github.com/dynamiatools/framework',
            },
            defaultLocale: 'en',
            locales: {
                en: {
                    label: 'English'
                },
                es: {
                    label: 'Español'
                }
            },
            sidebar: [

            ],
        }),
    ],
});
