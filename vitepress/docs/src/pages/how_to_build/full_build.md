<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import CheckBoxList from '../../vue/CheckBoxList.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { RequiredHardware } from '../../static/req_hardware'
import { image_settings } from '../../static/image_settings'
import { alerts } from '../../static/alerts'
</script>

<!-- @include: ./full_build_parts/start.md -->

<!-- @include: ./full_build_parts/7_12.md -->

<!-- @include: ./full_build_parts/13_18.md -->

## Solder LEDs on PCB V3

Tin the LED pads.

<ImageCard :options="image_settings.end_one"/>

Orientate the LED and hold it in place.

<ImageCard :options="image_settings.end_two"/>

Solder one end.

<ImageCard :options="image_settings.end_three"/>

Flip around and solder the other end.

<ImageCard :options="image_settings.end_four"/>

## Wire up the PCBs V3

::: warning
Pay attention to the direction of the LEDs on the PCBs.
:::

If the green dot is facing inwards like in the picture below:

<ImageCard :options="image_settings.end_five"/>

Use the following diagram:

<ImageCard :options="image_settings.end_six"/>

If the green dot is facing outward like the picture below:

<ImageCard :options="image_settings.end_seven"/>

Use the following diagram:

<ImageCard :options="image_settings.end_eight"/>

## Step 19: 3D print mounts

Head to the 3D printed parts section of the parts list [here.](/how_to_build/parts_list#other-parts)

Find which parts are for your headset and print them.
Some may work better or worse, it is recommended to test all of them if there are multiple, print one of each kind.
If none work, try making an edit yourself if you have the skills. If you have made a mount make sure to ping me, `Prohurtz#0001`, so I can add them to the list.

Having trouble getting them to fit? Try resizing the mounts up, or down a little to ensure a good fit.

There are 2 different types of mounts, how to secure the camera to each type will be documented below.

### Type 1

<ImageCard :options="image_settings.end_nine"/>

This uses a method of sliding in the camera. Generally, this is the recommended mounting method as it generally requires no glue.

Place the camera into the mount

<ImageCard :options="image_settings.end_ten"/>

Slowly apply pressure inwards until the camera snaps into place.

<ImageCard :options="image_settings.end_eleven"/>

<div align="center">
    <Alerts :options="alerts.end_one">
        <template v-slot:content>
            <p>
                There is a good chance of breaking the mount when putting in the camera. If this happens you may be able to save the mount depending on where the break was. A small dab of hot glue around the camera is likely all that is needed.
            </p>
        </template>
    </Alerts>
</div>

### Type 2

<ImageCard :options="image_settings.end_twelve"/>

This uses the method of gluing the camera.

Apply a bit of glue to the bottom of the camera mount.

<ImageCard :options="image_settings.end_thirteen"/>

Place the camera on the mount.

<ImageCard :options="image_settings.end_fourteen"/>

## IR LED mounting

This again differs from mount to mount.

In some cases, there are designated spots for the LEDs to go.

<ImageCard :options="image_settings.end_fifteen"/>

In others there are no specified spots, you will have to mess around to find what works best.
This image shows the optimal/near-optimal position for the LEDs. Hot glue is your friend with this.

<ImageCard :options="image_settings.end_sixteen"/>

::: tip
Use rubbing alcohol to easily remove hot glue.
:::
