import "./About.css";

export default function About() {
  return (
    <div className="about-bg">
      <div className="about-card">
        <h1>About This App</h1>

        <p>
          This is a modern React application featuring Login, Signup, and smooth
          page navigation using React Router.
        </p>

        <p>
          It demonstrates real-world concepts like state management,
          routing, reusable components, and clean UI design.
        </p>

        <div className="about-highlights">
          <span>⚛️ React</span>
          <span>🔀 React Router</span>
          <span>🎨 Modern UI</span>
        </div>
      </div>
    </div>
  );
};
