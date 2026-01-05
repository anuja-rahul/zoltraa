export default function Home() {
  return (
    <div className="container max-w-screen">
      <section className="hero">
        <div className="hero-img">
          <img src="/ariel.jpg" alt="hero-img" />
        </div>
        <div className="hero-mask"></div>
        <div className="hero-grid-overlay">
          <img src="/grid.svg" alt="grid-overlay" />
        </div>
        <div className="marker marker-1">
          <span className="marker-icon"></span>
          <p className="marker-label">Head of Operations</p>
        </div>
        <div className="marker marker-2">
          <span className="marker-icon"></span>
          <p className="marker-label">Systems & Engineering</p>
        </div>
        <div className="hero-content">
          <div className="hero-content-block">
            <div className="hero-content-copy">
              <h2>Active Locations</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate sapiente doloribus dolorem inventore, dicta autem
                reprehenderit ratione cumque maiores illo corporis sed sequi
                veritatis fugiat debitis, nesciunt perspiciatis repudiandae
                dolorum!
              </p>
            </div>
          </div>
          <div className="hero-content-block">
            <div className="hero-content-copy">
              <h2>Headquarters</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate sapiente doloribus dolorem inventore, dicta autem
                reprehenderit ratione
              </p>
            </div>
          </div>
          <div className="hero-content-block">
            <div className="hero-content-copy">
              <h2>Service Outpost</h2>
              <p>
                maiores illo corporis sed sequi veritatis fugiat debitis,
                nesciunt perspiciatis repudiandae dolorum!
              </p>
            </div>
          </div>
          <div className="hero-content-block">
            <div className="hero-content-copy">
              <h2>Active Locations</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate sapiente illo corporis sed sequi veritatis fugiat
                debitis, nesciunt perspiciatis repudiandae dolorum!
              </p>
            </div>
          </div>
        </div>

        <div className="hero-scroll-progress-bar"></div>
      </section>
      <section className="outro">
        <p>The web experience has reached it's final state.</p>
      </section>
    </div>
  );
}
