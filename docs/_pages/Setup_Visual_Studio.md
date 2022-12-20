---
layout: page
title: Setup Visual Studio Code environment
nav_order: 1
permalink: /setting-up-firmware-enviroment/
parent: Firmware Guide
---

# Setting up the environment

This procedure will show how to prepare your system for uploading the firmware to your tracker.

## 1. Install Visual Studio Code

Download the [latest Visual Studio Code](https://code.visualstudio.com/download) and install it.

### Download

{% include custom/images/image_2.html url="https://i.imgur.com/jXPXIFz.gif" max-width="500" caption="" alt="" %}

### Install

{% include custom/images/image_2.html url="https://i.imgur.com/hAm3Zu0.gif" max-width="500" caption="" alt="" %}

## 2. Install PlatformIO IDE

Once Visual Studio Code is installed, open it and install [PlatformIO IDE for VSCode](https://marketplace.visualstudio.com/items?itemName=platformio.platformio-ide), an extension that will allow you to connect to the tracker, build and upload the firmware.

{% include custom/images/image_2.html url="https://i.imgur.com/ebV0IgT.gif" max-width="500" caption="" alt="" %}

## 3. Clone the firmware project

Make sure you close any current projects you have open or open a new window before moving forward with these steps.

1. Go to [https://github.com/lorow/OpenIris](https://github.com/lorow/OpenIris) and `clone` the latest version from the `main` branch.
   1. If you do not have `git` installed please install it from [here](https://git-scm.com/download/win).
   2. If you do not know how to clone a repo please refer to [this documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

   _**Do not download as a zip**_ - please only properly clone the project, take note of the path you run the clone command in, this is where the files will be downloaded. When we open it in PlatformIO later, this path will be needed.

2. Open the firmware in VSCode by going to PlatformIO, selecting open, then navigating to `OpenIris/ESP`  folder and opening it.

{% include custom/images/image_2.html url="https://i.imgur.com/c61Cpaz.gif" max-width="500" caption="" alt="" %}

_This is an adaptation from SlimeVR. Credit goes to the SlimeVR team [adapted from here](https://docs.slimevr.dev/firmware/setup-and-install.html)_
