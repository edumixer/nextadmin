import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
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
          <label>E-mail</label>
          <input type="text" name="email" placeholder="johndoe@gmail.com" />
          <label>Senha</label>
          <input type="password" name="password" />
          <label>Telefone</label>
          <input type="text" name="phone" placeholder="+55343928475" />
          <label>Endereço</label>
          <input type="text" name="address" placeholder="Curitiba, PR" />
          <label>É Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </select>
          <label>É Ativo?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </select>
          <button>Atualizar</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
