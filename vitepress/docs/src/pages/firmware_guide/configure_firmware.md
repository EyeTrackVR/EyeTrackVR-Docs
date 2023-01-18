<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { image_settings } from '../../static/image_settings'
import { alerts } from '../../static/alerts'
</script>

# Configuring the firmware {.text-[#ab5ac7]}

## Once you have opened the project, you should see something on the left side like this

<ImageCard :options="image_settings.configure_firmware_one"/>

## Open the `platformio.ini` file

<ImageCard :options="image_settings.configure_firmware_two"/>

On lines 17 and 18 replace the placeholder text with your correct SSID (WiFi access point name), and password respectfully.

<Alerts :options="alerts.parts_list_one">
    <template v-slot:content>
        <p>
           Make sure your wifi router has a 2.4 GHz band. While most do, this is not always the case. Setting each band (5GHz, and 2.4GHz) to different SSIDs is recommended, though not required.
        </p>
    </template>
</Alerts>

Double check that you have correctly entered your WiFi credentials and that said wifi network has a 2.4GHz band.

## [Now, move on to uploading the firmware](/firmware_guide/upload_firmware.html)
