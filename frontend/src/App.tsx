import Profile from "./components/Profile";
import "./app.css";

export default function App() {
  const name = "米山賢伸";

  return (
    <div className="container">
    <h1 className="main">{name}のホームページ</h1>

    <Profile />
    </div>
  );
}
