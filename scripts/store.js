import { getContacts } from "./services/contacts-service.js";

async function fetchContacts() {
  const contacts = await getContacts();
  this.contacts = contacts;
} 

const STORE = {
    user: null,
    contacts: [],
    fetchContacts,
  };

export default STORE;