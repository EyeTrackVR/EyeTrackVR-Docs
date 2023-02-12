<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import { alerts } from '../../static/alerts'
</script>

# How to set up your avatar for eye tracking: {.text-[var(--font-accent)]}

Currently, the best resource is the [VRC Face Tracking Wiki](https://github.com/benaclejames/VRCFaceTracking/wiki/Eye-Tracking-Setup) and [Discord](https://discord.gg/Fh4FNehzKn).

I hope to have a good video available from a community member that shows and explains the process eventually.
If you have the skills to make one, please do.

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
