const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: []
        },
        actions: {
            fetchContacts: async () => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/sony");
                    const data = await response.json();
                    setStore({ contacts: data.contacts });
                } catch (error) {
                    console.log("Error fetching contacts:", error);
                }
            },
            fetchOneContact: async (contactId) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/sony/contacts`);
                    const data = await response.json();
                    setStore({ contacts: data.contacts });
                                } catch (error) {
                    console.log("Error fetching contacts:", error);
                }
            },
            addContact: async (newContact) => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/sony/contacts/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: newContact.name,
                            email: newContact.email,
                            address: newContact.address,
                            phone: newContact.phone
                        })
                    });
                    
                    const data = await response.json();
                    getActions().fetchContacts();
                } catch (error) {
                    console.log("Error adding contact:", error);
                }
            },
            deleteContact: async (contactId) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/sony/contacts/${contactId}`, {
                        method: "DELETE"
                    });
                    setStore({ contacts: getStore().contacts.filter(contact => contact.id !== contactId) });
                } catch (error) {
                    console.log("Error deleting contact:", error);
                }
            },
            updateContact: async (contactId, contact) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/sony/contacts/${contactId}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: contact.name,
                            email: contact.email,
                            agenda_slug: "sony",
                            address: contact.address,
                            phone: contact.phone
                        })
                    });
                    
                    getActions().fetchContacts();
                } catch (error) {
                    console.log("Error updating contact:", error);
                }
            },            
        }
    };
};

export default getState;