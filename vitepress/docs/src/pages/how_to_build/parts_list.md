<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import { alerts } from '../../static/alerts'
import PartsList from '../../vue/parts_list/PartsList.vue'
</script>

# Parts List {.text-[var(--font-accent)]}

<Alerts :options="alerts.parts_list_one">
    <template v-slot:content>
        <p>
           Please note that no hardware has been fully set in stone, all purchases are at your own risk in case of hardware changes.
        </p>
    </template>
</Alerts>

<Alerts :options="alerts.parts_list_three">
    <template v-slot:content>
        <p>
           It is good practice to buy more than needed in some cases, namely cameras,programmers and ESPs. This reduces the risk of a DOA (dead on arrival) causing a delay.
        </p>
    </template>
</Alerts>

## ESP setup options:
::: danger
There are two primary categories of trackers supported: wireless and wired.
It's super important that you really look at all your options and consider your use case before making a decision.
:::

### Option 1: Wireless over WiFi 2.4 GHz

This offers a good starting point as the ESP boards are cheaper than wired capable trackers. 
However, they can be a bit more temperamental and if you are using a wired headset, they start to make less sense.

**Pros:**
- Wider user adoption and greater support
- Low weight, less cables, easier to manage

**Cons:**
- Requires two external antennas for optimal streaming quality
- Requires WiFi 2.4 GHz router or access point in reasonable proximity
- Risk of radio interference with FBT and other WiFi 2.4 GHz devices
- ESP32-CAM uses more power and heats up due to radio module power needs

### Option 2: Wired over USB Serial (in beta)

This is our latest setup recommended for users with wired headsets such as the Valve Index.  

**Pros:**
- Much better performance and higher framerates up to 70 FPS with lower latency
- No conflicts with advanced FBT setups such as Vive or Tundra Trackers
- Can be wireless or wired
- Less soldering required

**Cons:**
- Requires USB port i.e. on Valve Index and USB hub mounted on your headset
- Can be more costly

## Required parts
With that in mind, here are the required parts for the setup. 

### Tracker boards: 
- #### Recommended 
    - 2x XIAO ESP32-S3 Sense Modules  
    Very small size, wireless and wired support, does not require an additional programmer or separate antennas:
    [SeedStudio](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
    [AliExpress](https://www.aliexpress.com/item/3256804601970891.html)
    
    Alternatively: 
    - 2x Freenove ESP 32-S3 WROOM  
    Much larger, price may be higher than the XIAOs, supports wired and wireless as well, does not need a separate programmer, **does not support a separate antenna**.
    [Amazon](https://www.amazon.com/FREENOVE-ESP32-S3-WROOM-Compatible-Wireless-Detailed/dp/B0BMQ8F7FN)

- #### A cheaper, wireless only alternative:
    - 2x ESPCAM32 Modules - They are cheaper, requires a separate programmer board, supports only wireless streaming and may require some soldering for attaching separate antennas:
    [AliExpress](https://a.aliexpress.com/_mKjL9Cq)  
    This board also requires a special programmer board in order to flash the firmware. You'll need only one:
    [AliExpress](https://a.aliexpress.com/_mPaPgPu) for just programmers or
    [Amazon](https://www.amazon.com/DORHEA-Bluetooth-Development-4-75V-5-25V-Raspberry/dp/B08ZS5YWCG/)
    for 3 ESP32-Cams and programmers without the proper cameras

    -  2x External antennas for ESPs
    Required if you're running vive/tundra full body tracking or having issues with streaming. See the full build guide on how to configure the ESP board for antenna use.

        - Small (what Prohurtz uses):
        [AliExpress](https://a.aliexpress.com/_ms1TzXc)

        - Large:
        [AliExpress](https://www.aliexpress.com/item/2255800868378357.html)  
        [Amazon](https://www.amazon.com/gp/product/B09K3ZPY5Z/)

### Cameras
#### Camera modules: 

The cameras that come with the boards will not work, they have an IR filter inside.

The filter can be removed, but doing so may break your cameras. 
Here's how to do it: https://www.youtube.com/watch?v=QYH-FWvDbDc

::: danger
If you decide to remove the filter, wear eye protection while doing so, the removal of the filter will shatter it. 
:::

- #### 2x OV2640 160° FOV IR / Night vers 75mm (850nm)

(select 75MM-160 850nm) [AliExpress](https://www.aliexpress.com/item/3256802853835121.html)

[Amazon alternative](https://www.amazon.com/Camera-Aideepen-Wide-Angle-Megapixel-Support/dp/B09XXPX4SP/) (note that you 
will have to [manually remove the IR filter](https://www.youtube.com/watch?v=QYH-FWvDbDc))

Things worth noting:

- There is an experimental option to purchase OV2640 130° FOV cameras and manually remove the IR filters. This can result in a clearer view of the eye and is smaller so it allows for HMDs like the Bigscreen Beyond, but it's not a default recommendation just yet. Checkout the listing "75MM-130 Degree" [AliEXpress](https://www.aliexpress.us/item/3256804332354572.html)

- If the cameras are Dead on Arrival (DOA), keep in mind that you can swap the lenses with the ones that come with the stock cameras that were included with the ESP32 boards, though they do require extension cables. I recommend just buying more (3-4 instead of just 2).

- #### Optional Ribbon extensions:

Certain mounts may require a cable extension (ex: MUTE's frunk mod)
To use a mount like that you will need a cable and a connector for each camera.
Headsets like the Quest 2 do not require extensions if the camera boards are mounted at the bottom of the headset, near the facial interface.

Extensions (select 0.5mm, A-Forward Direction, 24P) [AliExpress](https://www.aliexpress.com/item/3256802223169786.html) (200mm for MUTE's)

Connectors (select 24P) [Aliexpress](https://www.aliexpress.com/item/3256804096715690.html)

### USB Hubs - for if you are building the wired version 
-  1x USB 3.0+ hub
The hub needs to support MTT if you wish to use a vive face tracker with the ESPs. Here is a hub that supports MTT and is not expensive [Amazon](https://www.amazon.com/dp/B09NDQGSPR)

Ensure that it is of good quality, lightweight, compact in size, and I suggest a minimum of four ports - one for the face tracker, one for the LED kit, and two for ESP32-S3 boards.
Ensure that you acquire appropriate USB-A to USB-C adapters wherever required. For example the Valve Index only has one USB-A port. Be wary that "mini" adapters with the short ends may not work properly. Ensure the adapter has a long end.
Such adapter [Amazon.](https://a.co/d/e5C2u82)

- 2x USB C cables (as short as possible) to connect both ESPs (select 0.05m/5cm) [AliExpress](https://www.aliexpress.com/item/3256804171454889.html) or [AliExpress USB C to USB A](https://www.aliexpress.com/item/3256805789406634.html)
As the ESP32-S3 has USB-C connectors, you may require some USB-C to USB-A cables depending on your USB hub.
It's worth noting that the HTC Face Tracker requires a USB-C port, so you may need to consider this requirement as well.
You may also make custom cables using USB breakout boards of your choice and wire.

### Wires and adapters
If you are soldering and using custom cables:

 - 1x USB type-A male port to power both ESPs or LEDs  
[Bare breakout on AliExpress](https://www.aliexpress.com/item/2255801092919590.html)  
[Amazon](https://www.amazon.com/10Gtek-DIP-Breakout-Adapter-2-54mm/dp/B09LC8WQCD/)  
\
[Or one with a cover on AliExpress](https://www.aliexpress.com/item/2251832820552545.html)  
[Amazon](https://www.amazon.com/Pigtail-Extension-Cables-Connector-Replacement/dp/B09ZQNJ2DJ/)  
- 1x Lower gauge wire to power ESPs  
[28 AWG gauge wire from AliExpress](https://a.aliexpress.com/_mK72cy6)  
[28 AWG Amazon](https://www.amazon.com/Fermerry-Silicone-Stranded-Copper-Electrical/dp/B089CTT5X1/)  

- 1x Higher gauge wire to power IR emitters (V3 or V4 some assembly required)  
[34 AWG AliExpress](https://www.aliexpress.com/item/3256804720067942.html)  

### IR emitters  

#### Recommended: 
We recommend getting the official kits: 

- [Solder-less V4 kit](https://store.eyetrackvr.dev/products/v4-mini-fully-solderless-kit) - requires no soldering.  

- [Solder wires V4 kit](https://store.eyetrackvr.dev/products/v4-mini-some-assemblly-required) - requires you to solder your own wires to the LED boards.

- [Solder V4 Lite kit](https://store.eyetrackvr.dev/products/v4-1-lite-diy-led-kit) - requires you to solder 2 through hole components and wires to the LED boards.


#### Alternatively you can source the parts for V3 yourself:

::: danger
If they look like something you would find in a TV remote, do NOT use them. Even if you think you can alter them THEY WILL NOT WORK AND PUT YOU AT RISK. If you aren't exactly sure what you are doing, buy them from the LCSC or Digikey link.

**DO NOT BUY FOCUSED ONES!**
:::

- 4x Unfocused SMD IR emitters
    <Alerts :options="alerts.parts_list_four">
        <template v-slot:content>
            <p>
            The smaller ones can not be soldered at temps above 245C or they will burn. Low temp solder is recommended.
            </p>
        </template>
    </Alerts>

    - [(Recommended) from LCSC here](https://www.lcsc.com/product-detail/Infrared-IR-LEDs_XINGLIGHT-XL-3216HIRC-850_C965891.html).  
    - [(Alternative) from Digikey here](https://www.digikey.com/en/products/detail/inolux/IN-P32ZTIR/10384796).  
The difference between them is the ones from LCSC are rated for lower power, which means in the event of a short or mishap they should be safer, as well as being smaller in footprint, hence why they are recommended.

- 4x IR emitter PCBs (highly recommended) Gerber files and schematics located [here.](https://github.com/EyeTrackVR/EyeTrackVR-Hardware/tree/main/IR%20Emmitter)

- 4x 350ohm 1206 SMD resistors for IR emitters (If you are not using PCBs for the emitters then buying regular  through-hole resistors is acceptable)
  
- [357 ohm Digikey here](https://www.digikey.com/en/products/detail/stackpole-electronics-inc/RMCF1206FT357R/1759919)
- [348 ohm LCSC here](https://lcsc.com/product-detail/Chip-Resistor-Surface-Mount_BOURNS-CR1206-FX-3480ELF_C205328.html)

This ensures you get the correct IR emitter parts.
If you are a Patreon please check out discount codes available to you, and also check out unit pricing.

- 1x Wire to power IR emitters  
[34 AWG AliExpress](https://www.aliexpress.com/item/3256804720067942.html)  

## 3D Printed Mounts

Mounts with a `★` next to them are the recommended mounts for the respected hmd. This is based on user feedback on what works best for most people.

<Alerts :options="alerts.parts_list_three">
    <template v-slot:content>
        <p>
        You'll need both - a mount for the IR emitters and a mount for the camera boards, some files include both, some don't. 
        </p>
    </template>
</Alerts>

<PartsList />

## Misc parts/tools

- 1x Hot glue or another form of glue.   
[AliExpress](https://www.aliexpress.com/item/3256803968572059.html)  
[Amazon](https://www.amazon.com/Assark-Sticks-School-Repairs-20W/dp/B09FYWQ44L/)

- 1x Soldering iron and solder:
[Pine64 Pinecil (Highly Recommended)](https://www.pine64.org/pinecil/) + [Amazon Solder](https://www.amazon.com/Rosin-Solder-Electronics-Components-repair/dp/B08M5YP6BN/)

[AliExpress (Generic)](https://www.aliexpress.com/item/3256801448141079.html)  
[Amazon (Generic)](https://www.amazon.com/Liouhoum-Auto-Sleep-Adjustable-Temperature-Thermostatic/dp/B08PZBPXLZ/ref=sr_1_9)

- 2x-4x Heatsinks (Optional) - for the ESP32-CAM
[AliExpress](https://www.aliexpress.us/item/3256803892794950.html) (14mm for ESP, 8mm for voltage regulator) 

### Other Headsets

If you own another headset not listed above, that means there are no mounts designed for them yet. If you have basic skills in modeling or think up a solution to mount cams and emitters, please try to make a mount and then let us in the discord know so it can be added here. Any headset that can fit the camera is potentially compatible. If you are willing, give it a shot to design a mount for the rest of the community.

Check out our basic guide on making your own mount [here.](./creating_your_own_mount)

<Alerts :options="alerts.parts_list_six">
    <template v-slot:content>
        <p>
           If you have a headset mount that is not listed above, please let us know in the discord so it can be added here.
        </p>
    </template>
</Alerts>
