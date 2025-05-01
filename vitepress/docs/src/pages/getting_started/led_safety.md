<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { alerts } from '../../static/alerts'
import { image_settings } from '../../static/image_settings'
</script>



## Near‑Eye Infrared (IR) Emitter Safety

**Please exercise caution when messing around with IR emitters.**

IR can be dangerous to your eyes once at a certain power level. **It is not recommended to use different emitters unless you know exactly what you are doing as it could result in harm to your eyes. If you doubt yourself or do not understand something, just do exactly what we do. Don't use different emitters, don't use different means of power, etc.**

::: danger It is important that you DO NOT BYPASS (OR NOT DO) ANY SAFETY FEATURES PUT IN PLACE. This can result in irreversible bodily harm. :::

The safety measures were put in place to REDUCE the potential failure risk. All further safety responsibilities are on the user. This includes visually checking with an IR camera that the brightness is correct and that you do not feel warmth, excessive eye-strain or experience short-term effects after being exposed to the IR light (symptoms such as dark spots or dry/warm feeling eyes while actively using). While we have designed EyeTrackVR to be as safe as possible, we do not hold any responsibility for damage done.

[Our official kits](https://store.eyetrackvr.dev/) are made with known safe parts, undergo design testing to ensure failures are safe, and have calculated exposure nummbers below.

---

### Relevant Safety Limits

We design for compliance with these key international safety standards:

- **ICNIRP 2013**: For exposures >1000 seconds, the **anterior eye** (cornea and lens) irradiance limit is  
  **10 mW/cm²** (equivalent to 100 W/m²).
- **IEC 62471** and **IEC 60825-1**: For sources in the **retinal hazard region** (400–1400 nm), and a worst-case exposure of ≥10 s, the irradiance limit is  
  **4 mW/cm²** (averaged over a 7 mm pupil projected cone of 11 mrad).

EyeTrackVR emitters operate at **850 nm**, within the retinal hazard region.  
Our calculated output is well below both thresholds:  
**≤ 0.8 mW/cm²** at 1 cm — **5×** below the retinal limit, **13×** below the corneal limit.

---

### Why Current (mA) Isn’t Enough

LED current (mA) is not a direct measure of safety. **Irradiance** (power per unit area) determines actual eye exposure:

```
Irradiance E = Radiant Intensity Ie / Illuminated Area A
A            = r² · Ω          where Ω = 2π(1−cosθ)
```

- *Ie* = radiant intensity (in **mW/sr**, from datasheet)
- *r* = distance from LED to cornea (worst-case 1 cm)
- *θ* = half-angle of LED emission cone (datasheet: 60°, full angle 120°)
- *Ω* = solid angle in **steradians**  
  (for θ = 60° → Ω ≈ π sr)  
  → A = π cm² at 1 cm

---

## Hardware Exposure Calculations

### LED: XL‑3216HIRC‑850

| Datasheet Value             | Symbol              | Notes                              |
|-----------------------------|---------------------|-------------------------------------|
| Radiant intensity @ 20 mA   | *Ie₍20ₘₐ₎* = 5 mW/sr | Typical max value, 60° half-angle   |
| Full emission angle         | 120°                | ⇒ θ = 60°, Ω ≈ π sr                 |

Radiant intensity scales roughly linearly with current:

```
Ie = Ie₍20ₘₐ₎ × (I_drive / 20 mA)
```

---

### V3 Module (2 LEDs @ 3.2 mA each)

```
Ie_single  = 5 × (3.2 / 20) = 0.80 mW/sr
E_single   = 0.80 / π = 0.25 mW/cm²
E_total    = 0.25 × 2 = 0.51 mW/cm²
→ ~5% of ICNIRP corneal limit
```

---

### V4 Module (4 LEDs @ 2.4 mA each)

```
Ie_single  = 5 × (2.4 / 20) = 0.60 mW/sr
E_single   = 0.60 / π = 0.19 mW/cm²
E_total    = 0.19 × 4 = 0.76 mW/cm²
→ ~8% of ICNIRP corneal limit
```

---

### Worst-Case (High Bin) Calculations

Some LEDs may fall into a higher output bin with up to **8 mW/sr @ 20 mA**. We conservatively recalculate:

#### V3 Max Bin (2 LEDs @ 3.2 mA):

```
Ie_single  = 8 × (3.2 / 20) = 1.28 mW/sr
E_single   = 1.28 / π = 0.41 mW/cm²
E_total    = 0.41 × 2 = 0.81 mW/cm²
→ ~8.1% of ICNIRP corneal limit
```

#### V4 Max Bin (4 LEDs @ 2.4 mA):

```
Ie_single  = 8 × (2.4 / 20) = 0.96 mW/sr
E_single   = 0.96 / π = 0.31 mW/cm²
E_total    = 0.31 × 4 = 1.22 mW/cm²
→ ~12.2% of ICNIRP corneal limit
```

---

## Your Responsibilities

1. **Do not modify the hardware.** Changing components or resistors voids all safety guarantees and may lead to unsafe conditions.
2. **Verify functionality before use.** Use an IR-sensitive camera to confirm all LEDs are on and of equal brightness and the view of your eye is not completely washed out.
3. **Perform periodic inspections** to ensure IR emitters have not damaged and remain equal brightness.

---

## Appendix A – Formula Summary

```
Ω               = 2π(1−cosθ)        (solid angle of emission)
A               = Ω × r²            (illuminated area)
Ie              = Ie₍20ₘₐ₎ × I / 20 mA
E (per LED)     = Ie / A
E_total         = E × (# of LEDs)
```

---

## Appendix B – Quoted Guideline (ICNIRP 2013)

> “To avoid thermal injury of the cornea and possible delayed effects on the lens of the eye (cataractogenesis), infrared radiation (780 nm < λ < 3 µm) should be limited to 100 W m⁻² (10 mW cm⁻²) for lengthy exposures (> 1000 s).”

> — *ICNIRP Guidelines on Limits of Exposure to Incoherent Optical Radiation (2013)*  
[PDF](https://docs.eyetrackvr.dev/safety/ICNIRP_optical_radiation.pdf)

---

If you have suggestions, believe these calculations are inaccurate, or wish to contribute improvements, please [open a discussion on GitHub](https://github.com/EyeTrackVR/EyetrackVR-Docs). Your feedback helps us keep everyone safe.
