import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Buscar por um produto..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add Produto</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Título</td>
            <td>Descrição</td>
            <td>Preço</td>
            <td>Criado em</td>
            <td>Estoque</td>
            <td>Ação</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Coffee
              </div>
            </td>
            <td>Desc</td>
            <td>$12</td>
            <td>06.02.2024</td>
            <td>23</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    Visualizar
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Deletar
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
