<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { image_settings } from '../../static/image_settings'
import { alerts } from '../../static/alerts'
</script>

# VRCFT ETVR Tracking module, or simply the tracking module

VRCFT ETVR Tracking module is a plugin for VRCFT. It allows ETVR to send out tracking data and have 
it converted to parameters expected by VRCFT and avatars compatible with VRCFT. 

In effect, ETVR will be compatible with whichever game or program is VRCFT compatible thanks to this module. 

It is required for all avatrs that are setup to use Unified Expression(UE) or V2 parameters. 

## How do I get it? 

### VRCFT

To get VRCFT head over to: [their docs page!](https://docs.vrcft.io/docs/intro/getting-started)

### Module from VRCFTs module registry 

Once you've installed VRCFT, you'll find the most recent version of the module in the registry. 

<ImageCard :options="image_settings.vrcft_etvr_module_registry"/>

Hitting install will download and load the module. VRCFT is now setup to work with ETVR

### Dev version of the module for testing 

Sometimes, we'll have a new version of the module ready for test, or a special one with a lot of additional logging to help us debug some stuff on your end. This version won't be available in the registry right away so how you install it? 

#### First:

Uninstall your current ETVR Module installation. 

Similarly to installing it for the first time, navigate to VRCFT's module registry, find the ETVR Module and hit uninstall. 

#### Then: 
Download the latest release / pre-release from [the repo](https://github.com/EyeTrackVR/ETVRTrackingModule/releases) or from the discord. 

#### Next:

Navigate to:

`C:\Users\<Your PC name>\AppData\Roaming\VRCFaceTracking\CustomLibs`

And place the module there. If `CustomLibs` doesn't exist yet, feel free to create this directory.
VRCFT will use it to loadup the development version of the module next time you launch the app. 

## Setting up ETVR app to make use of the module 

### TODO

## Where's the module's configuration file?

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