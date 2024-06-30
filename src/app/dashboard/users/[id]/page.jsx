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
        <label>Username</label>
        <input type="text" name="username" placeholder="John Doe" />
        <label>Email</label>
        <input type="email" name="email" placeholder="JohnDoe@gmail.com" />
        <label>Password</label>
        <input type="password" name="password" placeholder="John Doe" />
        <label>Phone</label>
        <input type="text" name="phone" placeholder="+12345678" />
        <label>Username</label>
        <textarea type="text" name="username" placeholder="John Doe" />
      </div>
    </div>
  );
};

export default Page;
