import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-white">
        <div className="container pt-4">
          <section className="mb-4"></section>
        </div>
        <hr></hr>

        {/* Github */}

        <div
          className="text-center text-dark p-3 d-flex w-100 align-items-center m-auto"
          id="footer"
        >
          © Kade Campbell 2022:
          <a
            href="https://github.com/KCampbell22"
            className="text-dark"
            role="button"
          >
            Github
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
