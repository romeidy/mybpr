import React from "react";
import Link from "next/link";
import useDarkMode from "@/hooks/useDarkMode";

import MainLogo from "@/assets/images/logo/mybpr.jpeg";
import LogoWhite from "@/assets/images/logo/mybpr.jpeg";
const MobileLogo = () => {
  const [isDark] = useDarkMode();
  return (
    <Link href="/analytics">
      <img src={isDark ? LogoWhite : MainLogo} alt="" />
    </Link>
  );
};

export default MobileLogo;
