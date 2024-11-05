<script setup>
import DiyTable from './DiyTable.vue'
import OptionalDiyTable from './OptionalDiyTable.vue'
import Alerts from '../../vue/alerts/Alerts.vue'
</script>

WIP new parts list. 3D printed parts will live on their own page.

Use the **interactive** tables below to select parts!

# Required Parts:

<DiyTable />

# Additional Parts:

<OptionalDiyTable />

<small> Table modified greatly from the table on [SlimeVR's Docs](https://docs.slimevr.dev/diy/components-guide.html) which was created by [Carl](https://github.com/carl-anders)</small>

## ESP setup options:
::: danger
There are two primary categories of trackers supported: wireless and wired.
It's super important that you really look at all your options and consider your use case before making a decision.
:::

## Option 1: Wired over USB Serial
### Wired Capable ESPs:
* Seeed Studio XIAO Sense
* FREENOVE ESP32-S3-WROOM CAM Board  

This is our latest setup recommended for users with wired headsets such as the Valve Index.  

**Pros:**
- Much better performance and higher framerate up to 70 FPS with lower latency
- No conflicts with advanced FBT setups such as Vive or Tundra Trackers
- Can be wireless *or* wired
- Less soldering required compared to ESP32-CAM boards

**Cons:**
- Requires USB port i.e. on Valve Index and USB hub mounted on your headset
- Can be slightly more costly
- When in use with a Vive Facial Tracker or other bandwidth sensitive components, a MTT USB hub is required or the devices will be unusable (low FPS).
- Requires beta app versions until the v2.0 app is released

## Option 2: Wireless over WiFi 2.4 GHz
### Wireless Capable ESPs:

* Seeed Studio XIAO Sense
* ESP32-CAM
* FREENOVE ESP32-S3-WROOM CAM Board  

This offers a good starting point as the ESP32-CAM boards are cheaper than wired capable trackers. 
However, they can be a bit more temperamental and if you are using a wired headset, they don't really make sense.

**Pros:**
- Less cables (power only)
- No issues with USB hubs
- Easier to flash

**Cons:**
- Requires two external antennas for optimal streaming quality
- Requires WiFi 2.4 GHz router or access point in reasonable proximity
- High risk of radio interference with FBT and other WiFi 2.4 GHz devices
- Uses more power and heats up due to radio power needs