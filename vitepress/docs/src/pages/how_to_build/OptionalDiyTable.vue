<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th class="component-col">Component</th>
          <th class="choice-col">Choice</th>
          <th class="amount-col">Amount</th>
          <th class="cost-col">Cost</th>
          <th class="cost-all-col">Cost All</th>
          <th class="links-col">Links</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(component, index) in components" :key="component.name">
          <th class="component-col">{{ component.name }}</th>
          <td class="choice-col">
            <div v-if="component.choices.length > 1" class="custom-select" @click="toggleDropdown(component, index)" :ref="`select-${component.name}`">
              <div class="selected-option">
                {{ component.choices[component.selectedChoice].name }}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dropdown-arrow" :class="{ 'rotate': component.isOpen }">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div v-if="component.isOpen" class="options" :class="{ 'options-above': isOptionsAbove(index) }">
                <div v-for="(choice, choiceIndex) in component.choices" 
                     :key="choiceIndex" 
                     @click="selectOption(component, choiceIndex)"
                     class="option">
                  {{ choice.name }}
                </div>
              </div>
            </div>
            <span v-else>{{ component.choices[0].name }}</span>
          </td>
          <td>{{ component.selectedChoice ? component.choices[component.selectedChoice].amount(tracker) : 0 }}</td>
          <td>{{ component.selectedChoice ? '$' + component.choices[component.selectedChoice].cost.toFixed(2) : 0 }}</td>
          <td>{{ component.selectedChoice ? '~$' + (component.choices[component.selectedChoice].costAll().toFixed(2)) : 0 }}</td>
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
          selectedChoice: 0,
          isOpen: false
        },
        {
          name: 'USB-C Breakout',
          choices: [
            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0,
              links: 'If you do not need or already have.'
            },
            {
              name: 'AliExpress Male & Female',
              amount: () => 1,
              cost: 1.19,
              costAll: () => this.tracker + 1.19 + 1.37,
              links: '<a href="https://www.aliexpress.us/item/3256801151667308.html">AliExpress</a> Choose: "Color: 5Set".'
            },
            {
              name: 'AliExpress Vertical Male',
              amount: () => 1,
              cost: 2.37,
              costAll: () => this.tracker + 0.37 + 1.99,
              links: '<a href="https://www.aliexpress.us/item/3256804002116469.html">AliExpress</a>'
            },
          ],
          selectedChoice: 0,
          isOpen: false
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
          selectedChoice: 0,
          isOpen: false
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
          selectedChoice: 0,
          isOpen: false
        },
        {
          name: 'Camera Extension Cables',
          choices: [
            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0,
              links: 'If you do not need or already have.'
            },
            {
              name: 'AliExpress 24pin 0.5mm Pitch',
              amount: () => 1,
              cost: 1.33,
              costAll: () => this.tracker + 0.33 + 1.99,
              links: '<a href="https://www.aliexpress.us/item/2255799835842411.html">AliExpress</a> Choose: "Insert Type: 24p 0.5mm pitch" and Type A. Length depends on HMD, usually 150mm or 200mm.'
            },
            {
              name: 'Adafruit 24 pin 0.5mm pitch',
              amount: () => this.tracker,
              cost: 1.35,
              costAll: () => this.tracker * 1.35 + 6,
              links: '<a href="https://www.adafruit.com/product/4230">Adafruit</a> 250mm'
            },
          ],
          selectedChoice: 0,
          isOpen: false
        },
        {
          name: 'Camera Extension Connectors',
          choices: [
            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0,
              links: 'If you do not need or already have.'
            },
            {
              name: 'AliExpress 24 pin',
              amount: () => 1,
              cost: 1.32,
              costAll: () => this.tracker + 0.32 + 1.99,
              links: '<a href="https://www.aliexpress.us/item/3256804096715690.html">AliExpress</a> Choose: "Pins: 24P".'
            },
            {
              name: 'Adafruit 24 pin',
              amount: () => this.tracker,
              cost: 0.86,
              costAll: () => this.tracker * 0.865 + 6,
              links: '<a href="https://www.adafruit.com/product/4524">Adafruit</a>'
            },
          ],
          selectedChoice: 0,
          isOpen: false
        },
        {
          name: 'External Antennas',
          choices: [
            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0,
              links: 'If you do not need or already have.'
            },
            {
              name: 'AliExpress Small',
              amount: () => 1,
              cost: 0.16,
              costAll: () => this.tracker * 0.16 + 3.48,
              links: '<a href="https://www.aliexpress.us/item/2251832800433720.html">AliExpress</a> Choose: "Color: 2.4G Antenna".'
            },
            {
              name: 'Amazon Large',
              amount: () => 1,
              cost: 9.99,
              costAll: () => this.tracker + 7.99,
              links: '<a href="https://www.amazon.com/Diymall-Antenna-Antennas-Arduino-ESP-072pcs/dp/B00ZBJNO9O/">Amazon</a>'
            },
          ],
          selectedChoice: 0,
          isOpen: false
        },
        {
          name: 'USB-C Cables',
          choices: [
            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0,
              links: 'If you do not need or already have.'
            },
            {
              name: 'Short USB-C to USB-C Amazon',
              amount: () => 1,
              cost: 6.29,
              costAll: () => this.tracker + 5.29,
              links: '<a href="https://www.amazon.com/gp/product/B09C2D9Z7T/ref=ox_sc_act_title_2?smid=A10X1BEP2GKRDQ&th=1">Amazon</a>'
            },
            {
              name: 'Short USB-A to USB-C Amazon',
              amount: () => 1,
              cost: 7.99,
              costAll: () => this.tracker + 5.99,
              links: '<a href="https://www.amazon.com/Charging-Durable-Station-Compatible-Samsung/dp/B08LL1SVZD/">Amazon</a>'
            },
          ],
          selectedChoice: 0,
          isOpen: false
        },
        {
          name: 'V4 LED Wire Extensions/Replacements',
          choices: [
            {
              name: 'Bring Your Own',
              amount: () => this.tracker,
              cost: 0,
              costAll: () => this.tracker * 0,
              links: 'If you do not need or already have.'
            },
            {
              name: '110mm Extension/Replacement',
              amount: () => 1,
              cost: 1.50,
              costAll: () => this.tracker + 1.50 + 5,
              links: '<a href="https://store.eyetrackvr.dev/products/2x-110mm-replacement-wires">ETVR Store</a>'
            },
            {
              name: '200mm Extension/Replacement',
              amount: () => 1,
              cost: 1.50,
              costAll: () => this.tracker + 1.50 + 5,
              links: '<a href="https://store.eyetrackvr.dev/products/2x-200mm-replacement-wires">ETVR Store</a>'
            },
          ],
          selectedChoice: 0,
          isOpen: false
        },
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
          total += choice.costAll(this.tracker);
        } else if (component.choices.length === 1) {
          total += component.choices[0].costAll(this.tracker);
        }
      });
      this.total = total;
    },
    toggleDropdown(component, index) {
      this.components.forEach(comp => {
        if (comp !== component) {
          comp.isOpen = false;
        }
      });
      component.isOpen = !component.isOpen;
    },
    isOptionsAbove(index) {
      return index >= this.components.length - 2;
    },
    selectOption(component, index) {
      component.selectedChoice = index;
      component.isOpen = false;
      this.updatePrices();
    },
    closeAllDropdowns() {
      this.components.forEach(component => {
        component.isOpen = false;
      });
    },
    handleOutsideClick(event) {
      if (!event.target.closest('.custom-select')) {
        this.closeAllDropdowns();
      }
    }
  },
  mounted() {
    this.updatePrices();
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
};
</script>
<style scoped>
.table-container {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

th, td {
  padding: 5px;
  border: 1px solid #ddd;
  word-wrap: break-word;
  vertical-align: middle;
  text-align: center;
}

.component-col { width: 15%; }
.choice-col { width: 25%; }
.amount-col { width: 7%; }
.cost-col { width: 10%; }
.cost-all-col { width: 13%; }
.links-col { width: 30%; }

.custom-select {
  position: relative;
  width: 100%;
  cursor: pointer;
  z-index: 1;
}

.custom-select:hover,
.custom-select:focus-within {
  z-index: 2;
}

.selected-option {
  border: 1px solid #999;
  padding: 5px;
  background-color: #666;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  color: #fff;
  transition: background-color 0.3s ease;
}

.selected-option:hover {
  background-color: #444;
}

.options {
  position: absolute;
  left: 0;
  right: 0;
  background-color: #222;
  border: 1px solid #444;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  top: 100%;
}

.options-above {
  bottom: 100%;
  top: auto;
}

.option {
  padding: 5px;
  border-bottom: 1px solid #444;
  color: #fff;
  background-color: #333;
}

.option:last-child {
  border-bottom: none;
}

.option:hover {
  background-color: #1e1e20;
}

.dropdown-arrow {
  width: 16px;
  height: 16px;
  min-width: 16px;
  min-height: 16px;
  transition: transform 0.3s ease;
}

.dropdown-arrow.rotate {
  transform: rotate(180deg);
}

.custom-select[aria-expanded="true"] .dropdown-arrow {
  transform: rotate(180deg);
}

@media (max-width: 768px) {
  .table-container {
    overflow-x: auto;
  }
  
  table {
    table-layout: auto;
  }
  
  th, td {
    white-space: normal;
  }
  
  .component-col, .choice-col, .amount-col, .cost-col, .cost-all-col, .links-col {
    width: auto;
  }
}
</style>