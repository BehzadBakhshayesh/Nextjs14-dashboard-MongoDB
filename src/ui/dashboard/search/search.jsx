"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import styles from "./search.module.css";
import { MdDashboard } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  const pathName = usePathname();
  const serchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(serchParams);
    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathName}?${params}`);
  }, 300);

  return (
    <div className={styles.container}>
      <MdDashboard />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
