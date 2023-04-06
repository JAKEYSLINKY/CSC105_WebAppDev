function Home({userLogin, setUserlogin}) {
	const handleLogin = () => setUserlogin(true);
	let loginButton;

	if (!userLogin) {
	  loginButton = <button className="buttonLogin" onClick={handleLogin}>Login</button>;
	}
	return (
	  <div>
		<h1>Yo bro it's Homepage</h1>
		{loginButton}
	  </div>
	);
  }

  export default Home;
