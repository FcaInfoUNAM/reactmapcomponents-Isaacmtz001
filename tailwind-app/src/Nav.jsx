// Este componente genera navegación dinámica con Tailwind usando un map
const navigation = [
  { title: "Inicio", href: "#", available: true },
  { title: "Productos", href: "#productos", available: false },
  { title: "Contacto", href: "#contacto", available: true },
];

function Nav() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 p-4">
      <div className="container mx-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {navigation.map((e, i) => (
            <li key={i}>
              <a
                href={e.href}
                className={
                  e.available
                    ? "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    : "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                {e.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
