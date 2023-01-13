# Build Guide {.text-[#ab5ac7]}

## This page will contain a step-by-step assembly guide

### Table of contents

[Step 1 Make sure you have read the Things to know before you start guide](#step-1-make-sure-your-have-read-the-things-to-know-before-you-start-guide)

[Step 2: Order all the parts listed on our Parts list](#step-2-order-all-the-parts-listed-on-our-parts-list)

[Step 3: Wait for things to arrive.](#step-3-wait-for-things-to-arrive)

[Step 4: Gather up all of your hardware.](#step-4-gather-up-all-of-your-hardware)

[Step 5: Install external antennas or sheild ESP antenna with antistatic bag.](#step-5-install-external-antennas-or-shield-esp-antenna-with-an-antistatic-bag)

[Step 6: Attach cameras to ESPs.](#step-6-connect-esp-to-the-programmer-to-flash)

[Step 7: Connect ESP to the programmer to flash.](#step-7-connect-esp-to-the-programmer-to-flash)

[Step 8: Configure Visual Studio Code and prepare to flash the firmware.](#step-7-configure-visual-studio-code-and-prepare-to-flash-the-firmware)

[Step 9: Plug in your ESP and flash the firmware.](#step-8-plug-in-your-esp-and-flash-the-firmware)

[Step 10: Connect your power wires to a USB Type-A board.](#step-9-connect-your-power-wires-to-a-usb-type-a-board)

[Step 11: Cut wires for IR LEDs.](#step-10-cut-wires-for-ir-leds)

[Step 12: Twist the positive USB wire and positive IR LED wires together and tin them.](#step-11-twist-the-positive-usb-wire-and-positive-ir-led-wires-together-and-tin-them)

[Step 13: Solder the positive wire to ESP.](#step-12-solder-the-positive-wire-to-esp)

[Step 14: Solder the negative wire to ESP](#step-13-solder-the-negative-wire-to-esp)

[Step 15: Wire up the 2nd ESP.](#step-14-wire-up-the-2nd-esp)

[Step 16: Prepare to solder IR LED PCBs](#step-15-prepare-to-solder-ir-led-pcbs)

[Step 17: Solder resistors on PCB V3.](#step-17-solder-resistors-on-pcb-v3)

[Step 18: Wire up PCBs V3](#wire-up-the-pcbs-v3)

[Step 19: 3D print mounts.](#step-19-3d-print-mounts)

## Step 1: Make sure your have read the [Things to know before you start](https://redhawk989.github.io/EyeTrackVR/things-to-know) guide

This will give you a basic overview of the project's status and what to expect currently.

## Step 2: Order all the parts listed on our [Parts list](https://redhawk989.github.io/EyeTrackVR/parts-list/)

Please take note of the fact that hardware still may change, although with more developments it seems like we are going to stick with current hardware.

## Step 3: Wait for things to arrive

Long shipping times from China are  *f u n*.
Please allow anywhere from 2 weeks to 2 months for everything to arrive.

## Step 4: Gather up all of your hardware

Make sure you have at least the following:

- [x] 2 ESP 32 CAM boards
- [x] 2 160 degree cameras
- [x] 1 USB board to power your ESPs
- [x] 1 Programmer board (buying an extra is reccomended)
- [x] IR emitters, resistors, and preferably PCBs
- [x] Lower gauge wire to power ESPs
- [x] Higher gauge wire to power IR LEDs
- [x] 3d printer to print mounts. (Buying them from some place like JLCPCB is also an option)
- [x] Glue of some form, hot glue highly recommended.

{% include custom/images/image_2.html url="https://i.imgur.com/j18rRI7.jpg" max-width="400" caption="ESPs, cams, a programmer and a USB connector" alt="img of components" %}

## Step 5: Install external antennas or shield ESP antenna with an antistatic bag

Some ESP-CAM boards have issues with signal integrity, there are 2 things you can do to help/solve the issues.

The first option is to use an external antenna.

This is the best solution when it comes to the final result. If you have Vive/Tundra trackers, this is a **REQUIRED** step. The interference from the trackers will make your ESP stream unusable. An antistatic bag does not help in this case. Unfortunately, removing the antenna is not super easy, you have to either move a resistor or, remove it and bridge 2 solder pads. The image attached below shows the orientation of the pads that need to be connected for which mode. You can not bridge all connections and have both antennas active at the same time. The 0-ohm resistor does not need to be on the board, you can simply bridge the connections.

{% include custom/images/image_2.html url="https://i.imgur.com/OzpxFMD.png" max-width="400" caption="Image from: <https://randomnerdtutorials.com/esp32-cam-connect-external-antenna/>" alt="img" %}

Below is an example of bridging the connections and attaching an antenna.

{% include custom/images/image_2.html url="https://i.imgur.com/RIFpNqW.jpg" max-width="400" caption="" alt="img" %}

<iframe width="500" height="300" src="https://www.youtube.com/embed/r4PsuWTFRBg" title="How to add an external antenna to ESP32-CAM board" frameborder="1" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The second option is to cover the ESP's antenna with an antistatic bag.
This can help aid problems, and can completely solve them in some cases. Best of all, it is completely free! However, it should be noted that it performs worse than an external antenna and in certain cases will not solve the issue like if you have Vive trackers.

<iframe width="500" height="300" src="https://www.youtube.com/embed/wS4PS3Mw250" title="Covering an ESP32-CAM's antenna with anti-static bag" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Step 6: Attach cameras to ESPs

Look at your ESP and locate the camera ribbon cable connector as circled below.
{% include custom/images/image_2.html url="https://i.imgur.com/T5asLGN.jpg" max-width="400" caption="" alt="img" %}

Flip the gray part up to allow the cameras to be connected. Do not force it, or shove objects into it to open, fingernails are fine.
{% include custom/images/image_2.html url="https://i.imgur.com/Z8b8Sin.jpg" max-width="400" caption="" alt="img" %}

Now slide in a camera, please note that the pins are facing down, you should only see the black part.
{% include custom/images/image_2.html url="https://i.imgur.com/dDBIi9j.jpg" max-width="400" caption="" alt="img" %}

Once the camera has been slid in, press the gray part of the connector back down. There will be a small amount of force but still be gentle.
Note the ammount of black coming out of the connector.
{% include custom/images/image_2.html url="https://i.imgur.com/VnFi5XS.jpg" max-width="400" caption="" alt="img" %}

## Step 7: Connect ESP to the programmer to flash

Why flash before you have it assembled? It's simple, to make sure they actually work before you spend time soldering to them.

Slide your ESP into the programmer, and note the USB port goes away from the ESP's camera.
{% include custom/images/image_2.html url="https://i.imgur.com/LsLPAcd.jpg" max-width="400" caption="" alt="img" %}

## Step 8: Configure Visual Studio Code and prepare to flash the firmware

Check out our guide on [Setting up VS Code](https://redhawk989.github.io/EyeTrackVR/setting-up-firmware-enviroment/)

Once VS Code is set up, move on to the next step.

## Step 9: Plug in your ESP and flash the firmware

Our guide, [Building and uploading the firmware manually](https://redhawk989.github.io/EyeTrackVR/building-and-flashing-firmware-manually/) has steps on how to do this.
After it has flashed, make sure you get a video stream in your browser, then power it down and flash your next ESP.

## Step 10: Connect your power wires to a USB Type-A board

{% include custom/alerts/Warning.html content=" Powering from the programmer board will not work correctly. It delivers a lower voltage which results in dim LEDs and video artifacts which can both mess up tracking." %}

Get two pairs of wire, preferably two different colors, Cut them to length (56mm in my case) and twist together two for ground and two for 5V.
Here I used speaker wire where the copper denotes positive and silver negative.
Then, strip the wires to about 3mm of exposed wire.
{% include custom/images/image_2.html url="https://i.imgur.com/Cdu9lSN.jpg" max-width="400" caption="" alt="img" %}

## Step 11: Cut wires for IR LEDs

To find the optimal length, take a piece of wire and a marker and mock up your wire route, and mark the wire, cut it, then make another at the same size for the other eye.
You will need 3 different cuts of wire. 2 short ones for connecting the 2 PCBs per eye together, 2 Longer ones for power, or ground and 2 slightly longer ones for power or ground for the LED near the camera at the bottom.

Once cut, strip them to around 4mm of exposed wire.

## Step 12: Twist the positive USB wire and positive IR LED wires together and tin them

Once twisted together add solder to keep them together. This makes the connection much easier.
{% include custom/images/image_2.html url="https://i.imgur.com/QlRrWNn.jpg" max-width="400" caption="" alt="img" %}

## Step 13: Solder the positive wire to ESP

Lay the wire on the outside of the 5V pin and apply solder.
{% include custom/images/image_2.html url="https://i.imgur.com/DhnmLBG.jpg" max-width="400" caption="" alt="img" %}

## Step 14: Solder the negative wire to ESP

Repeat [Step 11](#step-12-twist-the-positive-usb-wire-and-positive-ir-led-wires-together-and-tin-them) but with the negative wires.

{% include custom/alerts/Note.html content="As a user in our discord has learned, you can short the IO12 pin with the ground pin without issues." %}

In the below example I put it on the top of the pin, It will be a week-ish joint but that's where glue comes in handy.
{% include custom/images/image_2.html url="https://i.imgur.com/PWA0gtq.jpg" max-width="400" caption="" alt="img" %}

## Step 15: Wire up the 2nd ESP

Repeat steps [12](#step-12-twist-the-positive-usb-wire-and-positive-ir-led-wires-together-and-tin-them)-[14](#step-14-solder-the-negative-wire-to-esp) with the 2nd ESP.

## Step 16: Prepare to solder IR LED PCBs

Get your magnifying glass out, it's time to solder very smol things.

Gather 4 PCBs, 4 IR LEDs, and either 4 ~350ohm.

357ohm resistors and V3 PCBs
{% include custom/images/image_2.html url="https://i.imgur.com/0zXY79j.jpg" max-width="400" caption="" alt="img" %}

Here are the PCB pin-out labels:

V3
{% include custom/images/image_2.html url="https://i.imgur.com/n1noWKq.png" max-width="400" caption="" alt="img" %}

LED labels:

{% include custom/images/image_2.html url="https://i.imgur.com/Ap8OAWY.png" max-width="400" caption="" alt="img" %}
The green markings and notched corners mark the positive sides of the LEDs pictured above.

If you have different LEDs, please consult their datasheet.

Some terminology related to them:

5V: 5-volt power in.

GND: Ground or power out.

AR: After-Resistor this is to be used as the power in on the 2nd PCB in series as resistors are not needed on the 2nd PCB since they are on the 1st one.

SNG: Single resistor, use this as 5V in if you are using only 1 ~700ohm resistor on V3 boards (not recommended).

Negative: This marks the negative side of the LED.

Positive: This marks the positive side of the LED.

## Step 18: Solder resistors on PCB V3

You only need 1 PCB to have resistors per eye.

Tin the resistor pads. Note: in this example, I use too much solder, it should only be enough to lightly cover the pad.
{% include custom/images/image_2.html url="https://i.imgur.com/gb4etdB.jpg" max-width="400" caption="" alt="img" %}

Next, grab a resistor and hold it on the pads.
{% include custom/images/image_2.html url="https://i.imgur.com/ev5QFch.jpg" max-width="400" caption="" alt="img" %}

While holding the resistor add solder to your soldering iron and apply it to the resistor.

I like to do this by having a piece of my solder stick up in the air and then put it on my iron that way.
{% include custom/images/image_2.html url="https://i.imgur.com/8jCQOHw.jpg" max-width="400" caption="" alt="img" %}

Flip the PCB and solder the other end.
{% include custom/images/image_2.html url="https://i.imgur.com/CHUb7Iv.jpg" max-width="400" caption="" alt="img" %}

Now repeat for the other one.
{% include custom/images/image_2.html url="https://i.imgur.com/jZYAm5O.jpg" max-width="400" caption="" alt="img" %}

## Solder LEDs on PCB V3

Tin the LED pads.
{% include custom/images/image_2.html url="https://i.imgur.com/pjvLHJL.jpg" max-width="400" caption="" alt="img" %}

Orientate the LED and hold it in place.
{% include custom/images/image_2.html url="https://i.imgur.com/RbHZQhl.jpg" max-width="400" caption="" alt="img" %}

Solder one end.
{% include custom/images/image_2.html url="https://i.imgur.com/VyClWvp.jpg" max-width="400" caption="" alt="img" %}

Flip around and solder the other end.
{% include custom/images/image_2.html url="https://i.imgur.com/tFCQTqE.jpg" max-width="400" caption="" alt="img" %}

## Wire up the PCBs V3

Pay attention to the direction of the LEDs on the PCBs.

If the green dot is facing inwards like in the picture below:
{% include custom/images/image_2.html url="https://i.imgur.com/TiLTAms.png" max-width="400" caption="" alt="img" %}
Use the following diagram:
{% include custom/images/image_2.html url="https://i.imgur.com/2pFF3oM.png" max-width="500" caption="" alt="drawing" %}

If the green dot is facing outward like the picture below:

{% include custom/images/image_2.html url="https://i.imgur.com/bEq6Ww0.jpg" max-width="400" caption="" alt="img" %}

Use the following diagram:
{% include custom/images/image_2.html url="https://i.imgur.com/ubIa1ir.png" max-width="400" caption="" alt="img" %}

## Step 19: 3D print mounts

Head to the 3D printed parts section of the parts list [here.](https://redhawk989.github.io/EyeTrackVR/partslist/#3d-printed-parts)

Find which parts are for your headset and print them.
Some may work better or worse, it is recommended to test all of them if there are multiple, print one of each kind.
If none work, try making an edit yourself if you have the skills. If you have made a mount make sure to ping me, `Prohurtz#0001`, so I can add them to the list.

Having trouble getting them to fit? Try resizing the mounts up, or down a little to ensure a good fit.

There are 2 different types of mounts, how to secure the camera to each type will be documented below.

### Type 1

{% include custom/images/image_2.html url="https://i.imgur.com/a6ERUFx.png" max-width="500" caption="" alt="drawing" %}
This uses a method of sliding in the camera. Generally, this is the recommended mounting method as it generally requires no glue.

Place the camera into the mount
{% include custom/images/image_2.html url="https://i.imgur.com/Wy89UWy.jpg" max-width="500" caption="" alt="drawing" %}

Slowly apply pressure inwards until the camera snaps into place.
{% include custom/images/image_2.html url="https://i.imgur.com/LtKOLWo.jpg" max-width="500" caption="" alt="drawing" %}

{% include custom/alerts/Note.html content="There is a good chance of breaking the mount when putting in the camera. If this happens you may be able to save the mount depending on where the break was. A small dab of hot glue around the camera is likely all that is needed." %}

### Type 2

{% include custom/images/image_2.html url="https://i.imgur.com/9mty1bv.png" max-width="500" caption="" alt="drawing" %}
This uses the method of gluing the camera.

Apply a bit of glue to the bottom of the camera mount
{% include custom/images/image_2.html url="https://i.imgur.com/ArLO1ls.jpg" max-width="500" caption="" alt="drawing" %}

Place the camera on the mount.
{% include custom/images/image_2.html url="https://i.imgur.com/ZIecsMM.jpg" max-width="500" caption="" alt="drawing" %}

## IR LED mounting

This again differs from mount to mount.

In some cases, there are designated spots for the LEDs to go.
{% include custom/images/image_2.html url="https://i.imgur.com/tYD1KKe.png" max-width="500" caption="" alt="drawing" %}

In others there are no specified spots, you will have to mess around to find what works best.
This image shows the optimal/near-optimal position for the LEDs. Hot glue is your friend with this.
{% include custom/images/image_2.html url="https://i.imgur.com/3rCRU5A.jpg" max-width="500" caption="" alt="drawing" %}

Tip: Use rubbing alcohol to easily remove hot glue.
