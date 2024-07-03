"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import styles from "./pagination.module.css";

const Pagination = ({ count }) => {
  const pathName = usePathname();
  const serchParams = useSearchParams();
  const { replace } = useRouter();

  const page = serchParams.get("page") ?? 1;

  const params = new URLSearchParams(serchParams);
  const ITEM_PER_PAGE = 2;
  params.set("page", 1);

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathName}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        onClick={() => handleChangePage("prev")}
        className={styles.button}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        onClick={() => handleChangePage("next")}
        className={styles.button}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
