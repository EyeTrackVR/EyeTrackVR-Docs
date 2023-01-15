<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import { alerts } from '../../static/alerts'
</script>

# EyeTrackVR {.text-3xl .font-bold .underline}

Open source and *affordable* VR eye tracker platform for [VRChat](https://hello.vrchat.com/) via `OSC` and `UDP` protocol.

<Alerts :options="alerts.user_warning">
    <template v-slot:content>
        <p>
            This project is in active development.
            However, it is working for most users.
        </p>
    </template>
</Alerts>

## Hardware

Please check out our [Parts list](https://redhawk989.github.io/EyeTrackVR/parts-list/) and our [full build guide](https://redhawk989.github.io/EyeTrackVR/full-build-guide/) along with our [hardware repo.](https://github.com/RedHawk989/EyeTrackVR-Hardware)

## About IR Emitter Safety

Please *exercise extreme caution* when messing around with IR emitters.

Once safety testing has been completed links and files will be provided for the emitters. {.italic .underline}

Please do not try to make, or use any emitters unless you know exactly what you are doing as it could be very harmful to your eyes if not done correctly.
When files and resources are released <ins>**DO NOT BYPASS (OR NOT DO) ANY SAFETY FEATURES PUT IN PLACE**</ins>. This can result in irreversible bodily harm.

The safety measures were put in place to REDUCE the potential failure risk. All further safety responsibilities are on the user. This includes visually checking with an IR camera that the brightness is correct and that you do not feel warmth or experience short-term effects after being exposed to the IR light (symptoms such as dark spots or dry/warm feeling eyes while actively using). While we strive to make EyeTrackVR as safe as possible, we do not hold any responsibility for damage done.

<Alerts :options="alerts.led_power_warning">
    <template v-slot:content>
        <p>
            Make sure you are using <ins class="text-red-400 dark:text-red-500">non-focused</ins> emitters and at around <ins class="font-bold">5ma</ins> total power.
        </p>
    </template>
</Alerts>

[Effect of infrared radiation on the lens](./docs/Reference_Docs/saftey/effect_of_ir_on_the_lens.pdf)

[Training-library Nir Stds](./docs/Reference_Docs/saftey/training-library_nir_stds_20021011.pdf)

[AN002_Details on photobiological safety of LED light sources](./docs/Reference_Docs/saftey/AN002_Details_on_photobiological_safety_of_LED_light_sources.pdf)

## Firmware

Our firmware called OpenIris is made by `lorow` found [here](https://github.com/lorow/OpenIris).

## Headset support

Please take a look at our list of [3d printable mounts](https://redhawk989.github.io/EyeTrackVR/parts-list/#other-parts) and see if your headset is on the list.
If it is not listed, It is recommended that you try to make a mount, or wait for a skilled community member to create one.

#### Contact

Please join our discord for updates and any questions.

[![Discord](https://discord.com/api/guilds/946212245187199026/widget.png?style=banner3)](https://discord.gg/kkXYbVykZX)

# Licenses

[![GitHub license](https://img.shields.io/github/license/RedHawk989/EyeTrackVR?style=plastic)](https://github.com/RedHawk989/EyeTrackVR/blob/main/LICENSE)

***All software is under the [MIT License](http://opensource.org/licenses/MIT).
All documentation, including the [Wiki](https://github.com/RedHawk989/EyeTrackVR/wiki), is under the Creative Commons CC-BY-SA-4.0 license***.

<!-- <div align="center">
<img src="./docs/assets/images/licenses/licenses.svg" width="300" alt="Open Licenses" />
</div> -->

[Top](#eyetrackvr)
