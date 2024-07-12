import newsImage from "../../../../img/news.jpg";

export default function DesignIndonesia({ url, src, author, title, date }) {
  return (
    <>
      <div className="w-full h-[1px] bg-slate-600 opacity-20 md:hidden"></div>
      <div className="block w-max-sm p-6 rounded-md">
        <a href={url} className="hover:underline">
          <div className="w-full h-[200px]">
            <img
              src={src ? src : newsImage}
              alt={author}
              className="w-full h-full bg-cover object-cover bg-center"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = newsImage;
              }}
            />
          </div>
          <h5 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="font-normal text-gray-700 dark:text-gray-400">{date}</p>
      </div>
    </>
  );
}
