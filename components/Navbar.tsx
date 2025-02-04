import React from "react";
import { Button } from "./ui/button";
import { Map } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

function Navbar() {
  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-between border-b-2 px-4 py-3 items-center">
      {/* Logo Section */}
      <Link href="/" prefetch={true}>
        <div className="flex gap-2 items-center">
          <Map size={28} className="sm:size-33" /> {/* Mobile me chhota */}
          <h1 className="font-bold text-black dark:text-white text-xl sm:text-3xl cursor-pointer">
            WhatBytes
          </h1>
        </div>
      </Link>

      {/* Right Section */}
      <div className="flex gap-2 sm:gap-4 items-center">
        <ModeToggle />

        <Button
          variant="outline"
          className="flex items-center space-x-2 px-2 py-1 sm:px-3 sm:py-2"
        >
          <Avatar className="w-6 h-6 sm:w-7 sm:h-7">
            {" "}
            {/* Avatar Chhota Mobile me */}
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>RS</AvatarFallback>
          </Avatar>
          <span className="font-extrabold text-sm sm:text-lg">
            Rahil Siddique
          </span>{" "}
          {/* Mobile pe text size chhota */}
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
