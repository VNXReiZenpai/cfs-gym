import { useEffect, useState } from "react";
import "./App.css";

const GYM_NAME = "CFS Gym";
const PHONE = "+918876258209";

const gallery = [
  "/images/cfs-gym-interior-01.jpg",
  "/images/cfs-gym-interior-02.jpg",
  "/images/cfs-gym-hero.jpg",
];

const programs = [
  {
    number: "01",
    title: "Strength Training",
    text: "Build strength with free weights and dedicated resistance training.",
    image: "/images/cfs-gym-interior-01.jpg",
  },
  {
    number: "02",
    title: "Cardio Training",
    text: "Improve endurance and fitness with dedicated cardio equipment.",
    image: "/images/cfs-gym-hero.jpg",
  },
  {
    number: "03",
    title: "CrossFit",
    text: "Train with functional, high-energy workouts designed to challenge you.",
    image: "/images/cfs-gym-interior-02.jpg",
  },
  {
    number: "04",
    title: "Personal Training",
    text: "Get focused guidance and training support around your fitness goals.",
    image: "/images/cfs-gym-interior-01.jpg",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div className="site">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <button
          className="logo"
          onClick={() => scrollTo("home")}
          aria-label="Go home"
        >
          CFS<span>Gym.</span>
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollTo("programs")}>
            Programs
          </button>

          <button onClick={() => scrollTo("about")}>
            About
          </button>

          <button onClick={() => scrollTo("gallery")}>
            Gallery
          </button>

          <button onClick={() => scrollTo("membership")}>
            Membership
          </button>
        </nav>

        <button
          className="glass-button nav-contact"
          onClick={() => scrollTo("contact")}
        >
          Contact Us <span className="arrow">↗</span>
        </button>

        <button
          className="hamburger"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

      </header>


      {/* ================= HERO ================= */}

      <main>

        <section className="hero" id="home">

          <div className="hero-image">
            <img
              src="/images/cfs-gym-hero.jpg"
              alt="CFS Gym"
            />
          </div>

          <div className="hero-shade" />

          <div className="hero-content">

            <div className="hero-label">
              <span>UNISEX FITNESS CLUB</span>
              <span>TINSUKIA • ASSAM</span>
            </div>

            <div className="hero-center">

              <div className="eyebrow">
                TRAIN • BUILD • EVOLVE
              </div>

              <h1>
                <span>TRAIN</span>
                <span>WITH <i>CFS.</i></span>
              </h1>

              <p className="hero-description">
                CFS Gym is a fitness destination in Tinsukia offering
                strength, cardio, functional training and personal
                training in a dedicated gym environment.
              </p>

              <div className="hero-actions">

                <button
                  className="glass-button"
                  onClick={() => scrollTo("programs")}
                >
                  Explore Programs
                  <span className="arrow">↗</span>
                </button>

                <button
                  className="text-button"
                  onClick={() => scrollTo("about")}
                >
                  Discover CFS Gym
                </button>

              </div>

            </div>


            <div className="hero-bottom">

              <div className="hero-stat">
                <strong>4.7<span>★</span></strong>
                <small>PUBLIC RATING</small>
              </div>

              <div className="hero-stat">
                <strong>5:30<span>AM</span></strong>
                <small>OPENING</small>
              </div>

              <div className="hero-stat">
                <strong>10<span>PM</span></strong>
                <small>EVENING CLOSE</small>
              </div>


              <div className="video-card glass-panel">

                <div className="video-thumb">

                  <img
                    src="/images/cfs-gym-interior-02.jpg"
                    alt="CFS Gym training area"
                  />

                  <span className="play">
                    ▶
                  </span>

                </div>

                <div>
                  <small>CFS GYM</small>
                  <strong>TRAIN WITH PURPOSE</strong>
                </div>

                <span className="arrow">
                  ↗
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* ================= TICKER ================= */}

        <div className="ticker">

          <div className="ticker-track">

            <span>CFS GYM</span>
            <b>✦</b>

            <span>STRENGTH • CARDIO • FITNESS</span>
            <b>✦</b>

            <span>TINSUKIA • ASSAM</span>
            <b>✦</b>

            <span>CFS GYM</span>
            <b>✦</b>

            <span>STRENGTH • CARDIO • FITNESS</span>
            <b>✦</b>

            <span>TINSUKIA • ASSAM</span>
            <b>✦</b>

          </div>

        </div>


        {/* ================= ABOUT ================= */}

        <section
          className="section about"
          id="about"
        >

          <div className="section-top">
            <span>01 — ABOUT CFS</span>
            <span>TINSUKIA • ASSAM</span>
          </div>


          <div className="about-grid">

            <div className="about-title reveal">

              <span className="section-mini">
                CFS GYM
              </span>

              <h2>
                MORE THAN
                <br />
                A <em>WORKOUT.</em>
              </h2>

            </div>


            <div className="about-copy reveal delay1">

              <p className="large">
                A dedicated fitness space in Tinsukia
                built around training, strength and
                consistent progress.
              </p>

              <p>
                CFS Gym is a unisex fitness centre located
                on GNB Road in Tinsukia, above Reliance Trends.
                The gym is listed for gym and fitness training,
                with cardio, free weights, weight machines
                and personal training options.
              </p>

              <button
                className="glass-button small-glass"
                onClick={() => scrollTo("contact")}
              >
                Visit CFS Gym
                <span className="arrow">↗</span>
              </button>

            </div>


            <div className="about-image reveal">

              <img
                src="/images/cfs-gym-interior-01.jpg"
                alt="CFS Gym interior"
              />

              <div className="floating-glass">

                <small>FITNESS CLUB</small>

                <strong>CFS GYM</strong>

                <span>
                  TINSUKIA, ASSAM
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* ================= PROGRAMS ================= */}

        <section
          className="section programs"
          id="programs"
        >

          <div className="section-heading reveal">

            <div>

              <span>02 — TRAINING</span>

              <h2>
                FIND YOUR
                <br />
                <em>PACE.</em>
              </h2>

            </div>

            <p>
              Train across strength, cardio and functional
              fitness while working toward your personal goals.
            </p>

          </div>


          <div className="program-grid">

            {programs.map((program) => (

              <article
                className="program-card reveal"
                key={program.number}
              >

                <img
                  src={program.image}
                  alt={program.title}
                />

                <div className="program-overlay" />

                <span className="program-number">
                  {program.number}
                </span>


                <div className="program-bottom glass-panel">

                  <div>

                    <small>
                      CFS TRAINING
                    </small>

                    <h3>
                      {program.title}
                    </h3>

                  </div>

                  <span className="circle-arrow">
                    ↗
                  </span>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* ================= WHY CFS ================= */}

        <section className="section why">

          <div className="why-title reveal">

            <span>
              03 — WHY CFS GYM
            </span>

            <h2>
              TRAIN.
              <br />
              <em>GET STRONGER.</em>
            </h2>

            <p>
              A fitness environment designed for people
              who want to train consistently and improve
              their overall fitness.
            </p>

          </div>


          <div className="why-grid">

            <div className="feature glass-panel reveal">

              <span>01</span>

              <div className="feature-icon">
                ✦
              </div>

              <h3>
                Strength Equipment
              </h3>

              <p>
                Free weights and weight machines for
                focused strength training.
              </p>

            </div>


            <div className="feature glass-panel reveal delay1">

              <span>02</span>

              <div className="feature-icon">
                ↗
              </div>

              <h3>
                Cardio Zone
              </h3>

              <p>
                Dedicated cardio equipment for endurance
                and conditioning sessions.
              </p>

            </div>


            <div className="feature glass-panel reveal delay2">

              <span>03</span>

              <div className="feature-icon">
                ◌
              </div>

              <h3>
                Personal Training
              </h3>

              <p>
                Personal training support is available
                for members looking for focused guidance.
              </p>

            </div>


            <div className="feature glass-panel reveal delay3">

              <span>04</span>

              <div className="feature-icon">
                +
              </div>

              <h3>
                Comfortable Facility
              </h3>

              <p>
                Listed facilities include air conditioning,
                lockers, parking and Wi-Fi.
              </p>

            </div>

          </div>

        </section>


        {/* ================= MEMBERSHIP ================= */}

        <section
          className="section pricing"
          id="membership"
        >

          <div className="section-heading reveal">

            <div>

              <span>
                04 — MEMBERSHIP
              </span>

              <h2>
                YOUR NEXT
                <br />
                <em>SESSION.</em>
              </h2>

            </div>

            <p>
              Membership pricing is not displayed here.
              Contact CFS Gym directly for the current
              membership options and availability.
            </p>

          </div>


          <div className="plans">


            <div className="plan glass-panel reveal">

              <div className="plan-head">

                <span>
                  MEMBERSHIP
                </span>

                <strong>
                  01
                </strong>

              </div>


              <div className="price">
                <strong>
                  ASK
                </strong>
              </div>


              <p>
                Contact CFS Gym for the latest
                membership plans and pricing.
              </p>


              <ul>

                <li>
                  <span>✓</span>
                  Gym access
                </li>

                <li>
                  <span>✓</span>
                  Fitness training
                </li>

                <li>
                  <span>✓</span>
                  Current plan options
                </li>

                <li>
                  <span>✓</span>
                  Direct enquiry
                </li>

              </ul>


              <a
                className="glass-button plan-button"
                href={`tel:${PHONE}`}
              >
                Enquire Now
                <span className="arrow">
                  ↗
                </span>
              </a>

            </div>


            <div
              className="plan glass-panel popular reveal delay1"
            >

              <span className="popular-label">
                CONTACT
              </span>


              <div className="plan-head">

                <span>
                  CFS GYM
                </span>

                <strong>
                  02
                </strong>

              </div>


              <div className="price">

                <strong>
                  CALL
                </strong>

              </div>


              <p>
                Speak directly with the gym about
                membership, facilities and timings.
              </p>


              <ul>

                <li>
                  <span>✓</span>
                  Membership information
                </li>

                <li>
                  <span>✓</span>
                  Timings confirmation
                </li>

                <li>
                  <span>✓</span>
                  Facility enquiry
                </li>

                <li>
                  <span>✓</span>
                  Direct contact
                </li>

              </ul>


              <a
                className="glass-button plan-button"
                href={`tel:${PHONE}`}
              >
                Call CFS Gym
                <span className="arrow">
                  ↗
                </span>
              </a>

            </div>


            <div className="plan glass-panel reveal delay2">

              <div className="plan-head">

                <span>
                  LOCATION
                </span>

                <strong>
                  03
                </strong>

              </div>


              <div className="price">

                <strong>
                  GO
                </strong>

              </div>


              <p>
                Find CFS Gym on GNB Road in Tinsukia,
                above Reliance Trends.
              </p>


              <ul>

                <li>
                  <span>✓</span>
                  GNB Road
                </li>

                <li>
                  <span>✓</span>
                  Tinsukia, Assam
                </li>

                <li>
                  <span>✓</span>
                  Above Reliance Trends
                </li>

                <li>
                  <span>✓</span>
                  Easy-to-find location
                </li>

              </ul>


              <a
                className="glass-button plan-button"
                href="https://www.google.com/maps/search/?api=1&query=CFS+Gym+Tinsukia+Assam"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
                <span className="arrow">
                  ↗
                </span>
              </a>

            </div>

          </div>

        </section>


        {/* ================= GALLERY ================= */}

        <section
          className="section gallery"
          id="gallery"
        >

          <div className="section-heading reveal">

            <div>

              <span>
                05 — GALLERY
              </span>

              <h2>
                INSIDE THE
                <br />
                <em>GRIND.</em>
              </h2>

            </div>

            <p>
              Take a look inside the CFS Gym training
              environment and equipment.
            </p>

          </div>


          <div className="gallery-grid">

            {gallery.map((image, index) => (

              <div
                className={`gallery-item ${
                  index === 0 ? "large" : ""
                } reveal`}
                key={image}
              >

                <img
                  src={image}
                  alt={`CFS Gym training ${index + 1}`}
                />

              </div>

            ))}

          </div>

        </section>


        {/* ================= CONTACT ================= */}

        <section
          className="contact"
          id="contact"
        >

          <div className="contact-image">

            <img
              src="/images/cfs-gym-hero.jpg"
              alt="CFS Gym"
            />

          </div>


          <div className="contact-overlay" />


          <div className="contact-content">

            <span>
              READY TO TRAIN?
            </span>

            <h2>
              COME TRAIN
              <br />
              <em>AT CFS.</em>
            </h2>


            <p>
              CFS Gym
              <br />
              Shanti Super Complex, GNB Road
              <br />
              Above Reliance Trends, Tinsukia, Assam
              <br />
              786125
            </p>


            <a
              className="glass-button"
              href={`tel:${PHONE}`}
            >
              Call +91 88762 58209
              <span className="arrow">
                ↗
              </span>
            </a>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-top">

          <div>

            <div className="footer-logo">
              CFS<span>Gym.</span>
            </div>

            <p>
              Train. Build. Evolve.
              <br />
              Tinsukia, Assam.
            </p>

          </div>


          <div className="footer-column">

            <span>
              NAVIGATION
            </span>

            <button onClick={() => scrollTo("home")}>
              Home
            </button>

            <button onClick={() => scrollTo("about")}>
              About
            </button>

            <button onClick={() => scrollTo("programs")}>
              Programs
            </button>

            <button onClick={() => scrollTo("gallery")}>
              Gallery
            </button>

          </div>


          <div className="footer-column">

            <span>
              VISIT
            </span>

            <p>
              GNB Road
            </p>

            <p>
              Above Reliance Trends
            </p>

            <p>
              Tinsukia, Assam
            </p>

          </div>


          <div className="footer-column">

            <span>
              CONTACT
            </span>

            <a href={`tel:${PHONE}`}>
              +91 88762 58209
            </a>

            <p>
              Monday — Saturday
            </p>

            <p>
              Sunday — Closed
            </p>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 CFS GYM
          </span>

          <span>
            TRAIN • BUILD • EVOLVE
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;