/*
     * ================================================================
     *  RAHUL TAK — AI CHATBOT ENGINE
     *  Frontend-only, keyword-based, no backend required
     *  
     *  HOW TO ADD MORE RESPONSES:
     *  1. Open the `KNOWLEDGE_BASE` array below
     *  2. Add a new object with:
     *     - keywords: array of trigger words/phrases (case-insensitive)
     *     - answer:   the response string (supports basic HTML)
     *  3. Save and refresh — done!
     * ================================================================
     */

    /* ================================================================
       KNOWLEDGE BASE — Edit this to personalise the chatbot
       Each entry has:
         keywords → array of words/phrases that trigger this response
         answer   → what the bot replies (HTML supported)
       ================================================================ */
    /* ── CONTACT DETAILS — change them here once, used in every answer ── */
    const CONTACT = {
      email: 'rahultak955@gmail.com',
      phone: '+91 89491 93728',
      linkedin: 'https://www.linkedin.com/in/rahul-tak-795752262/',
      github: 'https://github.com/rahultak1923',
      portfolio: 'https://rahultakdev.vercel.app/'
    };

    const KNOWLEDGE_BASE = [

      /* ══════════════ GENERAL / SMALL TALK ══════════════ */

      /* ── GREETINGS ── */
      {
        keywords: ['hello', 'hi', 'hey', 'hii', 'howdy', 'hola', 'namaste', 'greetings', 'good morning', 'good afternoon', 'good evening', 'sup', 'what\'s up', 'hello rahul'],
        answer: `Hey there! 👋 I'm <strong>Rahul's AI Assistant</strong>. I can answer questions about Rahul's work experience, skills, projects, education and how to get in touch. What would you like to know?`
      },

      /* ── HELP / WHAT CAN I ASK ── */
      {
        keywords: ['help', 'what can i ask', 'what can you do', 'what can you answer', 'menu', 'options', 'questions', 'suggest', 'how to use'],
        answer: `You can ask me things like:<br/><ul>
      <li>💼 "What is Rahul's work experience?"</li>
      <li>🛠️ "What are his skills?" / "Does he know React?"</li>
      <li>📦 "Tell me about his projects"</li>
      <li>🏢 "Where does he work now?"</li>
      <li>🎓 "What is his education?"</li>
      <li>🤝 "Why should we hire Rahul?"</li>
      <li>📞 "How can I contact him?"</li>
    </ul>`
      },

      /* ── ABOUT THE BOT ── */
      {
        keywords: ['are you a bot', 'are you real', 'are you human', 'are you ai', 'chatbot', 'how do you work', 'who built you', 'who created you', 'who made you', 'who developed you', 'is this ai'],
        answer: `I'm a simple assistant built into Rahul's portfolio website. I answer from Rahul's resume and profile, so I can't answer everything. For anything I miss, please contact Rahul directly at <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>.`
      },

      /* ── WHO IS RAHUL ── */
      {
        weight: 0.4,
        keywords: ['who are you', 'who is rahul', 'who is rahul tak', 'about you', 'about rahul', 'about rahul tak', 'introduce yourself', 'introduction', 'tell me about yourself', 'tell me about rahul', 'your name', 'what is your name', 'kaun hai', 'profile', 'summary', 'overview', 'in short'],
        answer: `I'm the AI assistant for <strong>Rahul Tak</strong>, a <strong>Full Stack Developer (MERN)</strong> based in Jaipur, Rajasthan, India 🇮🇳<br/><br/>Rahul has <strong>3+ years</strong> of experience building and deploying production web applications with Node.js, Express.js, React.js and MongoDB. He has built a SaaS inventory product, a real-time chat application and custom admin dashboards. He currently works at <strong>Digital Whopper</strong>.`
      },

      /* ══════════════ HR QUESTIONS ══════════════ */

      /* ── WORK EXPERIENCE (OVERVIEW) ── */
      {
        keywords: ['experience', 'work experience', 'working experience', 'professional experience', 'relevant experience', 'work history', 'career', 'companies', 'jobs', 'worked at', 'worked', 'background', 'professional', 'employment', 'employer', 'employers', 'working', 'where has rahul worked', 'anubhav', 'kaam kiya', 'kahan kaam'],
        answer: `Rahul's work experience (3+ years, Full Stack Developer at all three companies):<br/><ul>
      <li>💼 <strong>Digital Whopper</strong> — Jun 2026 – Present, Jaipur</li>
      <li>🌐 <strong>Duranz</strong> — Jan 2025 – Jun 2026, Jaipur</li>
      <li>🏢 <strong>RentalPe</strong> — May 2023 – Dec 2024, Jaipur</li>
    </ul>He has worked on a SaaS inventory product, 8+ business websites and web apps, and custom admin dashboards. Ask me about any company for details.`
      },

      /* ── TOTAL YEARS / LEVEL ── */
      {
        keywords: ['how many years', 'years of experience', 'total experience', 'how much experience', 'how experienced', 'experience level', 'experience in years', 'fresher', 'experienced', 'senior', 'junior', 'seniority', 'kitne saal', 'kitna experience', 'since when', 'how long has', 'started', 'when did he start'],
        answer: `Rahul has <strong>3+ years</strong> of professional experience as a Full Stack Developer. He started in <strong>May 2023</strong> at RentalPe and has worked at 3 companies: RentalPe, Duranz and Digital Whopper. He is not a fresher.`
      },

      /* ── CURRENT COMPANY ── */
      {
        keywords: ['current company', 'currently working', 'currently employed', 'are you employed', 'is he employed', 'where do you work', 'where does rahul work', 'where is rahul working', 'present', 'current job', 'current role', 'current position', 'current employer', 'digital whopper', 'digitalwhopper', 'what is he doing now', 'working now', 'kahan kaam karta', 'kaha kaam karta', 'kahan kaam kar raha', 'where is he working', 'where does he work', 'where he works', 'where is he employed', 'which company does he work', 'which company is he in'],
        answer: `Rahul currently works at <strong>Digital Whopper</strong> as a Full Stack Developer (since Jun 2026):<br/><ul>
      <li>Built the company website from scratch with React.js, Node.js, Express.js and MongoDB</li>
      <li>Developed a custom admin dashboard to manage Services, Blogs and News</li>
      <li>Designed and tested 15+ REST APIs using Postman</li>
    </ul>`
      },

      /* ── PREVIOUS COMPANY ── */
      {
        keywords: ['previous company', 'last company', 'previous job', 'previous employer', 'earlier company', 'past company', 'before digital whopper', 'prior experience', 'earlier experience'],
        answer: `Before Digital Whopper, Rahul worked at <strong>Duranz</strong> (Jan 2025 – Jun 2026), building and maintaining 8+ responsive websites and web applications. Before that he worked at <strong>RentalPe</strong> (May 2023 – Dec 2024), where he built a SaaS inventory management application.`
      },

      /* ── FIRST JOB ── */
      {
        keywords: ['first job', 'first company', 'career start', 'where did he start', 'where did rahul start', 'started career', 'first role'],
        answer: `Rahul's first company was <strong>RentalPe</strong> (May 2023 – Dec 2024), where he worked as a Full Stack Developer and built a SaaS inventory management application for rental businesses.`
      },

      /* ── DURANZ ── */
      {
        keywords: ['duranz'],
        answer: `At <strong>Duranz</strong> (Jan 2025 – Jun 2026), Rahul built and maintained <strong>8+ responsive websites and web applications</strong> across the frontend, backend and database layers, and created REST APIs with authentication.`
      },

      /* ── RENTALPE / SAAS ── */
      {
        keywords: ['rentalpe', 'rental pe', 'saas', 'inventory', 'rental', 'inventory management'],
        answer: `At <strong>RentalPe</strong> (May 2023 – Dec 2024), Rahul built a <strong>SaaS inventory management application</strong> for rental businesses:<br/><ul>
      <li>Product catalog, stock tracking, bookings and customer records</li>
      <li>30+ REST APIs with JWT authentication and role-based access (Admin/Staff)</li>
      <li>Real-time stock updates and low-stock notifications using WebSockets</li>
      <li>Dashboards, downloadable reports and production deployment</li>
    </ul>`
      },

      /* ── TENURE / DURATION ── */
      {
        keywords: ['how long at', 'how long did', 'tenure', 'duration', 'each company', 'stay', 'stayed', 'time at each', 'how long was'],
        answer: `Approximate time at each company:<br/><ul>
      <li>🏢 <strong>RentalPe</strong> — May 2023 to Dec 2024 (about 1 year 8 months)</li>
      <li>🌐 <strong>Duranz</strong> — Jan 2025 to Jun 2026 (about 1 year 5 months)</li>
      <li>💼 <strong>Digital Whopper</strong> — Jun 2026 to present</li>
    </ul>`
      },

      /* ── JOB CHANGES / GAPS ── */
      {
        keywords: ['why did you leave', 'why did he leave', 'why leave', 'why left', 'reason for leaving', 'reason for change', 'job change', 'job hopping', 'switch', 'switching', 'why changing', 'why change', 'career gap', 'employment gap', 'gap'],
        answer: `Rahul has worked at 3 companies since May 2023, with <strong>no employment gap</strong> between them (RentalPe ended Dec 2024, Duranz ran Jan 2025 – Jun 2026, Digital Whopper started Jun 2026). Reasons for moving between roles are best discussed with him directly: <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>.`
      },

      /* ── SKILLS ── */
      {
        keywords: ['skills', 'skill set', 'skillset', 'tech stack', 'stack', 'technologies', 'technical skills', 'tech skills', 'what do you know', 'what does he know', 'tell me about your skills', 'tell me about rahul skills', 'expertise', 'programming', 'programming language', 'coding language', 'languages', 'tools', 'frameworks', 'tech', 'javascript', 'mern', 'kya aata', 'aata hai'],
        answer: `Rahul's core tech stack:<br/><ul>
      <li>🟢 <strong>Backend:</strong> Node.js, Express.js, REST APIs, WebSockets, JWT Authentication</li>
      <li>🗄️ <strong>Database:</strong> MongoDB</li>
      <li>⚛️ <strong>Frontend:</strong> React.js, React Native, JavaScript (ES6+), HTML5, CSS3</li>
      <li>🎨 <strong>CSS Frameworks:</strong> Tailwind CSS, Bootstrap</li>
      <li>🔧 <strong>Tools:</strong> Git, GitHub, Postman, Vercel</li>
    </ul>`
      },

      /* ── STRENGTHS ── */
      {
        keywords: ['strength', 'strengths', 'strongest', 'best skill', 'best at', 'specialty', 'speciality', 'specialization', 'specialisation', 'core strength', 'primary skill', 'main skill', 'good at', 'expert in'],
        answer: `Rahul's strongest area is <strong>full stack MERN development</strong>, especially:<br/><ul>
      <li>Backend development with Node.js and Express.js, including REST APIs and JWT authentication</li>
      <li>Real-time features with WebSockets</li>
      <li>Building complete products, such as a SaaS inventory application and admin dashboards, across frontend, backend and database</li>
      <li>React.js interfaces that are responsive and user-friendly</li>
    </ul>`
      },

      /* ── WEAKNESSES / LEARNING ── */
      {
        keywords: ['weakness', 'weaknesses', 'areas to improve', 'area of improvement', 'improve', 'limitations', 'what he doesn\'t know', 'lacking', 'learning'],
        answer: `Rahul's focus is the <strong>MERN stack</strong>. Technologies outside it, such as TypeScript, Docker or cloud platforms, are not listed on his resume. For a straight answer on his growth areas, please ask him directly at <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>.`
      },

      /* ── WHY HIRE ── */
      {
        keywords: ['why should we hire', 'why should i hire', 'why hire', 'why rahul', 'what makes you', 'what makes rahul', 'what makes him', 'usp', 'stand out', 'good fit', 'right fit', 'fit for', 'value', 'benefit', 'what will he bring', 'what do you bring'],
        answer: `Reasons to consider Rahul:<br/><ul>
      <li>✅ <strong>3+ years</strong> of full stack experience across 3 companies</li>
      <li>✅ Builds <strong>end to end</strong>: UI, REST APIs and database, and deploys to production</li>
      <li>✅ Delivered a <strong>SaaS product</strong> (30+ REST APIs, JWT, role-based access) and a <strong>real-time chat application</strong></li>
      <li>✅ Built a company website from scratch and 8+ responsive websites and web apps</li>
    </ul>See his <strong>Projects</strong> section or <a href="${CONTACT.github}" target="_blank">GitHub</a> for proof of work.`
      },

      /* ── ROLES / FIT ── */
      {
        keywords: ['which role', 'what role', 'suitable role', 'roles', 'designation', 'position', 'job role', 'job title', 'looking for', 'role fit', 'backend developer', 'frontend developer', 'node developer', 'react developer', 'mern developer', 'full stack developer', 'fullstack'],
        answer: `Rahul is a <strong>Full Stack Developer (MERN)</strong>. Roles that fit his experience include Full Stack Developer, Node.js / Backend Developer and React.js Developer. He has held the title Full Stack Developer at all three of his companies.`
      },

      /* ── ACHIEVEMENTS ── */
      {
        keywords: ['achievement', 'achievements', 'accomplishment', 'accomplishments', 'highlights', 'highlight', 'impact', 'results', 'contribution', 'contributions', 'delivered', 'proud'],
        answer: `Career highlights:<br/><ul>
      <li>🏆 Built a <strong>SaaS inventory management</strong> product for rental businesses at RentalPe</li>
      <li>🏆 Designed <strong>30+ REST APIs</strong> at RentalPe and <strong>15+ REST APIs</strong> at Digital Whopper</li>
      <li>🏆 Built and maintained <strong>8+ responsive websites and web apps</strong> at Duranz</li>
      <li>🏆 Built the Digital Whopper <strong>company website from scratch</strong> with a custom admin dashboard</li>
      <li>🏆 Built a <strong>real-time chat application</strong> with WebSockets</li>
    </ul>`
      },

      /* ── TEAMWORK / SOFT SKILLS ── */
      {
        weight: 1.3,
        keywords: ['leadership experience', 'team lead experience', 'led a team', 'managed a team', 'lead a team', 'team', 'teamwork', 'team player', 'communication', 'leadership', 'team lead', 'lead', 'manage', 'mentor', 'soft skills', 'collaborate', 'collaboration', 'work with team', 'agile', 'scrum'],
        answer: `Rahul has worked as a Full Stack Developer across three companies, delivering features end to end from the UI to the APIs and database. His resume does not list a team-lead role or specific agile practices. For questions about teamwork and communication style, please speak with him directly at <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>.`
      },

      /* ── EDUCATION ── */
      {
        keywords: ['education', 'educational background', 'degree', 'college', 'university', 'study', 'studied', 'qualification', 'qualifications', 'academic', 'bca', 'graduate', 'graduation', 'graduated', 'pass out', 'passing year'],
        answer: `Rahul's education:<br/><ul>
      <li>🎓 <strong>Bachelor of Computer Applications (BCA)</strong><br/>Rajasthan University (2022 – 2025)</li>
    </ul>`
      },

      /* ── CERTIFICATIONS ── */
      {
        keywords: ['certification', 'certifications', 'certificate', 'certificates', 'certified', 'course', 'courses', 'training'],
        answer: `No certifications are listed on Rahul's resume. His skills are shown through his work experience and projects, which you can see in the <strong>Projects</strong> section and on <a href="${CONTACT.github}" target="_blank">GitHub</a>.`
      },

      /* ── SALARY / COMPENSATION ── */
      {
        weight: 1.2,
        keywords: ['salary', 'ctc', 'expected salary', 'current salary', 'expected ctc', 'current ctc', 'package', 'compensation', 'lpa', 'stipend', 'salary expectation', 'expectation', 'price', 'pricing', 'cost', 'rate', 'rates', 'how much', 'charges', 'fee', 'fees', 'budget', 'quote', 'estimate', 'rupees', 'money', 'pay'],
        answer: `Salary expectations and freelance rates depend on the role or the scope of the project, so Rahul discusses them directly. Please reach him at <a href="mailto:${CONTACT.email}">${CONTACT.email}</a> or ${CONTACT.phone}.`
      },

      /* ── NOTICE PERIOD / JOINING ── */
      {
        weight: 1.2,
        keywords: ['notice period', 'notice', 'joining', 'join', 'when can you join', 'when can he join', 'how soon', 'start date', 'available from', 'joining date', 'immediate joiner', 'serving notice'],
        answer: `Rahul is currently working at Digital Whopper, so his notice period and joining date are best confirmed with him directly: <a href="mailto:${CONTACT.email}">${CONTACT.email}</a> or ${CONTACT.phone}.`
      },

      /* ── AVAILABILITY / OPEN TO WORK ── */
      {
        keywords: ['available', 'availability', 'freelance', 'fulltime', 'full-time', 'full time', 'part-time', 'part time', 'contract', 'job', 'open to', 'opportunity', 'opportunities', 'open to work', 'looking for job', 'job change'],
        answer: `Rahul is open to:<br/><ul>
      <li>✅ Full-time positions</li>
      <li>✅ Freelance projects</li>
    </ul>Best way to connect: <a href="mailto:${CONTACT.email}">${CONTACT.email}</a> or use the Contact form.`
      },

      /* ── LOCATION / REMOTE / RELOCATION ── */
      {
        keywords: ['location', 'where are you', 'where is rahul', 'where does rahul live', 'where is he located', 'where is he from', 'where is he based', 'where does he live', 'where is rahul from', 'located', 'residence', 'lives', 'living', 'city', 'jaipur', 'india', 'rajasthan', 'based', 'from where', 'remote', 'hybrid', 'onsite', 'on-site', 'work from home', 'wfh', 'office', 'work mode', 'timezone', 'time zone', 'relocate', 'relocation', 'kahan', 'kaha'],
        answer: `Rahul is based in <strong>Jaipur, Rajasthan, India</strong> 🇮🇳 (IST, UTC+5:30). His three companies so far have all been in Jaipur. For remote, hybrid, on-site or relocation preferences, please contact him directly at <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>.`
      },

      /* ── INTERVIEW / CONTACT ── */
      {
        keywords: ['contact', 'reach', 'email', 'mail', 'phone', 'number', 'mobile number', 'call', 'message', 'get in touch', 'hire', 'hiring', 'connect', 'talk', 'meet', 'discuss', 'whatsapp', 'interview', 'schedule', 'schedule interview', 'book a call', 'set up a call', 'meeting', 'sampark'],
        answer: `You can reach Rahul through:<br/><ul>
      <li>📧 <strong>Email:</strong> <a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
      <li>📞 <strong>Phone:</strong> ${CONTACT.phone}</li>
      <li>💼 <strong>LinkedIn:</strong> <a href="${CONTACT.linkedin}" target="_blank">Rahul Tak</a></li>
      <li>📍 <strong>Location:</strong> Jaipur, Rajasthan, India</li>
    </ul>To schedule an interview or a call, email or phone him, or use the <strong>Contact</strong> form. Response within <strong>24 hours</strong>.`
      },

      /* ── RESUME ── */
      {
        keywords: ['resume', 'cv', 'download resume', 'curriculum', 'curriculum vitae'],
        answer: `You can open Rahul's resume with the <strong>View Resume</strong> button in the <strong>Contact</strong> section of this website.`
      },

      /* ── LINKS / SOCIAL ── */
      {
        keywords: ['github', 'linkedin', 'social', 'links', 'profiles', 'code', 'repository', 'repo', 'source code', 'code samples', 'website link', 'portfolio link', 'live link', 'live links'],
        answer: `Find Rahul online:<br/><ul>
      <li>🐙 <strong>GitHub</strong> — <a href="${CONTACT.github}" target="_blank">github.com/rahultak1923</a></li>
      <li>💼 <strong>LinkedIn</strong> — <a href="${CONTACT.linkedin}" target="_blank">Rahul Tak</a></li>
      <li>🌐 <strong>Portfolio</strong> — <a href="${CONTACT.portfolio}" target="_blank">rahultakdev.vercel.app</a></li>
    </ul>`
      },

      /* ── REVIEWS / REFERENCES ── */
      {
        keywords: ['reviews', 'testimonials', 'feedback', 'clients', 'rating', 'recommend', 'trust', 'customers', 'references', 'reference'],
        answer: `Rahul's work is best judged by his projects and code. See the <strong>Projects</strong> section, browse his <a href="${CONTACT.github}" target="_blank">GitHub</a>, or contact him at <a href="mailto:${CONTACT.email}">${CONTACT.email}</a> to discuss his past work.`
      },

      /* ══════════════ PROJECTS ══════════════ */

      /* ── PROJECTS ── */
      {
        keywords: ['projects', 'project', 'portfolio', 'built', 'created', 'made', 'examples', 'showcase', 'apps', 'applications', 'demo', 'key projects', 'which projects', 'personal project', 'side project', 'live project', 'live projects', 'work samples', 'sample work', 'what has he built', 'what have you built'],
        answer: `Here are Rahul's key projects:<br/><ul>
      <li>📦 <strong>RentalPe Inventory Management (SaaS)</strong> — Node.js, Express.js, MongoDB, React.js, WebSockets</li>
      <li>💬 <strong>Real-Time Chat Application</strong> (personal project) — React.js, Node.js, WebSockets, MongoDB</li>
      <li>🛠️ <strong>Custom CMS Dashboard</strong> (Digital Whopper) — React.js, Node.js, Express.js, MongoDB</li>
    </ul>He also built 8+ responsive websites and web apps at Duranz. See the <strong>Projects</strong> section, the <a href="${CONTACT.portfolio}" target="_blank">portfolio</a> or <a href="${CONTACT.github}" target="_blank">GitHub</a>.`
      },

      /* ── BIGGEST / BEST PROJECT ── */
      {
        weight: 1.5,
        keywords: ['biggest project', 'best project', 'major project', 'top project', 'most complex', 'challenging project', 'favorite project', 'favourite project', 'flagship', 'most important project', 'main project'],
        answer: `Rahul's biggest project is the <strong>RentalPe Inventory Management SaaS</strong>: a multi-user platform for rental businesses to manage inventory, bookings and customers, with role-based access (Admin/Staff), JWT authentication, real-time stock updates, low-stock alerts, search and filters, and downloadable reports. Built with Node.js, Express.js, MongoDB, React.js and WebSockets.`
      },

      /* ── CHAT APP ── */
      {
        keywords: ['chat app', 'chat application', 'chatting app', 'messaging app', 'messenger'],
        weight: 1.5,
        answer: `Rahul's <strong>Real-Time Chat Application</strong> is a personal project built with React.js, Node.js, WebSockets and MongoDB. It has live messaging, chat history and a responsive interface for desktop and mobile.`
      },

      /* ── CMS / DASHBOARD ── */
      {
        keywords: ['cms', 'dashboard', 'admin panel', 'admin dashboard', 'content management', 'blog', 'blogs', 'news'],
        answer: `At Digital Whopper, Rahul built a <strong>custom CMS dashboard</strong> (React.js, Node.js, Express.js, MongoDB) with secure login and full CRUD to manage Services, Blogs and News, so the team can update the website without developer support. At RentalPe he also built dashboards and downloadable reports for the SaaS product.`
      },

      /* ══════════════ OWNER / CLIENT QUESTIONS ══════════════ */

      /* ── SERVICES ── */
      {
        keywords: ['services', 'offer', 'what do you do', 'provide', 'help with', 'offerings', 'capabilities', 'what can he build', 'what can rahul build'],
        answer: `Rahul can help with:<br/><ul>
      <li>🔷 <strong>Full-Stack Web Development</strong> — React.js, Node.js, Express.js, MongoDB</li>
      <li>⚡ <strong>REST API Development</strong> — authentication, CRUD, tested with Postman</li>
      <li>🔴 <strong>Real-Time Applications</strong> — chat, live updates and notifications with WebSockets</li>
      <li>📦 <strong>SaaS & Admin Dashboards</strong> — multi-user products and content management panels</li>
      <li>📱 <strong>Responsive Web Design</strong> — HTML5, CSS3, Tailwind CSS, Bootstrap</li>
      <li>🚀 <strong>Deployment & Version Control</strong> — Git, GitHub, Vercel</li>
    </ul>`
      },

      /* ── BUILD A WEBSITE / WEB APP FOR MY BUSINESS ── */
      {
        weight: 1.5,
        keywords: ['build a website', 'make a website', 'create a website', 'develop a website', 'website for my business', 'website for my company', 'business website', 'company website', 'need a website', 'need a developer', 'looking for a developer', 'need an app', 'web app', 'web application', 'landing page', 'portfolio website', 'booking system', 'management system', 'custom software', 'software for my business', 'crm', 'erp', 'startup idea', 'my idea', 'my project', 'my business'],
        answer: `Yes, this is the kind of work Rahul does. For example, he built:<br/><ul>
      <li>🌐 A complete <strong>company website from scratch</strong> (Digital Whopper)</li>
      <li>🌐 <strong>8+ responsive websites and web apps</strong> (Duranz)</li>
      <li>📦 A <strong>SaaS inventory and booking system</strong> for rental businesses (RentalPe)</li>
      <li>🛠️ A <strong>custom admin dashboard</strong> to manage website content</li>
    </ul>To discuss your requirement, contact him at <a href="mailto:${CONTACT.email}">${CONTACT.email}</a> or ${CONTACT.phone}.`
      },

      /* ── E-COMMERCE / PAYMENTS / OTHER NOT LISTED ── */
      {
        weight: 2,
        keywords: ['ecommerce', 'e-commerce', 'online store', 'online shop', 'shopify', 'woocommerce', 'wordpress', 'payment', 'payment gateway', 'razorpay', 'stripe', 'paytm', 'seo', 'php', 'laravel', 'django', 'flask', 'flutter', 'swift', 'kotlin', 'android', 'ios'],
        answer: `That isn't listed on Rahul's resume, so I can't promise it. His proven work is on the <strong>MERN stack</strong>: business websites, a SaaS inventory and booking system, admin dashboards and real-time apps. If you have a requirement like this, please discuss it with him at <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>.`
      },

      /* ── MOBILE APPS ── */
      {
        weight: 1.5,
        keywords: ['mobile app', 'mobile application', 'app development', 'react native', 'native app'],
        answer: `<strong>React Native</strong> is part of Rahul's skill set. His listed project work is mainly web applications, so for a mobile app requirement please discuss the details with him at <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>.`
      },

      /* ── TIMELINE / DELIVERY ── */
      {
        keywords: ['how long will it take', 'how long would it take', 'timeline', 'delivery time', 'turnaround', 'deadline', 'how fast', 'when can you start', 'when can you deliver', 'time to build', 'project duration', 'how long will', 'how long to build', 'take to build', 'time frame', 'timeframe', 'estimated time', 'how many days', 'how many weeks', 'how many months'],
        answer: `Delivery time depends on the scope of the project, so Rahul gives estimates after understanding the requirement. Send the details to <a href="mailto:${CONTACT.email}">${CONTACT.email}</a> or use the <strong>Contact</strong> form.`
      },

      /* ── DEPLOYMENT / MAINTENANCE ── */
      {
        keywords: ['deploy', 'deployment', 'hosting', 'host', 'vercel', 'production', 'git', 'version control', 'maintenance', 'maintain', 'support', 'post-launch', 'after launch', 'bug fix', 'bug fixes', 'go live'],
        answer: `Rahul deploys and maintains applications in production. At RentalPe he deployed and maintained the SaaS application in a production environment. He uses <strong>Git and GitHub</strong> for version control and <strong>Vercel</strong> for deployment.`
      },

      /* ══════════════ TECHNICAL ══════════════ */

      /* ── REACT ── */
      {
        weight: 1.5,
        keywords: ['react', 'reactjs', 'hooks', 'jsx', 'components'],
        answer: `<strong>React.js</strong> is Rahul's main frontend library. He has used it to build:<br/><ul>
      <li>The Digital Whopper company website</li>
      <li>The custom CMS / admin dashboard</li>
      <li>The frontend of the RentalPe SaaS inventory application</li>
      <li>A real-time chat application</li>
    </ul>React Native is also part of his skill set.`
      },

      /* ── NODE.JS / API ── */
      {
        weight: 1.5,
        keywords: ['node', 'nodejs', 'express', 'expressjs', 'backend', 'back end', 'server', 'api', 'apis', 'rest', 'jwt', 'authentication', 'auth', 'postman', 'testing', 'tested'],
        answer: `Rahul builds backends with <strong>Node.js & Express.js</strong>:<br/><ul>
      <li>REST APIs with authentication and CRUD operations (15+ at Digital Whopper, 30+ at RentalPe)</li>
      <li>JWT authentication and role-based access (Admin/Staff)</li>
      <li>Real-time features using WebSockets</li>
      <li>API testing with Postman</li>
    </ul>`
      },

      /* ── REAL-TIME / WEBSOCKETS ── */
      {
        weight: 1.5,
        keywords: ['websocket', 'websockets', 'real-time', 'real time', 'realtime', 'socket', 'chat', 'notifications', 'live updates'],
        answer: `Rahul has built real-time features with <strong>WebSockets</strong>:<br/><ul>
      <li>💬 A real-time chat application with live messaging and chat history</li>
      <li>📦 Live stock updates and low-stock notifications in the RentalPe SaaS application</li>
    </ul>`
      },

      /* ── CSS / UI ── */
      {
        weight: 1.5,
        keywords: ['tailwind', 'css', 'bootstrap', 'styling', 'design', 'ui', 'frontend', 'front end', 'interface', 'responsive', 'html', 'mobile friendly'],
        answer: `On the frontend side, Rahul works with:<br/><ul>
      <li>🌬️ Tailwind CSS for responsive, utility-first styling</li>
      <li>🅱️ Bootstrap for quick, consistent layouts</li>
      <li>📱 HTML5 and CSS3 for responsive, mobile-friendly interfaces</li>
      <li>⚛️ React.js for building the UI</li>
    </ul>`
      },

      /* ── DATABASE ── */
      {
        weight: 1.5,
        keywords: ['mongodb', 'database', 'databases', 'nosql', 'mongoose', 'data', 'db'],
        answer: `Rahul's database is <strong>MongoDB</strong>. He has used it in every major project: the RentalPe SaaS application, the chat application and the CMS dashboard, working across the frontend, backend and database layers.`
      },

      /* ── TECH OUTSIDE THE CORE STACK ── */
      {
        weight: 1.5,
        keywords: ['typescript', 'next.js', 'nextjs', 'graphql', 'docker', 'aws', 'azure', 'python', 'java', 'sql', 'postgresql', 'mysql', 'postgres', 'redis', 'figma', 'devops', 'redux', 'angular', 'vue', 'kubernetes', 'jenkins', 'ci/cd', 'firebase', 'jest'],
        answer: `That isn't part of Rahul's current core stack, which is <strong>MERN</strong> (MongoDB, Express.js, React.js, Node.js) with WebSockets and REST APIs. For anything beyond that, please ask him directly at <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>.`
      },

      /* ══════════════ PERSONAL / OFF-TOPIC ══════════════ */

      /* ── PERSONAL DETAILS ── */
      {
        keywords: ['age', 'how old', 'married', 'single', 'family', 'hobby', 'hobbies', 'religion', 'birthday', 'date of birth', 'dob', 'gender', 'father', 'mother', 'address', 'home address', 'english', 'hindi', 'spoken', 'speak', 'language proficiency'],
        answer: `I only have Rahul's professional details (experience, skills, projects, education and contact). For anything personal, please ask him directly at <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>.`
      },

      /* ── THANK YOU ── */
      {
        weight: 0.6,
        keywords: ['thanks', 'thank you', 'thank', 'great', 'awesome', 'perfect', 'nice', 'cool', 'amazing', 'helpful', 'good', 'ok', 'okay', 'alright', 'got it', 'fine'],
        answer: `You're very welcome! 😊 Is there anything else you'd like to know about Rahul? I can help with his experience, skills, projects, education or how to get in touch.`
      },

      /* ── BYE ── */
      {
        keywords: ['bye', 'goodbye', 'see you', 'later', 'ciao', 'take care', 'exit', 'close'],
        answer: `Goodbye! 👋 Thanks for chatting. You can also reach Rahul directly at <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>. Have a great day! 🚀`
      },

      /* ── GENERIC "CAN YOU BUILD ..." (kept last so specific entries win ties) ── */
      {
        weight: 0.5,
        keywords: ['can you build', 'can he build', 'can rahul build', 'can he make', 'can you make', 'can he develop', 'can you develop', 'can he create', 'can you create', 'do you build', 'do you make', 'does he build', 'could you build'],
        answer: `Yes, this is the kind of work Rahul does. For example, he built:<br/><ul>
      <li>🌐 A complete <strong>company website from scratch</strong> (Digital Whopper)</li>
      <li>🌐 <strong>8+ responsive websites and web apps</strong> (Duranz)</li>
      <li>📦 A <strong>SaaS inventory and booking system</strong> for rental businesses (RentalPe)</li>
      <li>🛠️ A <strong>custom admin dashboard</strong> to manage website content</li>
    </ul>To discuss your requirement, contact him at <a href="mailto:${CONTACT.email}">${CONTACT.email}</a> or ${CONTACT.phone}.`
      },

    ];
    /* ================================================================
       END OF KNOWLEDGE BASE — Add more entries above this line
       ================================================================ */


    /* ── BOT CONFIGURATION ── */
    const BOT_CONFIG = {
      name: 'Rahul\'s Assistant',
      ownerName: 'Rahul Tak',
      // Delay in ms before bot "types" back (simulates thinking)
      typingDelay: 900,
      // Default response when no keywords match
      defaultResponse: `Sorry, I don't have that information yet. 🤔<br/><br/>You can ask me about Rahul's <strong>work experience</strong>, <strong>skills</strong>, <strong>projects</strong>, <strong>education</strong>, <strong>current company</strong>, or <strong>contact details</strong>. Type <strong>help</strong> to see example questions.<br/><br/>Or email him directly: <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>`,
    };

    /* ── STATE ── */
    let chatOpen = false;
    let messageCount = 0;
    let isTyping = false;

    /* ── OPEN / CLOSE CHAT ── */
    function toggleChat() {
      chatOpen = !chatOpen;
      const win = document.getElementById('chat-window');
      const btn = document.getElementById('chat-toggle');
      const icon = document.getElementById('chat-icon');
      const notif = document.getElementById('chat-notif');

      win.classList.toggle('open', chatOpen);
      btn.classList.toggle('open', chatOpen);
      icon.className = chatOpen ? 'fas fa-times' : 'fas fa-comment-dots';
      // Hide notification badge once opened
      if (chatOpen) {
        notif.classList.add('hidden');
        // Show welcome message only the first time
        if (messageCount === 0) {
          setTimeout(() => sendBotMessage(
            `Hello! 👋 I'm <strong>${BOT_CONFIG.ownerName}'s AI Assistant</strong>.<br/>I can answer questions about Rahul's skills, projects, experience, and more. What would you like to know?`
          ), 400);
        }
        // Focus input
        setTimeout(() => document.getElementById('chat-input').focus(), 350);
      }
    }

    /* ── SEND QUICK PILL MESSAGE ── */
    function sendQuick(text) {
      document.getElementById('chat-input').value = text;
      sendMessage();
    }

    /* ── HANDLE ENTER KEY ── */
    function handleKey(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    }

    /* ── HANDLE INPUT CHANGE (enable/disable send btn) ── */
    function handleInputChange() {
      const val = document.getElementById('chat-input').value.trim();
      document.getElementById('chat-send').disabled = val.length === 0;
    }

    /* ── MAIN SEND FUNCTION ── */
    function sendMessage() {
      const input = document.getElementById('chat-input');
      const text = input.value.trim();
      if (!text || isTyping) return;

      // Clear input immediately
      input.value = '';
      document.getElementById('chat-send').disabled = true;

      // Render user bubble
      appendUserMessage(text);

      // Find bot response
      const response = findResponse(text);

      // Show typing indicator
      showTyping(true);
      isTyping = true;

      // After delay, show bot response
      setTimeout(() => {
        showTyping(false);
        isTyping = false;
        sendBotMessage(response);
        input.focus();
      }, BOT_CONFIG.typingDelay + Math.random() * 400);
    }

    /* ── KEYWORD MATCHING ENGINE ── */
    /*
     * How it works:
     * 1. Normalise user input to lowercase
     * 2. Loop through each knowledge base entry
     * 3. Check if ANY keyword in the entry appears in the user's input
     * 4. Supports partial matching (e.g. "react" matches "reactjs")
     * 5. Returns the first matched answer, or the default response
     */
    function findResponse(userInput) {
      // Normalize: lowercase, strip punctuation and extra spaces
      const normalised = userInput.toLowerCase().replace(/[?!.,;:]/g, '').replace(/\s+/g, ' ').trim();
      const words = normalised.split(' ');

      // Common words that must never trigger a match on their own
      const STOP_WORDS = ['what', 'which', 'when', 'where', 'who', 'how', 'why', 'does', 'did', 'can', 'could',
        'you', 'your', 'yours', 'have', 'has', 'the', 'and', 'for', 'with', 'about', 'tell', 'show', 'give',
        'are', 'was', 'his', 'her', 'this', 'that', 'any', 'know', 'rahul', 'please', 'want', 'like', 'also'];

      const escapeRe = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

      let bestMatch = null;
      let bestScore = 0;

      for (const entry of KNOWLEDGE_BASE) {
        let score = 0;
        for (const keyword of entry.keywords) {
          const kw = keyword.toLowerCase();
          // Whole-word / whole-phrase match. Longer keywords also accept
          // simple endings (skill -> skills, work -> working/worked).
          const ending = kw.length >= 4 ? '(?:s|es|ed|ing|ly)?' : '';
          const re = new RegExp('(^|[^a-z0-9])' + escapeRe(kw) + ending + '([^a-z0-9]|$)');
          if (re.test(normalised)) {
            score += kw.split(' ').length * 3; // multi-word phrases score higher
          }
        }
        // Partial match: each meaningful word counts at most once per entry
        for (const word of words) {
          if (word.length > 3 && !STOP_WORDS.includes(word) &&
              entry.keywords.some(k => k.toLowerCase().includes(word))) {
            score += 1;
          }
        }
        score *= (entry.weight || 1);
        if (score > bestScore) {
          bestScore = score;
          bestMatch = entry;
        }
      }

      // Minimum score threshold to avoid false matches
      if (bestScore >= 2 && bestMatch) {
        return bestMatch.answer;
      }

      return BOT_CONFIG.defaultResponse;
    }

    /* ── RENDER USER MESSAGE ── */
    function appendUserMessage(text) {
      messageCount++;
      const msgs = document.getElementById('chat-messages');
      const time = getTime();

      // Create wrapper
      const wrap = document.createElement('div');
      wrap.className = 'user-bubble-wrap';
      wrap.innerHTML = `
    <div class="user-av">You</div>
    <div class="user-bubble">${escapeHtml(text)}</div>
  `;
      msgs.appendChild(wrap);

      // Timestamp
      const ts = document.createElement('div');
      ts.className = 'msg-time time-user';
      ts.textContent = time;
      msgs.appendChild(ts);

      scrollToBottom();
    }

    /* ── RENDER BOT MESSAGE ── */
    function sendBotMessage(htmlContent) {
      messageCount++;
      const msgs = document.getElementById('chat-messages');
      const time = getTime();

      const wrap = document.createElement('div');
      wrap.className = 'bot-bubble-wrap';
      wrap.innerHTML = `
    <div class="msg-avatar bot-av"><i class="fas fa-robot"></i></div>
    <div class="bot-bubble">${htmlContent}</div>
  `;
      msgs.appendChild(wrap);

      const ts = document.createElement('div');
      ts.className = 'msg-time time-bot';
      ts.textContent = time;
      msgs.appendChild(ts);

      scrollToBottom();
    }

    /* ── TYPING INDICATOR ── */
    function showTyping(visible) {
      const ind = document.getElementById('typing-ind');
      ind.classList.toggle('show', visible);
      if (visible) scrollToBottom();
    }

    /* ── CLEAR CHAT ── */
    function clearChat() {
      messageCount = 0;
      document.getElementById('chat-messages').innerHTML = '';
      // Re-send welcome after clear
      setTimeout(() => sendBotMessage(
        `Chat cleared! 🧹 How can I help you today? Ask me about Rahul's <strong>skills</strong>, <strong>projects</strong>, <strong>services</strong>, or <strong>contact details</strong>.`
      ), 200);
    }

    /* ── HELPERS ── */
    function scrollToBottom() {
      const msgs = document.getElementById('chat-messages');
      setTimeout(() => { msgs.scrollTop = msgs.scrollHeight; }, 50);
    }

    function getTime() {
      return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    // Prevent XSS for user input (bot responses use HTML intentionally)
    function escapeHtml(text) {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    // Initialise send button as disabled
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('chat-send').disabled = true;
    });