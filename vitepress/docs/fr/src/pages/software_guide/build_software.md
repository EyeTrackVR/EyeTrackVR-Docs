<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import CheckList from '../../vue/CheckBoxList.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { image_settings } from '../../static/image_settings'
import { alerts } from '../../static/alerts'
import { Requirements } from '../../static/app_build_requirements'
</script>

# COnstruire l'app depuis la source {.text-[#ab5ac7]}

## CE guide va vous montrer comment construire l'application depuis la source

<Alerts :options="alerts.build_software_one">
    <template v-slot:content>
        <p>
           Ceci n'est pas une étape requise, vous n'avez pas besoin de construire l'application depuis la source.
        </p>
    </template>
</Alerts>

## Prérequis

<CheckList :options="{...Requirements}"/>

## Installer Python

EyetrackVR utilises [Python 3.11.0](https://www.python.org/downloads/release/python-3110/) pour l'instant, avant de continuer merci de l'installer avant de continuer.

## Installer Poetry

Depuis la version `0.1.7` d'EyeTrackVR, nous avons utilié Poetry pour gèréer les dépendences de l'application. Pour construire l'application, vous devez premièrement installer Poetry et aller chercher les dépendences.

Pour installer Poetry ouvrez Windows Powershell et lancez les commandes suivantes `(Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | py -`

[Documentation de Poetry](https://python-poetry.org/docs/)

## Installer les modules Python requis

Après avoir clonné le projet et installé Poetry, ouvrez un invité de commandes dans le dossier EyeTrackApp. Et lancez cette commande: `poetry install`

Çela devrait installer tout les modules requis.

## Construire l'application

Maintenant vous devriez être prêt à construire l'application.
Dans un invité de commandes ouver dans le dossier EyeTrackApp, lancez la commande `poetry run pyinstaller eyetrackapp.spec`

Laissez lui du temps de construire l'application. une fois finis, l'application devrait se trouver dans `dist/eyetrackapp`
