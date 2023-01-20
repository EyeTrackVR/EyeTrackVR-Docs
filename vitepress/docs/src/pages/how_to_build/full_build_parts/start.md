# Build Guide {.text-[#ab5ac7]}

## This page will contain a step-by-step assembly guide

## Step 1: Make sure your have read the [Things to know before you start](../getting_started/things_to_know) guide

This will give you a basic overview of the project's status and what to expect currently.

## Step 2: Order all the parts listed on our [Parts list](../how_to_build/parts_list)

Please take note of the fact that hardware still may change, although with more developments it seems like we are going to stick with current hardware.

## Step 3: Wait for things to arrive

Long shipping times from China are  *f u n*.
Please allow anywhere from 2 weeks to 2 months for everything to arrive.

## Step 4: Gather up all of your hardware

Make sure you have at least the following:

<CheckBoxList :options="{...RequiredHardware}" />

<ImageCard :options="image_settings.image_one" />

## Step 5: Install external antennas or shield ESP antenna with an antistatic bag

Some ESP-CAM boards have issues with signal integrity, there are 2 things you can do to help/solve the issues.

The first option is to use an external antenna.

This is the best solution when it comes to the final result. If you have Vive/Tundra trackers, this is a **REQUIRED** step. The interference from the trackers will make your ESP stream unusable. An antistatic bag does not help in this case. Unfortunately, removing the antenna is not super easy, you have to either move a resistor or, remove it and bridge 2 solder pads. The image attached below shows the orientation of the pads that need to be connected for which mode. You can not bridge all connections and have both antennas active at the same time. The 0-ohm resistor does not need to be on the board, you can simply bridge the connections.

<ImageCard :options="image_settings.external_antenna" />

Below is an example of bridging the connections and attaching an antenna.

<ImageCard :options="image_settings.external_antenna_resistors" />

<div align="center">
    <iframe width="500" height="300" src="https://www.youtube.com/embed/r4PsuWTFRBg" title="How to add an external antenna to ESP32-CAM board" frameborder="1" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

The second option is to cover the ESP's antenna with an antistatic bag.
This can help aid problems, and can completely solve them in some cases. Best of all, it is completely free! However, it should be noted that it performs worse than an external antenna and in certain cases will not solve the issue like if you have Vive trackers.

<div align="center">
    <iframe width="500" height="300" src="https://www.youtube.com/embed/wS4PS3Mw250" title="Covering an ESP32-CAM's antenna with anti-static bag" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Step 6: Attach cameras to ESPs

Look at your ESP and locate the camera ribbon cable connector as circled below.

<ImageCard :options="image_settings.camera_socket" />

Flip the gray part up to allow the cameras to be connected. Do not force it, or shove objects into it to open, fingernails are fine.

<ImageCard :options="image_settings.camera_socket_clip" />

Now slide in a camera, please note that the pins are facing down, you should only see the black part.

<ImageCard :options="image_settings.camera_cable" />

Once the camera has been slid in, press the gray part of the connector back down. There will be a small amount of force but still be gentle.
Note the ammount of black coming out of the connector.

<ImageCard :options="image_settings.camera_clip_close" />
