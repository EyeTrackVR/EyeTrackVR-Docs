<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { image_settings } from '../../static/image_settings'
import { alerts } from '../../static/alerts'
</script>

# VRCFT ETVR Tracking module, or simply the ETVR tracking module

## What is this?

VRCFT ETVR Tracking module is an extension for VRCFT. It allows ETVR to send out tracking data and have
it converted to parameters expected by VRCFT and avatars compatible with VRCFT.

In effect, ETVR will be compatible with whichever game or program that supports VRCFT, thanks to this module.

It is required for all avatrs that are setup to use Unified Expression(UE) or V2 parameters, optional for ones setup with so-called legacy or v1 parameters.

## What do I need and how do I set this up?

To make ETVR work with VRCFT, you'll need two things. VRCFT itself, and the tracking module.

### Required programs / Files

#### VRCFT

To get VRCFT head over to: [their docs page!](https://docs.vrcft.io/docs/intro/getting-started)

#### ETVR Module

Once you've installed VRCFT, you can find the most recent version of the module in the registry.

<ImageCard :options="image_settings.vrcft_etvr_module_registry"/>

Clicking on `install` will download and load the module, VRCFT will now be setup to listen for ETVR data. That's it!

### Setting up ETVR to use the module

<ImageCard :options="image_settings.vrcft_etvr_setitgs_page"/>

- Open `settings` tab
- Under OSC section select `Use the ETVR Module`
- Select the desired parameters - V1 or V2 (UE)
- Go back into the tracking tab

Settings will apply automatically, no need to change port or restart the app. ETVR will automatically start sending the data to the module.

### Sending the tracking data to VRCFT running on a separate PC.

<ImageCard :options="image_settings.vrcft_etvr_setitgs_page_inter_pc_setup"/>

If you're running a hybrid setup where one machine does all of the ETVR tracking, and the other has VRCFT and other software running, you'll need to adjust the settings a bit.

First, make sure that both machines are on the same network and they can see each other. If they're connected via Ethernet to the same router, or to the same WiFi network, things should just work.

Next, find out that's the IP address of the machine running VRCFT. For how to, refer to [Microsoft's documentation](https://support.microsoft.com/en-us/windows/find-your-ip-address-in-windows-f21a9bbc-c582-55cd-35e0-73431160a1b9)

With that, head over to ETVR, select the `VRCFT Module Settings tab`. Notice the `VRCFT Module listening IP` section. By default it's set to `127.0.0.1`, change it to the IP the PC that runs VRCFT.

### Reseting the module to default settings in case something went wrong.

<ImageCard :options="image_settings.vrcft_etvr_setitgs_page_reset_settings"/>

This is also taken care of by the app, simply make sure that VRCFT is running and the ETVR module got loaded in.

Then, in ETVR head back over to `VRCFT Module Settings tab` and hit `Reset Settings to default`.

This will reset the module's settings to default values for both - ETVR and VRCFT.

### There's a breaking change reported, what does that mean? What do I do?

When we say there's a breaking change, we mean that something changed so drastically that there's a high chance of the module failing to load.
This is a very rare thing, usually happens when settings get modified so much that they're no longer compatible.

In such cases, deleting the module's settings file is enough. Check the FAQ section - Where's the module's configuration file? For locating and deleting it.

## Dev version of the module for testing

Sometimes, we'll have a new version of the module ready for test, or a special one with a lot of additional logging to help us debug some stuff on your end. This version won't be available in the registry right away so how you install it?

1. Uninstall any pre-existing EVT Modules:

Uninstall your current ETVR Module installation.

Similarly to installing it for the first time, navigate to VRCFT's module registry, find the ETVR Module and hit uninstall.

2. Download the latest build:

Download the latest release / pre-release from [the repo](https://github.com/EyeTrackVR/ETVRTrackingModule/releases) or from the discord.

3. Install the development version:

Navigate to:

`C:\Users\<Your PC name>\AppData\Roaming\VRCFaceTracking\CustomLibs`

And place the module there. If `CustomLibs` doesn't exist yet, create it.
VRCFT will use it to load the development version of the module next time you launch the app.

### Building from source

#### Download the ETVR Module source from github

First, just like you'd do with the apps source, download it from github. Either via downloading and extracting a zip or by using `git clone`.

#### Donwload the latest VRCFT Source

Download the VRCFT Source from their [github](https://github.com/benaclejames/VRCFaceTracking). It's important to put next to the ETVR module.
Your directory should look more or less like this:

```
parent_directory
    - ETVR Module
    - VRCFT Repo
```

Building the module requires some of the VRCFT stuff to be present, namely the Core directory. To make it easier to compile, we've set the project up so that it will look for it, next to its own directory.

#### Install Visual Studio or Jetbrains Rider, and open the project

Whichever IDE you prefer, both just work, both make it easier to work with the source code.

Once installed, open the project in them and wait for everything to load.

#### Building the module

That's the last step, now we just need to verify that everything is setup correctly. Click on build, or hit `ctrl+b` and watch the output.

It should build just fine and the resulting file should get copied to the VRCFT CustomModules` directory.

Note, the copying **will** fail when VRCFT is running. If it does, close VRCFT and hit build again, this time only the copy step will be executed

## FAQ

### Where's the module's configuration file?

In the rare cases where you need to modify the configuration file, here's how to find it:

Since CRVFT is an UWP app and those behave quite a bit differently than regular apps, there's no easy way to access that file. Instead, you'll need to search on your `C:/` drive for `'ETVRModuleConfig.json` and it should show up.

### WHat do the fields in this file mean?

Range explanation: `0` - fully closed, `1` - fully open.

- `OutputMultiplier`: Defines by how much the output should be multiplied, it helps with making your tracking less or more expressive. `1` by default, `[0 - 2]` range.
- `PortNumber`: the port under which the module will be listening for OSC messages, by default `8889`
- `ShouldEmulateEyeWiden`: Toggle for emulating eye widen, think surprised face. On by default, will at `0.97` of fully open eye
- `ShouldEmulateEyeSquint`: Toggle for emulating squinting, think shutting your eyes with a bit of force. On by default, will activate at `0.05` of eye openness.
- `ShouldEmulateEyebrows`: Togggle for emulating eyebrow movement, depending on eye openness, the module will try and move the avis eye brows a little. On by default at `0.89`, range `[0 - 1]`
- `EyebrowThresholdRising`: Defines when eyebrow emulation should kick in, by default at `0.89`, range `[0 - 1]`
- `EyebrowThresholdLowering`: Defines when eyebrow emulation should kick in but in the opposite direction, by default at `0.06`, range `[0 - 1]`

- `SqueezeThresholdV1` - Defines when squeeze emulation should begin, and how "fast" should it be. By default, `[0.06, 0.51]`, with range first: `[0 - 1]`, second: `[0 - 2]`. This is used for v1 or legacy parameters

-`SqueezeThresholdV2` - Defines when squeeze emulation should begin, and how "fast" should it be. By default, `[0.06, -0.99]`, with range first: `[0 - 1]`, second: `[-2 - 0]`. This is used for v2 or Unified Expressions parameters

- `WidenThresholdV1` - Defines when Widen emulation should begin, and how "fast" should it be. By default, `[0.93, 1.01]`, with range first: `[0 - 1]`, second: `[0 - 2]`. This is used for v1 or legacy parameters

- `WidenThresholdV2` - Defines when widen emulation should begin, and how "fast" should it be. By default, `[0.96, 1.04]`, with range first: `[0 - 1]`, second: `[0 - 2]`. This is used for v2 or Unified Expressions parameters

To better explain how Widen / Squeeze emulation thresholds work: They're implemented via a simple smoothstep, you can play around with it [here](https://thebookofshaders.com/glossary/?search=smoothstep), simply plug in the values in `smoothstep()` and watch how the graph reacts.
