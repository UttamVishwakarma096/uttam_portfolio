const skills = [
  "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "MySQL",
  "Python", "Java", "C / C++", "Tailwind CSS", "REST APIs", "Git & GitHub",
];

const learning = [
  "Full Stack Web Development using MERN Stack",
  "Java Programming",
  "Python Programming",
  "Data Structures & Algorithms",
];

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Uttam Vishwakarma home"><span>Uttam Vishwakarma</span><i /></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="mailto:uttamvishwakarma096@gmail.com">Let&apos;s talk <Arrow /></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Available for opportunities · Mumbai, India</p>
          <h1>Building thoughtful<br /><em>digital experiences.</em></h1>
          <p className="hero-lede">I&apos;m Uttam — a BSc IT student and MERN stack developer who enjoys turning ideas into clean, useful web products.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">See my work <Arrow /></a>
            <a className="text-link" href="mailto:uttamvishwakarma096@gmail.com">Get in touch <Arrow /></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract portrait graphic">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="hero-card">
            <span className="card-label">Currently learning</span>
            <strong>More ways to make<br />the web feel simple.</strong>
            <span className="card-mark">✳</span>
          </div>
          <div className="hero-initials">U<span>.</span>V</div>
          <div className="scribble">MERN<br />developer</div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true"><div>React · Node · Express · MongoDB · JavaScript · React · Node · Express · MongoDB · JavaScript ·</div></div>

      <section className="about shell section" id="about">
        <div className="section-kicker"><span>01</span><span>About me</span></div>
        <div className="about-grid">
          <h2>Curious by nature.<br /><span>Precise by craft.</span></h2>
          <div className="about-copy">
            <p className="large-copy">I care about the details that make software feel good to use — from a clear interface to a fast, reliable API behind it.</p>
            <p>As a motivated BSc IT student, I&apos;m building a strong foundation across frontend and backend development. I like learning in public, solving problems with a team, and shipping work that is both useful and easy to understand.</p>
            <a className="text-link" href="#contact">A little more about me <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="shell">
          <div className="section-kicker"><span>02</span><span>Selected work</span></div>
          <div className="work-heading"><h2>One project.<br /><em>Many moving parts.</em></h2><p>A full-stack recommendation experience built as my final year project.</p></div>
          <article className="project-card">
            <div className="project-visual"><div className="visual-window"><div className="window-bar"><i /><i /><i /><span>vehicle-recommender.app</span></div><div className="visual-content"><span className="mini-label">Find your next</span><strong>perfect ride<span>.</span></strong><div className="fake-search"><span>What are you looking for?</span><b>⌕</b></div><div className="fake-stats"><span><b>01</b> preferences</span><span><b>02</b> recommendations</span></div></div></div></div>
            <div className="project-info"><div className="project-number">01 <span>/ 01</span></div><h3>Vehicle Recommendation System</h3><p>A responsive MERN application that recommends vehicles based on user preferences, with dynamic filtering, search, category-based recommendations, and secure backend APIs.</p><div className="tag-row"><span>React</span><span>Node.js</span><span>Express</span><span>MongoDB</span><span>Tailwind</span></div><div className="project-footer"><span>Final year project · 2026</span><a href="https://github.com/UttamVishwakarma096" target="_blank" rel="noreferrer">View GitHub <Arrow /></a></div></div>
          </article>
        </div>
      </section>

      <section className="skills shell section" id="skills">
        <div className="section-kicker"><span>03</span><span>Toolkit</span></div>
        <div className="skills-grid"><h2>Tools I use<br /><em>to make things work.</em></h2><div className="skill-list">{skills.map((skill, index) => <div className="skill" key={skill}><span>0{index + 1}</span>{skill}</div>)}</div></div>
      </section>

      <section className="learning section"><div className="shell learning-grid"><div><div className="section-kicker"><span>04</span><span>Always learning</span></div><h2>Keep moving<br /><em>forward.</em></h2></div><div className="learning-list">{learning.map((item, index) => <div className="learning-item" key={item}><span>0{index + 1}</span><p>{item}</p><b>↗</b></div>)}</div></div></section>

      <section className="contact shell section" id="contact"><div className="contact-panel"><div className="section-kicker"><span>05</span><span>Start a conversation</span></div><h2>Have a good idea?<br /><em>Let&apos;s make it real.</em></h2><a className="contact-email" href="mailto:uttamvishwakarma096@gmail.com">uttamvishwakarma096@gmail.com <Arrow /></a><div className="contact-bottom"><span>Open to entry-level software & web development roles</span><a href="https://github.com/UttamVishwakarma096" target="_blank" rel="noreferrer">GitHub <Arrow /></a></div></div></section>

      <footer className="footer shell"><span>© 2026 Uttam Vishwakarma</span><span>Designed & built with intention</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
