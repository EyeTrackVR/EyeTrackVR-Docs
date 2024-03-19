<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import CheckBoxList from '../../vue/CheckBoxList.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { RequiredHardware } from '../../static/req_hardware'
import { image_settings } from '../../static/image_settings'
import { alerts } from '../../static/alerts'
</script>

# Preparing a Seeed Studio XIAO Sense ESP32  {.text-[var(--font-accent)]}

## What's in the box

Your XIAO should come with the following components:
* ESP32-S3 Main Board
* Camera Hat With Low FOV Camera
* External Antenna

<ImageCard :options="image_settings.xiao_kit" />

## Wired vs Wireless
The only difference in hardware config between wireless and wired XIAOs is if the antenna is connected or not.

## Wireless Configuration
If you are making a wireless setup, you will need to connect the antenna.

Line up the antenna connector to the one on the board,

<ImageCard :options="image_settings.xiao_antenna" />
then press firmly until it snaps on.

<ImageCard :options="image_settings.xiao_antenna2" />

One connected it should be flat like this:
<ImageCard :options="image_settings.xiao_antenna3" />

## Wired Configuration
If you are making a wired setup, you do not need to attach the antenna.
Set it aside and continue to the next step.


## Connecting the Camera Hat

First, locate the connector on the camera hat, and the corresponding one on the XIAO main board circled below.
<ImageCard :options="image_settings.xiao2" />

Press down carefully until it snaps on.
<ImageCard :options="image_settings.xiao3" />

<ImageCard :options="image_settings.xiao4" />
Once connected remember to be careful, it is known that these connectors can break semi-easily so avoid ripping them apart too many times or twisting on them weirdly.

## Removing the Camera
First we need to remove the existing camera from the XIAO and replace it with a higher FOV longer ribbon camera.

Begin by lifing up the grey part of the camera connector gently until it raises up.
<ImageCard :options="image_settings.xiao5" />
<ImageCard :options="image_settings.xiao6" />

Now grab the camera and gently wiggle it out of the connector.
<ImageCard :options="image_settings.xiao7" />
<ImageCard :options="image_settings.xiao8" />

## Connecting the camera
The camera should have the pins facing downward, you should only see the black end.

Line up the camera with the pins on the connector like below. 
<ImageCard :options="image_settings.xiao9" />

Push the camera in by using a finger on each side of the connector, slowly pushing straight in until it stops.
Be gentle so you do not damage the ribbon cable.
<ImageCard :options="image_settings.xiao10" />

The cable should go about half way in like this image:
<ImageCard :options="image_settings.xiao11" />

Now, close the camera connector by flipping the grey part down.
<ImageCard :options="image_settings.xiao12" />
<ImageCard :options="image_settings.xiao13" />

## Conclusion
You should now have your XIAO Sense ESP32 ready for firmware flashing!
