
<template>
  <AppBar></AppBar>
  <div class="container">

    <div class="flex flex-wrap">
      <div class="flex align-items-center justify-content-center menu-card" @click="nonFinancial"
        style="margin-right: 20px;">
        <h2>Doctype List 1</h2>

      </div>
      <div class="flex align-items-center justify-content-center menu-card" @click="financial">
        <h2>Doctype List 2</h2>

      </div>
      <div class="flex" style="min-width: 100vh; min-height: 100px">
        <pre>
        {{ vehiclesDoc.data }}
      </pre>
      </div>
    </div>
  </div>
</template>


<script setup>
import AppBar from '../components/AppBar.vue';
import { createListResource, createResource } from 'frappe-ui';
var baseUrl = window.location.origin

const vehiclesDoc = createListResource({
  doctype: 'Vehicles',
  fields: ['name', 'vehicle'],
  // realtime: true,
  auto: true,
})

// const count = createResource({
//   url: 'sample_app.sample_app.doctype.vehicles.vehicles.sample_function',
//   params: {
//     doctype: 'Vehicle'
//   },
//   onSuccess(data) {
//     console.log('====================================');
//     console.log(data);
//     console.log('====================================');
//   },
//   auto: true
// })
// count.fetch()


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
  height: 12%;
  float: left;
  cursor: pointer;
  transition: background-color 0.3s;
}

.menu-card:hover {
  background-color: #f4f4f4;
}
</style>