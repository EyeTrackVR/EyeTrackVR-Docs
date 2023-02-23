<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { alerts } from '../../static/alerts'
import { image_settings } from '../../static/image_settings'
</script>

# EyeTrackVR {.text-3xl .font-bold .underline .text-[#ab5ac7]}

Une plateforme de suivi des yeux open source et *abordable* pour les jeux sociaux VR via le protocole `OSC` et `UDP`.

<Alerts :options="alerts.user_warning">
    <template v-slot:content>
        <p>
            Ce projet est en cours de développement actif.
            Cependant, il marche pour la plupart des utilisateurs.
        </p>
    </template>
</Alerts>

## Matériel

Merci de regarder notre [Liste de pièces](../how_to_build/parts_list/) et notre [guide d'assemblage](../how_to_build/full_build/) ainci que notre [référentiel matériel.](https://github.com/RedHawk989/EyeTrackVR-Hardware)

## par rapport à la sécurité des émeteurs infrarouges

Merci de faire *extrêmement attention* quand vous avez a faire à des émeteurs infrarouges.

une fois que les test de sécurité auront été finis les liens et fichiers seront donnés concernant les émeteurs {.italic .underline}

Merci de ne pas essayer de faire ou utiliser n'importe quel émeteur si vous ne savez pas exactement ce que vous faires, car cela pourait être très dangereux pour vos yeux si le boulot n'est pas fait correctement.

::: danger
Quand les fichiers et resources seront disponibles <ins>**NE PAS CONTOURNER N'IMPORTE QUEL MESURE DE SURETÉ MISE EN PLACE**</ins>. Cela peut provoquer des dégats iréversible sur votre corps.
:::

Ces mesures de sécurité ont été mises en places pour RÉDUIRE les risques potentiels de défaillance. Toutes les résponsabilitées qui suivent sont à prendre par l'utilisateur. Cela inclut regarder avec une caméra infrarouge que la luminosité est corecte et que vous ne resentez pas de chaleurs ou d'effets à court terme après être exposé aux lumières infrarouges.(des symtomes tels que voir des taches noirs ou une sensation seche/chaude au niveau des yeux lors de l'utilisation).Bien que nous fesons tout notre possible pour rendre EyeTrackVR le plus sûr possible, nous ne nous tenons pas responsable pour aucun des degâts fait.

<Alerts :options="alerts.led_power_warning">
    <template v-slot:content>
        <p>
            Soyez sûr d'utiliser des émeteurs <ins class="text-red-400 dark:text-red-500">non focalisé</ins> à près de <ins class="font-bold">5ma</ins> de puissance totale.
        </p>
    </template>
</Alerts>

::: Vous voulez voir nos resources lié à la sureté?
[Effect of infrared radiation on the lens](../saftey/effect_of_ir_on_the_lens.pdf)

[AN002_Details on photobiological safety of LED light sources](../saftey/AN002_Details_on_photobiological_safety_of_LED_light_sources.pdf)

[Training-library Nir Stds](../saftey/training-library_nir_stds_20021011.pdf)
:::

## Firmware

notre firmware s'appelant OpenIris est fait par `lorow` et peut être trouvé [ici](https://github.com/lorow/OpenIris).

## Support des casques

Merci de jeuter un coup d'Œil à notre liste de [montures/fixations imprimable en 3D](../how_to_build/parts_list#other-parts) et regardez si votre casque est sur la liste. Si il n'est pas listé, il est recomandé d'essayer de faire une monture/fixation par vous même, ou attendre q'un membre talentueux de la communauté en fasses un.

#### Contact

Merci de rejoindre notre discord pour plus d'info et pour poser tes questions.

<ImageCard :options="image_settings.discord_content"/>

# Licences

[![GitHub license](https://img.shields.io/github/license/RedHawk989/EyeTrackVR?style=plastic)](https://github.com/RedHawk989/EyeTrackVR/blob/main/LICENSE)

***Tout logiciel est sous une [Licence MIT](http://opensource.org/licenses/MIT).
toute les doccumentations, y compris le [Wiki](https://github.com/RedHawk989/EyeTrackVR/wiki), est sous une licence Creative Commons CC-BY-SA-4.0***.
