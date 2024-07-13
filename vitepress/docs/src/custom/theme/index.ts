//https://vitepress.vuejs.org/config/theme-configs
//https://vitepress.vuejs.org/guide/theme-nav#navigation-links

//import MyLayout from '../../vue/MyLayout.vue'

const theme = {
  logo: {
    light: "/logo_light.png",
    dark: "/logo.svg",
    alt: "EyeTrackVR Logo",
  },
  siteTitle: "EyeTrackVR Docs",
  /* Note the footer will not show when sidebar is active */
  search: {
    provider: "local",
  },
  outline: "deep",
  footer: {
    message: "Released under the MIT License.",
    copyright: "Copyright © 2022-present ETVR",
  },
  nav: [
    {
      text: "About",
      items: [
        { text: "About Us", link: "/about" },
        { text: "Development Road Map", link: "/dev_roadmap" },
      ],
    },
    { text: "Contact", link: "/contact" },
  ],
  sidebar: [
    {
      text: "Getting Started",
      collapsible: true,
      items: [
        { text: "Introduction", link: "/getting_started/intro" },
        {
          text: "Things to know before you start",
          link: "/getting_started/things_to_know",
        },
        { text: "LED Safety", link: "/getting_started/led_safety" },
      ],
    },
    {
      text: "How to Build",
      collapsible: true,
      items: [
        { text: "Part List", link: "/how_to_build/parts_list" },
        { text: "Parts List (BETA)", link: "/how_to_build/part_list" },
        { 
          text: "Protecting Cameras", 
          link: "/how_to_build/protecting_cameras" 
        },
        { 
        text: "Preparing XIAO Sense ESP32", 
        link: "/how_to_build/preparing_xiao" 
        },
        {
          text: "How to Create your own Camera Mount",
          link: "/how_to_build/creating_your_own_mount",
        },
        { text: "Full Build Guide", link: "/how_to_build/full_build" },
      ],
    },
    {
      text: "Headset Guides",
      collapsible: true,
      items: [
        { text: "What is This?", link: "/headset_guides/what_is_this.md" },
        { text: "Valve Index", link: "/headset_guides/valve_index.md" },
      ],
    },
    {
      text: "Firmware Guide",
      collapsible: true,
      items: [
        { text: "Introduction", link: "/firmware_guide/firmware" },
        { text: "Flashing Tool", link: "/firmware_guide/flashing_tool.md" },
        { text: "MDNS", link: "/firmware_guide/mdns" },
        { text: "REST API", link: "/firmware_guide/rest_api" },
      ],
    },
    {
      text: "Software Guide",
      collapsible: true,
      items: [
        {
          text: "Installing and setting up the ETVR App",
          link: "/software_guide/eyetrackvr_app_guide",
        },
        {
          text: "Building the app from source",
          link: "/software_guide/build_software",
        },
        {
          text: "Setting up OSC recenter/recalibrate",
          link: "/software_guide/osc_setup",
        },
        {
          text: "Setting up VRCFT - VRCFT Module",
          link: "/software_guide/VRCFT_tracking_module",
        },
      ],
    },
    {
      text: "Miscellaneous",
      collapsible: true,
      items: [
        { text: "VR Chat Avatar Setup", link: "/misc/vrc_avatar_setup" },
        { text: "FAQ", link: "/misc/faq" },
      ],
    },
    {
      text: "Development",
      collapsible: true,
      items: [
        { text: "Docs", link: "/development/docs/dev_docs" },
        { text: "Edit Docs", link: "/development/docs/pages" },
        { text: "Standards", link: "/development/docs/standards" },
      ],
    },
    {
      text: "Archive",
      collapsible: true,
      items: [
        {
          text: "Setup Visual Studio Code environment",
          link: "/firmware_guide/setup_vscode",
        },
        {
          text: "Configuring Firmware",
          link: "/firmware_guide/configure_firmware",
        },
        { text: "Firmware Environments", link: "/firmware_guide/environments" },
        {
          text: "Uploading and Updating the Firmware",
          link: "/firmware_guide/upload_and_update_firmware",
        },
        {
          text: "Updating PlatformIO",
          link: "/firmware_guide/update_platformio",
        },
        {
          text: "Prepare to solder IR LED PCB V2's",
          link: "/archive/fox_ir_v2_build_instructions",
        },
      ],
    },
  ],
  socialLinks: [
    { icon: "github", link: "https://github.com/EyeTrackVR" },
    { icon: "discord", link: "https://discord.gg/kkXYbVykZX" },
  ],
};

const ThemeSettings = {};

export { theme, ThemeSettings };
