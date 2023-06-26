<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { image_settings } from '../../static/image_settings'
import { alerts } from '../../static/alerts'
</script>

# Firmware Environments {.text-[var(--font-accent)]}

## What is it?

A firmware environment is a way to store the custom firmware config for a specific device. This is useful if you want to have multiple devices with different firmware configs.

We use environments to store the firmware config for each device, so that you can easily switch between them.

Environments are broken up into two distinct parts:

- The `build type` (e.g. `debug`, `release`)
- The `board type` (e.g. `espaithinker`, `esp32cam`)

## Build Types

We now have a couple of options letting us decide how we want to build the firmware.

- `Debug` - The debug environment is the default environment and does not need to be specified. It has a lot of logging so it is useful for getting everything setup for the first time and to see what is going on.

- `_release` - Has a lot less debugging, may also be missing some things available only in debug for debug purposes, this should be flashed when everything is working.

Examples:  
`xiaosenses3` - This is the debug environment.  
`xiaosenses3_release` - This is the release environment for daily use.  
 

::: tip Tip
We recommend starting with a debug environment, and then switching to release once everything is working. A debug environnement should not be used permanently. 
:::

## Board Types

We currently support for several different boards, and we are working on adding more.

::: warning Warning
It is important to note that the `esp32AIThinker` environment is the default environment. Only switch your environment if you have another board or an environment is not working.

Most esp32Cams from Aliexpress will work with the `esp32AIThinker` environment, but some may require the `esp32cam` environment. Test the default environment first, and if it does not work, try the `esp32cam` environment.
:::

Currently supported boards:

- `esp32AIThinker` - This is the default environment. This is for the ESP32-AI-THINKER and generic alibaba/aliexpress/amazon esp cam boards.
- `esp32Cam` - This is for the special ESP32-CAM, it is unlikely that you will need to use this environment.
- `esp32M5Stack` - This is for ESP32M5Stack.
- `esp32WRover` - This is for the ESP32WRover.
- `esp-eye` - This is for the ESP-EYE (not the S3 variant).
- `wrooms3` - For FREENOVE-ESP32-S3 (*wireless mode*)
- `wrooms3QIO` - For FREENOVE-ESP32-S3 (*wireless mode*, for boards with octal flash)
- `wrooms3USB` - For FREENOVE-ESP32-S3 (*wired mode*)
- `wrooms3QIOUSB` - For FREENOVE-ESP32-S3 (*wired mode*, for boards with octal flash)
- `xiaosenses3` - For SeedStudio's XAIO ESP32-S3 Sense (*wireless mode*)
- `xiaosenses3_USB` - For SeedStudio's XAIO ESP32-S3 Sense (*wired mode*)

You can change the board enviroment by changing the `default_envs` argument in `platformio.ini` to a supported board like shown:
<ImageCard :options="image_settings.esp_board_env"/>
