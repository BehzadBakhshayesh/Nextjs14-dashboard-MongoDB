import { updateProduct } from "@/lib/actions";
import { fetchProduct } from "@/lib/data";
import styles from "@/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const Page = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action={updateProduct}>
          <input type="hidden" name="id" value={product.id} />
          <label></label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input type="text" name="color" placeholder={product.color} />
          <label>Size</label>
          <input type="text" name="size" placeholder={product.size} />
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
