import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Título" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Escolha uma Categoria</option>
          <option value="Mocka Coffee">Mocka Coffe</option>
          <option value="Espresso Coffee">Espresso Coffe</option>
          <option value="Arabica Coffee">Arabica Coffee</option>
        </select>
        <input type="number" placeholder="Preço" name="price" />
        <input type="number" placeholder="Estoque" name="stock" />
        <input type="text" placeholder="Cor" name="color" />
        <input type="text" placeholder="Tamanho" name="size" />
        <textarea
          name="desc"
          id="desc"
          rows="16"
          placeholder="Descrição"
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default AddProductPage;
