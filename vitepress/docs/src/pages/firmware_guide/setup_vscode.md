<script setup>
import ImageCard from '../../vue/images/ImageComponent.vue'
import { image_settings } from '../../static/image_settings'
</script>

# Setting up the environment {.text-[#ab5ac7]}

This procedure will show how to prepare your system for uploading the firmware to your tracker.

## 1. Install Visual Studio Code

Download the [latest Visual Studio Code](https://code.visualstudio.com/download) and install it.

### Download

<br>
<ImageCard :options="image_settings.setup_vscode_image_one"/>

### Install

<br>
<ImageCard :options="image_settings.setup_vscode_image_two"/>

## 2. Install PlatformIO IDE

Once Visual Studio Code is installed, open it and install [PlatformIO IDE for VSCode](https://marketplace.visualstudio.com/items?itemName=platformio.platformio-ide), an extension that will allow you to connect to the tracker, build and upload the firmware.

<ImageCard :options="image_settings.setup_vscode_image_three"/>

## 3. Clone the firmware project

Make sure you close any current projects you have open or open a new window before moving forward with these steps.

1. Go to [https://github.com/lorow/OpenIris](https://github.com/lorow/OpenIris) and `clone` the latest version from the `main` branch.
   1. If you do not have `git` installed please install it from [here](https://git-scm.com/download/win).

   2. Open Git Bash.
<ImageCard :options="image_settings.setup_vscode_image_four"/>

   1. Change the directory to the directory that you want the firmware to be cloned. Ex: `cd C:\`

<ImageCard :options="image_settings.setup_vscode_image_five"/>

   1. Clone the repository by entering the command: `git clone https://github.com/lorow/OpenIris.git`

<ImageCard :options="image_settings.setup_vscode_image_six"/>

   For more info about cloning please refer to [this documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

   _**Do not download as a zip**_ - please only properly clone the project, take note of the path you run the clone command in, this is where the files will be downloaded. When we open it in PlatformIO later, this path will be needed.

1. Open the firmware in VSCode by going to PlatformIO, selecting open, then navigating to `OpenIris/ESP`  folder and opening it.

<ImageCard :options="image_settings.setup_vscode_image_seven"/>

_This is an adaptation from SlimeVR. Some Credit goes to the SlimeVR team [adapted from here](https://docs.slimevr.dev/firmware/setup-and-install.html)_
