import apiFetch from "./api-fetch.js";

export function getContacts(){
    return apiFetch("/contacts");
}

export function createContact( newContact = {
    name,
	email,
	number,
	relation
}){ return apiFetch("/contacts", {body: newContact}); }

export function deleteContact(id){
    return apiFetch(`/contacts/${id}`, { method: "DELETE"});
}

export async function updateContact(idContact,
    data = {
        name,
        email,
        number,
        relation
    }
  ) {
    const contact = await apiFetch(`/contacts/${idContact}`, { body: data, method: "PATCH" });
    return contact;
  }

  export function showContact(idContact) {
    return apiFetch(`/contacts/${idContact}`);
  }

