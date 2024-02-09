import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        Traditional Coffee
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Título</label>
          <input type="text" name="title" placeholder="John Doe" />
          <label>Preço</label>
          <input type="number" name="price" placeholder="$24" />
          <label>Estoque</label>
          <input type="password" name="password" />
          <label>Cor</label>
          <input type="text" name="color" placeholder="Azul" />
          <label>Tamanho</label>
          <input type="text" name="stock" placeholder="Médio" />
          <label>Categoria</label>
          <select name="cat" id="cat">
            <option value="Latte Coffee">Latte Coffee</option>
            <option value="Mocka Coffee">Mocka Coffee</option>
          </select>
          <label>Descrição</label>
          <textarea name="desc" id="desc"rows="10" placeholder="Descrição"></textarea>
          <button>Atualizar</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
