document.addEventListener('DOMContentLoaded', () => {
  // --- State Variables ---
  let currentTheme = 'exact';
  let activeTab = 'banner';

  // Theme configuration colors
  const themeColors = {
    exact: {
      primary: '#e31b23',
      secondary: '#0051c8',
      accent: '#ffffff',
      textColor: '#ffffff',
      glowPrimary: '#e31b23',
      glowSecondary: '#0051c8',
      bgGradStart: '#7a0010',
      bgGradStop: '#b80f22',
      bgGradEnd: '#e31b23',
      streakRingColor: 'e31b23',
      streakFireColor: 'e31b23',
      streakSideColor: '0051c8',
      statsTitleColor: 'e31b23',
      statsIconColor: '0051c8',
      statsBgColor: '0d1117',
      capsuleGrad: 'e31b23,0051c8'
    },
    classic: {
      primary: '#E23636', // Spidey Red
      secondary: '#0051C8', // Spidey Blue
      accent: '#00f5ff',
      textColor: '#ffffff',
      glowPrimary: '#ff3366',
      glowSecondary: '#0066ff',
      bgGradStart: '#0b0d19',
      bgGradStop: '#07080f',
      bgGradEnd: '#14061a',
      streakRingColor: 'E23636',
      streakFireColor: 'E23636',
      streakSideColor: '0051C8',
      statsTitleColor: 'E23636',
      statsIconColor: '0051C8',
      statsBgColor: '0d1117',
      capsuleGrad: 'E23636,0051C8'
    },
    miles: {
      primary: '#ff0044', // Spray Neon Red
      secondary: '#00ffcc', // Glitch Cyan
      accent: '#ffe600', // Venom strike yellow
      textColor: '#ffffff',
      glowPrimary: '#ff0044',
      glowSecondary: '#00ffcc',
      bgGradStart: '#050608',
      bgGradStop: '#0c0e12',
      bgGradEnd: '#180408',
      streakRingColor: 'ff0044',
      streakFireColor: 'ff0044',
      streakSideColor: '00ffcc',
      statsTitleColor: 'ff0044',
      statsIconColor: '00ffcc',
      statsBgColor: '050608',
      capsuleGrad: 'ff0044,00ffcc'
    },
    gwen: {
      primary: '#ff2e93', // Gwen Neon Pink
      secondary: '#00f5ff', // Teal/Cyan
      accent: '#ffffff',
      textColor: '#ffffff',
      glowPrimary: '#ff2e93',
      glowSecondary: '#00f5ff',
      bgGradStart: '#0f0d1a',
      bgGradStop: '#161326',
      bgGradEnd: '#280c1e',
      streakRingColor: 'ff2e93',
      streakFireColor: 'ff2e93',
      streakSideColor: '00f5ff',
      statsTitleColor: 'ff2e93',
      statsIconColor: '00f5ff',
      statsBgColor: '0b0c10',
      capsuleGrad: 'ff2e93,00f5ff'
    },
    venom: {
      primary: '#a020f0', // Venom Purple
      secondary: '#ffffff', // White details
      accent: '#111111',
      textColor: '#ffffff',
      glowPrimary: '#a020f0',
      glowSecondary: '#ffffff',
      bgGradStart: '#040208',
      bgGradStop: '#080512',
      bgGradEnd: '#140026',
      streakRingColor: 'a020f0',
      streakFireColor: 'a020f0',
      streakSideColor: 'ffffff',
      statsTitleColor: 'a020f0',
      statsIconColor: 'ffffff',
      statsBgColor: '040208',
      capsuleGrad: 'a020f0,ffffff'
    }
  };

  // --- DOM Elements ---
  const body = document.body;
  const profileForm = document.getElementById('profile-form');
  const themeButtons = document.querySelectorAll('.theme-btn');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const bannerTab = document.getElementById('banner-tab-content');
  const readmeTab = document.getElementById('readme-tab-content');
  const svgContainer = document.getElementById('svg-preview-container');
  const markdownOutput = document.getElementById('markdown-output-code');
  const copyMarkdownBtn = document.getElementById('copy-markdown-btn');
  const downloadSvgBtn = document.getElementById('download-svg-btn');
  const downloadPngBtn = document.getElementById('download-png-btn');

  // Form Inputs
  const usernameInput = document.getElementById('username');
  const nameInput = document.getElementById('hero-name');
  const titleInput = document.getElementById('hero-title');
  const mottoInput = document.getElementById('hero-motto');
  const originInput = document.getElementById('origin-story');
  const bullet1Input = document.getElementById('origin-bullet1');
  const bullet2Input = document.getElementById('origin-bullet2');
  const bullet3Input = document.getElementById('origin-bullet3');
  const skillsInput = document.getElementById('tech-skills');
  const p1Title = document.getElementById('p1-title');
  const p1Desc = document.getElementById('p1-desc');
  const p2Title = document.getElementById('p2-title');
  const p2Desc = document.getElementById('p2-desc');
  const p3Title = document.getElementById('p3-title');
  const p3Desc = document.getElementById('p3-desc');

  // Readme Preview Elements
  const prevTitle = document.getElementById('readme-prev-title');
  const prevDesc = document.getElementById('readme-prev-desc');
  const prevH3 = document.getElementById('readme-prev-h3');
  const prevOrigin = document.getElementById('readme-prev-origin');
  const prevBullet1 = document.getElementById('readme-prev-bullet1');
  const prevBullet2 = document.getElementById('readme-prev-bullet2');
  const prevBullet3 = document.getElementById('readme-prev-bullet3');
  const prevBadges = document.getElementById('readme-prev-badges');
  const prevProjects = document.getElementById('readme-prev-projects');

  // --- Dynamic SVG Generator function ---
  function generateBannerSVG() {
    const name = nameInput.value.toUpperCase();
    const role = titleInput.value;
    const colors = themeColors[currentTheme];

    // If "exact" screenshot replica theme is selected
    if (currentTheme === 'exact') {
      return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 300" width="100%" height="100%">
  <defs>
    <!-- Background Red Sky Gradient -->
    <linearGradient id="sky-grad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#7a0010" />
      <stop offset="40%" stop-color="#b80f22" />
      <stop offset="100%" stop-color="#e31b23" />
    </linearGradient>

    <!-- Dark Blue Silhouette / Contrast Gradient -->
    <linearGradient id="city-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0a0f1d" />
      <stop offset="100%" stop-color="#050810" />
    </linearGradient>

    <!-- Halftone dots pattern for retro comic look -->
    <pattern id="sky-dots" width="8" height="8" patternUnits="userSpaceOnUse">
      <circle cx="4" cy="4" r="1.5" fill="#ffffff" fill-opacity="0.15" />
    </pattern>

    <!-- Drop Shadow Filter for Text -->
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="3" dy="4" stdDeviation="0" flood-color="#000000" flood-opacity="1" />
    </filter>
  </defs>

  <!-- Sky Background -->
  <rect width="1200" height="300" fill="url(#sky-grad)" />
  <rect width="1200" height="300" fill="url(#sky-dots)" />

  <!-- Dithered/Halftone Skyline transition -->
  <g fill="#7a0010" opacity="0.3">
    <rect x="0" y="220" width="1200" height="80" />
    <circle cx="100" cy="210" r="15" />
    <circle cx="300" cy="210" r="25" />
    <circle cx="500" cy="215" r="10" />
    <circle cx="750" cy="210" r="30" />
    <circle cx="950" cy="215" r="15" />
    <circle cx="1150" cy="210" r="20" />
  </g>

  <!-- Detailed City Skyline Silhouette (Red/Dark Crimson) -->
  <path d="
    M 0 300 
    L 0 200 
    L 25 200 L 25 180 L 45 180 L 45 200 
    L 65 200 L 65 150 L 85 150 L 85 120 L 90 120 L 90 150 L 105 150 L 105 200
    L 125 200 L 125 170 L 165 170 L 165 200
    L 185 200 L 185 140 L 195 140 L 195 110 L 200 110 L 200 140 L 215 140 L 215 200
    L 240 200 L 240 185 L 280 185 L 280 200
    L 300 200 L 300 160 L 330 160 L 330 200
    L 355 200 L 355 130 L 375 130 L 375 90 L 380 90 L 380 130 L 395 130 L 395 200
    L 420 200 L 420 175 L 460 175 L 460 200
    L 485 200 L 485 150 L 515 150 L 515 200
    L 535 200 L 535 120 L 555 120 L 555 80 L 560 80 L 560 120 L 575 120 L 575 200
    L 600 200 L 600 170 L 640 170 L 640 200
    L 665 200 L 665 145 L 695 145 L 695 200
    L 715 200 L 715 110 L 735 110 L 740 70 L 745 110 L 760 110 L 760 200
    L 780 200 L 780 180 L 820 180 L 820 200
    L 845 200 L 845 150 L 875 150 L 875 200
    L 895 200 L 895 130 L 915 130 L 920 90 L 925 130 L 940 130 L 940 200
    L 965 200 L 965 175 L 1005 175 L 1005 200
    L 1030 200 L 1030 140 L 1060 140 L 1060 200
    L 1080 200 L 1080 120 L 1100 120 L 1105 80 L 1110 120 L 1125 120 L 1125 200
    L 1150 200 L 1150 180 L 1190 180 L 1190 200
    L 1200 200 
    L 1200 300 Z" 
    fill="#52020a" />

  <!-- Foreground City Skyline (Darker Blue-Black) -->
  <path d="
    M 0 300 
    L 0 240
    L 40 240 L 40 210 L 80 210 L 80 240
    L 110 240 L 110 170 L 130 170 L 130 240
    L 155 240 L 155 200 L 195 200 L 195 240
    L 220 240 L 220 180 L 250 180 L 250 240
    L 280 240 L 280 215 L 320 215 L 320 240
    L 350 240 L 350 160 L 380 160 L 380 240
    L 410 240 L 410 190 L 450 190 L 450 240
    L 480 240 L 480 210 L 510 210 L 510 240
    L 540 240 L 540 170 L 570 170 L 570 240
    L 600 240 L 600 200 L 640 200 L 640 240
    L 670 240 L 670 180 L 700 180 L 700 240
    L 730 240 L 730 210 L 770 210 L 770 240
    L 800 240 L 800 155 L 830 155 L 830 240
    L 860 240 L 860 195 L 900 195 L 900 240
    L 930 240 L 930 210 L 960 210 L 960 240
    L 990 240 L 990 175 L 1020 175 L 1020 240
    L 1050 240 L 1050 200 L 1090 200 L 1090 240
    L 1120 240 L 1120 185 L 1150 185 L 1150 240
    L 1180 240 L 1180 220 L 1200 220
    L 1200 300 Z" 
    fill="url(#city-grad)" />

  <!-- Spider-Man Web Shooting Line -->
  <path d="M 125,48 L 220,0" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" opacity="0.9" />

  <!-- Swinging Spider-Man Cartoon (Left Side) -->
  <g transform="translate(90, 30)">
    <path d="M 30,55 Q 15,62 5,55 Q 0,45 10,40" fill="#0051C8" stroke="#000000" stroke-width="2" />
    <path d="M 5,55 Q -2,65 -5,75 Q -5,80 -2,80 Q 5,80 8,70" fill="#E23636" stroke="#000000" stroke-width="2" />
    <path d="M 50,55 Q 52,72 58,82 Q 62,90 68,90 Q 72,82 65,75 L 58,58" fill="#0051C8" stroke="#000000" stroke-width="2" />
    <path d="M 58,82 L 64,102 Q 68,106 74,102 Q 78,98 70,92 L 65,80" fill="#E23636" stroke="#000000" stroke-width="2" />
    <path d="M 28,30 C 25,48 35,60 52,55 C 56,42 50,30 28,30 Z" fill="#E23636" stroke="#000000" stroke-width="2" />
    <path d="M 34,32 C 30,42 35,52 46,48" fill="#0051C8" stroke="#000000" stroke-width="1.5" />
    <path d="M 40,38 L 40,46 M 38,40 L 42,44 M 42,40 L 38,44" stroke="#000000" stroke-width="1.5" />
    <path d="M 48,32 Q 58,15 72,15 Q 75,18 70,22 Q 60,25 48,38" fill="#E23636" stroke="#000000" stroke-width="2" />
    <circle cx="72" cy="16" r="4.5" fill="#E23636" stroke="#000000" stroke-width="1.5" />
    <path d="M 28,32 Q 15,30 5,38 Q 0,42 5,46 Q 15,38 28,38" fill="#E23636" stroke="#000000" stroke-width="2" />
    <ellipse cx="32" cy="20" rx="13" ry="15" fill="#E23636" stroke="#000000" stroke-width="2" transform="rotate(-10 32 20)" />
    <path d="M 22,20 C 23,14 28,10 32,18 C 30,24 26,26 22,20 Z" fill="#ffffff" stroke="#000000" stroke-width="2" />
    <path d="M 42,20 C 41,14 36,10 32,18 C 34,24 38,26 42,20 Z" fill="#ffffff" stroke="#000000" stroke-width="2" />
  </g>

  <!-- Title Text Section -->
  <g transform="translate(680, 95)" filter="url(#shadow)">
    <!-- Line 1: Role -->
    <text x="0" y="0" 
          font-family="'Trebuchet MS', 'Lucida Sans Unicode', Arial, sans-serif" 
          font-size="34" 
          font-weight="900" 
          fill="#ffffff" 
          stroke="#000000"
          stroke-width="6"
          paint-order="stroke fill"
          text-anchor="middle"
          letter-spacing="0.5">${role}</text>

    <!-- Line 2: Name -->
    <text x="0" y="65" 
          font-family="'Trebuchet MS', Arial, sans-serif" 
          font-size="64" 
          font-weight="900" 
          fill="#ffffff" 
          stroke="#000000"
          stroke-width="10"
          paint-order="stroke fill"
          text-anchor="middle"
          letter-spacing="2">${name}</text>
  </g>

</svg>
`.trim();
    }

    // Build skills/badge elements for SVG (limit to 3 main badges)
    const skillsList = skillsInput.value.split(',').map(s => s.trim().toUpperCase());
    const badge1 = skillsList[0] || 'AI DEVELOPER';
    const badge2 = skillsList[1] || 'DATA SCIENCE';
    const badge3 = skillsList[2] || 'AIML ENTHUSIAST';

    // Different graphics based on theme selection
    let specialGraphicLeft = '';
    let specialGraphicRight = '';
    let specialBackgroundEffects = '';

    if (currentTheme === 'classic') {
      // Spider eyes logo
      specialGraphicLeft = `
        <g transform="translate(70, 70)" filter="url(#glow-blue)">
          <path d="M 5,25 C 10,5 25,-10 65,10 C 65,10 70,40 50,55 C 30,70 10,75 5,25 Z" fill="#111" stroke="${colors.primary}" stroke-width="3" />
          <path d="M 115,25 C 110,5 95,-10 55,10 C 55,10 50,40 70,55 C 90,70 110,75 115,25 Z" fill="#111" stroke="${colors.primary}" stroke-width="3" />
          <path d="M 10,23 C 15,7 28,-5 60,12 C 58,25 55,42 45,48 C 32,58 15,60 10,23 Z" fill="#ffffff" />
          <path d="M 110,23 C 105,7 92,-5 60,12 C 62,25 65,42 75,48 C 88,58 105,60 110,23 Z" fill="#ffffff" />
        </g>
      `;
      // Clean Spider chest logo
      specialGraphicRight = `
        <g transform="translate(800, 110)" filter="url(#glow-red)">
          <ellipse cx="50" cy="20" rx="7" ry="8" fill="${colors.primary}" />
          <ellipse cx="50" cy="50" rx="12" ry="24" fill="${colors.primary}" />
          <path d="M 45,35 Q 20,25 15,10" fill="none" stroke="${colors.primary}" stroke-width="3.5" stroke-linecap="round" />
          <path d="M 43,45 Q 15,40 10,30" fill="none" stroke="${colors.primary}" stroke-width="3.5" stroke-linecap="round" />
          <path d="M 43,55 Q 12,65 15,85" fill="none" stroke="${colors.primary}" stroke-width="3.5" stroke-linecap="round" />
          <path d="M 45,65 Q 22,80 25,100" fill="none" stroke="${colors.primary}" stroke-width="3.5" stroke-linecap="round" />
          <path d="M 55,35 Q 80,25 85,10" fill="none" stroke="${colors.primary}" stroke-width="3.5" stroke-linecap="round" />
          <path d="M 57,45 Q 85,40 90,30" fill="none" stroke="${colors.primary}" stroke-width="3.5" stroke-linecap="round" />
          <path d="M 57,55 Q 88,65 85,85" fill="none" stroke="${colors.primary}" stroke-width="3.5" stroke-linecap="round" />
          <path d="M 55,65 Q 78,80 75,100" fill="none" stroke="${colors.primary}" stroke-width="3.5" stroke-linecap="round" />
        </g>
      `;
      // Web layout
      specialBackgroundEffects = `
        <g stroke="#ffffff" stroke-opacity="0.06" stroke-width="1">
          <line x1="1000" y1="0" x2="0" y2="150" />
          <line x1="1000" y1="0" x2="300" y2="350" />
          <line x1="1000" y1="0" x2="600" y2="350" />
          <line x1="1000" y1="0" x2="0" y2="300" />
          <path d="M 800,0 A 200,200 0 0,0 1000,200" fill="none" />
          <path d="M 600,0 A 400,400 0 0,0 1000,400" fill="none" />
          <path d="M 400,0 A 600,600 0 0,0 1000,600" fill="none" />
        </g>
        <g stroke="${colors.primary}" stroke-opacity="0.08" stroke-width="1.2">
          <line x1="0" y1="175" x2="1000" y2="175" />
          <line x1="0" y1="175" x2="700" y2="0" />
          <line x1="0" y1="175" x2="700" y2="350" />
          <circle cx="0" cy="175" r="100" fill="none" />
          <circle cx="0" cy="175" r="220" fill="none" />
        </g>
      `;
    } else if (currentTheme === 'miles') {
      // Glitch graffiti block
      specialGraphicLeft = `
        <g transform="translate(60, 50)">
          <rect x="-5" y="-5" width="135" height="135" rx="10" fill="none" stroke="${colors.secondary}" stroke-width="2.5" stroke-opacity="0.7" filter="url(#glitch)" />
          <rect x="0" y="0" width="125" height="125" rx="8" fill="#12131a" stroke="${colors.primary}" stroke-width="2" />
          <text x="62" y="55" font-family="'Courier New', monospace" font-size="28" font-weight="900" fill="${colors.secondary}" text-anchor="middle" filter="url(#glitch)">AI</text>
          <text x="62" y="90" font-family="'Courier New', monospace" font-size="28" font-weight="900" fill="${colors.primary}" text-anchor="middle" filter="url(#glitch)">SPIDY</text>
        </g>
      `;
      // Spray spray spider
      specialGraphicRight = `
        <g transform="translate(730, 95)" filter="url(#glitch)">
          <path d="M 65,15 C 65,10 75,10 75,15 C 75,20 65,20 65,15 Z" fill="${colors.primary}" />
          <path d="M 62,26 Q 52,48 57,66 Q 63,80 73,76 Q 84,72 82,58 Q 80,44 72,28 Z" fill="${colors.primary}" />
          <path d="M 60,33 C 40,22 25,12 18,5" stroke="${colors.primary}" stroke-width="4.5" fill="none" stroke-linecap="round" />
          <path d="M 58,45 C 32,38 20,33 10,25" stroke="${colors.primary}" stroke-width="4.5" fill="none" stroke-linecap="round" />
          <path d="M 57,58 C 30,68 20,80 12,98" stroke="${colors.primary}" stroke-width="4" fill="none" stroke-linecap="round" />
          <path d="M 59,70 C 38,88 28,105 22,122" stroke="${colors.primary}" stroke-width="4" fill="none" stroke-linecap="round" />
          <path d="M 76,31 C 96,20 110,12 118,5" stroke="${colors.primary}" stroke-width="4.5" fill="none" stroke-linecap="round" />
          <path d="M 79,43 C 105,36 118,31 128,25" stroke="${colors.primary}" stroke-width="4.5" fill="none" stroke-linecap="round" />
          <path d="M 80,56 C 107,66 117,78 125,98" stroke="${colors.primary}" stroke-width="4" fill="none" stroke-linecap="round" />
          <path d="M 78,68 C 98,86 108,103 114,122" stroke="#ff0044" stroke-width="4" fill="none" stroke-linecap="round" />
        </g>
        <g fill="${colors.primary}" fill-opacity="0.3">
          <circle cx="840" cy="90" r="3" />
          <circle cx="750" cy="270" r="4.5" />
          <circle cx="910" cy="180" r="4" />
        </g>
      `;
      // Subway bricks + Halftones
      specialBackgroundEffects = `
        <pattern id="bricks" width="60" height="24" patternUnits="userSpaceOnUse">
          <path d="M 0 0 L 60 0 M 0 12 L 60 12 M 30 0 L 30 12" stroke="#ffffff" stroke-opacity="0.015" stroke-width="1.5" fill="none" />
        </pattern>
        <pattern id="halftone" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <circle cx="2" cy="2" r="1.5" fill="#ffffff" fill-opacity="0.03" />
          <circle cx="8" cy="8" r="1" fill="${colors.primary}" fill-opacity="0.05" />
        </pattern>
        <rect width="1000" height="350" fill="url(#bricks)" />
        <rect width="1000" height="350" fill="url(#halftone)" />
      `;
    } else if (currentTheme === 'gwen') {
      // Spider Gwen hood logo
      specialGraphicLeft = `
        <g transform="translate(70, 70)" filter="url(#glow-red)">
          <path d="M 10,40 Q 60,10 110,40 Q 110,75 60,105 Q 10,75 10,40 Z" fill="#ffffff" stroke="${colors.primary}" stroke-width="2.5" />
          <path d="M 20,42 Q 60,22 100,42 Q 100,70 60,95 Q 20,70 20,42 Z" fill="#1b1a24" />
          <!-- Teal eyes -->
          <path d="M 35,45 Q 48,32 55,42 Q 53,58 45,55 Q 35,50 35,45 Z" fill="${colors.secondary}" />
          <path d="M 85,45 Q 72,32 65,42 Q 67,58 75,55 Q 85,50 85,45 Z" fill="${colors.secondary}" />
        </g>
      `;
      // Neon Web Badge
      specialGraphicRight = `
        <g transform="translate(780, 110)" filter="url(#glow-blue)">
          <path d="M 50,0 L 95,25 L 95,75 L 50,100 L 5,75 L 5,25 Z" fill="none" stroke="${colors.secondary}" stroke-width="2" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="${colors.secondary}" stroke-width="1.5" />
          <line x1="5" y1="25" x2="95" y2="75" stroke="${colors.secondary}" stroke-width="1.5" />
          <line x1="95" y1="25" x2="5" y2="75" stroke="${colors.secondary}" stroke-width="1.5" />
          <circle cx="50" cy="50" r="12" fill="${colors.primary}" />
        </g>
      `;
      specialBackgroundEffects = `
        <g stroke="${colors.primary}" stroke-opacity="0.08" stroke-width="1.2">
          <line x1="0" y1="0" x2="1000" y2="350" />
          <line x1="1000" y1="0" x2="0" y2="350" />
        </g>
      `;
    } else if (currentTheme === 'venom') {
      // Venom symbiote teeth logo
      specialGraphicLeft = `
        <g transform="translate(50, 45)" filter="url(#glow-red)">
          <path d="M 10,30 Q 30,5 70,12 Q 130,2 140,40 Q 120,60 140,110 Q 75,90 10,75 Z" fill="black" stroke="${colors.primary}" stroke-width="3" />
          <!-- Giant white venom eyes -->
          <path d="M 22,25 C 28,15 45,5 68,18 C 65,35 60,52 42,58 C 30,55 22,42 22,25 Z" fill="#ffffff" />
          <path d="M 128,25 C 122,15 105,5 82,18 C 85,35 90,52 108,58 C 120,55 128,42 128,25 Z" fill="#ffffff" />
        </g>
      `;
      // Symbiote emblem
      specialGraphicRight = `
        <g transform="translate(800, 110)" filter="url(#glow-red)">
          <path d="M 50,15 L 60,35 Q 85,30 95,65 Q 60,50 50,85 Q 40,50 5,65 Q 15,30 40,35 Z" fill="white" />
          <path d="M 50,0 Q 60,18 75,12 Q 52,22 50,30 Q 48,22 25,12 Q 40,18 50,0 Z" fill="${colors.primary}" />
        </g>
      `;
      specialBackgroundEffects = `
        <g stroke="${colors.primary}" stroke-opacity="0.15" stroke-width="2" fill="none">
          <path d="M 0,0 Q 150,80 300,50 T 600,100 T 1000,0" />
          <path d="M 0,350 Q 250,220 500,280 T 1000,350" />
        </g>
      `;
    }

    return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 350" width="100%" height="100%">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${colors.bgGradStart}" />
      <stop offset="50%" stop-color="${colors.bgGradStop}" />
      <stop offset="100%" stop-color="${colors.bgGradEnd}" />
    </linearGradient>

    <!-- Glowing Filters -->
    <filter id="glow-red" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <!-- Chromatic/Glitch details for Miles theme -->
    <filter id="glitch" x="-10%" y="-10%" width="120%" height="120%">
      <feOffset dx="-2" dy="1" in="SourceGraphic" result="offset1" />
      <feColorMatrix type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" in="offset1" result="color1" />
      <feOffset dx="2" dy="-1" in="SourceGraphic" result="offset2" />
      <feColorMatrix type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" in="offset2" result="color2" />
      <feMerge>
        <feMergeNode in="color1" />
        <feMergeNode in="color2" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <!-- Spidey Red Glow Gradient -->
    <radialGradient id="red-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${colors.primary}" stop-opacity="0.25" />
      <stop offset="100%" stop-color="${colors.primary}" stop-opacity="0" />
    </radialGradient>

    <!-- Spidey Blue Glow Gradient -->
    <radialGradient id="blue-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${colors.secondary}" stop-opacity="0.2" />
      <stop offset="100%" stop-color="${colors.secondary}" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1000" height="350" fill="url(#bg-grad)" />

  <!-- Ambient Glow Effects -->
  <circle cx="850" cy="175" r="300" fill="url(#red-glow)" />
  <circle cx="150" cy="175" r="300" fill="url(#blue-glow)" />

  <!-- Theme Special Background graphics -->
  ${specialBackgroundEffects}

  <!-- Grid overlay -->
  <g stroke="${colors.secondary}" stroke-opacity="0.08" stroke-width="0.5">
    <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
      <rect width="25" height="25" fill="none" />
      <path d="M 25 0 L 0 0 0 25" fill="none" />
    </pattern>
    <rect width="1000" height="350" fill="url(#grid)" />
  </g>

  <!-- Left Logo graphic -->
  ${specialGraphicLeft}

  <!-- Right Logo graphic -->
  ${specialGraphicRight}

  <!-- Profile Text Content -->
  <g transform="translate(230, 0)">
    <!-- Main Name -->
    <text x="0" y="145" 
          font-family="system-ui, -apple-system, sans-serif" 
          font-size="64" 
          font-weight="900" 
          letter-spacing="5" 
          fill="#ffffff" 
          filter="url(#glow-blue)">${name}</text>
    
    <line x1="-20" y1="130" x2="220" y2="130" stroke="${colors.secondary}" stroke-opacity="0.3" stroke-width="1.5" stroke-dasharray="3,3" />

    <!-- Role/Title -->
    <text x="0" y="195" 
          font-family="system-ui, -apple-system, sans-serif" 
          font-size="22" 
          font-weight="800" 
          letter-spacing="2" 
          fill="${colors.primary}" 
          filter="url(#glow-red)">${role.toUpperCase()}</text>

    <!-- Motto -->
    <text x="0" y="240" 
          font-family="system-ui, -apple-system, sans-serif" 
          font-size="16" 
          font-weight="500" 
          font-style="italic"
          letter-spacing="0.5" 
          fill="${colors.textColor}" 
          fill-opacity="0.7">"${mottoInput.value}"</text>

    <!-- Badges inside Banner -->
    <g transform="translate(0, 275)">
      <!-- Badge 1 -->
      <rect x="0" y="0" width="130" height="26" rx="13" fill="${colors.secondary}" fill-opacity="0.15" stroke="${colors.secondary}" stroke-width="1" />
      <circle cx="15" cy="13" r="4" fill="${colors.secondary}" />
      <text x="28" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" fill="#ffffff" letter-spacing="0.5">${badge1}</text>
      
      <!-- Badge 2 -->
      <rect x="145" y="0" width="140" height="26" rx="13" fill="${colors.primary}" fill-opacity="0.15" stroke="${colors.primary}" stroke-width="1" />
      <circle cx="160" cy="13" r="4" fill="${colors.primary}" />
      <text x="173" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" fill="#ffffff" letter-spacing="0.5">${badge2}</text>
      
      <!-- Badge 3 -->
      <rect x="300" y="0" width="145" height="26" rx="13" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-width="1" stroke-opacity="0.15" />
      <circle cx="315" cy="13" r="4" fill="#ffffff" fill-opacity="0.5" />
      <text x="328" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" fill="#ffffff" fill-opacity="0.8" letter-spacing="0.5">${badge3}</text>
    </g>
  </g>

</svg>
`.trim();
  }

  // --- Dynamic Markdown Generation function ---
  function generateReadmeMarkdown() {
    const username = usernameInput.value;
    const name = nameInput.value;
    const title = titleInput.value;
    const motto = mottoInput.value;
    const origin = originInput.value;
    const bullet1 = bullet1Input.value;
    const bullet2 = bullet2Input.value;
    const bullet3 = bullet3Input.value;
    const skills = skillsInput.value;
    const p1t = p1Title.value;
    const p1d = p1Desc.value;
    const p2t = p2Title.value;
    const p2d = p2Desc.value;
    const p3t = p3Title.value;
    const p3d = p3Desc.value;

    const colors = themeColors[currentTheme];

    // If using the exact layout, point the README header image to their hosted repo asset
    const bannerLink = `https://raw.githubusercontent.com/${username}/${username}/main/art/spiderman_banner_${currentTheme}.png`;

    const typingQuery = encodeURIComponent('Friendly Neighborhood Developer;' + title + ';AI Developer;Data Science Learner;Web Slinger');

    const markdown = `<div align="center">
  <!-- Dynamic Spider-Man Profile Header -->
  <img src="${bannerLink}" alt="Spider-Man Header Banner: ${name}" width="100%" />
</div>

<h3 align="center">🕸️ ${title} | Generative AI & Data Science 🕸️</h3>

<p align="center">
  <a href="https://github.com/${username}">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=400&size=24&duration=3500&pause=1000&color=${colors.primary.replace('#', '')}&center=true&vCenter=true&width=550&lines=${typingQuery}" alt="Typing SVG" />
  </a>
</p>

---

### 🕷️ My Origin Story

${origin}

*   ${bullet1}
*   ${bullet2}
*   ${bullet3}

---

### 🛠️ The Web-Slinger's Utility Belt

**Languages, Frameworks & Toolkits (My Spidey-Sense)**
<br>
<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=${skills}&perline=15" alt="Tech Stack" />
  </a>
</p>

---

### 🏙️ Saving the City (Featured Projects)

#### ${p1t}
${p1d}
${p1t.includes('A.E.G.I.S') ? `\n\`\`\`mermaid\ngraph TD\n    A[User Input / Multimodal Interaction] -->|Real-time skeletal tracking| B(FastAPI Web Server)\n    B --> C{Intelligent AI Agents}\n    C -->|Automated spawning| D[3D Assets Generation]\n    C -->|Physics engine| E[Rapier Physics Simulation]\n    D & E --> F[Browser-Native Spatial UI]\n\`\`\`\n` : ''}
#### ${p2t}
${p2d}
${p2t.includes('HOMEOPS') ? `\n\`\`\`mermaid\ngraph LR\n    subgraph Household Inputs\n        V[Voice Commands] -->|Function calling| G[Gemini AI Core]\n        C[Camera Feed] -->|Produce decay prediction| G\n        I[Pantry Inventory] -->|Data tracking| G\n    end\n    G -->|Local-first execution| H[Ambient Home OS Actions]\n\`\`\`\n` : ''}
#### ${p3t}
${p3d}

---

### 🕷️ Web-Slinger Activity (Contributions)

<div align="center">
  <!-- This image will be generated automatically by the Spider GitHub Action -->
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/${username}/${username}/output/github-contribution-grid-spider-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/${username}/${username}/output/github-contribution-grid-spider.svg">
    <img alt="github contribution grid spider animation" src="https://raw.githubusercontent.com/${username}/${username}/output/github-contribution-grid-spider.svg">
  </picture>
</div>

<br>

<div align="center">
  <!-- Spidey themed github stats card -->
  <img src="https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=buefy&hide_border=true&title_color=${colors.statsTitleColor}&icon_color=${colors.statsIconColor}&bg_color=${colors.statsBgColor}" alt="${username}'s GitHub Stats" />
  
  <!-- Spidey themed streak stats card -->
  <img src="https://streak-stats.demolab.com?user=${username}&hide_border=true&background=${colors.statsBgColor}&ring=${colors.streakRingColor}&fire=${colors.streakFireColor}&currStreakLabel=ffffff&sideLabels=ffffff&currStreakNum=ffffff&sideNums=ffffff" alt="GitHub Streak" />
</div>

<br>

<details>
<summary><b>💻 Click to Initialize Spidey-Sense Terminal Console</b></summary>

\`\`\`bash
$ init-spidey-sense --user=${username}
[INFO] Initializing web-shooters... OK
[INFO] Loading Multiversal Languages [English, Kannada, Telugu, Hindi, Tamil]... Loaded
[INFO] Connecting to A.E.G.I.S. Spatial Systems... Connected
[INFO] Booting HOMEOPS-AI Local Butler... Online
>>> "With great code comes great responsibility."
>>> Status: Ready to deploy intelligent AI applications.
\`\`\`
</details>

<br>

<div align="center">
  <!-- Capsule wavy footer -->
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=${colors.capsuleGrad}&height=120&section=footer" alt="Wavy Footer" width="100%" />
</div>
`;
    return markdown;
  }

  // --- Update Preview and Output panels ---
  function updateGeneratorOutputs() {
    // 1. Generate and display SVG
    const svgContent = generateBannerSVG();
    svgContainer.innerHTML = svgContent;

    // 2. Generate and display Markdown
    const markdownContent = generateReadmeMarkdown();
    markdownOutput.textContent = markdownContent;

    // 3. Update simulated README preview
    prevTitle.textContent = nameInput.value;
    prevDesc.textContent = mottoInput.value;
    prevH3.textContent = `🕸️ ${titleInput.value} 🕸️`;
    prevOrigin.textContent = originInput.value;
    prevBullet1.textContent = bullet1Input.value;
    prevBullet2.textContent = bullet2Input.value;
    prevBullet3.textContent = bullet3Input.value;

    // Simulated tech stack preview
    prevBadges.innerHTML = '';
    const skillKeys = skillsInput.value.split(',');
    skillKeys.slice(0, 10).forEach(skill => {
      const skillName = skill.trim();
      if (!skillName) return;
      
      const badge = document.createElement('span');
      badge.style.background = 'var(--input-bg)';
      badge.style.border = '1px solid var(--panel-border)';
      badge.style.padding = '4px 10px';
      badge.style.borderRadius = '4px';
      badge.style.fontSize = '11px';
      badge.style.fontWeight = 'bold';
      badge.style.color = '#fff';
      badge.textContent = skillName.toUpperCase();
      prevBadges.appendChild(badge);
    });

    // Simulated projects preview
    prevProjects.innerHTML = `
      <h5>${p1Title.value}</h5>
      <p style="font-size: 12px; margin-bottom: 8px;">${p1Desc.value}</p>
      <h5>${p2Title.value}</h5>
      <p style="font-size: 12px; margin-bottom: 8px;">${p2Desc.value}</p>
      <h5>${p3Title.value}</h5>
      <p style="font-size: 12px; margin-bottom: 8px;">${p3Desc.value}</p>
    `;
  }

  // --- Event Handlers ---

  // Handle Form changes real-time
  profileForm.addEventListener('input', updateGeneratorOutputs);

  // Handle Theme switching
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all theme buttons
      themeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Set theme state
      currentTheme = btn.getAttribute('data-theme');
      
      // Update body class
      body.className = '';
      body.classList.add(`spidey-theme-${currentTheme}`);

      // Re-render
      updateGeneratorOutputs();
    });
  });

  // Handle Preview Tab switching
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeTab = btn.getAttribute('data-tab');
      if (activeTab === 'banner') {
        bannerTab.classList.add('active');
        readmeTab.classList.remove('active');
      } else {
        readmeTab.classList.add('active');
        bannerTab.classList.remove('active');
      }
    });
  });

  // Copy Markdown code
  copyMarkdownBtn.addEventListener('click', () => {
    const text = markdownOutput.textContent;
    navigator.clipboard.writeText(text).then(() => {
      const originalText = copyMarkdownBtn.textContent;
      copyMarkdownBtn.textContent = '✔️ Copied!';
      copyMarkdownBtn.style.background = '#00cc66';
      setTimeout(() => {
        copyMarkdownBtn.textContent = originalText;
        copyMarkdownBtn.style.background = '';
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  });

  // Download SVG file
  downloadSvgBtn.addEventListener('click', () => {
    const svgData = generateBannerSVG();
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `spiderman_github_banner_${currentTheme}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });

  // Export PNG file (renders SVG to Canvas)
  downloadPngBtn.addEventListener('click', () => {
    const svgData = generateBannerSVG();
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1200;
      canvas.height = 300;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, 1200, 300);
      
      const pngUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = pngUrl;
      link.download = `spiderman_github_banner_${currentTheme}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    };
    img.src = url;
  });

  // Initial Run
  updateGeneratorOutputs();
});
