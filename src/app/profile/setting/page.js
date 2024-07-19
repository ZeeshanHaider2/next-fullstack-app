"use client";

import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const ProfileSetting = () => {
  // const pathName = usePathname();
  // console.log("pathName from client component:", pathName);

  const searchParams = useSearchParams();
  console.log(
    "searchParams from client component:",
    searchParams.get("search")
  );
  return <div>ProfileSetting</div>;
};

export default ProfileSetting;
