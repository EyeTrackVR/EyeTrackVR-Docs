<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import { alerts } from '../../static/alerts'
</script>

# Commenet ajouter le support pour le suivi des yeux sur votre avatar: {.text-[#ab5ac7]}

Voici une vidéo d'un contributeur montrant comment mettre en place un avatar VRChat:

<div align="center">
    <iframe width="500" height="300" src="https://www.youtube.com/embed/Dfm-tkaruq0" title="Add eye tracking support to your VRChat avatar" frameborder="1" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

D'autres bonnes resources peuvent être trouvé sur le [GitHub](https://github.com/benaclejames/VRCFaceTracking/wiki/Eye-Tracking-Setup) et [Discord de VRC Face Tracking](https://discord.gg/Fh4FNehzKn).


### Nous utilisons les paramettres suivant

`LeftEyeX`

`RightEyeX`

`EyesY`

`LeftEyeLidExpandedSqueeze`

`RightEyeLidExpandedSqueeze`

<div align="center">
    <Alerts :options="alerts.vrc_avatar_setup">
        <template v-slot:content>
            <p>
               Nous ne supportons que les parametres float, Merci d'ajuster vos animations en conséquence.
            </p>
        </template>
    </Alerts>
</div>
