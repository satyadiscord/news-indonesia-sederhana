import { useState, useEffect } from "react";
import MediaApi from "../apiMedia/mediaApi.jsx";
import TitleComponent from "../../../component/titleComponent";
import DesignMedia from "./designMedia.jsx";

export default function Media() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    // Adjust items per page based on screen size
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(24);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(16);
      } else {
        setItemsPerPage(10);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = articles.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="w-[84%] m-auto">
        <TitleComponent title="Media" />
        <div className="grid grid-cols-1 items-center justify-between md:grid-cols-2 lg:grid-cols-4 gap-2">
          <MediaApi setArticles={setArticles} />
          {currentArticles.map((dunia, index) => (
            <div key={index}>
              <DesignMedia
                url={dunia.url}
                src={dunia.urlToImage}
                author={dunia.author}
                title={dunia.title}
                date={dunia.publishedAt}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 flex-wrap">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 m-1 text-white bg-blue-500 rounded disabled:bg-gray-300"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 m-1 ${
                currentPage === index + 1
                  ? "bg-blue-700 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 m-1 text-white bg-blue-500 rounded disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
