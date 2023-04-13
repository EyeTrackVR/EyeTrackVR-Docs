<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { alerts } from '../../static/alerts'
import { image_settings } from '../../static/image_settings'
</script>

# EyeTrackVR {.text-3xl .font-bold .underline .text-[#ab5ac7]}

Open source and *affordable* VR eye tracker platform for Social VR Games via `OSC` and `UDP` protocol.

### Welcome to the EyetrackVR documentation website. Here you will find all avalable documentation regauding building, development, and other resources related to this project.


Want to get started? Check out the [getting started page](https://docs.eyetrackvr.dev/getting_started/things_to_know) and then the [full build guide.](https://docs.eyetrackvr.dev/how_to_build/full_build)







<Alerts :options="alerts.user_warning">
    <template v-slot:content>
        <p>
            This project is in active development.
            However, it is working for most users.
        </p>
    </template>
</Alerts>


## About IR Emitter Safety

Please *exercise caution* when messing around with IR emitters.

IR can be dangerous to your eyes once at a certain power level. It is not recommended to use different emitters unless you know exactly what you are doing as it could result in harm to your eyes.
If you doubt yourself, just do exactly what we do. Don't use different emitters, dont use differnt means of power, etc.

::: danger
It is important that you <ins>**DO NOT BYPASS (OR NOT DO) ANY SAFETY FEATURES PUT IN PLACE**</ins>. This can result in irreversible bodily harm.
:::

The safety measures were put in place to REDUCE the potential failure risk. All further safety responsibilities are on the user. This includes visually checking with an IR camera that the brightness is correct and that you do not feel warmth or experience short-term effects after being exposed to the IR light (symptoms such as dark spots or dry/warm feeling eyes while actively using). While we strive to make EyeTrackVR as safe as possible, we do not hold any responsibility for damage done.

<Alerts :options="alerts.led_power_warning">
    <template v-slot:content>
        <p>
            Make sure you are using <ins class="text-red-400 dark:text-red-500">non-focused</ins> emitters and at around <ins class="font-bold">5ma</ins> total power.
        </p>
    </template>
</Alerts>

::: details Want to see the safety data sheets?
[Effect of infrared radiation on the lens](https://docs.eyetrackvr.dev/saftey/effect_of_ir_on_the_lens.pdf)

[AN002_Details on photobiological safety of LED light sources](https://docs.eyetrackvr.dev/saftey/AN002_Details_on_photobiological_safety_of_LED_light_sources.pdf)

[Training-library Nir Stds](https://docs.eyetrackvr.dev/saftey/training-library_nir_stds_20021011.pdf)
:::

## Hardware

Please check out our [parts list](https://docs.eyetrackvr.dev/how_to_build/parts_list) and [hardware repo.](https://github.com/RedHawk989/EyeTrackVR-Hardware) for information regauring hardware.

## Firmware

Our firmware called OpenIris is made by `lorow` found [here](https://github.com/lorow/OpenIris).

## Headset support

In theory, we are compatible with every VR headset. However, mounts may not have been made yet.
Please take a look at our list of [3d printable mounts](https://docs.eyetrackvr.dev/how_to_build/parts_list#_3d-printed-mounts) and see if your headset is on the list.
If it is not listed, It is recommended that you try to make a mount, or wait for a skilled community member to create one.

#### Contact

Please join our discord for updates and any questions. We hope to see you there!

<ImageCard :options="image_settings.discord_content"/>

# Licenses

[![GitHub license](https://img.shields.io/github/license/RedHawk989/EyeTrackVR?style=plastic)](https://github.com/RedHawk989/EyeTrackVR/blob/main/LICENSE)

***All software is under the [MIT License](http://opensource.org/licenses/MIT).
All documentation, including the [Wiki](https://github.com/RedHawk989/EyeTrackVR/wiki), is under the Creative Commons CC-BY-SA-4.0 license***.
