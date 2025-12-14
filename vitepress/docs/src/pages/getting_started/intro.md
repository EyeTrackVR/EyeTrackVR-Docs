<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { alerts } from '../../static/alerts'
import { image_settings } from '../../static/image_settings'
</script>

# EyeTrackVR {.text-3xl .font-bold .underline .text-[#ab5ac7]}

Welcome to **EyeTrackVR**, a Source First, affordable eye-tracking platform designed specifically for adding to VR Headsets.

While built with Social VR (like VRChat) in mind, EyeTrackVR is highly versatile. It works by capturing real-time eye data and transmitting it via `OSC`, making it compatible with a wide variety of VR applications.

Whether you are here to build your own tracker, write code, or just see how it all works, you’ve come to the right place.

---

## Getting Started

Ready to build? This documentation, covers everything from buying parts to flashing firmware. If you are new to the project, please follow these steps:

1. **[Parts List](../how_to_build/part_list)** – Read this first to understand what hardware you need.
2. **[3D Printed Parts](../how_to_build/3d_printed_mounts)** – Read this to find what 3D prints you need.
3. **[Prepare Cameras](../how_to_build/preparing_cameras)** – Prepare the cameras.
4. **[Prepare ESP32](../how_to_build/preparing_xiao)** – Prepare the ESP32s.
5. **[Prepare IR LEDS](../how_to_build/led_setup)** – Prepare IR LEDS.
6. **[Full Build Guide](../how_to_build/v4_full_build)** – Step-by-step instructions to assemble the setup.


---

<Alerts :options="alerts.user_warning">
  <template v-slot:content>
    <p>
      This project is under active development. While it works reliably for many users, you may encounter bugs. Your feedback helps us improve!
    </p>
  </template>
</Alerts>


## Headset Compatibility

EyeTrackVR is designed to be universal. It can theoretically work with **any** VR headset, provided there is a way to mount the cameras inside.

Check our **[Mount List](../how_to_build/parts_list#_3d-printed-mounts)** to see if a 3D-printable mount already exists for your specific headset.

*Don't see your headset listed?* You are welcome to design your own mount or join the community to see if someone else is working on one!

---

## Community & Support

Need help? Want to show off your build? Join our Discord server! We’re excited to have you on board!

<ImageCard :options="image_settings.discord_content" />

---

## ⚠️ Eye Safety in DIY LED Builds

Your safety is our top priority. Because this project involves Infrared (IR) light—which is invisible to the human eye—it is strictly important that you understand the risks.
Our hardware is built with safety in mind, and so it is important that yours does too.

**To ensure safety, you must adhere to the recommended LEDs, wiring diagrams, and firmware settings.**

::: danger
**Never bypass safety features or swap out IR components.**
Changing the recommended hardware without understanding the specific risks can result in permanent eye damage.
:::

Our default configuration is designed to stay well below international safety thresholds (see [ICNIRP guidelines](../safety/ICNIRP_optical_radiation.pdf)). However, as a DIY builder, it is your responsibility to:

- **Use Non-Focused Emitters:** Never use focused laser-like components.
- **Check Intensity:** Keep total radiant intensity below **5 mW/sr**.
- **Verify:** Use an IR-capable camera to visually check LED brightness.
- **Listen to your body:** If you feel warmth or discomfort in your eyes, **stop using the device immediately.**

<Alerts :options="alerts.led_power_warning">
  <template v-slot:content>
    <p>
      Use only <ins class="text-red-400 dark:text-red-500">non-focused</ins> LEDs, and ensure total output is <strong>4 mW/sr or less</strong>.
    </p>
  </template>
</Alerts>

::: details 📚 Safety References & Data
[Effect of infrared radiation on the lens](../safety/effect_of_ir_on_the_lens.pdf)
[Photobiological safety of LED light sources](../safety/AN002_Details_on_photobiological_safety_of_LED_light_sources.pdf)
[ICNIRP Guidelines (0.38 to 3 µm)](../safety/ICNIRP_optical_radiation.pdf)
[Training Library – NIR Standards](../safety/training-library_nir_stds_20021011.pdf)
:::