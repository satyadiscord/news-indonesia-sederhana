import ForIndonesia from "../forIndonesia/forIndonesia";
import ForDunia from "../forDunia/forDunia";
import ForViral from "../forViral/forViral";
import ForMedia from "../forMedia/forMedia";
import ForTiktok from "../forTiktok/forTiktok";
import TitleComponent from "../../../component/titleComponent";

export default function BerandaDesign() {
  return (
    <>
      <div className="w-[84%] mx-auto mt-10">
        <div className="md:flex md:justify-center md:items-start md:gap-12">
          <div className="w-full static">
            {/* konten pertama */}
            <div className="w-full h-[200px] sm:h-[250px] xl:h-[320px]">
              <img
                src="../../../../img/beritaNews1.jpeg"
                alt="News Indonesia"
                className="w-full h-full bg-cover bg-center object-cover"
              />
            </div>
            <h5 className="font-medium text-start text-lg mt-2 text-wrap md:text-xl">
              Seorang anak duduk di tengah reruntuhan bangunan yang hancur
              akibat serangan Israel di kamp pengungsi Nusairat, di Jalur Gaza
              tengah.
            </h5>
            <p className="text-base font-semibold text-slate-400 mt-4">
              9 Juli 2024
            </p>
            {/* konten kedua */}
            <a
              href="https://news.detik.com/foto-news/d-7434102/pemeran-foto-kilas-perjalanan-dpr-2019-2024"
              className="hidden md:block hover:underline mt-20"
            >
              <div className="w-full hidden md:block h-[200px] sm:h-[250px] xl:h-[320px]">
                <img
                  src="../../../../img/beritaNews5.jpeg"
                  alt="News Indonesia"
                  className="w-full h-full bg-cover bg-center object-cover"
                />
              </div>
              <h5 className="font-medium hidden md:block text-start text-lg mt-2 text-wrap md:text-xl">
                Pemeran Foto Kilas Perjalanan DPR 2019-2024
              </h5>
              <p className="text-base font-semibold hidden md:block text-slate-400 mt-4">
                9 Juli 2024
              </p>
            </a>
          </div>
          <div className="w-full mt-20 md:mt-0">
            {/* kontent pertama section */}
            <div className="w-full h-[100px] sm:h-[150px] xl:h-[230px]">
              <img
                src="../../../../img/beritaNews2.jpeg"
                alt="News Indonesia"
                className="w-full h-full bg-cover bg-center object-cover"
              />
            </div>
            <h5 className="font-medium text-start text-base mt-2 text-wrap md:text-lg">
              Penampakan kerusakan jalanan akibat tanah longsor di Daegu, Korea
              Selatan
            </h5>
            <p className="text-base font-semibold text-slate-400 mt-4 md:mb-10">
              10 Juli 2024
            </p>
            {/* kontent kedua */}
            <div className="w-full h-[100px] sm:h-[150px] xl:h-[230px] mt-20 md:mt-0">
              <img
                src="../../../../img/beritaNews3.jpeg"
                alt="News Indonesia"
                className="w-full h-full bg-cover bg-center object-cover"
              />
            </div>
            <h5 className="font-medium text-start text-base mt-2 text-wrap md:text-lg">
              Sejumlah warga melintasi genangan air untuk mengungsi ke tempat
              yang lebih tinggi di Desa Hutadaa, Kecamatan Telaga jaya,
              Kabupaten Gorontalo, Gorontalo
            </h5>
            <p className="text-base font-semibold text-slate-400 mt-4 md:mb-10">
              10 Juli 2024
            </p>
            {/* konten ketiga */}
            <a
              href="https://news.detik.com/foto-news/d-7432242/penampakan-macet-panjang-di-tol-dalam-kota-cawang-arah-kuningan"
              className="hover:underline"
            >
              <div className="w-full h-[100px] sm:h-[150px] xl:h-[230px] mt-20 md:mt-0">
                <img
                  src="../../../../img/beritaNews4.jpeg"
                  alt="News Indonesia"
                  className="w-full h-full bg-cover bg-center object-cover"
                />
              </div>
              <h5 className="font-medium text-start text-base mt-2 text-wrap md:text-lg">
                Tol Dalam Kota dari Cawang, Jakarta Timur, arah Kuningan,
                Jakarta Selatan, terpantau macet pada hari Rabu 10/7/2024 pukul
                15.00 WIB.
              </h5>
              <p className="text-base font-semibold text-slate-400 mt-4">
                10 Juli 2024
              </p>
            </a>
          </div>
        </div>
        {/* konten indonesia */}
        <div className="w-full mt-20">
          <TitleComponent title="Indonesia" />
          <ForIndonesia />
          <div className="flex justify-center items-center mt-3">
            <a
              href="/indonesia"
              className="px-7 py-2 bg-blues hover:bg-blue-600 hover:drop-shadow-md rounded-full text-white"
            >
              Lihat Lebih
            </a>
          </div>
        </div>
        {/* konten Dunia */}
        <div className="w-full mt-20">
          <TitleComponent title="Dunia" />
          <ForDunia />
          <div className="flex justify-center items-center mt-3">
            <a
              href="/dunia"
              className="px-7 py-2 bg-blues hover:bg-blue-600 hover:drop-shadow-md rounded-full text-white"
            >
              Lihat Lebih
            </a>
          </div>
        </div>
        {/* konten viral */}
        <div className="w-full mt-20">
          <TitleComponent title="Viral" />
          <ForViral />
          <div className="flex justify-center items-center mt-3">
            <a
              href="/viral"
              className="px-7 py-2 bg-blues hover:bg-blue-600 hover:drop-shadow-md rounded-full text-white"
            >
              Lihat Lebih
            </a>
          </div>
        </div>
        {/* konten media */}
        <div className="w-full mt-20">
          <TitleComponent title="Media" />
          <ForMedia />
          <div className="flex justify-center items-center mt-3">
            <a
              href="/media"
              className="px-7 py-2 bg-blues hover:bg-blue-600 hover:drop-shadow-md rounded-full text-white"
            >
              Lihat Lebih
            </a>
          </div>
        </div>
        {/* konten tiktok */}
        <div className="w-full mt-20">
          <TitleComponent title="Tiktok" />
          <ForTiktok />
          <div className="flex justify-center items-center mt-3">
            <a
              href="/tiktok"
              className="px-7 py-2 bg-blues hover:bg-blue-600 hover:drop-shadow-md rounded-full text-white"
            >
              Lihat Lebih
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
