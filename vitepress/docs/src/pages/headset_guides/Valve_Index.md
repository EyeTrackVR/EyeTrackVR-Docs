# Valve Index

## MUTEtheCyberwolf's DEV Frunk Mod:
![DevFrunk1](https://i.imgur.com/KQDFg1J.jpeg)
![HMD](https://i.imgur.com/4n6f4U3.png)

#### Mod Details
The DEV Frunk is a popular choice for ETVR on the Index. Replacing the original index frunk entirely, it has multiple mounting points for both the XIAO's, a Vive Facial Tracker (or [babble!](https://www.printables.com/model/745299-xiao-sense-case-seeed-studio-xiao-esp32s3-sense-ca)), and cutouts for 30x30x7mm fans.  

It also provides excellent ventilation simply due to the design being much more open, as well as a flip up design for the face tracker mount.

Combined, it creates a clean setup with no need for hot glue or alternatives to mount your hardware.

#### Extra Parts Needed:
I recommend a screw kit like [this](https://www.amazon.com/XOOL-Precision-Screwdriver-Extension-Smartphone/dp/B086SQZGLJ) one
- 1x T5 Torx Screwdriver
- 1x H4.0 Screwdriver
- 1x Soldering Iron for heat inserts
- 8x M4x8.1 Heat Inserts [AliExpress](https://www.aliexpress.com/item/3256804349544912.html)  Choose Size: M4 (OD 6mm)50pcs | Color: Length 8mm
- 6x M4x10 Screws [AliExpress](https://www.aliexpress.com/item/2251832624557792.htm) Choose Size: M4 20pcs | Length: 10mm
- 1x M4x30 Screws [AliExpress](https://www.aliexpress.com/item/2251832624557792.htm) Choose Size: M4 20pcs | Length: 30mm

[Parts Link](../how_to_build/part_list#additional-parts)
(If the parts needed are not on the additional parts page, let me know. You can also just directly link to them.)

#### 3D Printed Mounts
Found at MUTEtheCyberwolf's [GitHub Repo](https://github.com/MUTEtheCyberwolf/VALVE-INDEX-DEV-Frunk-1.0/tree/main/3D%20Print%20Files%20STL(Ascii))

You will need to print:
- 1x Coverplate for XIAO Retention Clip (Logo or no Logo)
- 1x XIAO Retention Clip (Letters or no Letters)
- 1x Eyetrack VR Prototype XIAO Mount.stl
- 1x FacialTrackerBeerHingeVIDEVFrunk1.stl
- 1x FacialTrackerBridgeVIDEVFrunk1.stl
  - Alternatively, if you have the [LDLRUI USB HUB](https://www.amazon.com/LDLrui-4-Port-Splitter-Multiport-Adapter/dp/B0BLHCD7FS), [this modified version](https://github.com/Frosty704/mods-eyetrackvr/blob/main/ldlrui%20case%20and%20bridge%20merged-FacialTrackerBridgeVIDEVFrunk1.stl) of the DEV Frunk Bridge by Frosty can snap fit the hub onto the bridge. [Example](https://i.imgur.com/kRvx56r.jpeg)
- 1x ValveIndexDEVFrunk1.stl
  - Alternatively, if you are interested in routing the ribbon cables internally, [this modified DEV Frunk](https://github.com/Frosty704/mods-eyetrackvr/blob/main/ValveIndexDEVFrunk1_MODIFIED.stl) has holes at the top for sliding through ribbon cables and power cables. [Example](https://i.imgur.com/RcYQ8xd.png)


### Assembly Details:
 #### 1. Heat Inserts  
Start with inserting your heat inserts to the designated holes on the frunk. Place the heat inserts so the side with the smaller radius sits in the hole 

  - When heating up the inserts, **let the weight of the soldering iron do the work**, they make take a few seconds to start moving on their own.
  -  **Do not push down**, and remove the iron when they are level with the print. It doesn't need to be perfect, so take your time!

![FRUNK](https://i.imgur.com/5xzpTqa.png)

Bottom picture courtesy of amoistman

Next, place a heat insert into the bigger hole of the facial tracker bridge

![BRIDGE](https://i.imgur.com/vNPx656.png)

Lastly, place another heat insert into the thick side of the beer hinge


![HINGE](https://i.imgur.com/R3Uwllz.png)

Your finished heat inserts should look like this

![INSERTSEXAMPLE](https://i.imgur.com/2z0TD3L.jpeg)

Picture courtesy of amoistman

#### 2. Screws

Now you're done with the hardest part!
We can move onto screwing in the XIAO Mount and Facial tracker bridge onto the frunk, into the heat inserts we just inserted.
  - The XIAO mount should be placed so the longer side is not blocking the fan holes
  - If you have trouble screwing them in, try screwing them equally to distribute the pressure more evenly.
    - Screw one a little, screw the opposite the same amount, repeat.

![M4SCREWGUIDE](https://i.imgur.com/hCi744w.png)

Two last things to screw in will be the beer hinge and vive facial tracker or babble case if you have it

Place the smaller hole of the beer hinge inbetween the bridge's screw holes. 
Make sure the beer hinge isn't flipped, it should have the larger hole on the same side of the bridge's heat insert
  - Screw in **opposite** of where the heat insert is. You should be screwing ***into*** the heat insert

![M4SCREWGUIDE2](https://i.imgur.com/zJeadXI.png)

For the last screw, repeat the same steps, but line up your face tracker or babble case. Screw from the same direction, into the heat insert of the beer hinge.
Use either an M4x10 or an M4x30. I find the M4x10 sometimes loses tension, while the M4x30 doesnt. 

Your final result should look like this
![FINAL](https://i.imgur.com/1h7ex2y.jpg)


#### 3. Mounting components

You can now push the XIAO's into the mount, making sure they are down snug, if you haven't already.

Place your V4 LED kit PCB into the middle of the XIAO Retention Clip, you will have to slide it in and push it under the little overhangs until they snap over the PCB.

Next, place the coverplate ontop of the LED PCB until the front of it snaps down and locks it over the retention clip.

Then you can slide the retention clip over your XIAO mount to keep them in place.

#### 4. Replacing frunk 

**PLEASE UNPLUG YOUR INDEX FROM POWER BEFORE CONTINUING**

You must have a T5 Torx screwdriver to remove the original index frunk screws, we will use the same screws to hold the dev frunk in place.

Picture courtesy of iFixit

![T5SCREWS](https://i.imgur.com/AbnMtn4.jpeg)

If you do not have fans, and are mounting a USB Hub infront, I recommend now plugging in the USB hub through the fan holes, as you won't be able to after dev frunk is screwed on.

Alternatively, you can use the USB C port below the middle bottom screw, and passthrough a hub with a [FEMALE USB-C/A to MALE USB A](https://www.aliexpress.us/item/3256802596853859.html) cable

Once the frunk is removed, line up your DEV Frunk and screw it back in the same way. Support it in a way you can screw in without it falling.

![T5SCREWS2](https://i.imgur.com/LRN45aM.png)



## Abc's mod:
[image(s) of mod (limit ~2)]

#### Mod Details
This mod supports lens inserts and is very compact and easy to use. It provides good frunk ventilation and wide hardware support.

#### Extra Parts Needed:
- 2x Camera extensions 
- 2x Camera extension connectors
- 50 M3 screws
[Parts Link](../how_to_build/part_list#additional-parts)
(If the parts needed are not on the additional parts page, let me know. You can also just directly link to them.)

#### 3D Printed Mounts
Found at Abc's [GitHub](https://github.com/)

You will need to print:
- 2x camera mount
- 2x frunk mount

Lens insert support Yes/No: Yes [Compatable mount](https://github.com)
::: info Note
There are 160 and 130-degree variants for camera mounts; pick which one corresponds with your cameras.
:::


#### Assembly Details:
(make sure to include quirks of setup not covered in other parts of documentation)

First, screw an M2 screw into the hole on part A:

[image showing "part A" and screw]

You must have a Torx screwdriver set to remove the frunk screw, do so now.

[image]

Then attach part b and tighten:

[image]

Now clip on
[image]

