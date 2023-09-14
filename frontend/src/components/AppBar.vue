<template>
    <div class="topbar flex align-content-center flex-wrap justify-content-between">
        <div class="logo flex align-content-center flex-wrap">
            <img src="../logo/logo-f.png" style="width: 100%;" alt="Logo" />
        </div>
        <div class="flex align-content-center flex-wrap">
            <!-- Notification Icon -->
            <!-- <i class="pi pi-bell p-overlay-badge mr-4"
                style="font-size:20px; color: #595959; align-self: center;">
                <Badge value="" style="background-color: #8d6ef4;"></Badge>
            </i> -->
            <img src="../logo/user-logo.png" style="width: 35px;" alt="Logo" />
            <h3 class="mx-3 align-self-center" style="font-size: 14px; color: #595959;">{{ username }}</h3>
            <img src="../logo/down.png" style="height: 7px; align-self: center; cursor: pointer;" alt="Logo" @click="toggle"
                aria-haspopup="true" aria-controls="overlay_menu" />
            <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
        </div>
        <!-- Notificatio List -->
        <!-- <div class="notification-menu" v-if="is_notification">
            <div style="border-bottom: 1px solid #d1d1d1;">
                <p>Notifications</p>
            </div>
        </div> -->
    </div>
</template>
  
<script setup>
import { call } from 'frappe-ui';
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router'

// const is_notification = ref(false);
const router = useRouter()
const username = ref()
const user_id = ref()
var baseUrl = window.location.origin



onMounted(() => {
    username.value = localStorage.getItem("username")
    user_id.value = localStorage.getItem("user_id")

    get_notification_log()
})

// Menu 
const menu = ref();
const items = ref([
    {
        label: 'My Profile',
        icon: 'pi pi-fw pi-user',
        command: () => {
            window.location.href = baseUrl + '/app/user-profile';
        }
    },
    {
        label: 'My Settings',
        icon: 'pi pi-fw pi-cog',
        command: () => {
            console.log(baseUrl + '/app/user/' + localStorage.getItem("user_id"));
            window.location.href = baseUrl + '/app/user/' + user_id.value;
        }
    },
    { separator: true },
    {
        label: 'Logout',
        icon: 'pi pi-fw pi-sign-out',
        command: () => {
            logout()
        }
    },
]);

const toggle = (event) => {
    menu.value.toggle(event);
};


// logout

const logout = () => {
    call('logout')
        .then(response => {
            router.push('/login')
        })
        .catch(error => {
            console.log(error);
        });
    console.log('Logged out');
};


// const toggle = () => {
//     is_notification.value = !is_notification.value
// };

const get_notification_log = () => {
    call('frappe.desk.doctype.notification_log.notification_log.get_notification_logs')
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
}


</script>
  
<style scoped>
.topbar {
    position: fixed;
    top: 0px;
    padding: 15px 63px;
    background-color: #FBFBFB;
    height: 60px;
    width: 100%;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.10);

}

.logo img {
    max-height: 40px;
}

button {
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
}

/* .notification-menu {
    width: 480px;
    padding: 30px;
    background-color: #ffffff;
    position: absolute;
    right: 200px;
    top: 45px;
    height: 560px;
    z-index: 9;
    border-radius: 15px;
    box-shadow: 0px 1px 4px rgba(17, 43, 66, 0.1), 0px 2px 6px rgba(17, 43, 66, 0.08);
} */
</style>


<style>
.p-menuitem-text {
    font-size: 14px;
    color: #1f272e;
}

/* .p-menu {
    padding: 0%;
} */
</style>