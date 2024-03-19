<template>
 <div>
    <table>
      <thead>
        <tr>
          <th>Component</th>
          <th>Choice</th>
          <th>Amount</th>
          <th>Cost</th>
          <th>Cost All</th>
          <th>Links</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="component in components" :key="component.name">
          <th>{{ component.name }}</th>
          <td>
            <select v-if="component.choices.length > 1" v-model="component.selectedChoice" @change="updatePrices">
              <option v-for="(choice, index) in component.choices" :key="index" :value="index">{{ choice.name }}</option>
            </select>
            <span v-else>{{ component.choices[0].name }}</span>
          </td>
          <td>{{ component.selectedChoice ? component.choices[component.selectedChoice].amount(tracker) : 0 }}</td>
          <td>{{ component.selectedChoice ? '$' + component.choices[component.selectedChoice].cost : 0 }}</td>
          <td>{{ component.selectedChoice ? '~$' + (component.choices[component.selectedChoice].costAll(tracker) * 100) / 100 : 0 }}</td>
          <td v-html="component.selectedChoice ? component.choices[component.selectedChoice].links : ''"></td>
        </tr>
      </tbody>
    </table>
    <p>Total: ${{ total.toFixed(2) }}</p>
 </div>
</template>
<script>
export default {
 data() {
    return {
      tracker: 2,
      components: [
        {
          name: 'Type A USB Breakout',
          choices: [

            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 1.85,
              costAll: () => this.tracker * 0 ,
              links: 'If you do not need or already have.'
            },
            {
              name: 'Type A USB Breakout Bare (AliExpress)',
              amount: () => 1,
              cost: 1.18,
              costAll: () => this.tracker + 1.18,
              links: '<a href="https://www.aliexpress.us/item/2255801092919590.html">AliExpress</a>'
            },
            {
              name: 'Type A USB Breakout Bare (Amazon)',
              amount: () => 1,
              cost: 6.49,
              costAll: () => this.tracker + 5.49,
              links: '<a href="https://www.amazon.com/10Gtek-DIP-Breakout-Adapter-2-54mm/dp/B09LC8WQCD/">Amazon</a>'
            },
            {
              name: 'Type A USB Breakout With Cover (AliExpress)',
              amount: () => 1,
              cost: 2.20,
              costAll: () => this.tracker + 1.20 + 1.99,
              links: '<a href="https://www.aliexpress.us/item/2251832820552545.html/">AliExpress</a>'
            },
            {
              name: 'Type A USB Breakout With Wire and Cover (Amazon)',
              amount: () => 1,
              cost: 9.60,
              costAll: () => this.tracker + 8.60,
              links: '<a href="https://www.amazon.com/Pigtail-Extension-Cables-Connector-Replacement/dp/B09ZQNJ2DJ/">Amazon</a>'
            },
          ],
          selectedChoice: 1
        },
        {
          name: 'Wire for ESPs',
          choices: [

            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0 ,
              links: 'If you do not need wire or already have.'
            },
            {
              name: 'Silicone Wire Kit',
              amount: () => 1,
              cost: 5.96,
              costAll: () => this.tracker + 5.96 + 0.99,
              links: '<a href="https://www.aliexpress.us/item/3256806164419666.html">AliExpress</a> 30 AWG or lower'
            },
            {
              name: 'Generic Wire',
              amount: () => 1,
              cost: 0.70,
              costAll: () => this.tracker + 0.70 + 1.24,
              links: '<a href="https://a.aliexpress.com/_mK72cy6">AliExpress</a> Select "Specification: 30 AWG or lower"'
            },
            ],
          selectedChoice: 1
        },
        {
          name: 'Wire for LEDs',
          choices: [

            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0 ,
              links: 'If you do not need wire or already have.'
            },
            {
              name: 'Silicone Wire Kit',
              amount: () => 1,
              cost: 5.96,
              costAll: () => this.tracker + 5.96 + 0.99,
              links: '<a href="https://www.aliexpress.us/item/3256806164419666.html">AliExpress</a> 30 AWG or higher'
            },
            {
              name: 'Generic Wire',
              amount: () => 1,
              cost: 0.70,
              costAll: () => this.tracker + 0.70 + 1.24,
              links: '<a href="https://a.aliexpress.com/_mK72cy6">AliExpress</a> Select "Specification: 30 AWG or higher"'
            },
          ],
          selectedChoice: 1
        },
        {
          name: 'IR LEDs',
          choices: [
            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0,
              links: 'If you already have safe IR LED hardware and know what you are doing.'
            },
            {
              name: 'Official V4 mini Solder-less Kit',
              amount: () => 1,
              cost: 28,
              costAll: () => this.tracker + 28 + 3,
              links: '<a href="https://store.eyetrackvr.dev/products/v4-mini-fully-solderless-kit">ETVR Store</a> Length depending on HMD'
            },
            {
              name: 'Official V4 mini Bring Your Own Wires Kit',
              amount: () => 1,
              cost: 24,
              costAll: () => this.tracker + 24 + 3,
              links: '<a href="https://store.eyetrackvr.dev/products/v4-mini-some-assemblly-required">AliExpress</a> Must solder up your own wires'
            },
                        {
              name: 'Official V4 lite Assemble Yourself',
              amount: () => 1,
              cost: 7,
              costAll: () => this.tracker + 7 + 3,
              links: '<a href="https://store.eyetrackvr.dev/products/v4-1-lite-diy-led-kit">AliExpress</a> Must assemble yourself'
            },
          ],
          selectedChoice: 1
        },


        // Add other components similarly
      ],
      total: 0,
    };
 },
 methods: {
    updatePrices() {
      let total = 0;
      this.components.forEach(component => {
        if (component.choices.length > 1) {
          const choice = component.choices[component.selectedChoice];
          total += choice.costAll();
        }
      });
      this.total = total;
    },
 },
 mounted() {
    this.updatePrices();
 },
 
};
</script>
<style scoped>
/* Your styles here */
</style>