export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1>L&L Performace</h1>
      <h3>Login</h3>
      <form>
        <div>
          <label>Email</label>
          <input type="email"></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password"></input>
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </main>
  );
}
