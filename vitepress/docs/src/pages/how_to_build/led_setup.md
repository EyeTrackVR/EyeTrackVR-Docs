Pardon the mess, this page is WIP more docs for other configurations and assemblly are in the works.

# How to assemble a V4 mini LED hardware kit:

## Getting to know your hardware

There are 3 main components of an IR LED kit; the mainboard, LEDs and wires.


### Mainboard
Below is the V4 mini mainboard with major features labled.
![V4mini](https://i.imgur.com/SpwYUgw.jpeg)  
![V4mini_back](https://i.imgur.com/ZsTnjem.jpeg)


### LEDs
There are 2 different types of LED boards. 
The one you should have more of are the "N" LEDs. N stands for Normal, these make up 3 of the leds per eye.
![nLED](https://i.imgur.com/f0onbjb.jpeg)  
![NLEDback](https://i.imgur.com/pM31O08.jpeg)


The second type is the "E" LEDs. E stands for End as these are put at the end of the LED strand.

![eLED](https://i.imgur.com/LaJmm4Z.jpeg)  
![eLEDback](https://i.imgur.com/UkLVPci.jpeg)

In future orders the "E" LEDs will be purple for easier distinction.
![eLEDpurple](https://i.imgur.com/a1j6zHi.jpeg)

### Wires
The included wires are a bit special, they have 3 pins on the connectors but only 2 wires are attached.
![v4wire](https://i.imgur.com/UTtd5bG.jpeg)  

This distinction is crutial in assembling a kit as the wires need to go in a specific orientation outlined in the assembly picture which shows the pins without wires as dashes - - -.

## Wiring up V4 mini

Start by pluggin in the long wires to the main board like shown.

![notpluggedr](https://i.imgur.com/DNpVzY3.jpeg)  
![pluggedinr](https://i.imgur.com/4VWqUiZ.jpeg)


Then connect the wires to leds in the sequence:

`Mainboard -> N LED -> N LED -> N LED - > E LED`

You need to **pay very close attention** to the **orientation** of the wires so that the missing wire is facing the correct way. The following image shows a kit fully assembled:

![v4minifull](https://imgur.com/zdj9WUu.png)

Here is an example of the right eye's LED strand.  
 
![v4minireye](https://i.imgur.com/Bi6Og87.jpeg)  
  
# How to assemble V4 Lite LED kit:  

## Getting to know V4 lite

V4 lite is a soldering-required approach to LEDs. There are a few specific caveats to know before assembling and using this hardware.

1. The board must be supplied with 5v.
    - Other voltages may result in darker/non functioning LEDs.

2. You must change resistors if you change from a single or dual eye setup to the other.
    - Not doing so will result in too dim of LEDs or extremely bright LEDs. Ensure you are always using the correct one for your application.

3. Shorts on the main board can result in damaged hardware, dangerously bright LEDs, or nonfunctioning hardware.
    - Please ensure there are no shorts (even very small stray solder strands) between any pins or solder joints on the main board or LEDs.

## Wiring up V4 Lite

First, decide if you want dual eye or single eye operation and pick the appropiate resistor.

**__Single Eye:__**   
Use the 130ohm resistor marked with Black, Black, and Gold middle rings:  
  
![v4litesingleeye](https://i.imgur.com/dCNMQaZ.jpeg)  


**__Dual Eye:__**  
Use the 65ohm resistor marked with Yellow, White and Gold middle rings:  
  
![v4litedualeye](https://i.imgur.com/vuhsckU.jpeg)  

Now, solder the resistor on the board (any orientation), and then the black 3 pin voltage regulator (orientation matters, solder on the side with the white outline and have it fit in the outline's shape)  
  
![v4litemainboardassem](https://i.imgur.com/s1eqJiE.jpeg)  


Now, wire up the LEDs like shown.  

![v4litefullassmb](https://i.imgur.com/l57tEmr.png)  