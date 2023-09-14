<template>
  <AppBar></AppBar>

  <div class="container">
    <div class="flex flex-row flex-wrap">
      <div class="lg:col-3 px-3 text-center">
        <div class="menu-card">
          <img src="../logo/total-notes.png" alt="" class="icon-menu" />
          <h5>{{ total_notes }}</h5>
          <p>Total Notes</p>
        </div>
      </div>
      <div class="lg:col-3 px-3 text-center">
        <div class="menu-card">
          <img src="../logo/pending-notes.png" alt="" class="icon-menu" />
          <h5>{{ pending_notes }}</h5>
          <p>Pending Notes</p>
        </div>
      </div>
      <div class="lg:col-3 px-3 text-center">
        <div class="menu-card">
          <img src="../logo/approved-notes.png" alt="" class="icon-menu" />
          <h5>{{ approved_notes }}</h5>
          <p>Approved Notes</p>
        </div>
      </div>
      <div class="lg:col-3 px-3 text-center">
        <div class="menu-card">
          <img src="../logo/rejected-notes.png" alt="" class="icon-menu" />
          <h5>{{ rejected_notes }}</h5>
          <p>Rejected Notes</p>
        </div>
      </div>
    </div>
    <div class="px-3">
      <p class="my-6" style="border-bottom: 1px solid #d1d1d1"></p>
      <!-- <Divider class="mt-7" /> -->
    </div>
    <div class="px-3">
      <div class="flex flex-row flex-wrap">
        <!-- financial note -->
        <div class="financial_notebtn flex justify-content-between flex-wrap">
          <button class="flex-grow-1 text-left" @click="financial_list">
            Financial Note
          </button>
          <span @click="add_financial"
            ><img src="../logo/green_add.png" alt="" class="plus_img"
          /></span>
        </div>
        <!-- non financial note -->
        <div
          class="non_financial_notebtn flex justify-content-between flex-wrap"
        >
          <button class="flex-grow-1 text-left" @click="non_financial_list">
            Non Financial Note
          </button>
          <span @click="add_non_financial"
            ><img src="../logo/purple_add.png" alt="" class="plus_img"
          /></span>
        </div>

        <button
          class="go_dashboardbtn flex justify-content-between flex-wrap"
          @click="to_dashboard"
        >
          Go to Dashboard
          <span
            ><img src="../logo/yellow_add.png" alt="" class="plus_img"
          /></span>
        </button>

        <!-- <SplitButton label="Save" menuButtonIcon="pi pi-plus" @click="save" :model="items" /> -->
      </div>
    </div>

    <!-- <div class="flex flex-wrap">
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
    </div> -->
  </div>
</template>

<script setup>
import AppBar from '../components/AppBar.vue'
import { ref } from 'vue'
import { createListResource, createResource } from 'frappe-ui'
var baseUrl = window.location.origin

// const vehiclesDoc = createListResource({
//   doctype: 'Vehicles',
//   fields: ['name', 'vehicle'],
//   // realtime: true,
//   auto: true,
// })
const total_notes = ref(0)
const rejected_notes = ref(0)
const pending_notes = ref(0)
const approved_notes = ref(0)

const count = createResource({
  url: 'owl_app.owl_app.doctype.financial_note.financial_note.get_dashboard_details',

  onSuccess(data) {
    total_notes.value = data.total_count
    rejected_notes.value = data.rejected_count
    pending_notes.value = data.pending_count
    approved_notes.value = data.approved_count
  },
  auto: true,
})
// count.fetch()

const financial_list = () => {
  window.location.href = baseUrl + '/app/financial-note/view/list'
}
const add_financial = () => {
  window.location.href = baseUrl + '/app/financial-note/new-financial-note-1'
}

const non_financial_list = () => {
  window.location.href = baseUrl + '/app/non-financial-note/view/list'
}
const add_non_financial = () => {
  window.location.href =
    baseUrl + '/app/non-financial-note/new-non-financial-note-1'
}

const to_dashboard = () => {
  window.location.href = baseUrl + '/app/query-report/Note Status'
}
</script>
<style scoped>
.container {
  padding: 100px 50px 50px 50px;
  height: 100vh;
  max-width: 100%;
  background-color: #ffffff;
}

.menu-card {
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  padding: 35px;
}

.menu-card h5 {
  font-size: 50px;
  font-weight: 700;
}

.menu-card p {
  font-size: 13px;
  /* color: #8a8888; */
}

.icon-menu {
  margin: 0px auto;
  height: 60px;
}

.menu-card:hover {
  transform: scale(1.04);
  transition: 0.4s;
}

.financial_notebtn {
  background-color: #e9f9e8;
  border: 1px solid #22bc3a;
  color: #22bc3a;
  padding: 15px;
  border-radius: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 20%;
}

.plus_img {
  height: 30px;
}

.financial_notebtn:hover {
  background-color: #c4edc1;
}

.non_financial_notebtn {
  background-color: #f6f0ff;
  border: 1px solid #8565f3;
  color: #8565f3;
  padding: 15px;
  border-radius: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 20px;
  width: 20%;
}

.non_financial_notebtn:hover {
  background-color: #d0c5f5;
}

.go_dashboardbtn {
  background-color: #fffce4;
  border: 1px solid #f6c128;
  color: #f6c128;
  padding: 15px;
  border-radius: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 20px;
  width: 20%;
}

.go_dashboardbtn:hover {
  background-color: #f8f2c1;
}
</style>
