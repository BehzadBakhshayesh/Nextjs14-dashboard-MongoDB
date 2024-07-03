"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import styles from "./search.module.css";
import { MdDashboard } from "react-icons/md";

const Search = ({ placeholder }) => {
  const pathName = usePathname();
  const serchParams = useSearchParams();
  const { replace } = useRouter();

  return (
    <div className={styles.container}>
      <MdDashboard />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={(e) => {
          const params = new URLSearchParams(serchParams);
          params.set("q", e.target.value);
          replace(`${pathName}?${params}`);
        }}
      />
    </div>
  );
};

export default Search;
