import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Username" name="username" required />
        <input type="email" placeholder="E-mail" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="Telefone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>
            É Admin?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>
            É Ativo?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Endereço"
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default AddUserPage;