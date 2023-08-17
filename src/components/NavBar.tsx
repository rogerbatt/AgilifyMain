export default function NavBar() {
    return (
      <nav className="flex justify-between py-5">
        <p className="text-red-500 text-3xl font-bold">Agilify</p>
        <ul className="flex space-x-6 text-lg text-teal-700">
          <li>Sobre Nós</li>
          <li>Preço</li>
          <li>Contato</li>
          <li className="text-red-500">Log in</li>
        </ul>
      </nav>
    )
  }
  