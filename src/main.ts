import { createApp } from 'vue'
import App from './App.vue'

import firestore from "@/firebase";
import { Firestore } from "@firebase/firestore";
declare global {
    interface Window {
        db: Firestore,
    }
}
window.db = firestore;

createApp(App).mount('#app')
