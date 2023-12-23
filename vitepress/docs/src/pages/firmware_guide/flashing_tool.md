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

## `How To Use`

### `Download the tool`

You can download the tool from the [releases page](https://github.com/EyeTrackVR/FirmwareFlashingTool/releases).

### `Flash the firmware`

1. Connect your ESP to your computer
2. Open the tool
3. Select the correct firmware for your board and setup.
4. Download the firmware
5. Connect to the Esp
6. Flash the firmware

For the USB version, this is all you need to do! Well done.

<ImageCard :options="image_settings.flashing_tool"/>

### `WiFi Setup`

<ImageCard :options="image_settings.flashing_tool_1"/>

If you are using the WiFi version, you will need to configure the WiFi settings. After you have flashed the firmware you will need to connect to the ESPs WiFi network. The network name will be `EyeTrackVR`. The password will be `12345678`. Once you have connected to the network, you can open the Firmware Flashing tool and configure the WiFi settings. You will need to enter the SSID and password for your WiFi network. Once you have done this, you can click the `Save` button to save the settings to the ESP. The ESP will then restart and connect to your WiFi network. You can then connect to the ESPs IP address to view the web interface.

To find the ESP's IP address you can either use the serial monitor or look at your routers list of connected devices.

To open the serial monitor,  you will need to connect to the esp, just as you did for flashing. Once you have connected, you can click the `Monitor` button to open the serial monitor. You should then see the ESPs output in the serial monitor.

## `Environments`

The firmware supports multiple environments. This means that we have full support for multiple types of ESPs. Each ESP is configured to be in a different environment. If you are using a different ESP, you will need to change the environment to the correct one.

Please reference the [Firmware Environments Page](../firmware_guide/environments) for more information.
