<script setup>
import ImageCard from '../../vue/images/ImageComponent.vue'
import { image_settings } from '../../static/image_settings'
</script>

# Mettre en place l'environement de développement {.text-[#ab5ac7]}

Cette procédure va vous montrer comment préparer votre système pour téléverser le firmware dans votre tracker.

## 1. Installez Visual Studio Code

Téléchargez la [dernière version de Visual Studio Code](https://code.visualstudio.com/download) et installez la.

### téléchargement

<br>
<ImageCard :options="image_settings.setup_vscode_image_one"/>

### Installez

<br>
<ImageCard :options="image_settings.setup_vscode_image_two"/>

## 2. Installez l'EDI PlatformIO

Une fois que Visual Studio Code est installé, ouvrez et installez [PlatformIO IDE pour VSCode](https://marketplace.visualstudio.com/items?itemName=platformio.platformio-ide), une extension qui va vous permettre de vous connetcer à votre tracker, construire et téléverser le firmware.

<ImageCard :options="image_settings.setup_vscode_image_three"/>

## 3. Clonez le projet du firmware

Faites en sorte de fermer tout projet ou fenetre que vous avez déjà ouvert avant d'aller plus loin.

1. Allez à [https://github.com/lorow/OpenIris](https://github.com/lorow/OpenIris) et `clonez` la dernière version de la branche `main`.
   1. Si vous n'avez pas encore`git` installé merci de l'installer via [ce lien](https://git-scm.com/download/win).

   2. Ouvrez Git Bash.
<ImageCard :options="image_settings.setup_vscode_image_four"/>

   1. changer votre répertoire courant avec celui où vous aimeriez cloner le firmware. Ex: `cd C:\`

<ImageCard :options="image_settings.setup_vscode_image_five"/>

   1. Clonez le the dépôt en entrant la commande: `git clone https://github.com/lorow/OpenIris.git`

<ImageCard :options="image_settings.setup_vscode_image_six"/>

   Pour avoir plus d'infos le clonage, merci de vous réfèrer à [cette documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

   _**Ne téléchargez pas en temp que ZIP**_ - clonez le projet correctement s'il vous plait, faites attention à où vous l'avez télécharger. Vous alez avoir besoin de ce répertoire plus tard quand vous alez ouvrir PlatformIO.

1. Ouvrez le firmware dans VSCode en allant dans PlatformIO, puis selectionnez open, puis aller dans le dossier `OpenIris/ESP` et ouvrez le.

<ImageCard :options="image_settings.setup_vscode_image_seven"/>

_Ceci est inspiré de la [doccumentation de SlimeVR](https://docs.slimevr.dev/firmware/setup-and-install.html). Un bout du mérite revint donc à l'équipe de SlimeVR._
