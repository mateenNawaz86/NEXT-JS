"use client";

import React, { useState } from "react";
import { Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="hidden sm:block">
        <MenuComp />
      </div>
      <div className="block sm:hidden">
        <MenuOutlined
          onClick={() => setShowMenu(true)}
          style={{
            padding: "10px  0 0 20px",
            fontSize: "22px",
          }}
        />
      </div>
      <Drawer
        open={showMenu}
        onClose={() => setShowMenu(!showMenu)}
        closable={true}
      >
        <MenuComp isInline />
      </Drawer>
    </>
  );
};

function MenuComp({ isInline = false }) {
  return (
    <Menu mode={isInline ? "inline" : "horizontal"}>
      <Menu.Item key="home">
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link href="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="blogs">
        <Link href="/blogs">Blogs</Link>
      </Menu.Item>
      <Menu.Item key="services">
        <Link href="/services">Services</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Navbar;
