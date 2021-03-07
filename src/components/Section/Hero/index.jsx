import { Search, HeroCard } from "components";

const Hero = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center hero">
      <p className="text-center hero-main-text">
        Informasi Seputar Kampus
        <span className="ml-2 font-weight-bold">Paling Update</span>
      </p>
      <p className="text-center hero-sub-text">
        Kami menyediakan segala informasi tentang dunia perkuliahan yang bisa
        anda akses melalui aplikasi Kampus Indonesia
      </p>
      <Search />
      <HeroCard />
    </div>
  );
};

export default Hero;
