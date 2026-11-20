<script setup>
import { withBase } from 'vitepress'

/* The landing page. Plain content, in the order a newcomer needs it:
 * what this is, how it works, the build step by step, the usual first questions.
 * Edit the lists below to change the page; styling lives at the bottom. */

const how = [
  {
    title: 'Cameras watch your eyes',
    text: 'A small camera for each eye sits inside the headset, lit by low-power infrared LEDs.',
  },
  {
    title: 'Your PC does the tracking',
    text: 'The cameras stream over USB or Wi-Fi to the EyeTrackVR app, which works out where you are looking and how open your eyes are.',
  },
  {
    title: 'Your avatar looks where you look',
    text: 'The app sends the result over OSC to VRChat, or anything else that speaks OSC.',
  },
]

const build = [
  {
    title: 'Parts list',
    text: 'What to buy, and whether to go wired or wireless.',
    link: '/how_to_build/part_list',
  },
  {
    title: '3D printed mounts',
    text: 'Find a mount for your headset.',
    link: '/how_to_build/3d_printed_mounts',
  },
  {
    title: 'Prepare the cameras',
    text: 'Remove the IR filter so the cameras can see infrared.',
    link: '/how_to_build/preparing_cameras',
  },
  {
    title: 'Prepare the XIAO ESP32',
    text: 'Attach the camera and antenna to each board.',
    link: '/how_to_build/preparing_xiao',
  },
  {
    title: 'Set up the IR LEDs',
    text: 'Pick the LED guide that matches your kit.',
    link: '/how_to_build/led_setup',
  },
  {
    title: 'Flash the firmware',
    text: 'Load the firmware onto each board with the flashing tool.',
    link: '/firmware_guide/flashing_tool',
  },
  {
    title: 'Assemble the tracker',
    text: 'Fit everything into the mount and wire it up. This guide is still being written.',
    link: '/how_to_build/v4_full_build',
  },
  {
    title: 'Set up the app',
    text: 'Install the app and calibrate it for your eyes.',
    link: '/software_guide/eyetrackvr_app_guide',
  },
  {
    title: 'Set up your avatar',
    text: 'Get a VRChat avatar ready for eye tracking.',
    link: '/misc/vrc_avatar_setup',
  },
]

const questions = [
  {
    q: 'Will it fit my headset?',
    a: 'Very likely. It works with any headset the hardware fits inside, using a community mount or one you design yourself.',
    link: '/how_to_build/3d_printed_mounts',
    label: 'See the mounts',
  },
  {
    q: 'Is infrared light safe for my eyes?',
    a: 'Infrared can harm your eyes above a certain power. The official kits are designed around published exposure limits, so read the safety page before you power anything and never bypass a safety feature.',
    link: '/getting_started/led_safety',
    label: 'Read LED safety',
  },
  {
    q: 'What does it cost?',
    a: 'It depends on the boards and cameras you pick. The parts list prices every option.',
    link: '/how_to_build/part_list',
    label: 'Open the parts list',
  },
  {
    q: 'Where do my eye images go?',
    a: 'Nowhere. The app runs on your own PC and collects no data.',
  },
]
</script>

<template>
  <div class="etvr-home">
    <section class="hero">
      <div class="hero-text">
        <h1>Build your own eye tracking for VR.</h1>
        <p class="lede">
          EyeTrackVR is an open-source eye tracker you build yourself. A small
          camera for each eye fits inside your headset, so your avatar's eyes
          move with yours in VRChat and other social VR apps.
        </p>
        <div class="actions">
          <a class="btn primary" :href="withBase('/getting_started/intro')">Start with the introduction</a>
          <a class="btn" :href="withBase('/how_to_build/part_list')">See the parts list</a>
        </div>
      </div>
      <figure class="hero-photo">
        <img
          :src="withBase('/imgs/tracker/kgZe9i6.jpg')"
          width="1063"
          height="700"
          alt="A fingertip pressing a small camera board onto a XIAO ESP32 Sense board"
        />
      </figure>
    </section>

    <section aria-labelledby="how">
      <h2 id="how">How it works</h2>
      <ol class="how">
        <li v-for="(step, i) in how" :key="step.title">
          <span class="num" aria-hidden="true">{{ i + 1 }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </li>
      </ol>
    </section>

    <section aria-labelledby="build">
      <div class="section-head">
        <h2 id="build">The build, step by step</h2>
        <p>Nine guides, from ordering parts to a working tracker.</p>
      </div>
      <ol class="build">
        <li v-for="(step, i) in build" :key="step.link">
          <a :href="withBase(step.link)">
            <span class="num" aria-hidden="true">{{ i + 1 }}</span>
            <span class="body">
              <span class="title">{{ step.title }}</span>
              <span class="text">{{ step.text }}</span>
            </span>
          </a>
        </li>
      </ol>
    </section>

    <section aria-labelledby="questions">
      <div class="section-head">
        <h2 id="questions">Before you start</h2>
        <p>More answers in the <a :href="withBase('/misc/faq')">FAQ</a>.</p>
      </div>
      <dl class="questions">
        <div v-for="item in questions" :key="item.q">
          <dt>{{ item.q }}</dt>
          <dd>
            {{ item.a }}
            <a v-if="item.link" :href="withBase(item.link)">{{ item.label }}</a>
          </dd>
        </div>
      </dl>
    </section>

    <section class="community" aria-labelledby="community">
      <div>
        <h2 id="community">Stuck, or want to show off your build?</h2>
        <p>
          Builders help each other out on Discord. The hardware, firmware and
          app are all on GitHub.
        </p>
      </div>
      <div class="actions">
        <a class="btn" href="https://discord.gg/kkXYbVykZX" target="_blank" rel="noreferrer">Join the Discord</a>
        <a class="btn" href="https://github.com/EyeTrackVR" target="_blank" rel="noreferrer">Browse the source</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.etvr-home {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px;
  color: var(--vp-c-text-1);
}

section {
  padding: 56px 0;
  border-top: 1px solid var(--vp-c-divider);
}

section.hero {
  border-top: 0;
  padding: 56px 0 72px;
}

a {
  color: var(--vp-c-brand-1);
}

/* ------------------------------------------------------------------- type */

h1 {
  margin: 0;
  font-size: clamp(36px, 5.2vw, 54px);
  line-height: 1.06;
  font-weight: 700;
  letter-spacing: -0.025em;
  text-wrap: balance;
}

h2 {
  margin: 0;
  font-size: 28px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.015em;
}

h3 {
  margin: 0;
  font-size: 19px;
  line-height: 1.3;
  font-weight: 700;
}

p {
  margin: 0;
}

.lede {
  margin-top: 22px;
  max-width: 34em;
  font-size: 19px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.section-head {
  max-width: 40em;
  margin-bottom: 28px;
}

.section-head p {
  margin-top: 8px;
  font-size: 17px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.section-head a,
.questions a {
  font-weight: 500;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
}

/* ------------------------------------------------------------------- hero */

.hero {
  display: grid;
  gap: 40px;
  align-items: center;
}

.hero-photo {
  margin: 0;
}

.hero-photo img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 14px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.btn {
  display: inline-flex;
  align-items: center;
  min-height: 46px;
  padding: 0 20px;
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: background-color 0.15s, border-color 0.15s;
}

.btn:hover {
  border-color: var(--vp-c-text-3);
  background-color: var(--vp-c-bg-alt);
}

.btn.primary {
  border-color: transparent;
  background-color: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
}

.btn.primary:hover {
  background-color: var(--vp-button-brand-hover-bg);
}

/* ------------------------------------------------------------ how it works */

.how,
.build {
  margin: 0;
  padding: 0;
  list-style: none;
}

.how {
  display: grid;
  gap: 28px;
  margin-top: 28px;
}

.how p {
  margin-top: 6px;
  font-size: 16px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.num {
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-3);
}

.how .num {
  display: block;
  margin-bottom: 8px;
}

/* --------------------------------------------------------------- the build */

.build {
  display: grid;
  column-gap: 40px;
}

.build li {
  border-top: 1px solid var(--vp-c-divider);
}

.build a {
  display: flex;
  gap: 16px;
  align-items: baseline;
  padding: 16px 8px;
  margin: 0 -8px;
  border-radius: 8px;
  color: inherit;
  text-decoration: none;
  transition: background-color 0.15s;
}

.build a:hover {
  background-color: var(--vp-c-bg-alt);
}

.build .num {
  flex: none;
  width: 1.2em;
}

.build .body {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.build .title {
  font-size: 17px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.build .text {
  font-size: 15px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

/* --------------------------------------------------------------- questions */

.questions {
  display: grid;
  gap: 28px 48px;
  margin: 0;
}

.questions dt {
  font-size: 18px;
  font-weight: 700;
}

.questions dd {
  margin: 6px 0 0;
  font-size: 16px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

/* --------------------------------------------------------------- community */

.community {
  display: grid;
  gap: 8px;
  align-items: center;
}

.community p {
  margin-top: 8px;
  max-width: 36em;
  font-size: 17px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.community .actions {
  margin-top: 16px;
}

/* ------------------------------------------------------------------ layout */

@media (min-width: 720px) {
  .how {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  .questions {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .etvr-home {
    padding: 0 32px;
  }

  section {
    padding: 72px 0;
  }

  section.hero {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 64px;
    padding: 72px 0 96px;
  }

  /* Read down the first column, then the second: 1-5 left, 6-9 right. */
  .build {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, auto);
    grid-auto-flow: column;
  }

  .community {
    grid-template-columns: 1fr auto;
    gap: 40px;
  }

  .community .actions {
    margin-top: 0;
  }
}
</style>
