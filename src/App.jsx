import { useEffect, useState } from "react";
import "./App.css";

const GYM_NAME = "The MuScle City";

const programs = [
  {
    number: "01",
    title: "Strength Training",
    text: "Build strength with focused training and a dedicated gym environment.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "02",
    title: "Conditioning",
    text: "Train your stamina, movement and overall physical performance.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "03",
    title: "Functional Fitness",
    text: "Movement-focused training designed around real-world performance.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "04",
    title: "Personal Training",
    text: "A more focused approach for members who want individual guidance.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=90",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=90",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=90",
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
          MuScle<span>City.</span>
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollTo("programs")}>Programs</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("gallery")}>Gallery</button>
          <button onClick={() => scrollTo("membership")}>Membership</button>
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
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=95"
              alt="Gym training floor"
            />
          </div>

          <div className="hero-shade" />

          <div className="hero-content">

            <div className="hero-label">
              <span>PREMIUM FITNESS CLUB</span>
              <span>TINSUKIA • ASSAM</span>
            </div>

            <div className="hero-center">

              <div className="eyebrow">
                TRAIN • PERFORM • EVOLVE
              </div>

              <h1>
                <span>TRAIN YOUR</span>
                <span>BODY <i>BETTER.</i></span>
              </h1>

              <p className="hero-description">
                A dedicated fitness destination in Tinsukia built around
                training, consistency and becoming stronger every day.
              </p>

              <div className="hero-actions">
                <button
                  className="glass-button"
                  onClick={() => scrollTo("programs")}
                >
                  Explore Programs <span className="arrow">↗</span>
                </button>

                <button
                  className="text-button"
                  onClick={() => scrollTo("about")}
                >
                  Discover {GYM_NAME}
                </button>
              </div>

            </div>

            <div className="hero-bottom">

              <div className="hero-stat">
                <strong>4.9<span>★</span></strong>
                <small>MEMBER RATING</small>
              </div>

              <div className="hero-stat">
                <strong>6<span>AM</span></strong>
                <small>OPENING TIME</small>
              </div>

              <div className="hero-stat">
                <strong>10<span>PM</span></strong>
                <small>CLOSING TIME</small>
              </div>

              <div className="video-card glass-panel">
                <div className="video-thumb">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=85"
                    alt="Fitness training"
                  />
                  <span className="play">▶</span>
                </div>

                <div>
                  <small>THE MuScle City</small>
                  <strong>TRAIN WITH PURPOSE</strong>
                </div>

                <span className="arrow">↗</span>
              </div>

            </div>

          </div>
        </section>

        {/* ================= TICKER ================= */}

        <div className="ticker">
          <div className="ticker-track">
            <span>THE MuScle CITY</span>
            <b>✦</b>
            <span>FITNESS • STRENGTH • PERFORMANCE</span>
            <b>✦</b>
            <span>TINSUKIA • ASSAM</span>
            <b>✦</b>
            <span>THE MuScle CITY</span>
            <b>✦</b>
            <span>FITNESS • STRENGTH • PERFORMANCE</span>
            <b>✦</b>
            <span>TINSUKIA • ASSAM</span>
            <b>✦</b>
          </div>
        </div>

        {/* ================= ABOUT ================= */}

        <section className="section about" id="about">

          <div className="section-top">
            <span>01 — ABOUT THE GYM</span>
            <span>HIJUGURI • TINSUKIA</span>
          </div>

          <div className="about-grid">

            <div className="about-title reveal">
              <span className="section-mini">THE MuScle CITY</span>

              <h2>
                MORE THAN
                <br />
                A <em>WORKOUT.</em>
              </h2>
            </div>

            <div className="about-copy reveal delay1">

              <p className="large">
                Your training space in Tinsukia for showing up,
                putting in the work and getting better.
              </p>

              <p>
                Located at Hijuguri on A.T. Road, The MuScle City
                provides a dedicated fitness environment for people
                who want to make training part of their routine.
              </p>

              <button
                className="glass-button small-glass"
                onClick={() => scrollTo("contact")}
              >
                Visit The MuScle City <span className="arrow">↗</span>
              </button>

            </div>

            <div className="about-image reveal">

              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=90"
                alt="Gym equipment"
              />

              <div className="floating-glass">
                <small>LOCAL FITNESS</small>
                <strong>TINSUKIA</strong>
                <span>ASSAM, INDIA</span>
              </div>

            </div>

          </div>
        </section>

        {/* ================= PROGRAMS ================= */}

        <section className="section programs" id="programs">

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
              Whether you are building strength, improving conditioning
              or looking for more focused guidance, make every session count.
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
                    <small>TRAINING</small>
                    <h3>{program.title}</h3>
                  </div>

                  <span className="circle-arrow">
                    ↗
                  </span>

                </div>
              </article>
            ))}

          </div>
        </section>

        {/* ================= WHY ================= */}

        <section className="section why">

          <div className="why-title reveal">

            <span>03 — WHY MuScle CITY</span>

            <h2>
              SHOW UP.
              <br />
              <em>PUT IN.</em>
            </h2>

            <p>
              Good training starts with consistency. The goal is simple:
              create a place you want to come back to.
            </p>

          </div>

          <div className="why-grid">

            <div className="feature glass-panel reveal">
              <span>01</span>
              <div className="feature-icon">✦</div>
              <h3>Focused Training</h3>
              <p>
                A dedicated space to keep your attention on your training.
              </p>
            </div>

            <div className="feature glass-panel reveal delay1">
              <span>02</span>
              <div className="feature-icon">↗</div>
              <h3>Performance Mindset</h3>
              <p>
                Build habits around consistency, effort and progress.
              </p>
            </div>

            <div className="feature glass-panel reveal delay2">
              <span>03</span>
              <div className="feature-icon">◌</div>
              <h3>Training Community</h3>
              <p>
                Train alongside people who are working toward their goals.
              </p>
            </div>

            <div className="feature glass-panel reveal delay3">
              <span>04</span>
              <div className="feature-icon">+</div>
              <h3>Convenient Hours</h3>
              <p>
                Open Monday to Saturday from 6 AM to 10 PM.
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
              <span>04 — MEMBERSHIP</span>

              <h2>
                YOUR NEXT
                <br />
                <em>SESSION.</em>
              </h2>
            </div>

            <p>
              Looking to join? Get in touch with The MuScle City
              for current membership plans, pricing and availability.
            </p>

          </div>

          <div className="plans">

            <div className="plan glass-panel reveal">

              <div className="plan-head">
                <span>MEMBERSHIP</span>
                <strong>01</strong>
              </div>

              <div className="price">
                <strong>ASK</strong>
              </div>

              <p>
                Enquire directly for the latest membership options
                and current pricing.
              </p>

              <ul>
                <li><span>✓</span> Gym access</li>
                <li><span>✓</span> Training environment</li>
                <li><span>✓</span> Current plan options</li>
                <li><span>✓</span> Direct enquiry</li>
              </ul>

              <button
                className="glass-button plan-button"
                onClick={() => scrollTo("contact")}
              >
                Enquire Now <span className="arrow">↗</span>
              </button>

            </div>

            <div className="plan glass-panel popular reveal delay1">

              <span className="popular-label">
                RECOMMENDED
              </span>

              <div className="plan-head">
                <span>VISIT</span>
                <strong>02</strong>
              </div>

              <div className="price">
                <strong>CALL</strong>
              </div>

              <p>
                Speak with the gym directly to understand the
                membership that fits your training routine.
              </p>

              <ul>
                <li><span>✓</span> Membership information</li>
                <li><span>✓</span> Timings confirmation</li>
                <li><span>✓</span> Facility enquiry</li>
                <li><span>✓</span> Direct contact</li>
              </ul>

              <a
                className="glass-button plan-button"
                href="tel:+917002980713"
              >
                Call The Gym <span className="arrow">↗</span>
              </a>

            </div>

            <div className="plan glass-panel reveal delay2">

              <div className="plan-head">
                <span>EXPERIENCE</span>
                <strong>03</strong>
              </div>

              <div className="price">
                <strong>GO</strong>
              </div>

              <p>
                Visit the gym in Hijuguri and speak with the team
                about current training options.
              </p>

              <ul>
                <li><span>✓</span> Local fitness facility</li>
                <li><span>✓</span> Tinsukia location</li>
                <li><span>✓</span> Monday–Saturday</li>
                <li><span>✓</span> 6 AM–10 PM</li>
              </ul>

              <button
                className="glass-button plan-button"
                onClick={() => scrollTo("contact")}
              >
                Get Directions <span className="arrow">↗</span>
              </button>

            </div>

          </div>
        </section>

        {/* ================= GALLERY ================= */}

        <section className="section gallery" id="gallery">

          <div className="section-heading reveal">

            <div>
              <span>05 — GALLERY</span>

              <h2>
                INSIDE THE
                <br />
                <em>GRIND.</em>
              </h2>
            </div>

            <p>
              A visual look at the training atmosphere and equipment
              that define the modern gym experience.
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
                  alt={`The MuScle City training ${index + 1}`}
                />
              </div>
            ))}

          </div>

        </section>

        {/* ================= CONTACT ================= */}

        <section className="contact" id="contact">

          <div className="contact-image">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=90"
              alt="Fitness gym"
            />
          </div>

          <div className="contact-overlay" />

          <div className="contact-content">

            <span>READY TO TRAIN?</span>

            <h2>
              COME TRAIN
              <br />
              <em>WITH US.</em>
            </h2>

            <p>
              The MuScle City
              <br />
              Hijuguri, A.T. Road, Tinsukia, Assam
            </p>

            <a
              className="glass-button"
              href="tel:+917002980713"
            >
              Call +91 70029 80713 <span className="arrow">↗</span>
            </a>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-top">

          <div>
            <div className="footer-logo">
              MuScle<span>City.</span>
            </div>

            <p>
              Train. Perform. Evolve.
              <br />
              Tinsukia, Assam.
            </p>
          </div>

          <div className="footer-column">
            <span>NAVIGATION</span>
            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("programs")}>Programs</button>
            <button onClick={() => scrollTo("gallery")}>Gallery</button>
          </div>

          <div className="footer-column">
            <span>VISIT</span>
            <p>Hijuguri</p>
            <p>A.T. Road</p>
            <p>Tinsukia, Assam</p>
          </div>

          <div className="footer-column">
            <span>CONTACT</span>
            <a href="tel:+917002980713">
              +91 70029 80713
            </a>
            <p>Mon — Sat</p>
            <p>06:00 — 22:00</p>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© 2026 THE MuScle CITY</span>
          <span>TRAIN • PERFORM • EVOLVE</span>
        </div>

      </footer>

    </div>
  );
}

export default App;