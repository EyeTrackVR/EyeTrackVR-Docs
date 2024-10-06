<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import CheckBoxList from '../../vue/CheckBoxList.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { RequiredHardware } from '../../static/req_hardware'
import { image_settings } from '../../static/image_settings'
import { alerts } from '../../static/alerts'
</script>

# IR Filter Removal  {.text-[var(--font-accent)]}
Some cameras require a removal of the IR filter, so the sensors are able to pick up the lighting provided by the IR LED's.
Many times, the IR filter will still be on the 160° night vision model. If your feed looks dark, this may be why!

### 130° IR Filter removal

<iframe width="560" height="315" src="https://www.youtube.com/embed/mRSLSeX3omA" title="How to Remove the IR Filter on a 130 Deg OV2640 Camera" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 160° IR Filter removal

<iframe width="560" height="315" src="https://www.youtube.com/embed/QYH-FWvDbDc?si=XKXL1B2BZKtDMlQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

##

# Blurry Camera?   {.text-[var(--font-accent)]}
If your feed looks blurry in the ETVR app, you need to focus the cameras by turning the lens. They are glued in place from factory, but easily breakable with pliers. 

Use a point of reference like the LED's while holding the camera, rotate the lens with pliers in either direction and watch if the feed gets more or less blurry. Repeat until you dial it in nicely. You should do this prior to mounting the cameras.

##


# Protecting a Camera Ribbon Cable  {.text-[var(--font-accent)]}


The ribbon cables that these cameras use are notoriously prone to damage rendering them useless.  

By wrapping them in tape such as electrical tape and following best practices covered in the guide, you can significantly reduce the risk of killing a camera.

It is recommended to do this before building your setup so you are less likely to kill a camera in the process of building a setup.

## Wrapping the Camera Ribbon
First get a roll of electrical tape to wrap the camera ribbon.
It does not strictly need to be electrical tape, but that is what I have found to work good, (and look good too).

<ImageCard :options="image_settings.camera_protect1" />

Place the camera on the tape so that the entire bottom area including the sensor are covered and that one side of the camera ribbon has slightly more tape (helps make it look good).

<ImageCard :options="image_settings.camera_protect2" />

Cut the tape from the roll, here I used flat cutters.
Be careful to not cut the camera connector in the process.

<ImageCard :options="image_settings.camera_protect3" />
<ImageCard :options="image_settings.camera_protect4" />

With the tape cut from the roll, lay it down and get out a X-ACTO knife.
<ImageCard :options="image_settings.camera_protect5" />


Begin to cut around the camera connector so the tape can be peeled off.

<ImageCard :options="image_settings.camera_protect6" />
<ImageCard :options="image_settings.camera_protect7" />

When each side has been cut, begin to peel off the part that covered the connections.
<ImageCard :options="image_settings.camera_protect8" />
<ImageCard :options="image_settings.camera_protect9" />
<ImageCard :options="image_settings.camera_protect10" />


Now, carefully cut around the camera sensor part to remove its "skirt" leaving tape on the back of it.
<ImageCard :options="image_settings.camera_protect11" />
<ImageCard :options="image_settings.camera_protect13" />
<ImageCard :options="image_settings.camera_protect14" />
<ImageCard :options="image_settings.camera_protect15" />
<ImageCard :options="image_settings.camera_protect12" />

Gently pull off this outline of tape from the camera.
<ImageCard :options="image_settings.camera_protect16" />
<ImageCard :options="image_settings.camera_protect17" />


Begin to wrap the tape along the ribbon cable by first folding in the slightly shorter side.
<ImageCard :options="image_settings.camera_protect18" />
<ImageCard :options="image_settings.camera_protect19" />

Fold over the other side.
<ImageCard :options="image_settings.camera_protect20" />
<ImageCard :options="image_settings.camera_protect21" />

And you are done!
<ImageCard :options="image_settings.camera_protect22" />

## Best Practices When Handling Cameras
* Do not pull or jerk on the ribbon
* Do not fold tightly or bend the ribbon cable sharper than ~45 degrees if possible
* Do not expose to sharp objects or crevices
* The less wear while handling or putting on/off a headset the better


## Conclusion

You have successfully wrapped your camera to be protected and learned the best practices with handling cameras!
