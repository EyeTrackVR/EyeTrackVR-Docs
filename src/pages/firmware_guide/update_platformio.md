<script setup>
import ImageCard from '../../vue/images/ImageComponent.vue'
import { image_settings } from '../../static/image_settings'
</script>

# Updating Platformio {.text-[var(--font-accent)]}

Sometimes, when building and uploading the firmware, you may run into bizarre, even-though the code is correct - platformio will refuse to build  and instead will complain with some weird error.

It usually means that either PlatformIO, or ArduinoSDK got and update and that's the moment when this guide may come in handy. 


## Updating PlatformIO itself

There are two ways to update your platformio installation

### Via CLI 

You can update it easily by simply typing in one command into your terminal.

<ImageCard :options="image_settings.pio_upgrade_command"/>

1. Open a terminal / command prompt
2. Type `pio upgrade` and press enter
3. Wait for it to finish
4. Done

### Via PlatformIO in Visual Studio Code

You can also update it using the platformio tab in your Visual Studio Code. 

1. Open VSC
2. Click on that little and icon on the sidebar

<ImageCard :options="image_settings.ant_logo_platformio"/>

3. A side panel will open, there will be a couple of sections, one of them called `Quick Access`, open it.

<ImageCard :options="image_settings.platformio_quick_access"/>

4. In `Quick Access` section, click on the `Miscelleneous` tab

<ImageCard :options="image_settings.platformio_quick_access_miscellaneous"/>

5. Then, click on the `Upgrade PlatformIO Core`

<ImageCard :options="image_settings.platformio_quick_access_upgrade_core"/>

6. Wait for it to finnish and done!

## Upgrading the SDK

You'll also need to upgrade the SDK from timem to do this

### Upgrading the SDK via VSC

1. Follow the guide above up until clicking on the `Quick Access` section. 
2. Instead, open the `PIO Home` and select `Open`

<ImageCard :options="image_settings.platformio_pio_home"/>

3. This will open a window for PlatformIO dashboard, in there, click on a `Platforms` button on the sidebar 

<ImageCard :options="image_settings.platformio_pio_sidebar_platforms"/>

4. Once there, you should see a couple of tabs next to the side bard, things like `Installed` or `Embedded`. Click on `Updates`

<ImageCard :options="image_settings.platformio_pio_sidebar_platforms_updates"/>

5. Locate a platform called `Espressif 32` and click on `Update to <version>`

<ImageCard :options="image_settings.platformio_pio_espressif32"/>

6. Wait until it is done and that's it!