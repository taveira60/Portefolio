import { MatrixBackground } from "./MatrixBackground";

export const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <MatrixBackground />
      <div className="hero-content">
        <h1 className="glitch-hello">HELLO STRANGER</h1>
        <p className="scroll-hint">Scroll down &gt;_</p>
      </div>
    </section>
  );
};
