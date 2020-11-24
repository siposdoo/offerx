import Vue from 'vue'
import { AclInstaller, AclCreate, AclRule } from 'vue-acl'
import router from '@/router'

Vue.use(AclInstaller)

let initialRole = '8122a36f88b8c47153a0db9fb1619d10'

const userInfo = JSON.parse(localStorage.getItem('userInfo'))
if (userInfo && userInfo.userRole) initialRole = userInfo.userRole

export default new AclCreate({
  initial  : initialRole,
  notfound : '/pages/not-authorized',
  router,
  acceptLocalRules : true,
  globalRules: {
    admin  : new AclRule('a2eed3a65bb08aeff6857224776185d8').generate(),
    superadmin  : new AclRule('6be6eada56e0e523d15c30b23123d411').generate(),
    editor : new AclRule('8122a36f88b8c47153a0db9fb1619d10').or('a2eed3a65bb08aeff6857224776185d8').generate()
  }
})
