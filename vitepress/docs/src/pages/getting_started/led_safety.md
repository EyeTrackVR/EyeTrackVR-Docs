<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { alerts } from '../../static/alerts'
import { image_settings } from '../../static/image_settings'
</script>




## About IR Emitter Safety

Please *exercise caution* when messing around with IR emitters.

IR can be dangerous to your eyes once at a certain power level. It is not recommended to use different emitters unless you know exactly what you are doing as it could result in harm to your eyes.
If you doubt yourself or are not understand something, just do exactly what we do. Don't use different emitters, don't use different means of power, etc.

::: danger
It is important that you <ins>**DO NOT BYPASS (OR NOT DO) ANY SAFETY FEATURES PUT IN PLACE**</ins>. This can result in irreversible bodily harm.
:::

The safety measures were put in place to REDUCE the potential failure risk. All further safety responsibilities are on the user. This includes visually checking with an IR camera that the brightness is correct and that you do not feel warmth, excessive eye-strain or experience short-term effects after being exposed to the IR light (symptoms such as dark spots or dry/warm feeling eyes while actively using). While we strive to make EyeTrackVR as safe as possible, we do not hold any responsibility for damage done.


### What we care about:

We care about power exposure "W" to the cornea, which we can normalize over the exposed area to Irradiance "mW/cm^2"
This number gives us the amount of IR radiation being released into the normalized area. We don't really care about "mA", or "V" as alone, these do not give us the exposure levels which we need to ensure safety.

Irradiance also needs to take in to account distance of the light source (LED) as the further away you get from a source the weaker the intensity gets. (You can test this by looking at a light source from far away, and as you move closer, the brighter and more painful it is to look at) We do this by using Radiance "mW/cm2/sr" to normalize for the distance. The "sr" is a steradian. Think of it like a cone shape, getting bigger and broader as we move away from the source object.


The International Commission on Non-Ionizing Radiation Protection's [Guidelines of limits of exposure to broad-band incoherent optical radiation (0.38 to 3 µm)](https://docs.eyetrackvr.dev/saftey/ICNIRP_optical_radiation.pdf) states:
> "To avoid thermal injury of the cornea and possible delayed effects on the lens of the eye (cataractogenesis), infrared radiation (780nm < > λ < > 3μm) should be limited to 100 W m⁻² (10 mW cm⁻²) for lengthy exposures (> 1000 s)" 

So 10 mW/cm2 is the **max** recommended limit given by this source. In my opinion this is still quite high, you will definitely feel some warmth and likely eyestrain after a while.

It is known that when outside and not directly looking at the sun, your eyes get exposed to about 1 mW/cm2 or IR radiation. This is the target I set for hardware generally.


<Alerts :options="alerts.build_software_one">
    <template v-slot:content>
        <p>
           This math is assuming the LED is directly in front of your pupil, and your pupil is not moving. In real world this is not the case. We have multiple LEDs around your eye, and your eye moves. When you look to the side, your pupil is not receiving all of the light from all LEDs and the distance grows as well. Properly calculating for this is hard and not worth the time. I Choose to show that the "worst case scenario" is still well withing safety margins.
        </p>
    </template>
</Alerts>


# V3 Hardware Safety Outline an Exposure Numbers:
For all of this math we will assume the "worst" to ensure we are well within safety. 

if powered with 5V, using 700 ohms of resistance, V3 Hardware will draw 0.00314... Amps. We will round up and convert this to 3.2mA.
> (5V - 1.4V - 1.4V) / 700 ohm = 0.00314 ≈ 3.2mA  

The [LED datasheet](https://datasheet.lcsc.com/lcsc/2211030000_XINGLIGHT-XL-3216HIRC-850_C965891.pdf) lists the intensity at 20mA to be a minimum of 2 and max of 5. We will assume the worst and use 5mW/sr.

> 5 mW/sr * (3.2mA / 20mA) = 0.8 mW/sr

Now, we need to account for distance. My number is based on a worst case scenario of 1cm of distance. (typically is is higher on average.) We convert 1cm to 1cm2/sr

> 0.8 mW/sr / 1cm2/sr = 0.8 mW/cm2

Now, this is only for 1 LED, in the case of V3 we have 2 so we can:
> 0.8 mW/cm2 * 2 = 1.6 mW/cm2

This value is well below the limit, and close to normal sun exposure outside.
If the LEDs were further than 1cm (which they typically are) the exposure would be even less.





# V4 Hardware Safety Outline an Exposure Numbers:
For all of this math we will assume the "worst" to ensure we are well within safety. 

V4 hardware is actively limited to ~2.4 mA

The [LED datasheet](https://datasheet.lcsc.com/lcsc/2211030000_XINGLIGHT-XL-3216HIRC-850_C965891.pdf) lists the intensity at 20mA to be a minimum of 2 and max of 5. We will assume the worst and use 5mW/sr.

> 5 mW/sr * (2.4mA / 20mA) = 0.6 mW/sr

Now, we need to account for distance. My number is based on a worst case scenario of 1cm of distance. (typically is is higher on average.) We convert 1cm to 1cm2/sr

> 0.6 mW/sr / 1cm2/sr = 0.6 mW/cm2

Now, this is only for 1 LED, in the case of V4 we have 4 so we can:
> 0.6 mW/cm2 * 4 = 2.4 mW/cm2

This value is well below the limit, and not far from sun exposure.
If the LEDs were further than 1cm (which they typically are) the exposure would be even less. And with typical eye movement they are less.

