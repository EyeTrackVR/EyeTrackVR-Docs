<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { alerts } from '../../static/alerts'
import { image_settings } from '../../static/image_settings'
</script>

# EyeTrackVR {.text-3xl .font-bold .underline .text-[#ab5ac7]}

EyeTrackVR is a Source First, affordable eye-tracking platform designed specifically for Virtual Reality—especially for Social VR experiences like VRChat. It works by sending real-time eye tracking data over `OSC` or `UDP`, making it compatible with many existing VR applications.

Whether you're here to build your own tracker, contribute to development, or explore how it works, you're in the right place.

---

## Get Started

This documentation covers everything from assembly and firmware setup to headset mounting and safety. If you're new to the project, we recommend starting with the following pages:

- [Things to Know](https://docs.eyetrackvr.dev/getting_started/things_to_know) – Important background before diving in  
- [Full Build Guide](https://docs.eyetrackvr.dev/how_to_build/full_build) – Step-by-step assembly instructions

<Alerts :options="alerts.user_warning">
  <template v-slot:content>
    <p>
      This project is under active development, but it's already working reliably for many users. Your feedback helps us improve!
    </p>
  </template>
</Alerts>

---

## Eye Safety Notice

Eye safety is a top priority. Infrared (IR) light is invisible but not harmless—especially at close distances and high intensities. EyeTrackVR has built-in safety measures, but users must also follow proper precautions.

**Always use the recommended LEDs, wiring, and firmware settings.**

::: danger
Never bypass safety features or swap out IR components without understanding the risks. Doing so could result in permanent eye damage.
:::

Our default configuration stays well below international safety thresholds (see [ICNIRP guidelines](../safety/ICNIRP_optical_radiation.pdf)), but it's your responsibility to:

- Use non-focused emitters  
- Keep total radiant intensity below **5 mW/sr**
- Verify LED brightness with an IR camera
- Stop using the device if you feel warmth or discomfort in your eyes

<Alerts :options="alerts.led_power_warning">
  <template v-slot:content>
    <p>
      Use only <ins class="text-red-400 dark:text-red-500">non-focused</ins> LEDs, and ensure total output is <strong>4 mW/sr or less</strong>.
    </p>
  </template>
</Alerts>

::: details Safety References
[Effect of infrared radiation on the lens](../safety/effect_of_ir_on_the_lens.pdf)  
[Photobiological safety of LED light sources](../safety/AN002_Details_on_photobiological_safety_of_LED_light_sources.pdf)  
[ICNIRP Guidelines (0.38 to 3 µm)](../safety/ICNIRP_optical_radiation.pdf)  
[Training Library – NIR Standards](../safety/training-library_nir_stds_20021011.pdf)
:::

---

## Hardware Overview

See our [Parts List](https://docs.eyetrackvr.dev/how_to_build/part_list) and [Hardware Repository](https://github.com/EyeTrackVR/EyeTrackVR-Hardware) to source components, print mounts, and prepare your setup.

## Firmware

The firmware powering EyeTrackVR's ESP32 cameras is called **OpenIris**, developed by `lorow`.  
You can find it [here on GitHub](https://github.com/EyeTrackVR/OpenIris).

---

## Headset Compatibility

EyeTrackVR can work with any VR headset—but not every model has a 3D-printed mount available yet.  

Check our [mount list](https://docs.eyetrackvr.dev/how_to_build/parts_list#_3d-printed-mounts) to see if your headset is supported.  
If not, you’re welcome to design your own or wait for a community-sourced version.

---

## Community & Support

Join our Discord server for updates, and community projects. We’re excited to have you on board!

<ImageCard :options="image_settings.discord_content" />



