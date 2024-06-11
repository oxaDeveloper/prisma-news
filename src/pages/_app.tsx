import { Role } from "@prisma/client";
import axios from "axios";
import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { useEffect, useState } from "react";
import Navbar from "~/components/Navbar";
import NewUserModal from "~/components/NewUserModal";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const [editPost, setEditPost] = useState(false);
  const [nameOfNewUser, setNameOfNewUser] = useState("");
  const [emailOfNewUser, setEmailOfNewUser] = useState("");
  const [addNewAccount, setAddNewAccount] = useState(false);
  const [users, setUsers] = useState([]);

  const addUser = async () => {
    await axios.post("/api/user", {
      name: nameOfNewUser,
      email: emailOfNewUser,
    });

    await fetchUsers();
  };

  const checkAdmin = () => {
    const admin = users.find((dbUser: { id: string }) => dbUser.id === user);

    if (admin?.role === "ADMIN") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    checkAdmin();
  });

  const fetchUsers = async () => {
    await axios.get("/api/user").then((res) => {
      setUsers(res.data);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className={GeistSans.className}>
      <Navbar
        users={users}
        setAddNewAccount={setAddNewAccount}
        user={user}
        setUser={setUser}
      />

      {addNewAccount && (
        <NewUserModal
          nameOfNewUser={nameOfNewUser}
          setNameOfNewUser={setNameOfNewUser}
          emailOfNewUser={emailOfNewUser}
          setEmailOfNewUser={setEmailOfNewUser}
          setAddNewAccount={setAddNewAccount}
          addUser={addUser}
        />
      )}

      <Component
        {...pageProps}
        isAdmin={isAdmin}
        editPost={editPost}
        setEditPost={setEditPost}
        user={user}
      />
    </main>
  );
};

export default MyApp;
