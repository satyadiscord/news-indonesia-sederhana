export default function Footer() {
  return (
    <>
      <footer className="bg-blues dark:bg-gray-800 mt-28">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-100 sm:text-center dark:text-gray-200">
            © 2024{" "}
            <a href="/" className="hover:underline">
              News Indonesia
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-100 dark:text-gray-200 sm:mt-0">
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">
                Beranda
              </a>
            </li>
            <li>
              <a href="/indonesia" className="hover:underline me-4 md:me-6">
                Indonesia
              </a>
            </li>
            <li>
              <a href="/dunia" className="hover:underline me-4 md:me-6">
                Dunia
              </a>
            </li>
            <li>
              <a href="/viral" className="hover:underline me-4 md:me-6">
                Viral
              </a>
            </li>
            <li>
              <a href="/media" className="hover:underline me-4 md:me-6">
                Media
              </a>
            </li>
            <li>
              <a href="/tiktok" className="hover:underline me-4 md:me-6">
                Tiktok
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
