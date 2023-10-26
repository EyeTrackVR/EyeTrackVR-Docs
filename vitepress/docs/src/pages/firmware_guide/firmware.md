# What is this? {.text-[var(--font-accent)]}

Firmware is the second part of the equation to get your trackers going. It lives on the ESP32 chip, and is responsible for streaming video data from the tracker. We currently fully support wireless streaming over 2.4GHz, and are working on adding support for wired streaming to the main desktop App.

## What should I download and where?

You can access the firmware, as well as flash your boards, using our new [Firmware Flashing Tool](https://github.com/EyeTrackVR/FirmwareFlashingTool). 

::: warning Caution
This tool is currently in beta.
:::

We are working on adding support for OTA and configuring network settings. If you have any issues, please let us know by opening an issue on the repository.

This tool relies on our own solution called `OpenIris`, [found here](https://github.com/EyeTrackVR/OpenIris).

::: info Note
You **do not** need to download OpenIris separately. The flashing tool will download it for you.
:::

To check the status of the project, please visit the [Development Road Map](/dev_roadmap)

::: details I want to use VSCode - How would I do this?
[Follow the steps described here](./setup_vscode)
:::
