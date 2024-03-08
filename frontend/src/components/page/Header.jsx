import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between p-2 px-3 bg-[#baeaff]">
      <div>Logo</div>
      <div className="flex justify-between border border-black p-1 px-3 gap-2 rounded-lg shadow-sm shadow-black hover:bg-[#aee5fc]">
        <h1 className="border-r border-black p-2">Anywhere</h1>
        <h1 className="border-r border-black p-2">Anytime</h1>
        <div className="flex gap-3 p-2">
          <h1>Add Guests</h1>
          <div className="mt-1">
            <FaSearch />
          </div>
        </div>
      </div>
      <div className="border border-black hover:bg-[#aee5fc] rounded-lg p-2 px-2 shadow-sm shadow-black">
        <div className="flex gap-3 mt-1">
          <GiHamburgerMenu className="h-6 w-6" />
          <FaUserCircle className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

export default Header