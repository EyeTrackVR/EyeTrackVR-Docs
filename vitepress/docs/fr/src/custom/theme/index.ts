//https://vitepress.vuejs.org/config/theme-configs
//https://vitepress.vuejs.org/guide/theme-nav#navigation-links

//import MyLayout from '../../vue/MyLayout.vue'

const theme = {
    logo: {
        light: '/logo_light.png', dark: '/logo.svg', alt: 'EyeTrackVR Logo'
    },
    siteTitle: 'Docs EyeTrackVR',
    /* Note the footer will not show when sidebar is active */
    footer: {
        message: "Sorti sous une licence MIT.",
        copyright: "Copyright © 2022-present ETVR",
    },
    nav: [
        {
            text: 'À propos',
            items: [
                { text: 'À propos de nous', link: '/about' },
                { text: 'Development Road Map', link: '/dev_roadmap' },
            ]
        },
        { text: "Contact", link: "/contact" },
    ],
    sidebar: [
        {
            text: "Se lancer",
            collapsible: true,
            items: [
                { text: "Introduction", link: "/getting_started/intro" },
                { text: "Choses à savoir avant de commencer", link: "/getting_started/things_to_know" },
            ],
        },
        {
            text: "Comment construire",
            collapsible: true,
            items: [
                { text: "Guide d'assembleage complet", link: "/how_to_build/full_build" },
                { text: "liste des pièces", link: "/how_to_build/parts_list" },
                { text: "Comment créer vos propres montures et attachements", link: "/how_to_build/creating_your_own_mount" },
            ],
        },
        {
            text: "Guide Firmware",
            collapsible: true,
            items: [
                { text: "Introduction", link: "/firmware_guide/firmware" },
                { text: "Mettre en place l'environement Visual Studio Code", link: "/firmware_guide/setup_vscode" },
                { text: "Configurer le Firmware", link: "/firmware_guide/configure_firmware" },
                { text: "téléverser le Firmare", link: "/firmware_guide/upload_firmware" },
                { text: "MDNS", link: "/firmware_guide/mdns" },
                { text: "API de REST", link: "/firmware_guide/rest_api" },
            ],
        },
        {
            text: "Guide Logiciel",
            collapsible: true,
            items: [
                { text: "Installer et mettre en place l'app ETVR", link: "/software_guide/eyetrackvr_app_guide" },
                { text: "Construire l'app depuis la source", link: "/software_guide/build_software" },
            ],
        },
        {
            text: "Divers",
            collapsible: true,
            items: [
                { text: "Mise en place de votre avatar VRChat", link: "/misc/vrc_avatar_setup" },
                { text: "FAQ", link: "/misc/faq" },
            ],
        },
        {
            text: "Développement",
            collapsible: true,
            items: [
                { text: "Docs", link: "/development/docs/dev_docs" },
            ],
        },
        {
            text: "Archive",
            collapsible: true,
            items: [
                { text: "Préparer la soudure des PCB infrarouge V2P", link: "/archive/fox_ir_v2_build_instructions" },
            ],
        },
    ],
    socialLinks: [
        { icon: 'github', link: 'https://github.com/RedHawk989/EyeTrackVR' },
        { icon: 'discord', link: 'https://discord.gg/kkXYbVykZX' }
    ]
}

const ThemeSettings = {}

export { theme, ThemeSettings }