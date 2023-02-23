<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import { alerts } from '../../static/alerts'
</script>

# How to set up your avatar for eye tracking: {.text-[var(--font-accent)]}

Here is an avatar setup video created by a contributor:

<div align="center">
    <iframe width="500" height="300" src="https://www.youtube.com/embed/Dfm-tkaruq0" title="Add eye tracking support to your VRChat avatar" frameborder="1" allow="encrypted-media;" allowfullscreen></iframe>
</div>

Another good resource is the [VRC Face Tracking Wiki](https://github.com/benaclejames/VRCFaceTracking/wiki/Eye-Tracking-Setup) and their [Discord](https://discord.gg/Fh4FNehzKn).
 

### We currently use the following paramaters

`LeftEyeX`

`RightEyeX`

`EyesY`

`LeftEyeLidExpandedSqueeze`

`RightEyeLidExpandedSqueeze`

<div align="center">
    <Alerts :options="alerts.vrc_avatar_setup">
        <template v-slot:content>
            <p>
               We currently only support float parameters, please adjust your setup accordingly.
            </p>
        </template>
    </Alerts>
</div>
