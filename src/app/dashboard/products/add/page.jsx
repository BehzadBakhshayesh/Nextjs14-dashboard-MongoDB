import styles from "@/ui/dashboard/products/addProduct/addProduct.module.css";

const Page = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="text" placeholder="phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={false}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Page;