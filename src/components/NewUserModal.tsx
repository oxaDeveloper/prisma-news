import React from "react";

interface Props {
  nameOfNewUser: string;
  setNameOfNewUser: Function;
  emailOfNewUser: string;
  setEmailOfNewUser: Function;
  setAddNewAccount: Function;
  addUser: Function;
}

const NewUserModal = ({
  nameOfNewUser,
  setNameOfNewUser,
  emailOfNewUser,
  setEmailOfNewUser,
  setAddNewAccount,
  addUser,
}: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-96 rounded bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl">Enter your details</h2>

        <div>
          <div className="mb-4">
            <h1 className="block text-gray-700">Name</h1>

            <input
              type="text"
              className="w-full rounded border px-3 py-2"
              value={nameOfNewUser}
              onChange={(e) => setNameOfNewUser(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <h1 className="block text-gray-700">Email</h1>
            <input
              type="email"
              className="w-full rounded border px-3 py-2"
              value={emailOfNewUser}
              onChange={(e) => setEmailOfNewUser(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setAddNewAccount(false)}
              className="mr-2 rounded bg-gray-500 px-4 py-2 text-white"
            >
              Cancel
            </button>

            <button
              type="button"
              className={`rounded px-4 py-2 text-white ${nameOfNewUser !== "" && emailOfNewUser !== "" ? "bg-blue-500" : "bg-blue-300"}`}
              disabled={nameOfNewUser === "" || emailOfNewUser === ""}
              onClick={() => {
                addUser();
                setAddNewAccount(false);
                setNameOfNewUser("");
                setEmailOfNewUser("");
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUserModal;
