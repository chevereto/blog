const { reverse, sortBy } = require('lodash')

module.exports = {
    title: 'Chevereto Blog',
    base: '/',
    description: 'All about Chevereto updates, development and more.',
    theme: require.resolve('../../'),
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
        ['meta', {
            name: 'theme-color',
            content: '#23a8e0'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            href: '/logo.png'
        }],
        ['meta', {
            name: 'msapplication-TileImage',
            content: '/logo.png'
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#000000'
        }],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0'
        }],
        ['script', {
                async: true,
                src: 'https://www.googletagmanager.com/gtag/js?id=G-30H0V142P9',
        }],
        ['script', {},
            [
                "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-30H0V142P9');",
            ],
        ],
    ],
    themeConfig: {
        pwa: false,
        authors: [
            {
                name: 'Rodolfo Berrios',
                avatar: '/avatars/rodolfo.jpg',
                link: 'https://rodolfoberrios.com/',
                linktext: 'Rodolfo',
            },
        ],
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/chevereto',
                },
                {
                    type: 'mail',
                    link: 'mailto:inbox@chevereto.com',
                },
                {
                    type: 'globe',
                    link: 'https://chevereto.com',
                },
            ],
            copyright: [
                // {
                //   text: '',
                //   link: '',
                // },
            ],
        },
        sitemap: {
            hostname: 'https://blog.chevereto.com/'
        },
        // comment: {
        //   service: 'disqus',
        //   shortname: 'demowebsite',
        // },
        // newsletter: {
        //   endpoint: '/'
        // },
        feed: {
            canonical_base: 'https://blog.chevereto.com/',
            sort: (entries) => reverse(sortBy(entries, 'date')),
        },
        smoothScroll: true
    },
}
