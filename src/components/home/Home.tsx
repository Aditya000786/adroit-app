import { Link } from "react-router-dom";
import logo from "../../logo.svg";

function Home(props: any) {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <main>
        <h2>Welcome In Adroit!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/order">Prepare new Order</Link>
      </nav>
    </>
  );
}
export default Home;
