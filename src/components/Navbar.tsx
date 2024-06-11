import Link from "next/link";
import React, { useState } from "react";
import AccountModal from "./AccountModal";
import Image from "next/image";
import { Role } from "@prisma/client";

interface Props {
  users: Array<string | Role>;
  setAddNewAccount: Function;
  user: string | null;
  setUser: Function;
}

const Navbar = ({ users, setAddNewAccount, user, setUser }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 h-16 w-full bg-white shadow">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
        <div className="text-2xl font-bold">
          <Link href="/">
            <p>Logo</p>
          </Link>
        </div>

        <div className="flex space-x-10">
          <Link href="/">
            <p className="text-gray-800 hover:underline">Home</p>
          </Link>
          <Link href="/account">
            <p className="text-gray-800 hover:underline">Account</p>
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <Link href="#" className="h-6 w-6">
            <Image
              src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
              alt="Search"
              width={1080}
              height={1080}
            />
          </Link>
          <Link href="#" className="h-6 w-6">
            <Image
              src="https://icon-library.com/images/download-apps-icon/download-apps-icon-2.jpg"
              alt="Apps"
              width={1080}
              height={1080}
            />
          </Link>
          <div
            className="h-6 w-6 cursor-pointer"
            onClick={() => setIsOpenModal((isOpenModal) => !isOpenModal)}
          >
            <Image
              src="https://cdn-icons-png.freepik.com/256/1144/1144760.png?semt=ais_hybrid"
              alt="Account"
              width={1080}
              height={1080}
            />
          </div>

          {isOpenModal && (
            <AccountModal
              users={users}
              setAddNewAccount={setAddNewAccount}
              currentUser={user}
              setUser={setUser}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
