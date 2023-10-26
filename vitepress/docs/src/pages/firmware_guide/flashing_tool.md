<script setup>
import ImageCard from '../../vue/images/ImageComponent.vue'
import { image_settings } from '../../static/image_settings'
</script>

# Firmware Flashing Tool {.text-[var(--font-accent)]}

## `What is this?`

The Firmware Flashing Tool allows you to flash the firmware to your ESPs without requiring VScode. It is a GUI tool that is built using [Tauri](https://tauri.app/) and [SolidJS](https://www.solidjs.com/).

Features include:

- download pre-built firmware binaries
- configure firmware settings
- flash firmware to ESPs
- open a serial monitor to view the ESPs output for debugging

::: info Note
This tool is currently in beta, and we are working on adding support for OTA and configuring network settings. If you have any issues, please let us know by opening an issue on the repository.
:::

<ImageCard :options="image_settings.flashing_tool"/>

<ImageCard :options="image_settings.flashing_tool_1"/>

## `Environments`

The firmware supports multiple environments. This means that we have full support for multiple types of ESPs. Each ESP is configured to be in a different environment. If you are using a different ESP, you will need to change the environment to the correct one.

Please reference the [Firmware Environments Page](../firmware_guide/environments) for more information.
