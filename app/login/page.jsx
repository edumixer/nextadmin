import styles from "@/app/ui/login/login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Order Swift Login</h1>
        <input type="text" placeholder="Usuário" name="username" />
        <input type="password" placeholder="Senha" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
