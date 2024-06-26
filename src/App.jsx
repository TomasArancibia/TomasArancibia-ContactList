import ContactList from './views/ContactList'
import NewContactForm from './views/NewContactForm'
import EditContactForm from './views/EditContactForm'
import injectContext from "./store/appContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/new_contact/" element={<NewContactForm />} />
          <Route path="/edit_contact/:id" element={<EditContactForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default injectContext(App);
