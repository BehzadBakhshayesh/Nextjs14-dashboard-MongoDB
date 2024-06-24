import React from "react";
import styles from "./sidebar.module.css";
import { MdDashboard, Md10Mp, MdAddLocation, MdLogout } from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

const menuTemes = [
  {
    title: "pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <Md10Mp />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdAddLocation />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAddLocation />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <Md10Mp />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdAddLocation />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdDashboard />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <Md10Mp />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <Md10Mp />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdAddLocation />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdDashboard />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <Md10Mp />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src="/avatar.png"
          alt=""
          width={50}
          height={50}
          className={styles.userImage}
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>John Joe</span>
          <span className={styles.userTitle}>Adminastrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuTemes.map((cat) => {
          return (
            <li key={cat.title}>
              <span className={styles.cat}>{cat.title}</span>
              {cat.list.map((item) => (
                <MenuLink item={item} key={item.title} />
              ))}
            </li>
          );
        })}
      </ul>
      <button className={styles.logout}>
        <MdLogout color="#fff" />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
