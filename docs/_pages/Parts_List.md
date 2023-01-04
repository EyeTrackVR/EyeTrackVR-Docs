---
layout: page
title: Part List
permalink: /parts-list/
nav_order: 2
parent: How to build
---

## This page will include a basic part list for building an EyeTrackVR setup

{% include custom/alerts/Warning.html content=" Please note that no hardware has been fully set in stone, all purchases are at your loss if hardware changes" %}

{% include custom/alerts/Note.html content="It is recommended to source main parts from AliExpress as it is much cheaper." %}

{% include custom/alerts/Note.html content="It is good practice to buy more than needed in some cases, namely programmers and ESPs, this reduces the risk of a DOA (dead on arrival) causing a delay." %}

## Camera setup

- 2x ESP-CAM-32 modules [AliExpress here](https://a.aliexpress.com/_mKjL9Cq)

- 2x ov2640 160° fov IR / Night vers 75mm (850nm) [AliExpress here](https://a.aliexpress.com/_mrNbZww) or Amazon alternative cams that you will have to manually remove the IR filter on [here](https://www.amazon.com/Camera-Aideepen-Wide-Angle-Megapixel-Support/dp/B09XXPX4SP/)

- 1x ESP-CAM programmer/ MB [AliExpress here](https://a.aliexpress.com/_mPaPgPu)

Here is an Amazon link for 3 ESP32-Cams and programmers without the proper cameras [here](https://www.amazon.com/ESP32-CAM-ESP32-CAM-MB-Development-Compatible-Raspberry/dp/B097H2KLCH)

- 1x USB type-A male port to power both ESPs

[Bare breakout on AliExpress here](https://www.aliexpress.com/item/2255801092919590.html) or [Amazon here](https://www.amazon.com/10Gtek-DIP-Breakout-Adapter-2-54mm/dp/B09LC8WQCD/)

[Or one with a cover on AliExpress here](https://www.aliexpress.com/item/2251832820552545.html) or [Amazon here](https://www.amazon.com/Pigtail-Extension-Cables-Connector-Replacement/dp/B09ZQNJ2DJ/)


- 1x Lower gauge wire to power ESPs
[28 gauge wire from AliExpress here](https://a.aliexpress.com/_mK72cy6) or [Amazon here](https://www.amazon.com/Fermerry-Silicone-Stranded-Copper-Electrical/dp/B089CTT5X1/)

Reccommended:

- 2x External antennas for ESPs [AliExpress here](https://www.aliexpress.com/item/2255800868378357.html) or [Amazon here](https://www.amazon.com/gp/product/B09K3ZPY5Z/)
## IR Emitters

- 4x Unfocused SMD IR emitters
Recomended ones [from LCSC here](https://www.lcsc.com/product-detail/Infrared-IR-LEDs_XINGLIGHT-XL-3216HIRC-850_C965891.html).
Alternative ones [from Digikey here](https://www.digikey.com/en/products/detail/inolux/IN-P32ZTIR/10384796). The difference between them is the ones from LCSC are rated for lower power, which means in the event of a short or mishap they should be safer, hence why they are recommended. 
{% include custom/alerts/Note.html content="The smaller ones can not be soldered at temps above 245C or they will burn. Low temp solder is recommended" %}

{% include custom/alerts/Warning.html content="(DO NOT BUY FOCUSED ONES! If they look like something you would find in a TV remote do not use them, if you aren't exactly sure what you are doing, buy them from the LCSC or Digikey link)" %}


- 4x IR emitter PCBs (highly recommended) Gerber files and schematics located [here.](https://github.com/RedHawk989/EyeTrackVR-Hardware/tree/main/IR%20Emmitter)

- 2x 698-710ohm resistors or the more recommend way, 4x 350ohm 1206 SMD resistors for IR emitters (If you are not using PCBs for the emitters then buying regular  through-hole resistors is acceptable)
  
- [357 ohm from Digikey here](https://www.digikey.com/en/products/detail/stackpole-electronics-inc/RMCF1206FT357R/1759919) 
- [348 ohm from LCSC here](https://lcsc.com/product-detail/Chip-Resistor-Surface-Mount_BOURNS-CR1206-FX-3480ELF_C205328.html)

or

- [698 ohm from LCSC here](https://lcsc.com/product-detail/Chip-Resistor-Surface-Mount_FOJAN-FRC1206F6980TS_C2933749.html)

I have a kit with the resistors, IR LEDs, and PCBs on [Tindie here.](https://www.tindie.com/products/eyetrackvr/eyetrackvr-pcbs-components-kit/) 
I also have a pre-soldered kit [also on Tindie here](https://www.tindie.com/products/eyetrackvr/assembled-eyetrackvr-ir-led-kit/)
This ensures you get the correct IR emitter parts.
If you are a Patreon please check out discount codes available to you, and also check out unit pricing. 

- 1x Wire to power IR emitters
[32 gauge wire from AliExpress here](https://a.aliexpress.com/_mK72cy6)



## Other parts

- 1x Hot glue or another form of glue. Hot glue gun from [AliExpress here](https://www.aliexpress.com/item/3256803968572059.html) or [Amazon here](https://www.amazon.com/Assark-Sticks-School-Repairs-20W/dp/B09FYWQ44L/)

- 1x Soldering iron and solder (lead-free solder highly recommended) Generic soldering iron from [AliExpress here](https://www.aliexpress.com/item/3256801448141079.html) or [Amazon here](https://www.amazon.com/Liouhoum-Auto-Sleep-Adjustable-Temperature-Thermostatic/dp/B08PZBPXLZ/ref=sr_1_9)


{% include custom/3d_printed_parts/Parts.html %}

### Other Headsets

If you own another headset not listed above, that means there are no mounts designed for them yet. If you have basic skills in modeling or think up a solution to mount cams and emitters, please try to make a mount and then let us in the discord know so it can be added here. Any headset that can fit the camera is potentially compatible. If you are willing, give it a shot to design a mount for the rest of the community.

Check out our basic guide on making your own mount [here.](https://docs.eyetrackvr.dev/creating-your-own-camera-mount/)

{% include custom/alerts/Tip.html content="If you have a headset mount that is not listed above, please let us know in the discord so it can be added here" %}
