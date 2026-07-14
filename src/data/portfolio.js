import magnifierPanel from '../assets/images/magPanel.PNG'
import magnifierUnzoomed from '../assets/images/unzoomed.jpg'
import magnifierZoomed from '../assets/images/zoomed.jpg'

export const profile = {
  name: 'Qi Pan',
  initials: 'QP',
  role: 'Software Engineer',
  location: 'New York',
  email: 'qip7228@gmail.com',
  github: 'https://github.com/gobrin111',
  linkedin: 'https://www.linkedin.com/in/qi-p-b39150206/',
  introduction:
    'Hi, I set up this page mainly to organize some projects that I thought were interesting and worth sharing.',
}

export const projects = [
  {
    number: '01',
    title: 'Realtime Screen Magnification Tool',
    repository: 'https://github.com/gobrin111/ScreenMagnifier',
    stack: ['Python', 'OpenGL', 'Win32 API'],
    description:
      'A GPU-accelerated desktop magnifier running at 60 FPS, designed to reduce eye strain in high-field-of-view applications.',
    highlights: [
      'Implemented a GLSL Catmull–Rom bicubic interpolation shader for 6× upscaling with 75% fewer texture fetches.',
      'Built always-on-top layering and screen-capture exclusion with the Win32 compositing pipeline.',
    ],
    details: {
      heading: 'Screen magnification for gaming',
      body: 'To reduce physical strain while playing certain games, this application provides a responsive magnification solution.',
      images: [
        {
          src: magnifierPanel,
          alt: 'Control panel interface for the realtime screen magnification tool',
          caption: 'Magnification control panel',
        },
        {
          images: [
            {
              src: magnifierUnzoomed,
              alt: 'Original screen content before realtime magnification',
              label: 'Before',
            },
            {
              src: magnifierZoomed,
              alt: 'Screen content enlarged by the realtime magnification tool',
              label: 'After',
            },
          ],
          caption: 'Unzoomed / magnified comparison',
        },
      ],
    },
  },
  {
    number: '02',
    title: 'Campus Restaurant API',
    repository: 'https://github.com/gobrin111/replace-with-restaurant-api-repository',
    stack: ['Python', 'PHP', 'MySQL'],
    description:
      'A performance-focused restaurant data API optimized for efficient responses under concurrent demand.',
    highlights: [
      'Reduced redundant database calls by 40% through server-side response caching.',
      'Compressed payloads from 2.1 MB to 340 KB across 16 endpoints and optimized SQL with indexing and normalization.',
    ],
    details: {
      heading: 'Project details coming soon',
      body: 'This space will hold a deeper look at the API architecture, performance improvements, implementation process, and results.',
      images: [
        { caption: 'Primary project image' },
        { caption: 'Architecture image' },
      ],
    },
  },
]

export const experience = {
  role: 'Undergraduate Researcher',
  organization: 'GraSPI Material Processing Software',
  location: 'Buffalo, NY',
  period: 'Sep 2024 — Dec 2024',
  summary:
    'Translated a graph-based C++/C microstructure analysis tool into Python and helped validate its correctness and performance on graphs exceeding one million nodes.',
  achievements: [
    'Improved array computation runtime by an order of magnitude with NumPy vectorization and memory-efficient array handling.',
    'Benchmarked graph libraries across performance, memory use, and API usability.',
    'Built automated correctness-report PDFs for more than 10 test cases.',
    'Earned second place among 80+ teams at UB’s 13th Bi-annual CSE Demo Day.',
  ],
}

export const education = [
  {
    school: 'New York University',
    program: 'M.S. in Data Science',
    period: '2026 — 2028',
  },
  {
    school: 'University at Buffalo',
    program: 'B.S. in Computer Science · GPA 3.8/4.0',
    period: '2022 — 2025',
  },
]

export const skills = [
  'Java',
  'JavaScript',
  'Python',
  'SQL',
  'REST APIs',
  'WebSockets',
  'Flask',
  'FastAPI',
  'Django',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'NumPy',
  'Docker',
  'Git',
]
