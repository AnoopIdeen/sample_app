<!-- <template>
  <div class="max-w-3xl py-12 mx-auto">
    <Button
      icon-left="code"
      @click="$resources.ping.fetch"
      :loading="$resources.ping.loading"
    >
      Click to send 'ping' request
    </Button>
    <div>
      {{ $resources.ping.data }}
    </div>
    <pre>{{ $resources.ping }}</pre>

    <Button @click="showDialog = true">Open Dialog</Button>
    <Dialog title="Title" v-model="showDialog"> Dialog content </Dialog>
  </div>
</template>

<script>
import { Dialog } from 'frappe-ui'

export default {
  name: 'Home',
  data() {
    return {
      showDialog: false,
    }
  },
  resources: {
    ping: {
      url: 'ping',
    },
  },
  components: {
    Dialog,
  },
}
</script> -->


<template>
  <AppBar></AppBar>
  <div class="container">
    <div class="menu-card" @click="nonFinancial" style="margin-right: 20px;">
      <h2>Menu Card 1</h2>
      <p>Menu item 1 description.</p>
    </div>
    <div class="menu-card" @click="financial">
      <h2>Menu Card 2</h2>
      <p>Menu item 2 description.</p>
    </div>
  </div>
</template>


<script setup>
import AppBar from '../components/AppBar.vue';
var baseUrl = window.location.origin


const nonFinancial = () => {
  window.location.href = baseUrl + '/app/vehicles/view/list';
}
const financial = () => {
  window.location.href = baseUrl + '/app/vehicles/new-vehicles-1';
}

</script>
<style scoped>
.container {
  padding: 20px;
  height: 100vh;
  max-width: 100%;
  background-color: #ededed;
}

.menu-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  width: 25%;
  float: left;
}
</style>