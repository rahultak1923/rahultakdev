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
    const KNOWLEDGE_BASE = [

      /* ── GREETINGS ── */
      {
        keywords: ['hello', 'hi', 'hey', 'howdy', 'hola', 'greetings', 'good morning', 'good afternoon', 'good evening', 'sup', 'what\'s up'],
        answer: `Hey there! 👋 I'm <strong>Rahul's AI Assistant</strong>. I can answer questions about Rahul's skills, experience, projects, services, and how to get in touch. What would you like to know?`
      },

      /* ── WHO IS RAHUL ── */
      {
        keywords: ['who are you', 'who is rahul', 'about you', 'introduce yourself', 'tell me about', 'about rahul', 'your name', 'who made you'],
        answer: `I'm the AI assistant for <strong>Rahul Tak</strong> — a passionate <strong>Full-Stack Engineer & UI/UX Developer</strong> based in Jaipur, Rajasthan, India 🇮🇳<br/><br/>Rahul has <strong>2+ years</strong> of experience building fast, scalable web applications and pixel-perfect interfaces. He bridges design and engineering — turning ideas into elegant digital products.`
      },

      /* ── SKILLS ── */
      {
        keywords: ['skills', 'tech stack', 'technologies', 'what do you know','tell me about your skills','tell me about rahul skills', 'expertise', 'programming', 'languages', 'tools', 'frameworks', 'what can you do', 'tech'],
        answer: `Rahul's core tech stack includes:<br/><ul>
      <li>⚛️ <strong>Frontend:</strong> React.js, Next.js, TypeScript, HTML5, CSS3</li>
      <li>🎨 <strong>CSS Frameworks:</strong> Tailwind CSS, Bootstrap</li>
      <li>🟢 <strong>Backend:</strong> Node.js, Express.js, GraphQL</li>
      <li>🗄️ <strong>Databases:</strong> MongoDB, PostgreSQL, Redis</li>
      <li>☁️ <strong>DevOps:</strong> Docker, AWS, GitHub Actions, CI/CD</li>
      <li>🎨 <strong>Design:</strong> Figma, UI/UX Prototyping</li>
      <li>🔧 <strong>Others:</strong> Redux, Socket.io, REST APIs, JWT</li>
    </ul>`
      },

      /* ── EXPERIENCE ── */
      {
        keywords: ['experience', 'work history', 'career', 'companies', 'jobs', 'worked at', 'previous', 'background', 'professional'],
        answer: `Rahul's professional journey:<br/><ul>
      <li>💼 <strong>TechNova Solutions</strong> — Sr. Full-Stack Dev (2022–Present)</li>
      <li>🌐 <strong>Infosys Limited</strong> — UI/UX Developer (2020–2022)</li>
      <li>💳 <strong>Razorpay</strong> — Frontend Developer (2019–2020)</li>
      <li>🔧 <strong>Wipro Technologies</strong> — Jr. Developer Intern (2018–2019)</li>
    </ul>Over <strong>5 years</strong> of industry experience across fintech, enterprise SaaS, and e-commerce.`
      },

      /* ── PROJECTS ── */
      {
        keywords: ['projects', 'portfolio', 'work', 'built', 'created', 'made', 'examples', 'showcase', 'apps', 'applications', 'demo'],
        answer: `Here are some notable projects Rahul has built:<br/><ul>
      <li>🛒 <strong>E-Commerce Platform</strong> — MERN stack with Razorpay & admin dashboard</li>
      <li>📊 <strong>SaaS Analytics Dashboard</strong> — Real-time charts with Chart.js</li>
      <li>🎨 <strong>Design System Library</strong> — 80+ React components with Storybook</li>
      <li>💬 <strong>Real-Time Chat App</strong> — Socket.io with rooms & file sharing</li>
      <li>📱 <strong>FinTech Mobile App UI</strong> — Figma prototype with micro-interactions</li>
    </ul>Click the <strong>Work</strong> page to see all 48+ projects!`
      },

      /* ── SERVICES ── */
      {
        keywords: ['services', 'offer', 'what do you do', 'provide', 'help with', 'offerings', 'can you', 'build', 'develop', 'create'],
        answer: `Rahul offers these services:<br/><ul>
      <li>🔷 <strong>Full-Stack Development</strong> — React + Node.js + MongoDB/PostgreSQL</li>
      <li>🎨 <strong>UI/UX Design & Dev</strong> — Figma prototypes to production React</li>
      <li>📱 <strong>Responsive Web Design</strong> — Mobile-first, cross-browser</li>
      <li>⚡ <strong>API & Backend Services</strong> — REST, GraphQL, JWT, Redis</li>
      <li>☁️ <strong>Cloud & DevOps</strong> — Docker, AWS, CI/CD pipelines</li>
      <li>🚀 <strong>Performance Optimization</strong> — Core Web Vitals, SEO, PWA</li>
    </ul>Visit the <strong>Services</strong> page for pricing details!`
      },

      /* ── PRICING ── */
      {
        keywords: ['price', 'pricing', 'cost', 'rate', 'how much', 'charges', 'fee', 'budget', 'quote', 'estimate', 'rupees', 'money', 'pay'],
        answer: `Rahul's project pricing:<br/><ul>
      <li>🟢 <strong>Starter</strong> — ₹15,000 (Landing pages, 5 pages, 2 revisions)</li>
      <li>🔵 <strong>Professional</strong> — ₹45,000 (Full-stack app, custom UI, 3 months support)</li>
      <li>🟣 <strong>Enterprise</strong> — Custom (Large-scale SaaS, unlimited revisions)</li>
    </ul>For an exact quote, <strong>contact Rahul</strong> with your project details!`
      },

      /* ── CONTACT ── */
      {
        keywords: ['contact', 'reach', 'email', 'phone', 'call', 'message', 'get in touch', 'hire', 'connect', 'talk', 'meet', 'discuss', 'whatsapp'],
        answer: `You can reach Rahul through:<br/><ul>
      <li>📧 <strong>Email:</strong> <a href="mailto:rahultak1923@gmail.com">rahultak1923@gmail.com</a></li>
      <li>📞 <strong>Phone:</strong> +91 98765 43210</li>
      <li>📍 <strong>Location:</strong> Jaipur, Rajasthan, India</li>
      <li>🕐 <strong>Hours:</strong> Mon–Fri, 9 AM – 7 PM IST</li>
    </ul>Or use the <strong>Contact</strong> page to send a message directly! Response within <strong>24 hours</strong>.`
      },

      /* ── LOCATION ── */
      {
        keywords: ['location', 'where are you', 'city', 'jaipur', 'india', 'rajasthan', 'based', 'remote', 'onsite', 'timezone'],
        answer: `Rahul is based in <strong>Jaipur, Rajasthan, India</strong> 🇮🇳 (UTC+5:30 IST).<br/><br/>He's fully available for <strong>remote work worldwide</strong> and open to on-site projects in Rajasthan and NCR region. Time zone overlaps are usually managed flexibly.`
      },

      /* ── EDUCATION ── */
      {
        keywords: ['education', 'degree', 'college', 'university', 'study', 'qualification', 'academic', 'btech', 'b.tech', 'computer science'],
        answer: `Rahul's educational background:<br/><ul>
      <li>🎓 <strong>B.Tech — Computer Science</strong><br/>Rajasthan Technical University, Kota (2014–2018)</li>
      <li>🏆 <strong>AWS Certified Developer</strong> — Associate (2023)</li>
      <li>🏆 <strong>Google UX Design Certificate</strong> — Coursera (2022)</li>
      <li>🏆 <strong>Meta Front-End Developer</strong> — Coursera (2021)</li>
    </ul>`
      },

      /* ── REACT ── */
      {
        keywords: ['react', 'reactjs', 'react.js', 'hooks', 'jsx', 'components', 'redux', 'context'],
        answer: `Yes! React.js is Rahul's <strong>primary frontend framework</strong>. He has 5+ years of production experience with:<br/><ul>
      <li>React 18 with Hooks (useState, useEffect, useContext, etc.)</li>
      <li>Next.js for SSR and static sites</li>
      <li>Redux Toolkit for state management</li>
      <li>React Query for server state</li>
      <li>Component library creation with Storybook</li>
    </ul>`
      },

      /* ── NODE.JS ── */
      {
        keywords: ['node', 'nodejs', 'node.js', 'express', 'backend', 'server', 'api', 'rest'],
        answer: `Rahul builds robust backends with <strong>Node.js & Express.js</strong>:<br/><ul>
      <li>RESTful & GraphQL API design</li>
      <li>JWT / OAuth2 authentication</li>
      <li>Rate limiting, caching with Redis</li>
      <li>WebSocket real-time features via Socket.io</li>
      <li>Swagger/OpenAPI documentation</li>
      <li>Unit & integration testing with Jest</li>
    </ul>`
      },

      /* ── TAILWIND / CSS ── */
      {
        keywords: ['tailwind', 'css', 'bootstrap', 'styling', 'design', 'ui', 'ux', 'frontend', 'interface', 'figma', 'animation'],
        answer: `Rahul is a <strong>CSS & design-systems expert</strong>:<br/><ul>
      <li>🌬️ Tailwind CSS — utility-first, responsive design</li>
      <li>🅱️ Bootstrap — rapid prototyping & enterprise UIs</li>
      <li>🎨 Figma — wireframes, prototypes, design systems</li>
      <li>✨ CSS animations, GSAP, Framer Motion</li>
      <li>♿ Accessibility (WCAG 2.1 AA) compliant interfaces</li>
    </ul>`
      },

      /* ── MONGODB / DATABASE ── */
      {
        keywords: ['mongodb', 'database', 'sql', 'postgresql', 'mysql', 'postgres', 'nosql', 'data'],
        answer: `Rahul works with multiple database systems:<br/><ul>
      <li>🟢 <strong>MongoDB</strong> — NoSQL, Mongoose ODM, Atlas</li>
      <li>🐘 <strong>PostgreSQL</strong> — Relational, Prisma/Sequelize ORM</li>
      <li>⚡ <strong>Redis</strong> — Caching, sessions, pub/sub</li>
      <li>📊 <strong>Firebase</strong> — Real-time, auth, hosting</li>
    </ul>He designs efficient schemas and optimises queries for high-traffic applications.`
      },

      /* ── AVAILABILITY ── */
      {
        keywords: ['available', 'availability', 'freelance', 'fulltime', 'full-time', 'part-time', 'contract', 'job', 'open to', 'hire', 'opportunity'],
        answer: `Rahul is currently <strong>available</strong> for:<br/><ul>
      <li>✅ Freelance projects (short & long term)</li>
      <li>✅ Full-time positions</li>
      <li>✅ Contract / consulting work</li>
      <li>✅ Remote work worldwide</li>
    </ul>Best way to connect: <a href="mailto:rahultak1923@gmail.com">rahultak1923@gmail.com</a> or use the Contact page!`
      },

      /* ── SOCIAL MEDIA / LINKS ── */
      {
        keywords: ['github', 'linkedin', 'twitter', 'social', 'youtube', 'instagram', 'dribbble', 'links', 'profiles', 'behance'],
        answer: `Find Rahul on social media:<br/><ul>
      <li>🐙 <strong>GitHub</strong> — Open source & personal projects</li>
      <li>💼 <strong>LinkedIn</strong> — Professional profile & recommendations</li>
      <li>🐦 <strong>Twitter/X</strong> — Tech thoughts & updates</li>
      <li>📺 <strong>YouTube</strong> — Coding tutorials & walkthroughs</li>
      <li>🎨 <strong>Dribbble/Behance</strong> — UI/UX design work</li>
    </ul>All links are in the <strong>Contact</strong> section of this website!`
      },

      /* ── TESTIMONIALS ── */
      {
        keywords: ['reviews', 'testimonials', 'feedback', 'clients', 'rating', 'recommend', 'trust', 'customers'],
        answer: `Rahul has received ⭐⭐⭐⭐⭐ reviews from clients:<br/><ul>
      <li><strong>Arjun Kumar</strong> (CEO, ShopNow India): "Delivered an exceptional e-commerce platform ahead of schedule!"</li>
      <li><strong>Priya Sharma</strong> (PM, FinTech): "Incredible attention to detail and excellent communication."</li>
      <li><strong>Rohit Verma</strong> (CTO, Logistics): "Page load dropped from 8s to 1.2s. ROI was 10x!"</li>
    </ul>Check the <strong>Experience</strong> page for full testimonials.`
      },

      /* ── THE LAB PAGE ── */
      {
        keywords: ['lab', 'experiments', 'creative', 'canvas', 'animation', 'css tricks', 'demos', 'playground'],
        answer: `The <strong>✦ Lab page</strong> is Rahul's creative coding playground! It features:<br/><ul>
      <li>🌐 Pure CSS 3D Globe animation</li>
      <li>💡 Neon glow & liquid morph effects</li>
      <li>🎵 CSS audio visualizer bars</li>
      <li>🎨 Interactive particle canvas system</li>
      <li>📐 Live Lissajous curve generator</li>
      <li>🕸️ Skill radar chart (SVG)</li>
    </ul>Click <strong>✦ Lab</strong> in the navigation to explore!`
      },

      /* ── TIMELINE / YEARS ── */
      {
        keywords: ['how many years', 'since when', 'when did', 'how long', 'years of experience', 'started'],
        answer: `Rahul started his professional career in <strong>2018</strong> as a Junior Developer at Wipro Technologies, and has been building production-grade software for <strong>5+ years</strong> across 4 companies and 48+ projects.`
      },

      /* ── THANK YOU ── */
      {
        keywords: ['thanks', 'thank you', 'thank', 'great', 'awesome', 'perfect', 'nice', 'cool', 'amazing', 'helpful', 'good'],
        answer: `You're very welcome! 😊 Is there anything else you'd like to know about Rahul? I'm happy to help with questions about his skills, projects, services, or how to get in touch!`
      },

      /* ── BYE ── */
      {
        keywords: ['bye', 'goodbye', 'see you', 'later', 'ciao', 'take care', 'exit', 'close'],
        answer: `Goodbye! 👋 Thanks for chatting. Feel free to come back anytime. You can also reach Rahul directly at <a href="mailto:rahultak1923@gmail.com">rahultak1923@gmail.com</a>. Have a great day! 🚀`
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
      defaultResponse: `Sorry, I don't have information about that yet. 🤔<br/><br/>Try asking about Rahul's <strong>skills</strong>, <strong>projects</strong>, <strong>experience</strong>, <strong>services</strong>, or <strong>contact details</strong>.<br/><br/>Or email directly: <a href="mailto:rahultak1923@gmail.com">rahultak1923@gmail.com</a>`,
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
      // Normalize: lowercase and strip punctuation
      const normalised = userInput.toLowerCase().replace(/[?!.,;:]/g, '').trim();

      // Score each knowledge base entry
      let bestMatch = null;
      let bestScore = 0;

      for (const entry of KNOWLEDGE_BASE) {
        let score = 0;
        for (const keyword of entry.keywords) {
          const kw = keyword.toLowerCase();
          // Exact phrase match — higher score
          if (normalised.includes(kw)) {
            score += kw.split(' ').length * 2; // multi-word phrases score higher
          }
          // Individual word partial match
          const words = normalised.split(/\s+/);
          for (const word of words) {
            if (word.length > 2 && kw.includes(word)) {
              score += 1;
            }
          }
        }
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