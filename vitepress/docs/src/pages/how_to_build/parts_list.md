<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import { alerts } from '../../static/alerts'
import PartsList from '../../vue/parts_list/PartsList.vue'
</script>

# Parts List {.text-[var(--font-accent)]}

<Alerts :options="alerts.parts_list_one">
    <template v-slot:content>
        <p>
           Please note that no hardware has been fully set in stone, all purchases are at your loss if hardware changes.
        </p>
    </template>
</Alerts>

## This page will include a basic part list for building an EyeTrackVR setup

<Alerts :options="alerts.parts_list_two">
    <template v-slot:content>
        <p>
           It is recommended to source the main parts from AliExpress as it is much cheaper.
        </p>
    </template>
</Alerts>

---

<Alerts :options="alerts.parts_list_three">
    <template v-slot:content>
        <p>
           It is good practice to buy more than needed in some cases, namely programmers and ESPs, this reduces the risk of a DOA (dead on arrival) causing a delay.
        </p>
    </template>
</Alerts>

## Camera setup

- ### 2x ESP-CAM-32 modules  
[AliExpress](https://a.aliexpress.com/_mKjL9Cq)

- ### 2x ov2640 160° FOV IR / Night vers 75mm (850nm)  
[AliExpress](https://a.aliexpress.com/_mrNbZww)  
[Amazon alternative](https://www.amazon.com/Camera-Aideepen-Wide-Angle-Megapixel-Support/dp/B09XXPX4SP/) (note that you will have to [manually remove the IR filter](https://www.youtube.com/watch?v=QYH-FWvDbDc))

- ### 1x ESP-CAM programmer / MB  
[AliExpress](https://a.aliexpress.com/_mPaPgPu)  
[Amazon](https://www.amazon.com/DORHEA-Bluetooth-Development-4-75V-5-25V-Raspberry/dp/B08ZS5YWCG/)
 for 3 ESP32-Cams and programmers without the proper cameras

- ### 1x USB type-A male port to power both ESPs  
[Bare breakout on AliExpress](https://www.aliexpress.com/item/2255801092919590.html)  
[Amazon](https://www.amazon.com/10Gtek-DIP-Breakout-Adapter-2-54mm/dp/B09LC8WQCD/)  
\
[Or one with a cover on AliExpress](https://www.aliexpress.com/item/2251832820552545.html)  
[Amazon](https://www.amazon.com/Pigtail-Extension-Cables-Connector-Replacement/dp/B09ZQNJ2DJ/)  
- ### 1x Lower gauge wire to power ESPs  
[28 AWG gauge wire from AliExpress](https://a.aliexpress.com/_mK72cy6)  
[28 AWG Amazon](https://www.amazon.com/Fermerry-Silicone-Stranded-Copper-Electrical/dp/B089CTT5X1/)  

- ### 1x Higher gauge wire to power IR emitters  
[34 AWG AliExpress](https://www.aliexpress.com/item/3256804720067942.html)  


## Recommended:

- ### Antennas
Needed if you're running vive/tundra full body tracking or having issues with streaming:
- ### 2x External antennas for ESPs 
Small (what prohurtz uses):  
[AliExpress](https://a.aliexpress.com/_ms1TzXc)

Large:  
[AliExpress](https://www.aliexpress.com/item/2255800868378357.html)  
[Amazon](https://www.amazon.com/gp/product/B09K3ZPY5Z/)

- ### 2x-4x Heatsinks
[AliExpress](https://www.aliexpress.us/item/3256803892794950.html) (14mm for ESP, 8mm for voltage regulator)

- ### 2x Camera cable extensions
Certain mounts may require a cable extension (MUTE's frunk mod)
To use a mount like that you will need a cable and a connector for each camera.
Headsets like the Quest 2 do not require extensions.

Cables (select 0.5mm pitch type A) [AliExpress](https://a.aliexpress.com/_mqVcK8a) (200mm for MUTE's)

Connectors (select 24P) [Aliexpress](https://www.aliexpress.com/item/3256804096715690.html)


## IR Emitters

### IR LED kit
If you do not want to source things from multiple places or save money and time on assembly, you can buy an offical LED kit on our store:  
[Pre soldered kit](https://store.eyetrackvr.dev/products/assembled-eyetrackvr-ir-led-kit)  
[Raw component kit](https://store.eyetrackvr.dev/products/eyetrackvr-pcbs-components-kit)

### Alternatively you can source the parts yourself:
- 4x Unfocused SMD IR emitters  
[(Recomended) from LCSC here](https://www.lcsc.com/product-detail/Infrared-IR-LEDs_XINGLIGHT-XL-3216HIRC-850_C965891.html).  
[(Alternative) from Digikey here](https://www.digikey.com/en/products/detail/inolux/IN-P32ZTIR/10384796).  
The difference between them is the ones from LCSC are rated for lower power, which means in the event of a short or mishap they should be safer, as well as being smaller in footprint, hence why they are recommended.
<Alerts :options="alerts.parts_list_four">
    <template v-slot:content>
        <p>
           The smaller ones can not be soldered at temps above 245C or they will burn. Low temp solder is recommended.
        </p>
    </template>
</Alerts>

<Alerts :options="alerts.parts_list_five">
    <template v-slot:content>
        <p>
           <text class="font-bold">DO NOT BUY FOCUSED ONES!</text>
           <br>
           If they look like something you would find in a TV remote, do not use them. If you aren't exactly sure what you are doing, buy them from the LCSC or Digikey link.
        </p>
    </template>
</Alerts>

- 4x IR emitter PCBs (highly recommended) Gerber files and schematics located [here.](https://github.com/RedHawk989/EyeTrackVR-Hardware/tree/main/IR%20Emmitter)

- 4x 350ohm 1206 SMD resistors for IR emitters (If you are not using PCBs for the emitters then buying regular  through-hole resistors is acceptable)
  
- [357 ohm Digikey here](https://www.digikey.com/en/products/detail/stackpole-electronics-inc/RMCF1206FT357R/1759919)
- [348 ohm LCSC here](https://lcsc.com/product-detail/Chip-Resistor-Surface-Mount_BOURNS-CR1206-FX-3480ELF_C205328.html)

This ensures you get the correct IR emitter parts.
If you are a Patreon please check out discount codes available to you, and also check out unit pricing.

- 1x Wire to power IR emitters  
[34 AWG AliExpress](https://www.aliexpress.com/item/3256804720067942.html)  

## Misc parts

- 1x Hot glue or another form of glue.   
[AliExpress](https://www.aliexpress.com/item/3256803968572059.html)  
[Amazon](https://www.amazon.com/Assark-Sticks-School-Repairs-20W/dp/B09FYWQ44L/)

- 1x Soldering iron and solder  
[AliExpress](https://www.aliexpress.com/item/3256801448141079.html)  
[Amazon](https://www.amazon.com/Liouhoum-Auto-Sleep-Adjustable-Temperature-Thermostatic/dp/B08PZBPXLZ/ref=sr_1_9)

## 3D Printed Mounts

Mounts with a `★` next to them are the recommended mounts for the respected hmd. This is based on user feedback on what works best for most people.

<PartsList />

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
