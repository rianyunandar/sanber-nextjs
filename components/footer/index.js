import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 fixed bottom-0 w-full z-10">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <a href="/">
              <Image src="/next.svg" alt="Logo" width={60} height={60} />
            </a>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
