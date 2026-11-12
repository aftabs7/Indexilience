import { useState } from 'react'
import {
  ArrowUpRight, ArrowRight, CheckCircle2, Code2, GraduationCap, BriefcaseBusiness,
  Users, Laptop, Target, BookOpen, MessageCircle, Award, Clock3, MapPin, Phone,
  Mail, Linkedin, Instagram, Github, Star, Sparkles
} from 'lucide-react'
import Navbar from './components/Navbar'
import SectionHeading from './components/SectionHeading'

const courses = [
  { icon: Code2, tag: 'MOST POPULAR', title: 'Full Stack Java Development', desc: 'Build end-to-end applications with Java, Spring Boot, React and modern databases.', skills: ['Core & Advanced Java', 'Spring Boot & REST APIs', 'React & SQL'] },
  { icon: Laptop, tag: 'CAREER TRACK', title: 'Full Stack Python', desc: 'Learn Python development and create practical web applications from the ground up.', skills: ['Python fundamentals', 'Backend development', 'Database & projects'] },
  { icon: Target, tag: 'JOB READY', title: 'Software Testing', desc: 'Develop the skills to test reliable software using manual and automation techniques.', skills: ['Manual testing', 'Automation basics', 'Real-world test cases'] },
  { icon: GraduationCap, tag: 'BUILD SKILLS', title: 'Web Development', desc: 'Create modern, responsive websites with the technologies used across the web.', skills: ['HTML, CSS & JavaScript', 'React.js', 'Responsive UI'] }
]
const benefits = [
  ['01', 'Learn by building', 'Practical sessions and real-world projects help turn concepts into confidence.'],
  ['02', 'Mentorship that matters', 'Get personal guidance, doubt-solving support and consistent feedback.'],
  ['03', 'Career preparation', 'Prepare your resume, practise interviews and develop workplace skills.'],
  ['04', 'Beyond the classroom', 'Explore internships, project guidance and startup-oriented thinking.']
]
const team = [
  { initials: 'PK', name: 'Prajwal Khedekar', role: 'Founder & Mentor' },
  { initials: 'SC', name: 'SyntaxCore Team', role: 'Technical Mentors' },
  { initials: 'CM', name: 'Career Mentors', role: 'Placement Support' }
]

function App() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ purpose: '', name: '', email: '', phone: '', course: '', batch: '', message: '' })
  const update = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = async e => {
    e.preventDefault()
    setSent(false)
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:8088'}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          purpose: form.purpose, name: form.name, email: form.email,
          phone: form.phone, course: form.course, preferredBatch: form.batch,
          message: form.message
        })
      })
      if (!response.ok) {
        const error = await response.json().catch(() => ({}))
        throw new Error(error.message || 'Unable to submit your enquiry. Please try again.')
      }
      setSent(true)
      setForm({ purpose: '', name: '', email: '', phone: '', course: '', batch: '', message: '' })
    } catch (error) {
      window.alert(error.message || 'Could not connect to the server. Please check that the backend is running.')
    }
  }

  return <>
    <Navbar />
    <main>
      <section className="hero" id="home">
        <div className="hero-grid"></div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="pill"><span className="pulse"></span> LEARN TODAY. BUILD TOMORROW.</div>
            <h1>Build skills.<br/><span>Build your future.</span></h1>
            <p className="hero-lead">Practical IT training, real-world projects and personal mentorship to help you become industry-ready.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#courses">Explore courses <ArrowUpRight size={18}/></a>
              <a className="btn btn-ghost" href="#about">Discover SyntaxCore <ArrowRight size={17}/></a>
            </div>
            <div className="hero-proof">
              <div className="proof-avatars"><span>SC</span><span>IT</span><span>+</span></div>
              <div><strong>Learn with purpose</strong><small>Guidance from learning to career readiness</small></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="code-window">
              <div className="window-top"><div className="window-dots"><i></i><i></i><i></i></div><span>your-future.js</span><span className="window-live">● LIVE</span></div>
              <div className="code-lines">
                <p><em>01</em> <b>const</b> future = {'{'}</p>
                <p><em>02</em> &nbsp; skills: <strong>'your potential'</strong>,</p>
                <p><em>03</em> &nbsp; mindset: <strong>'keep learning'</strong>,</p>
                <p><em>04</em> &nbsp; practice: <strong>true</strong>,</p>
                <p><em>05</em> &nbsp; growth: <strong>'∞'</strong></p>
                <p><em>06</em> {'}'}</p>
                <p className="code-comment">// Your next chapter starts here.</p>
                <p><em>07</em> <b>future</b>.<span>build</span>() <i className="cursor"></i></p>
              </div>
              <div className="window-footer"><span><span className="status-dot"></span> Ready to compile</span><span>UTF-8&nbsp; • &nbsp;JavaScript</span></div>
            </div>
            <div className="float-card float-top"><span className="float-icon"><GraduationCap size={19}/></span><div><b>Learn practically</b><small>Skills that make a difference</small></div></div>
            <div className="float-card float-bottom"><span className="float-icon gold"><Award size={19}/></span><div><b>Career focused</b><small>Guidance at every step</small></div></div>
          </div>
        </div>
        <div className="hero-bottom container"><span>SCROLL TO EXPLORE</span><div></div><span>01 / 06</span></div>
      </section>

      <section className="stats-strip">
        <div className="container stats">
          <div><strong>100<span>%</span></strong><small>Practical learning approach</small></div>
          <div><strong>1:1</strong><small>Personalized mentorship</small></div>
          <div><strong>Real</strong><small>Project-based experience</small></div>
          <div><strong>360°</strong><small>Career development support</small></div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-layout">
          <div className="about-art">
            <div className="about-card-main"><div className="abstract-mark"><span></span><span></span><span></span></div><p>THINK. CREATE. INNOVATE.</p><strong>From learning<br/>to doing.</strong></div>
            <div className="about-note"><Sparkles size={18}/><span>Skills for the<br/><b>real world.</b></span></div>
            <div className="about-caption">THE SYNTAXCORE APPROACH <span>↗</span></div>
          </div>
          <div className="about-copy">
            <SectionHeading eyebrow="WHO WE ARE" title={<>Make your next move<br/><span className="text-accent">a confident one.</span></>} />
            <p>At <b>SYNTAXCORE</b>, we believe the best way to learn is by building. Our programs bridge the gap between theory and practical implementation, helping you gain skills that are directly applicable in the workplace.</p>
            <p>Whether you are starting your IT journey or looking to strengthen your skills, we provide industry-relevant training and personalized guidance to help you move forward.</p>
            <ul className="check-list">{['Concept-focused training with hands-on implementation', 'Learn from mentors with real-world experience', 'One-on-one mentorship and progress tracking', 'Interview preparation and placement assistance'].map(x => <li key={x}><CheckCircle2 size={18}/>{x}</li>)}</ul>
            <a href="#contact" className="text-link">Get to know us <ArrowUpRight size={17}/></a>
          </div>
        </div>
      </section>

      <section className="section feature-section">
        <div className="container">
          <SectionHeading eyebrow="WHY SYNTAXCORE" title={<>A better way to <span className="text-accent">learn and grow.</span></>} description="More than lessons. A learning experience designed around the skills, confidence and direction you need." />
          <div className="benefit-grid">{benefits.map(([n, title, desc], i) => <article className="benefit-card" key={n}><div className="benefit-top"><span>{n}</span>{[<BookOpen/>,<Users/>,<BriefcaseBusiness/>,<Sparkles/>][i]}</div><h3>{title}</h3><p>{desc}</p><a href="#contact" aria-label={`Enquire about ${title}`}><ArrowUpRight size={19}/></a></article>)}</div>
        </div>
      </section>

      <section className="section courses-section" id="courses">
        <div className="container">
          <div className="section-row"><SectionHeading eyebrow="LEARN WITH PURPOSE" title={<>Explore our <span className="text-accent">courses.</span></>} description="Build a strong foundation, practise with purpose and work towards your next opportunity."/><a className="text-link desktop-link" href="#contact">Ask about a course <ArrowUpRight size={17}/></a></div>
          <div className="course-grid">{courses.map(({icon: Icon, tag, title, desc, skills}, i) => <article className="course-card" key={title}><div className="course-card-top"><span className="course-icon"><Icon size={23}/></span><span className="course-tag">{tag}</span></div><h3>{title}</h3><p>{desc}</p><ul>{skills.map(s => <li key={s}><CheckCircle2 size={15}/>{s}</li>)}</ul><a href="#contact" className="course-link">Enquire about course <ArrowUpRight size={17}/></a></article>)}</div>
        </div>
      </section>

      <section className="internship-section" id="internships">
        <div className="container internship-layout">
          <div><span className="eyebrow">TAKE THE NEXT STEP</span><h2>Turn what you learn<br/>into <span>what you can do.</span></h2><p>Get exposure to practical work, strengthen your portfolio and learn how to approach real development challenges with confidence.</p><a className="btn btn-light" href="#contact">Explore internship opportunities <ArrowUpRight size={18}/></a></div>
          <div className="internship-points"><div><span><Laptop/></span><div><b>Hands-on experience</b><small>Apply concepts through practical tasks and projects.</small></div></div><div><span><MessageCircle/></span><div><b>Mentor guidance</b><small>Get feedback and direction as you progress.</small></div></div><div><span><BriefcaseBusiness/></span><div><b>Career readiness</b><small>Build confidence for professional opportunities.</small></div></div></div>
        </div>
      </section>

      <section className="section team-section" id="team">
        <div className="container">
          <SectionHeading eyebrow="PEOPLE BEHIND THE PROGRESS" title={<>Guidance that helps you <span className="text-accent">move forward.</span></>} description="Learn with a supportive team focused on practical skills, personal progress and career growth." />
          <div className="team-grid">{team.map((person, i) => <article className="team-card" key={person.name}><div className={`team-avatar avatar-${i}`}>{person.initials}</div><div><h3>{person.name}</h3><p>{person.role}</p></div><span className="team-arrow"><ArrowUpRight size={18}/></span></article>)}</div>
        </div>
      </section>

      <section className="quote-section">
        <div className="container quote-inner"><div className="quote-symbol">“</div><div><span className="eyebrow">THE SYNTAXCORE MINDSET</span><h2>Don't just learn the code.<br/><span>Learn to create with it.</span></h2><p>Every expert starts as a beginner. Keep learning, keep building, and keep moving.</p></div><div className="quote-side"><div><Star/><Star/><Star/><Star/><Star/></div><b>Learn. Build. Succeed.</b><small>Your journey starts with one step.</small></div></div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-layout">
          <div className="contact-info"><SectionHeading eyebrow="LET'S CONNECT" title={<>Your next step<br/><span className="text-accent">starts here.</span></>} description="Have a question about a course, internship or career path? Send us an enquiry. We'd be happy to help."/>
            <div className="contact-methods">
              <a href="tel:+918999501118"><span><Phone size={19}/></span><div><small>CALL US</small><b>+91 89995 01118</b></div></a>
              <a href="mailto:info@syntaxcore.in"><span><Mail size={19}/></span><div><small>EMAIL US</small><b>info@syntaxcore.in</b></div></a>
              <div><span><Clock3 size={19}/></span><div><small>WORKING HOURS</small><b>Mon–Fri: 10:00 AM – 7:00 PM</b></div></div>
              <div><span><MapPin size={19}/></span><div><small>VISIT US</small><b>Hadapsar, Pune, Maharashtra 411028</b></div></div>
            </div>
          </div>
          <form className="enquiry-form" onSubmit={submit}>
            <div className="form-heading"><div><span className="eyebrow">ENQUIRY FORM</span><h3>Tell us what you're looking for.</h3></div><span className="form-icon"><MessageCircle/></span></div>
            <div className="form-grid">
              <label>Purpose of contact *<select name="purpose" value={form.purpose} onChange={update} required><option value="">Select purpose</option><option>Course enquiry</option><option>Internship</option><option>Placement assistance</option><option>General enquiry</option></select></label>
              <label>Full name *<input name="name" value={form.name} onChange={update} placeholder="Your name" required /></label>
              <label>Email address *<input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" required /></label>
              <label>Phone number *<input type="tel" name="phone" value={form.phone} onChange={update} placeholder="+91" pattern="[+]?[0-9]{10,13}" required /></label>
              <label>Course interested in<select name="course" value={form.course} onChange={update}><option value="">Select a course</option>{courses.map(c => <option key={c.title}>{c.title}</option>)}</select></label>
              <label>Preferred batch<select name="batch" value={form.batch} onChange={update}><option value="">Select batch</option><option>Weekday</option><option>Weekend</option><option>Online</option><option>Discuss with me</option></select></label>
              <label className="full-field">Your message<textarea name="message" value={form.message} onChange={update} placeholder="Tell us a little about your goals..." rows="4"/></label>
            </div>
            <button className="btn btn-primary submit-btn" type="submit">Submit enquiry <ArrowUpRight size={18}/></button>
            {sent && <p className="form-success">Your enquiry has been submitted successfully. Our team will contact you soon.</p>}
            <small className="form-privacy">By submitting, you agree that our team may contact you about your enquiry.</small>
          </form>
        </div>
      </section>
    </main>
    <footer className="footer">
      <div className="container footer-main"><div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark"><Code2 size={22}/></span><span>SYNTAX<span className="brand-accent">CORE</span><small>CODE. LEARN. GROW.</small></span></a><p>Become a confident professional with practical learning, real-world projects and personal mentorship.</p><div className="socials"><a href="https://www.linkedin.com/company/syntaxcore" aria-label="LinkedIn"><Linkedin/></a><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram/></a><a href="https://github.com/" aria-label="GitHub"><Github/></a></div></div>
        <div className="footer-col"><h4>Explore</h4><a href="#about">About us</a><a href="#courses">Courses</a><a href="#internships">Internships</a><a href="#team">Our team</a></div>
        <div className="footer-col"><h4>Popular courses</h4><a href="#courses">Core Java</a><a href="#courses">Full Stack Development</a><a href="#courses">Python Programming</a><a href="#courses">Software Testing</a></div>
        <div className="footer-col"><h4>Get in touch</h4><a href="tel:+918999501118">+91 89995 01118</a><a href="mailto:info@syntaxcore.in">info@syntaxcore.in</a><span>Hadapsar, Pune, Maharashtra</span><a href="#contact" className="footer-enquire">Send an enquiry <ArrowUpRight size={15}/></a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} SYNTAXCORE. All rights reserved.</span><span>Built for curious minds and future builders.</span><a href="#home">Back to top ↑</a></div>
    </footer>
  </>
}

export default App