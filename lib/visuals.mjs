// MØNTAN1 Academy :: visual component library
// Everything here renders from code: no image files, no external assets.
// Tool logos are simplified monochrome marks (currentColor); mockups and
// diagrams are HTML/SVG in the paper/ink/red/teal system.

// ── tool logos ──────────────────────────────────────────────
// Simplified, recognizable brand marks. Monochrome (inherit color).
const LOGOS = {
  github: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>`,
  vscode: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.4 2.1 9.9 9.3 5.3 5.8l-1.7.8 3.9 5.4-3.9 5.4 1.7.8 4.6-3.5 7.5 7.2 3-1.5V3.6l-3-1.5zm.1 4.6v10.6l-5.6-5.3 5.6-5.3z"/></svg>`,
  claude: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1.5 13.9 8l4.7-4.8 1.3 1.3L15.1 9.3l6.4-.9.3 1.8-6.4.9 5.8 2.9-.9 1.7-5.8-2.9 3.4 5.5-1.6 1-3.4-5.5-.6 6.5-1.8-.2.6-6.5-4.7 4.5-1.3-1.3 4.7-4.5-6.4 1.3-.4-1.8 6.4-1.3-5.9-2.7.8-1.7 5.9 2.7L8 3l1.7-.8 2.3 6V1.5z"/></svg>`,
  netlify: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2 21.8 12 12 21.8 2.2 12 12 2.2zm0 3.6L7.6 10v4l4.4 4.2L16.4 14v-4L12 5.8zm0 3.3 2.5 2.5L12 14.1 9.5 11.6 12 9.1z"/></svg>`,
  replit: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7z"/></svg>`,
  webflow: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 5 15.6 19h-3.1l2.7-5.9h-.1c-1.4 2.9-3.6 4.9-6.6 5.9H4.8L9 8.9h3.1l-2.7 6.1c1.4-2.9 3.7-4.9 6.7-6.1L17.3 5H22z"/></svg>`,
  airtable: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.3 3.3 2.6 6.9c-.5.2-.5.9 0 1.1l8.7 3.4c.4.2.9.2 1.3 0l8.7-3.4c.5-.2.5-.9 0-1.1l-8.7-3.6c-.4-.2-.9-.2-1.3 0zM21.5 9.7l-8 3.1c-.2.1-.3.3-.3.5v7.9c0 .4.4.6.7.5l8-3.1c.2-.1.3-.3.3-.5v-7.9c0-.4-.4-.6-.7-.5zM10.5 13.3 2.9 10c-.3-.1-.7.1-.7.5v7.5c0 .2.1.4.3.5l7.6 3.3c.3.1.7-.1.7-.5v-7.5c0-.2-.1-.4-.3-.5z"/></svg>`,
  make: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 4h2.4v16H4V4zm4.5 0H11l2 9 2-9h2.5l-3.2 16h-2.6L8.5 4zM19.6 4H22v16h-2.4V4z"/></svg>`,
  // generic concept glyphs
  browser: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 8h18"/><circle cx="6" cy="6" r=".6" fill="currentColor"/><circle cx="8.4" cy="6" r=".6" fill="currentColor"/></svg>`,
  terminal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="1"/><path d="M7 9l3 3-3 3M13 15h4"/></svg>`,
  api: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M8 7 3 12l5 5M16 7l5 5-5 5M13 5l-2 14"/></svg>`,
  json: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M8 4C5 4 6 9 4 12c2 3 1 8 4 8M16 4c3 0 2 5 4 8-2 3-1 8-4 8"/></svg>`,
};

const LOGO_LABELS = {
  github: 'GitHub', vscode: 'VS Code', claude: 'Claude', netlify: 'Netlify',
  replit: 'Replit', webflow: 'Webflow', airtable: 'Airtable', make: 'Make.com',
  browser: 'Browser', terminal: 'Terminal', api: 'API', json: 'JSON',
};

// map the comma-separated `tools` string to logo keys
const TOOL_MAP = [
  [/devtools|browser/i, 'browser'],
  [/vs ?code/i, 'vscode'],
  [/github|^git$|, git/i, 'github'],
  [/claude/i, 'claude'],
  [/netlify/i, 'netlify'],
  [/replit/i, 'replit'],
  [/webflow/i, 'webflow'],
  [/airtable/i, 'airtable'],
  [/make/i, 'make'],
];

export function logo(key) {
  return LOGOS[key] || '';
}

// A rail of recognizable tool logos under the lesson header.
export function toolRail(toolsString) {
  const keys = [];
  for (const part of toolsString.split(',')) {
    for (const [re, key] of TOOL_MAP) {
      if (re.test(part) && !keys.includes(key)) { keys.push(key); break; }
    }
  }
  if (!keys.length) return '';
  const chips = keys.map(k =>
    `<span class="tool-chip"><span class="tl">${LOGOS[k]}</span>${LOGO_LABELS[k]}</span>`
  ).join('\n      ');
  return `  <div class="tool-rail reveal">
    <span class="tr-label">Tools</span>
      ${chips}
  </div>`;
}

// ── mockups (code-drawn "screenshots") ──────────────────────
function chrome(label, body, kind = 'browser') {
  const dots = `<span class="wd"></span><span class="wd"></span><span class="wd"></span>`;
  const bar = kind === 'browser'
    ? `<div class="mk-bar">${dots}<span class="mk-url">${label}</span></div>`
    : `<div class="mk-bar mk-term">${dots}<span class="mk-title">${label}</span></div>`;
  return `<figure class="mock reveal">${bar}<div class="mk-body ${kind === 'terminal' ? 'mk-body-term' : ''}">${body}</div></figure>`;
}

const VISUALS = {
  // SETUP :: the five tools, as a logo grid
  toolGrid() {
    const items = [
      ['github', 'Your code\'s home'],
      ['vscode', 'Where you write'],
      ['claude', 'Your co-pilot'],
      ['netlify', 'Ship to the web'],
      ['replit', 'Server in the browser'],
    ];
    return `<div class="tool-grid reveal">
${items.map(([k, sub]) => `      <div class="tg-cell"><span class="tg-logo">${LOGOS[k]}</span><span class="tg-name">${LOGO_LABELS[k]}</span><span class="tg-sub">${sub}</span></div>`).join('\n')}
    </div>`;
  },

  // 01 :: a browser window rendering a tiny page
  browserHello() {
    return chrome('https://yourname.com/about', `
      <div class="hello-page">
        <h3>About Me</h3>
        <p>Hi, I'm building things on the internet.</p>
        <span class="hello-tag">&lt;h1&gt; &lt;p&gt; &lt;a&gt;</span>
      </div>`);
  },

  // 02 :: before / after CSS, two stacked cards
  beforeAfter() {
    return `<div class="ba reveal">
      <figure class="ba-col"><figcaption>Before :: HTML only</figcaption>
        <div class="ba-card ba-plain"><b>About Me</b><p>Hi, I'm building things.</p><a>Contact</a></div>
      </figure>
      <div class="ba-arrow">CSS &rarr;</div>
      <figure class="ba-col"><figcaption>After :: styled</figcaption>
        <div class="ba-card ba-styled"><b>About Me</b><p>Hi, I'm building things.</p><a>Contact</a></div>
      </figure>
    </div>`;
  },

  // 03 :: a click interaction, button + revealed panel
  clickDemo() {
    return chrome('quiz.html', `
      <div class="click-demo">
        <button class="cd-btn">Reveal answer</button>
        <div class="cd-panel">JavaScript listens for the click, then shows this.</div>
        <code class="cd-code">btn.addEventListener('click', show)</code>
      </div>`);
  },

  // 05 :: deploy pipeline
  deployPipeline() {
    return pipeline('Deploy pipeline', [
      ['vscode', 'Write', 'on your laptop'],
      ['github', 'Push', 'git commit'],
      ['netlify', 'Build', 'auto deploy'],
      ['browser', 'Live', 'on the internet'],
    ]);
  },

  // 06 :: landing page wireframe
  landingWire() {
    return chrome('your-idea.com', `
      <div class="wire">
        <div class="wire-nav"><span class="wb sm"></span><span class="wire-spacer"></span><span class="wb pill"></span></div>
        <div class="wire-hero"><span class="wb h1"></span><span class="wb h1 short"></span><span class="wb cta"></span></div>
        <div class="wire-row"><span class="wb box"></span><span class="wb box"></span><span class="wb box"></span></div>
      </div>`);
  },

  // 07 :: API request / response
  apiExchange() {
    return `<div class="exchange reveal">
      <div class="ex-side ex-you"><span class="ex-tag">Your page</span><code>fetch('weather?city=Morgantown')</code></div>
      <div class="ex-mid"><span class="ex-arrow">request &rarr;</span><span class="ex-arrow back">&larr; response</span></div>
      <div class="ex-side ex-api"><span class="ex-tag">${LOGOS.api} The API</span><code>{ "tempF": 72, "sky": "clear" }</code></div>
    </div>`;
  },

  // 08 :: AI chat UI
  chatMock() {
    return chrome('your-chatbot.com', `
      <div class="chat">
        <div class="ch-row ch-bot"><span class="ch-who">AI</span><span class="ch-bubble">Hey, I'm shaped by a system prompt. What can I help build?</span></div>
        <div class="ch-row ch-you"><span class="ch-bubble">Explain APIs in one line.</span><span class="ch-who">You</span></div>
        <div class="ch-row ch-bot"><span class="ch-who">AI</span><span class="ch-bubble">A menu of things another computer will do for you.</span></div>
        <div class="ch-input"><span class="ch-ph">Type a message...</span><span class="ch-send">Send</span></div>
      </div>`);
  },

  // 09 :: code vs no-code decision
  decision() {
    return `<div class="decision reveal">
      <div class="dc-q">Build it with...</div>
      <div class="dc-branches">
        <div class="dc-col"><span class="dc-h">Code</span><ul><li>full control</li><li>custom logic</li><li>portable</li></ul></div>
        <div class="dc-vs">vs</div>
        <div class="dc-col"><span class="dc-h">${LOGOS.webflow}${LOGOS.airtable} No-code</span><ul><li>fast to ship</li><li>visual</li><li>managed</li></ul></div>
      </div>
      <div class="dc-foot">Hybrid stack :: use each where it wins</div>
    </div>`;
  },

  // 10 :: automation pipeline
  automation() {
    return pipeline('Automation', [
      ['api', 'Trigger', 'webhook fires'],
      ['make', 'Process', 'Make.com steps'],
      ['claude', 'AI step', 'summarize'],
      ['terminal', 'Action', 'send the digest'],
    ]);
  },

  // 11 :: wireframe-first scoping
  scope() {
    return `<div class="scope reveal">
      <div class="sc-step"><span class="sc-n">1</span><span>Scope it small</span></div>
      <div class="sc-arrow">&rarr;</div>
      <div class="sc-step"><span class="sc-n">2</span><span>Wireframe</span></div>
      <div class="sc-arrow">&rarr;</div>
      <div class="sc-step"><span class="sc-n">3</span><span>Build</span></div>
      <div class="sc-arrow">&rarr;</div>
      <div class="sc-step"><span class="sc-n">4</span><span>Test</span></div>
      <div class="sc-arrow">&rarr;</div>
      <div class="sc-step sc-ship"><span class="sc-n">5</span><span>Ship</span></div>
    </div>`;
  },

  // 12 :: portfolio grid
  portfolio() {
    const tiles = ['About page', 'Quiz', 'Portfolio', 'Landing page', 'Weather app', 'AI chatbot', 'Automation', 'Capstone'];
    return chrome('yourname.com', `
      <div class="pf-grid">
${tiles.map(t => `        <div class="pf-tile"><span class="pf-thumb"></span><span class="pf-name">${t}</span></div>`).join('\n')}
      </div>`);
  },
};

// reusable horizontal pipeline of logo steps
function pipeline(title, steps) {
  const cells = steps.map(([k, label, sub], i) => `
        <div class="pl-step">
          <span class="pl-logo">${LOGOS[k] || ''}</span>
          <span class="pl-label">${label}</span>
          <span class="pl-sub">${sub}</span>
        </div>${i < steps.length - 1 ? '<span class="pl-arrow">&rarr;</span>' : ''}`).join('');
  return `<figure class="pipeline reveal"><figcaption>${title}</figcaption><div class="pl-track">${cells}</div></figure>`;
}

// key visual injected after the objectives box, by section id
export function keyVisual(id) {
  const map = {
    'setup': VISUALS.toolGrid,
    'section-01': VISUALS.browserHello,
    'section-02': VISUALS.beforeAfter,
    'section-03': VISUALS.clickDemo,
    'section-05': VISUALS.deployPipeline,
    'section-06': VISUALS.landingWire,
    'section-07': VISUALS.apiExchange,
    'section-08': VISUALS.chatMock,
    'section-09': VISUALS.decision,
    'section-10': VISUALS.automation,
    'section-11': VISUALS.scope,
    'section-12': VISUALS.portfolio,
  };
  return map[id] ? `\n  ${map[id]()}\n` : '';
}
