import logoImg from "../assets/logo.jpg";

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="A form and a pencil" />
      <h1>Forms</h1>
    </header>
  );
}
