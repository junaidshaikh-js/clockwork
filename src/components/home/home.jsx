import { Link } from "react-router-dom";
import HomeSvg from "../../assets/HomeSvg.svg";
import { useTitle } from "../../hooks";

export function Home() {
  useTitle("Home | Clockwork");

  return (
    <main className="home-main p-1 mt-2">
      <figure>
        <img src={HomeSvg} alt="" />
      </figure>

      <div className="home-main--body">
        <section className="mt-2">
          <p className="hero-text">
            <span className="primary-text txt-semibold">Clockwork</span>{" "}
            combines Pomodoro Timer with Task Management, it is a app that will
            motivate you to stay focused and get things done.
          </p>
        </section>

        <section>
          <Link to="/task">
            <button className="btn btn-primary txt-semibold">GO TO TASK</button>
          </Link>
        </section>
      </div>
    </main>
  );
}
