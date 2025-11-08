import React, { useEffect, useState } from "react";
import Notification from "./Notification";
import axios from "axios";
import "./AboutUs.css";

const AboutUs = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [editingContact, setEditingContact] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // ✅ Show Notification
  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // ✅ Fetch all contacts
  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/contact");
        setContacts(res.data);
      } catch (err) {
        showNotification("Failed to load contacts", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // ✅ DELETE contact by ID using axios
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        const res = await axios.delete(`http://localhost:5000/contact/${id}`);
        if (res.status === 200) {
          setContacts(contacts.filter((contact) => contact.id !== id));
          showNotification("Contact deleted successfully!", "success");
        } else {
          showNotification("Failed to delete contact", "error");
        }
      } catch (err) {
        showNotification("Error deleting contact", "error");
      }
    }
  };

  // ✅ Load contact for editing
  const handleEdit = (contact) => {
    setEditingContact(contact.id);
    setFormData({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      subject: contact.subject,
      message: contact.message,
    });
  };

  // ✅ Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Update contact by ID using axios (PUT request)
  const handleUpdate = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/contact/${editingContact}`,formData);

      if (res.status === 200) {
        setContacts((prevContacts) =>
          prevContacts.map((contact) =>
            contact.id === editingContact ? { ...contact, ...formData } : contact
          )
        );
        showNotification("Contact updated successfully!", "success");
        setEditingContact(null);
      } else {
        showNotification("Failed to update contact", "error");
      }
    } catch (err) {
      showNotification("Error updating contact", "error");
    }
  };

  return (
    <div className="about-container">
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      <h2>Previous Contacts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="about-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.subject}</td>
                <td>{contact.message}</td>
                <td>{new Date(contact.created_at).toLocaleString()}</td>
                <td>
                  <button onClick={() => handleEdit(contact)}>Edit</button>
                  <button onClick={() => handleDelete(contact.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {editingContact && (
        <div className="edit-form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className="btn-group">
              <button type="submit">Save</button>
              <button type="button" onClick={() => setEditingContact(null)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
