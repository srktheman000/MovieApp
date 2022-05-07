import Header from "../Header/Header";
import "./Lauout.css";

function Layout(props) {
  return (
    <div className="background">
      <Header />
      <div>{props.children}</div>
    </div>
  );
}

export default Layout;
