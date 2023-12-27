import Image from "next/image";
export default function menu() {
  return (
    <nav className="mx-auto flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8">
      <a href="/">
        <Image src="/next.svg" alt="Logo" width={60} height={60} />
      </a>

      <div className="flex flex-1 items-center justify-between">
        <nav className="flex">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75"
                href="/"
              >
                {" "}
                Home{" "}
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75"
                href="/user"
              >
                {" "}
                user{" "}
              </a>
            </li>
            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75"
                href="/note"
              >
                {" "}
                Note{" "}
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center">
          <div className="flex">
            <a
              className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 m-2"
              href="/login"
            >
              Login / Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
