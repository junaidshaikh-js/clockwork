import { Link } from "react-router-dom";

import Image404 from "../../assets/404.svg";

export function PageNotFound() {
  return (
    <main className="page-not-found-main">
      <figure>
        <img
          src={Image404}
          alt="Page not found Error"
          height="423"
          width="564"
        />
      </figure>
      <p className="secondary-text txt-center txt-rg">
        How did you get here?!{" "}
        <Link to="/task" className="primary-text">
          You should go back to work!
        </Link>
      </p>
    </main>
  );
}
