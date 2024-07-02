import styles from "@/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="John Doe" />
          <label>Price</label>
          <input type="number" name="price" placeholder="JohnDoe@gmail.com" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="23" />
          <label>Color</label>
          <input type="text" name="color" placeholder="red" />
          <label>Size</label>
          <input type="text" name="size" placeholder="" />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="general">chose a categori</option>
            <option value="kitchen">kitchen</option>
            <option value="phone">phone</option>
            <option value="computer">computer</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="16"
            placeholder="Description"
          ></textarea>
          <button>update</button>
        </form>
      </div>
    </div>
  );
};

export default Page;
