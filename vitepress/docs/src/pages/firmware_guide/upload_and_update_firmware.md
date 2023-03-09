<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { image_settings } from '../../static/image_settings'
import { alerts } from '../../static/alerts'
</script>

# Building and uploading the firmware manually {.text-[var(--font-accent)]}

Uploading your firmware must initially be done over cable. Once you have the tracker connected to your WiFi after your first firmware update, you can opt to use [OTA](#how-do-i-use-it) in the future.

## 1. Connect your tracker to your PC via the programmer

First, connect your ESP32-Cam to your programmer. In the case of the ESP32-Cam-MB board, it's as simple as sticking it into the socket the way it came in the package and then connecting it to your PC with a micro-USB cable. In some cases, there is a button labeled `IOO` on the programmer. If that button exists make sure to hold it in while you plug the programmer into your pc, once plugged in you can release the button.

In the case of an FTDI programmer, the steps aren't as easy, so grab [this guide](https://randomnerdtutorials.com/program-upload-code-esp32-cam/) for how to set it up.

## 2. Build your firmware

1. Press the build button at the bottom of Visual Studio Code.

> This builds the firmware, but does not send it to the ESP yet.

![img](https://i.imgur.com/EmSkhFp.png)

## 3. Upload your firmware

- If you are using the OTA method, first make sure the tracker you wish to flash is turned on and connected to your network, then skip to the [OTA section below](#how-do-i-use-it).

- Once the firmware has been built, press the upload button to upload the firmware.

  This sends the firmware to the ESP.
  ![img](https://i.imgur.com/lI3PFVC.png)

<Alerts :options="alerts.upload_firmware_one">
    <template v-slot:content>
        <p>
           The MB board does the resetting for you. If you're using the FTDI programmer, follow the guide linked above (the one from randomnerdtutorials)
        </p>
    </template>
</Alerts>  

- If the upload is successful, you should get an output that looks like this:

  ![img](https://i.imgur.com/SDQcCr1.png)

Congratulations! You have now successfully uploaded the firmware to your EyeTrackVR Tracker!

If you have trouble with uploading your firmware over cable check the following:

1. Make sure your USB cable from the tracker is plugged firmly into your PC.
2. Make sure that your USB cable is a data and charging cable (it is suggested you try other cables or devices with the cable).
3. Make sure that your drivers are up-to-date.
4. Some ports might not work, try other ones.

Additionally, this can be caused by software hogging COM ports (**VSCode and Cura can be the cause of this**).

## Uploading via OTA

### What is it?

OTA stands for `Over The Air`, and it is a way to update your firmware without having to connect your device to your computer.

### How do I use it?

To use OTA, you need to have working firmware on your ESPs first.

Once you have mnually flashed the firmware at least once, you can use the `OTA` environment to upate your ESPs.

::: tip Coming Soon
Currently, we only support OTA using `platformio` and `Visual Studio Code`. We are working on a new app, where you can upload your firmware to your ESPs over WiFi straight from the app.
:::

To do this, you need to change your environment to the `OTA` version of your working environment.

For example, if you have a working `esp32AIThinker` environment, you would change your environment to `esp32AIThinker_OTA`.

Once you have changed your environment, you can upload your firmware to your ESPs using the upload button, as you would normally.

Once you have successfully connected your trackers to your WiFi, you can use OTA to handle all future firmware updates.

1. Retrieve the IP or mDNS name of the tracker you wish to flash. The IP can be found through network monitoring applications, or by viewing tracker output in a serial monitor.
2. In the `ini/user_config.ini` file:
   - Put IP or hostname of device into config file

```ini
[ota]
enableota = 1
otaserverip = "openiristrackerL.local" # here we use a custom mDNS name
otapassword = "12345678"
otaserverport = 3232
```

3. Change to OTA env
4. Restart the ESPs, they **_must_** be power cycled
5. Press the upload button to upload the firmware.<br>  
   ![img](https://i.imgur.com/lI3PFVC.png)
6. Do not touch esps or move them during OTA upload
7. Wait around 1 minute.
8. Repeat for as many trackers as you need.

## Finding the IP address of your tracker

Connect your tracker to your PC and then open a serial monitor in VSC by pressing the `plug`  icon.

<ImageCard :options="image_settings.upload_firmware_image_one" />

Now, press the restart button on the esp itself.
watch the monitor for output like this:

<ImageCard :options="image_settings.upload_firmware_image_two" />

The text, highlighted in green for demonstration, is the stream address of the camera. Take note of this for input into the software.

Keep in mind while testing and getting set up, the ESP can only have one client, to use the camera in the app, make sure you close the browser tab you tested it in.

# Updating the firmware to the newest version

To update the firmware you'll need to follow a couple of steps.

1. Open a terminal and enter the directory you've cloned OpenIris into, for example `cd D:/OpenIris/`

2. Save your current changes to the config using `git stash`

3. Download the newest changes from the repo using `git pull`

4. Apply your saved changes so that you don't have to retype your WI-FI credentials using `git stash apply`
  <Alerts :options="alerts.user_warning">
      <template v-slot:content>
          <p>
          Skip this step if the update message denotes that the config had changed. If it does so, retype your credentials in the updated files.
          </p>
      </template>
  </Alerts>

4.1. If anything went wrong, you can reset everything to the default state using `git reset --hard` and then retyping your credentials

5. Upload your firmware [following steps from the uploading section](./update_platformio.md)

## Troubleshooting

If you encountered an issue while following these steps check the [FAQ.](../misc/faq)

If you don't find an answer to your question there ask in **#questions** channel in [the discord](https://discord.gg/kkXYbVykZX), we will be happy to help.

*Adapted from the SlimeVR docs, Some Credit goes to the SlimeVR team [here](https://docs.slimevr.dev/firmware/setup-and-install.html)*
