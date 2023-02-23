<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { image_settings } from '../../static/image_settings'
import { alerts } from '../../static/alerts'
</script>

# Configurer le firmware {.text-[#ab5ac7]}

## Une fois que vous avez ouvert le projet, vous devrez voir quelque chose dans le menu de gauche qui resembles à ça

<ImageCard :options="image_settings.configure_firmware_one"/>

## Ouvrez le fichier `platformio.ini`

<ImageCard :options="image_settings.configure_firmware_two"/>

Sur les lignes 17 et 18, remplacez le texte bidon avec votre SSID (WiFi access point name) et mot de passe correctement saisi.

<Alerts :options="alerts.parts_list_one">
    <template v-slot:content>
        <p>
           Faites attention que votre routeur WiFi ait bien une bande 2.4Ghz. Bien que la plupart en ont, ce n'est pas ytoujours le cas. Séparer vos bandes 5Ghz et 2.4Ghz est vivement recomandé, bien que pas obligatoire.
        </p>
    </template>
</Alerts>

Re-verifiez que vous avez bien renté vos identifiants WiFi et que ce réseau WiFi ait bien une bande 2.4Ghz.

## [Maintenant vous pouvez aller téléverser le firmware](/firmware_guide/upload_firmware.html)
