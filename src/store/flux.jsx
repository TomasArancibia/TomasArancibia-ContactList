const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      createContact: async (contactData) => {
        try {
          const response = await fetch("https://playground.4geeks.com/contact/agendas/tomasarancibia/contacts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(contactData),
          });

          if (response.ok) {
            const result = await response.json();
            console.log("Contact created successfully!");
            setStore({ contacts: getStore(contacts), result })
          } else {
            console.log("Error creating post.");
          }
        } catch (error) {
          console.error("An error occurred while creating post:", error);
        }
      },
      loadSlug: async () => {
        try {
          const response = await fetch(`https://playground.4geeks.com/contact/agendas/tomasarancibia`);
          if (!response.ok) {
            if (response.status == 404) {
              const response2 = await fetch(`https://playground.4geeks.com/contact/agendas/tomasarancibia`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify([]),
              }
              );
              const slugData = await response2.json();
              console.log('slugData', slugData)
              setStore({ contacts: slugData["contacts"] });
            }
            else {
              throw new Error("Status error in Fetch")
            }
          }
          const response1 = await fetch(`https://playground.4geeks.com/contact/agendas/tomasarancibia`);
          const contactData1 = await response1.json();
        }
        catch (error) {
          console.error("An error occurred while loading Feed:", error);
        }
      },
      loadContacts: async () => {
        try {
          const response = await fetch(`https://playground.4geeks.com/contact/agendas/tomasarancibia`);
          const contactData = await response.json();
          setStore({ contacts: contactData["contacts"] });
        } catch (error) {
          console.error("An error occurred while loading Feed:", error);
        }
      },
      deleteContact: async (id) => {
        try {
          const response = await fetch(`https://playground.4geeks.com/contact/agendas/tomasarancibia/contacts/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.ok) {
            console.log("Contact deleted successfully!");
            getActions().loadContacts();
          } else {
            console.log("Error deleting post.");
          }
        } catch (error) {
          console.error("An error occurred while deleting post:", error);
        }
      },
      editContact: async (id, contactData) => {
        try {
          const response = await fetch(`https://playground.4geeks.com/contact/agendas/tomasarancibia/contacts/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(contactData),
          });
          if (response.ok) {
            console.log("Contact edited successfully!");
            getActions().loadContacts();
          } else {
            console.log("Error editing post.");
          }
        } catch (error) {
          console.error("An error occurred while editing post:", error);
        }
      },
    }
  };
};

export default getState;
