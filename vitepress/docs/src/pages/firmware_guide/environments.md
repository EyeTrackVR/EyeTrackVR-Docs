# Firmware Environments {.text-[var(--font-accent)]}

## What is it?

A firmware environment is a way to store the custom firmware config for a specific device. This is useful if you want to have multiple devices with different firmware configs.

We use environments to store the firmware config for each device, so that you can easily switch between them.

Environments are broken up into two distinct parts:

- The `build type` (e.g. `debug`, `release`)
- The `board type` (e.g. `espaithinker`, `esp32cam`)

## Build Types

We now have a couple of options letting us decide how we want to build the firmaware.

- `Debug` - Has a lot of logging, useful for getting everything setup for the first time and to see what is going on.

The debug environment is the default environment, so you don't need to specify it when building.

All debug environments are the default board environments, only `OTA` and `release` are specified in the name.

::: tip Tip
We recommend starting with a debug environment, and then switching to release once everything is working.
:::

- `Release` - Has a lot less debugging, may also be missing some things availible only in debug for debug purposes, this should be flashed when everything is working.

- `OTA` - Just like release, but it will upload your firmware to your esp wirelessly.

::: warning Warning
You need to change the IP to which board we should upload to, the setting is called the `otaserverip` and can be found in the `user_config.ini` file.

The `otaserverip` setting supports both `IPv4` and `mDNS` names, as long as the `mDNS` name is resolvable on your network (i.e: you have bonjour installed on your computer).

You can also change the port and password, but it's not recommended.
:::

## Board Types

We currently support a few different boards, and we are working on adding more.

::: warning Warning
It is important to note that the `esp32AIThinker` environment is the default environment, and will work for the vast majority of users. Do not switch your environment unless you know what you are doing, and have tested the default environment first, and verified that it does not work for you.

Most esp32Cams from Aliexpress will work with the `esp32AIThinker` environment, but some may require the `esp32cam` environment. Test the default environment first, and if it does not work, try the `esp32cam` environment.
:::

Currently supported boards:

- `esp32AIThinker` - The ESP32 Ai Thinker.
- `esp32cam` - The ESP32 Camera.
- `esp_eye` - The Non-Esp32S3 version of the ESP-EYE camera.
- `esp32M5Stack` - The ESP32 M5Stack camera.
- `wrover` - The ESP32 WRover (Non-ESP32-S3 variant).

::: tip Coming Soon

- `esp32s3cam` - The ESP32-S3 Camera boards.

:::
