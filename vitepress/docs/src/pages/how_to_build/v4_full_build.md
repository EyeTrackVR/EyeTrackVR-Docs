<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import CheckBoxList from '../../vue/CheckBoxList.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { RequiredHardware } from '../../static/req_hardware'
import { image_settings } from '../../static/image_settings'
import { alerts } from '../../static/alerts'
</script>


# V4 Build Guide (WIP) {.text-[var(--font-accent)]}
This is a heavily unfinished docs page for a V4 setup build.

After following our part's list you should have the following components.



You should have the following parts:

    2 × Supported ESP32 Camera Boards
    2 × Cameras Without IR Filters
    1 × V4 IR Emitter Kit
    3 × USB-C cables
    1 × USB hub
    1 × Set of 3D printed mounts


## Prepare you hardware
Follow the docs pages for preparing the LEDs, cameras and ESPs. 

Flash the OpenIris firmware onto the ESPs.

## Prepare and assemble the 3d printed mounts
Clip the LEDs into the 3d printed mounts, routing the wires up to the top of the headset.

Attach the cameras to the mount carefully. If you are using 130 degree cameras you might need to hotglue them depending on the mount. Glue the plastic housing and not the lens or back of the camera (it will melt).

Now, carefully attach the mounts to your lens and route the camera cables down and out, and the LED wires up and through the top of the headset gasket.

Now, attach the ESPs to your headset by hot-gluing a mount or whatever other mount they use.

Attach your headset gasket carefully now.

## Wiring it up
Now, connect your USB hub to your headset and connect the ESPs and LED board with USB-C cables.

Attach any ESP antennas now to your headset.

Cable manage!

## Software
At this point you should have all of your hardware and firmware ready so it is time to set-up the tracking app.

### Wired
On Windows, you will need to open Device manager and find the COM port. (you may have this from the firmware flashing step). Under `Serial Devices (Com)` there will be a list of devices. You can unplug an ESP and see which one disconnects which will be the port of the ESP. Enter this into the app under the cooresponding eye (right or left) like `COM4`.

### Wireless
When flashing the firmware you will have set a MDNS address like `ETVR-left.local`. Enter this into the app under its corresponding eye.