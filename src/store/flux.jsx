const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        contacts: [],
      },
      actions: {
        createPost: async (contactData) => {
          try {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/tomasarancibia", {
              method: "POST",
              headers: {
               "Content-Type": "application/json",
              },
              body: JSON.stringify(contactData),
            });
  
            if (response.ok) {
              const result = await response.json();
              console.log("Post created successfully!");
              getActions().loadFeed();
            } else {
              console.log("Error creating post.");
            }
          } catch (error) {
            console.error("An error occurred while creating post:", error);
          }
        },
  
        loadFeed: async () => {
          try {
            const response = await fetch("http://127.0.0.1:3000/feed");
            const postData = await response.json();
            setStore({ listOfPosts: postData });
          } catch (error) {
            console.error("An error occurred while loading Feed:", error);
          }
        },
      },
    };
  };
  
  export default getState;
  