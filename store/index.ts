import { getAccessorType } from 'nuxt-typed-vuex'

import * as calculator from '~/store/calculator'

export const accessorType = getAccessorType({
  modules: {
    calculator
  },
})
