<template>
  <input
    ref="inputRef"
    type="text"
    placeholder="enter amount"
    class="border border-gray-600 px-3 rounded h-10 focus:outline-none"
     @input="getCalc()"
  />
</template>

<script >
import { useCurrencyInput } from 'vue-currency-input'
import { watchDebounced } from '@vueuse/core'
export default {
  name: 'CurrencyInput',
  props: {
    modelValue: Number, // Vue 2: value
    options: Object,
    getCalc: Function
  },
  setup (props, { emit }) {
    const { inputRef, numberValue } = useCurrencyInput(props.options, false)

    watchDebounced(numberValue, (value) => emit('update:modelValue', value), { debounce: 500 })

    return { inputRef }
  }
}
</script>