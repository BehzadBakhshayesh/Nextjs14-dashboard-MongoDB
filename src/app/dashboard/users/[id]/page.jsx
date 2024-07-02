import styles from "@/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="John Doe" />
          <label>Email</label>
          <input type="email" name="email" placeholder="JohnDoe@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+12345678" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="New" />
          <label>iS Admin</label>
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
          <button>update</button>
        </form>
      </div>
    </div>
  );
};

export default Page;
