import styles from "./search.module.css";
import { MdDashboard } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <MdDashboard />
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  );
};

export default Search;
