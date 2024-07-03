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
          if (e.target.value) {
            params.set("q", e.target.value);
          } else {
            params.delete("q");
          }
          replace(`${pathName}?${params}`);
        }}
      />
    </div>
  );
};

export default Search;
