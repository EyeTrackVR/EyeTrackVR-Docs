<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import CheckList from '../../vue/CheckBoxList.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { image_settings } from '../../static/image_settings'
import { alerts } from '../../static/alerts'
import { Requirements } from '../../static/app_build_requirements'
</script>

# Comment installer, lancer et ajuster l'application EyeTrackVR. {.text-[#ab5ac7]}

### Étape 1: Télécharger l'installeur EyetTrackVR et installer le programme

Allez sur la dernière version du programme sur [GitHub ici](https://github.com/RedHawk989/EyeTrackVR-Installer/releases/latest) et téléchargez le .zip

Extraire l'archive zip et lancer le .exe en temps qu'administrateur.
Vous serez accueillies par une fenêtre qui resembles à ça:
<ImageCard :options="image_settings.eyetrack_vr_guide_one"/>

Par défault il va s'installer dans `C:\Program Files\EyeTrackVR` et créer un racourcit sur votre bureau.
En appuillant sur le bouton `Change Install Path` vous allez ouvrir une fenêtre où vous pouvez naviguer votre arborécense et choisir un endroit alternatif où installer l'application.

Appuillez sur `Install` pour intsaller l'application.
<Alerts :options="alerts.eyetrack_vr_guide_one">
    <template v-slot:content>
        <p>
           L'intsalleur peut également être utilisé pour mettre à jour l'application, vous aurez juste à refaire le processus d'instalation.
        </p>
    </template>
</Alerts>

Si il c'est bien installé la fenêtre devrait resembler à ça:
<ImageCard :options="image_settings.eyetrack_vr_guide_two"/>

## Étape 2: Lancer l'application EyeTrackVR

Si l'option `Create Desktop Shortcut` était coché vous devriez voir un icone sur votre bureau, double clickez dessus pour lancer l'application.

Vous devriez être accueillies avez une interface qui resembles à ça:
<ImageCard :options="image_settings.eyetrack_vr_guide_three"/>

## Étape 3: Familiarisez vous avec les options et terminologies

Nous allons voir quelques terminologies que vous allez trouver dans l'application.

En partant d'en haut:

### `Right eye`

Montres le flux et les options de l'œil droit uniquement.

### `Left eye`

Montres le flux et les options de l'œil gauche uniquement.

### `Both eyes`

Montres le flux et les options des deux yeux simultanément.

### `Camera Address`

C'est là où vous aller enter les adresses IP de vos caméras.
Autrement, ce champ peut également être utilisé pour rentrer le numéro d'une caméra branché ou un fichier vidéo.

### `Tracking Mode`

Çela changes l'interface vers celui du mode de suivi où il sort les valeures.

### `Cropping Mode`

C'est où vous allez tronquer votre œil.

### `Threshold`

C'est utilisé afin de couper tout ce qui ne fait pas noir comme votre pupille.

### `Rotation`

Pour que notre méthode marches le mieux, il faut que votre œil soit perpendiculaire à la fenêtre de l'application.
Utilisez ce slider pour ajuster la rotation de votre caméra pour que ce soit le cas.

### `Restart Calibrationn`

Ceci va commencer le mode de calibration pour votre œil. Lorceque vous êtes dans ce mode regardez dans le plus loin sur tout les bords.

### `Recenter Eye`

Çela va recentrer votre œil où vous êtes en train de regarder lorsceque vous appuilez sur le bouton.

## Étape 4: Ajoutez vos caméras dans le logiciel et configurez les

Allumez vos ESP et trouvez quel adresse IP est celle pour l'ESP de votre œil droit. Çela peut être fait en ouvrant les deux caméras dans un navigateur et mettre votre doit devant la caméra pour votre œil droit.

Copiez cette adresse IP et fermez la fenêtre de votre navigateur dans laquelle la vidéo était ouverte.

Entrez cette adresse IP dans le champ `Camera Address` de l'application et cliquez sur le bouton `Save and Restart Tracking`.

Vous ne voyez pas le flux de votre caméra? C'est parceque vous n'avez pas réfinis votre région d'interêt (ROI).
<ImageCard :options="image_settings.eyetrack_vr_guide_four"/>

Now press the `Cropping Mode` button.
You should see a feed of your camera.

Put your headset on and use an application to see your desktop. (Virtual desktop, SteamVR desktop, etc.)

Vous devriez voir quelque chose comme ça:
<ImageCard :options="image_settings.eyetrack_vr_guide_five"/>

Maintenant, dessinez un rectangle pour sélectionner votre œil.

Un exemple d'un bon ROI
<ImageCard :options="image_settings.eyetrack_vr_guide_six"/>

Retournez dans le `Tracking mode`.

Nous allons maintenant ajuster la rotation en bougeant le slider `Rotation`.

Passant de ça:
<ImageCard :options="image_settings.eyetrack_vr_guide_seven"/>

à ceci:
<ImageCard :options="image_settings.eyetrack_vr_guide_eight"/>

Maintenant nous allons ajuster le seuil (threshold).

Continuez par bouger le slider au maximum toujours avec votre casque sur la tête. 
commencer à le faire glisser doucement j'usqu'à ce qu'uniquement votre pupille soit visible à l'interieur du visualiseur de seuil.

Un example d'un seuil bien trop bas:
<ImageCard :options="image_settings.eyetrack_vr_guide_nine"/>

Un example d'un seuil bien trop haut:
<ImageCard :options="image_settings.eyetrack_vr_guide_ten"/>

Un example d'un bon seuil:
<ImageCard :options="image_settings.eyetrack_vr_guide_eleven"/>

Répètez toutes les instructions dans cette étape pour votre œil gauche.

## Étape 5: Calibrez vos yeux

Une fois que votre œil est suiveable par le logiciel nous devrons le calibrer.

Appuillez sur le bouton`Restart Calibration` et regardez autour de vous.
Il est important que vous regardiez aux angles plus extrêmes lors de cette étape, tout en haut, tout en bas, etc...
Une fois que vous avez fait ça attendez que le `Mode` dises `Tracking`

La prochaine étape est de centrer vos yeux.

Regardez tout droit et appuillez sur le bouton `Recenter Eye`.

Votre œil est maintenant totalement calibré.

Répètez pour votre autre œil.

<Alerts :options="alerts.eyetrack_vr_guide_two">
    <template v-slot:content>
        <p>
           Pour mieux centrer vos deux yeux il est conseiller de cliquer sur le bouton 'Recenter Eye' pour chaque œil sans bouger vos yeux.
        </p>
    </template>
</Alerts>

## Vous voyeaz quelque chose qui n'est pas à jour dans ce guide? laissez moi savoir! `Prohurtz#0001`
