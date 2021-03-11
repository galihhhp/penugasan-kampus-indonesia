import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BlogDetail = () => {
  let location = useLocation();

  useEffect(() => (document.title = "Blog"));

  const { title, time, readingTime } = location.state;

  return (
    <div className="container blog-detail mb-5 ">
      <div className="row my-5 d-flex flex-column ml-4">
        <h1>{title}</h1>
        <p className="m-0">Waktu membaca {readingTime} menit</p>
        <p className="m-0">{time}</p>
        <p>
          Ditulis oleh <span className="font-weight-bold">Admin</span>
        </p>
        <hr className="border-dark" />
      </div>
      <div className="row d-flex flex-column blog-detail-content ml-4">
        <p>
          Setiap orang memang dianjurkan untuk berpikir positif. Sebab, pikiran
          yang positif akan mempengaruhi kesehatan fisik dan juga mental
          seseorang. Namun sayangnya, untuk menerapkan pikiran yang positif
          tidak semudah mengatakannya. Jarang sekali orang yang bisa menerapkan
          pikiran positif dengan baik. Apakah kamu juga termasuk orang yang
          sulit untuk menerapkan pikiran positif?
        </p>
        <p>
          Agar bisa membiasakan diri terhadap sesuatu, kamu harus melatihnya
          secara berulang-ulang. Metode ini pun termasuk dalam menerapkan
          pikiran yang positif. Nah, berikut ini Pintaria punya 5 tips yang
          dapat membantumu melatih otak agar bisa berpikir lebih positif.
          Penasaran? Yuk langsung simak dan terapkan ke-5 tipsnya berikut ini!
        </p>
        <h5>Latih Bawah Sadar</h5>
        <p>
          Melatih bawah sadarmu adalah cara yang cukup ampuh untuk membiasakan
          diri berpikir positif. Bagaimana caranya? Salah satau caranya adalah
          kamu bisa melakukan hypnotherapy. Tapi selain itu, kamu juga bisa
          melakukan meditasi. Tenangkan dan rilekskan pikiranmu sejenak lalu
          tanamkan pikiran-pikiran positif dalam otakmu. Sebelum tidur, kamu
          juga bisa melakukan self-talk alias berbicara pada dirimu sendiri.
          Ucapkanlah kata-kata positif pada dirimu sendiri. Dengan melakukan hal
          ini, otakmu pun akan semakin terlatih untuk berpikir positif.
        </p>
        <h5>Ambil Tanggung Jawab Atas Tindakanmu</h5>
        <p>
          Manusia memang tidak pernah luput dari kesalahan. Tapi sayangnya,
          tidak banyak orang yang mau mengambil tanggung jawab atas tindakan
          yang telah diperbuat. Masih banyak orang yang justru tidak menerima
          kesalahannya dan justru menyalahkan orang lain. Cara kedua untuk
          melatih pikiran positif, sebaiknya kamu jangan melakukan hal ini ya,
          Pintarian. Bertindak sebagai korban justru akan membuatmu melepas
          tanggung jawab. Ketika kamu melakukan kesalahan, terimalah dan akui
          perbuatanmu. Apapun risikonya, kamu harus menghadapi dan bertanggung
          jawab atas kesalahanmu. Selain itu, koreksi dirimu dan perbaiki
          kesalahan yang sudah kamu buat. Nah, ketika kamu bisa mengoreksi
          dirimu, hal ini dapat membantu otakmu untuk berpikir lebih positif.
        </p>
        <h5>Buat Daftar Syukur</h5>
        <p>
          Terkadang kita memang terlalu fokus berpikir negatif sampai lupa
          mensyukuri apa yang kita miliki. Mulai sekarang, cobalah untuk membuat
          daftar syukurmu. Sebab bersyukur juga termasuk salah satu cara paling
          mudah untuk melatih berpikir positif. Misalnya kamu bisa bersyukur
          masih diberi kesempatan untuk hidup oleh Tuhan, masih memiliki rezeki
          berupa makanan, dan lain sebagainya. Syukurilah apapun itu mulai dari
          hal yang kecil hingga besar. Dengan menulisnya, kamu bisa lebih
          mengingat hal-hal yang harus kamu syukuri dan otakmu pun akan terlatih
          untuk berpikir lebih positif.
        </p>
        <h5>Lakukan Hal-Hal Positif</h5>
        <p>
          Untuk melatih otak agar berpikir lebih positif, kamu juga harus
          melakukan hal-hal positif. Jangan terlalu fokus pada pikiran negatif
          dan meratapinya. Sibukkanlah dirimu dengan kegiatan-kegiatan yang
          bermanfaat. Misalnya kamu bisa membaca buku-buku motivasi. Selain itu,
          kamu juga bisa mendengarkan podcast maupun video yang dapat memotivasi
          kamu. Selain itu, cara terampuh untuk melatih otak menjadi lebih
          positif adalah dengan mendekatkan diri pada Tuhan dan membaca kitab
          suci.
        </p>
        <h5>Praktikkan Kebaikan Pada Diri Sendiri</h5>
        <p>
          Setiap orang pasti ingin dihargai dan diperhatikan. Namun, jangan
          hanya mengharap untuk mendapatkannya dari orang lain. Sebab kamu tidak
          akan bisa berpikir positif jika mengharapkan perhatian dan penghargaan
          dari orang lain. Nah, untuk melatih otak berpikir lebih positif,
          ingatlah bahwa kamu harus mencintai dirimu sendiri. Jadi,
          praktikkanlah kebaikan pada dirimu sendiri. Misalnya dengan merawat
          dan menjaga kesehatan sebagai penghargaan terhadap diri sendiri.
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
