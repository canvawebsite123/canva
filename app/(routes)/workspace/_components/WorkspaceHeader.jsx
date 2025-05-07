import { UserButton } from "@stackframe/stack";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function WorkspaceHeader() {
  return (
    <div className="p-2 px-5 flex justify-between items-center shadow-sm">
      <Link href="/workspace">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={100}
          height={100}
          className="w-[100px] h-[50px]"
        />
      </Link>
      <UserButton />
    </div>
  );
}

export default WorkspaceHeader;
