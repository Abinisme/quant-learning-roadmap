/**
 * 量化交易学习路线图 - 应用逻辑层
 * 纯 JS 驱动渲染，数据来自 data.js
 * 功能：手风琴交互 / 进度追踪 / localStorage / confetti
 */

const App = (() => {
  // ==================== 状态管理 ====================
  const STORAGE_KEY = 'quant_roadmap_progress';
  let progress = {};          // { '1-1': true, '1-2': true, ... }
  let totalModules = 50;      // 将在 init 中精确计算

  // ==================== 初始化 ====================
  function init() {
    loadProgress();
    countTotalModules();
    ensurePopup();
    renderNav();
    renderHero();
    renderStages();
    renderGlobalResources();
    renderFooter();
    updateProgressBar();
    updateSidebar();
    updateAchievements();
    bindEvents();
    restoreScrollPosition();
  }

  // ==================== 进度持久化 ====================
  function loadProgress() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      progress = saved ? JSON.parse(saved) : {};
    } catch (e) {
      progress = {};
    }
  }

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  function countTotalModules() {
    totalModules = ROADMAP_DATA.stages.reduce((sum, stage) => sum + stage.modules.length, 0);
  }

  function getCompletedCount(stageId = null) {
    if (stageId) {
      const stage = ROADMAP_DATA.stages.find(s => s.id === stageId);
      if (!stage) return 0;
      return stage.modules.filter(m => progress[m.id]).length;
    }
    return Object.values(progress).filter(Boolean).length;
  }

  function getStageModulesCount(stageId) {
    const stage = ROADMAP_DATA.stages.find(s => s.id === stageId);
    return stage ? stage.modules.length : 0;
  }

  function getPercentage(stageId = null) {
    if (stageId) {
      const total = getStageModulesCount(stageId);
      return total === 0 ? 0 : Math.round((getCompletedCount(stageId) / total) * 100);
    }
    return totalModules === 0 ? 0 : Math.round((getCompletedCount() / totalModules) * 100);
  }

  // ==================== 滚动位置恢复 ====================
  function restoreScrollPosition() {
    const saved = sessionStorage.getItem('quant_scroll');
    if (saved) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: parseInt(saved), behavior: 'instant' });
      });
    }
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('quant_scroll', window.scrollY);
    });
  }

  // ==================== 顶部导航 ====================
  function renderNav() {
    const nav = document.getElementById('topNav');
    let links = ROADMAP_DATA.stages.map(s => `
      <div class="nav-link" data-stage="${s.id}" title="${s.title}">
        <span class="dot" style="background:${s.color}"></span>
        ${s.title}
      </div>
    `).join('');

    nav.innerHTML = `
      <div class="top-nav-inner">
        <div class="nav-brand">
          <div class="icon"><i class="fa-solid fa-chart-candlestick"></i></div>
          <span>${ROADMAP_DATA.meta.title}</span>
        </div>
        <div class="nav-links">${links}</div>
        <div class="nav-stats">
          <span><span class="nav-stat-value" id="navDone">${getCompletedCount()}</span>/${totalModules}</span>
          <span style="color:var(--accent-green)"><span class="nav-stat-value" id="navPct">${getPercentage()}</span>%</span>
        </div>
      </div>
    `;
  }

  // ==================== Hero 区域 ====================
  function renderHero() {
    document.getElementById('hero').innerHTML = `
      <div class="hero-badge"><i class="fa-solid fa-graduation-cap"></i> GitHub 社区大佬经验整合</div>
      <h1>${ROADMAP_DATA.meta.title}</h1>
      <p class="subtitle">${ROADMAP_DATA.meta.subtitle}</p>
      <p class="desc">${ROADMAP_DATA.meta.description}</p>
      <div class="hero-stats">
        <div class="hero-stat">
          <div class="value">${ROADMAP_DATA.stages.length}</div>
          <div class="label">学习阶段</div>
        </div>
        <div class="hero-stat">
          <div class="value">${totalModules}</div>
          <div class="label">学习模块</div>
        </div>
        <div class="hero-stat">
          <div class="value" id="heroPct">${getPercentage()}%</div>
          <div class="label">当前进度</div>
        </div>
      </div>
    `;
  }

  // ==================== 阶段渲染 ====================
  function renderStages() {
    const container = document.getElementById('stagesContainer');
    container.innerHTML = ROADMAP_DATA.stages.map(stage => renderStage(stage)).join('');
  }

  function renderStage(stage) {
    const stagePct = getPercentage(stage.id);
    const modulesHTML = stage.modules.map(m => renderModule(m)).join('');

    return `
      <section class="stage-section" id="${stage.id}" data-stage="${stage.id}" style="--stage-color:${stage.color}">
        <div class="stage-header" onclick="App.toggleStage('${stage.id}')">
          <div class="stage-header-inner">
            <div class="stage-number">${stage.number}</div>
            <div class="stage-info">
              <h2>${stage.title}</h2>
              <p class="stage-subtitle">${stage.subtitle}</p>
              <div class="stage-meta">
                <span class="meta-duration"><i class="fa-regular fa-clock"></i> ${stage.duration}</span>
                <span class="meta-difficulty"><i class="fa-solid fa-signal"></i> ${stage.difficulty}</span>
                <span class="meta-progress"><i class="fa-solid fa-check-circle"></i> ${getCompletedCount(stage.id)}/${stage.modules.length} · ${stagePct}%</span>
              </div>
            </div>
            <div class="stage-expand-icon"><i class="fa-solid fa-chevron-down"></i></div>
          </div>
          <div class="stage-overview">
            <i class="fa-solid fa-lightbulb"></i>
            <span>${stage.overview}</span>
          </div>
          <div class="stage-quote">"${stage.quote}"</div>
        </div>
        <div class="modules-container">
          <div class="modules-list">
            ${modulesHTML}
          </div>
          <div class="stage-milestone">
            <i class="fa-solid fa-flag-checkered"></i> 阶段通关：${stage.milestone}
          </div>
        </div>
      </section>
    `;
  }

  // ==================== 术语处理 ====================
  let sortedGlossaryKeys = [];

  function getGlossaryKeys() {
    if (sortedGlossaryKeys.length === 0 && ROADMAP_DATA.glossary) {
      sortedGlossaryKeys = Object.keys(ROADMAP_DATA.glossary).sort((a, b) => b.length - a.length);
    }
    return sortedGlossaryKeys;
  }

  function processGlossaryTerms(text) {
    if (!ROADMAP_DATA.glossary) return text;
    const keys = getGlossaryKeys();
    if (keys.length === 0) return text;

    // 构建单一合并正则，长词在前，每处文本只匹配一次，彻底避免"前复权"→"复权"的嵌套替换
    const escaped = keys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const combined = new RegExp(`(${escaped.join('|')})`, 'g');

    return text.replace(combined, (match) => {
      const entry = ROADMAP_DATA.glossary[match];
      if (!entry) return match;
      const wikiClass = entry.wikiUrl ? ' has-wiki' : '';
      return `<span class="term-highlight${wikiClass}" data-glossary="${match}">${match}</span>`;
    });
  }

  // ==================== 术语浮窗 ====================
  let popupEl = null;
  let popupVisible = false;

  function ensurePopup() {
    if (popupEl) return;
    popupEl = document.createElement('div');
    popupEl.className = 'glossary-popup';
    popupEl.innerHTML = `
      <div class="glossary-popup-header">
        <h4></h4>
        <button class="glossary-popup-close" title="关闭"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="glossary-popup-body"></div>
      <div class="glossary-popup-footer"></div>
    `;
    document.body.appendChild(popupEl);

    popupEl.querySelector('.glossary-popup-close').addEventListener('click', hidePopup);
    document.addEventListener('click', onDocumentClick);
    document.addEventListener('keydown', onKeyDown);
  }

  function showPopup(term, key, x, y) {
    ensurePopup();
    const entry = ROADMAP_DATA.glossary[key];
    if (!entry) return;

    const header = popupEl.querySelector('h4');
    const body = popupEl.querySelector('.glossary-popup-body');
    const footer = popupEl.querySelector('.glossary-popup-footer');

    header.textContent = key;
    body.textContent = entry.explanation;

    if (entry.wikiUrl) {
      footer.innerHTML = `
        <a class="glossary-wiki-link" href="${entry.wikiUrl}" target="_blank" rel="noopener">
          <i class="fa-brands fa-wikipedia-w"></i> Wikipedia 查看详情
        </a>
        <a class="glossary-wiki-link" href="https://www.baidu.com/s?wd=${encodeURIComponent(key)}" target="_blank" rel="noopener">
          <i class="fa-solid fa-search"></i> 百度百科
        </a>
      `;
    } else {
      footer.innerHTML = `
        <a class="glossary-wiki-link" href="https://www.baidu.com/s?wd=${encodeURIComponent(key)}" target="_blank" rel="noopener">
          <i class="fa-solid fa-search"></i> 搜索更多
        </a>
      `;
    }

    // 智能定位：确保浮窗不超出视口
    const popupW = 420;
    const popupH = 260;
    const gap = 12;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let left = x;
    let top = y + gap;
    let arrowClass = 'arrow-top';

    // 水平方向调整
    if (left + popupW > vw - 16) left = vw - popupW - 16;
    if (left < 16) left = 16;

    // 垂直方向：优先下方，空间不够则上方
    if (top + popupH > vh - 16) {
      top = y - popupH - gap;
      arrowClass = 'arrow-bottom';
      if (top < 16) top = 16;
    }

    popupEl.className = 'glossary-popup visible ' + arrowClass;
    popupEl.style.left = left + 'px';
    popupEl.style.top = top + 'px';
    popupVisible = true;
  }

  function hidePopup() {
    if (!popupEl) return;
    popupEl.classList.remove('visible');
    popupVisible = false;
  }

  function onDocumentClick(e) {
    if (!popupVisible) return;
    if (e.target.closest('.glossary-popup')) return;
    if (e.target.closest('.term-highlight')) return;
    hidePopup();
  }

  function onKeyDown(e) {
    if (e.key === 'Escape' && popupVisible) {
      hidePopup();
    }
  }

  function handleGlossaryClick(e) {
    const term = e.target.closest('.term-highlight');
    if (!term) return;
    e.preventDefault();
    e.stopPropagation();
    const key = term.dataset.glossary;
    const rect = term.getBoundingClientRect();
    showPopup(key, key, rect.left, rect.bottom);
  }

  function renderModule(mod) {
    const checked = !!progress[mod.id];
    const pointsHTML = mod.points.map(p => `<li>${processGlossaryTerms(p)}</li>`).join('');
    const cardsHTML = mod.knowledgeCards.map(c => `
      <div class="knowledge-card">
        <div class="kc-title">💡 ${c.title}</div>
        <div>${processGlossaryTerms(c.content)}</div>
      </div>
    `).join('');
    const resourcesHTML = mod.resources.map(r => `
      <a class="resource-link${r.badge ? ' is-featured' : ''}" href="${r.url}" target="_blank" rel="noopener">
        <i class="fa-solid ${r.badge ? 'fa-star' : 'fa-arrow-up-right-from-square'}"></i> ${r.label}
      </a>
    `).join('');

    return `
      <div class="module-card" id="mod-${mod.id}" data-module="${mod.id}">
        <div class="module-header" onclick="App.toggleModule(event, '${mod.id}')">
          <input type="checkbox" class="module-checkbox" ${checked ? 'checked' : ''}
            onclick="event.stopPropagation(); App.toggleCheckbox('${mod.id}')">
          <div class="module-title-area">
            <h4>${mod.title}</h4>
            <div class="module-duration"><i class="fa-regular fa-clock"></i> 预估 ${mod.duration}</div>
          </div>
          <div class="module-expand-icon"><i class="fa-solid fa-chevron-down"></i></div>
        </div>
        <div class="module-body">
          <div class="module-content">
            <div class="points-section">
              <div class="section-label"><i class="fa-solid fa-list-check"></i> 学习要点</div>
              <ul>${pointsHTML}</ul>
            </div>
            <div class="cards-section">
              <div class="section-label"><i class="fa-solid fa-lightbulb"></i> 知识卡片</div>
              ${cardsHTML}
            </div>
            <div class="practice-section">
              <div class="section-label"><i class="fa-solid fa-code"></i> 实战案例</div>
              <h5>${mod.practice.title}</h5>
              <p>${processGlossaryTerms(mod.practice.desc)}</p>
            </div>
            <div class="resources-section">
              <div class="section-label"><i class="fa-solid fa-link"></i> 学习资源</div>
              <div class="resource-links">${resourcesHTML}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ==================== 全局资源区域 ====================
  function renderGlobalResources() {
    const gr = ROADMAP_DATA.globalResources;
    const container = document.getElementById('globalResources');

    const booksHTML = gr.books.map(b => `
      <div class="resource-item${b.link ? ' has-link' : ''}">
        <i class="fa-solid fa-book"></i>
        <div class="ri-info">
          <strong>${b.title}</strong>
          <span>${b.desc}</span>
          ${b.link ? `<a href="${b.link}" class="resource-badge-link" target="_blank" title="打开互动学习站">${b.badge || '📺 在线学习'}</a>` : ''}
        </div>
      </div>
    `).join('');

    const platformsHTML = gr.platforms.map(p => `
      <a class="resource-item" href="${p.url}" target="_blank" rel="noopener">
        <i class="fa-solid fa-globe"></i>
        <div class="ri-info">
          <strong>${p.name}</strong>
          <span>${p.desc}</span>
        </div>
      </a>
    `).join('');

    const reposHTML = gr.githubRepos.map(r => `
      <a class="resource-item" href="${r.url}" target="_blank" rel="noopener">
        <i class="fa-brands fa-github"></i>
        <div class="ri-info">
          <strong>${r.name} <small style="color:var(--accent-orange);font-family:var(--font-mono)">⭐${r.stars}</small></strong>
          <span>${r.desc}</span>
        </div>
      </a>
    `).join('');

    const pitfallsHTML = gr.pitfalls.map((p, i) => `
      <div class="pitfall-item">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <span>${p}</span>
      </div>
    `).join('');

    container.innerHTML = `
      <h2>📚 全局学习资源</h2>
      <p>GitHub 社区精选资源 · 贯穿全程使用</p>

      <div class="resource-grid">
        <h4>📖 推荐书籍</h4>
        ${booksHTML}
      </div>

      <div class="resource-grid">
        <h4>🌐 在线平台</h4>
        ${platformsHTML}
      </div>

      <div class="resource-grid">
        <h4>🌟 GitHub 精选项目</h4>
        ${reposHTML}
      </div>

      <div style="margin-top:24px">
        <h4 style="color:var(--accent-red);margin-bottom:12px">⚠️ GitHub 大佬的避坑指南</h4>
        <div class="pitfalls-list">${pitfallsHTML}</div>
      </div>
    `;
  }

  // ==================== Footer ====================
  function renderFooter() {
    document.getElementById('footer').innerHTML = `
      <p>${ROADMAP_DATA.meta.title} <span class="footer-gradient">V${ROADMAP_DATA.meta.version}</span></p>
      <p style="margin-top:4px">综合 GitHub 开源社区大佬建议 · 更新于 ${ROADMAP_DATA.meta.lastUpdated}</p>
    `;
  }

  // ==================== 交互：复选框 ====================
  function toggleCheckbox(moduleId) {
    progress[moduleId] = !progress[moduleId];
    saveProgress();
    updateProgressBar();
    updateSidebar();
    updateAchievements();
    updateNavStats();
    updateHeroPct();
    updateStageProgress(moduleId);

    // 找到并同步 checkbox DOM
    const card = document.getElementById('mod-' + moduleId);
    if (card) {
      const cb = card.querySelector('.module-checkbox');
      if (cb) cb.checked = !!progress[moduleId];
    }

    // 100% 庆祝
    if (getPercentage() === 100 && progress[moduleId]) {
      launchConfetti();
    }
  }

  function updateNavStats() {
    const done = document.getElementById('navDone');
    const pct = document.getElementById('navPct');
    if (done) done.textContent = getCompletedCount();
    if (pct) pct.textContent = getPercentage();
  }

  function updateHeroPct() {
    const el = document.getElementById('heroPct');
    if (el) el.textContent = getPercentage() + '%';
  }

  function updateStageProgress(moduleId) {
    // 找到 module 所属的 stage
    for (const stage of ROADMAP_DATA.stages) {
      if (stage.modules.find(m => m.id === moduleId)) {
        const el = document.getElementById(stage.id);
        if (el) {
          const metaProgress = el.querySelector('.meta-progress');
          if (metaProgress) {
            metaProgress.innerHTML = `<i class="fa-solid fa-check-circle"></i> ${getCompletedCount(stage.id)}/${stage.modules.length} · ${getPercentage(stage.id)}%`;
          }
        }
        break;
      }
    }
  }

  // ==================== 交互：手风琴模块 ====================
  function toggleModule(event, moduleId) {
    // 不拦截 checkbox 区域的点击
    if (event.target.closest('.module-checkbox')) return;

    const card = document.getElementById('mod-' + moduleId);
    if (!card) return;
    card.classList.toggle('expanded');

    // 更新 body 高度计算
    const body = card.querySelector('.module-body');
    if (body) {
      if (card.classList.contains('expanded')) {
        body.style.maxHeight = body.scrollHeight + 'px';
      } else {
        body.style.maxHeight = '0px';
      }
    }
  }

  // ==================== 交互：阶段手风琴 ====================
  function toggleStage(stageId) {
    const section = document.getElementById(stageId);
    if (!section) return;
    const wasExpanded = section.classList.contains('expanded');

    if (wasExpanded) {
      section.classList.remove('expanded');
    } else {
      section.classList.add('expanded');
      // 展开后刷新模块 body 高度
      requestAnimationFrame(() => {
        section.querySelectorAll('.module-card.expanded .module-body').forEach(body => {
          body.style.maxHeight = body.scrollHeight + 'px';
        });
      });
    }
  }

  // ==================== 进度条 ====================
  function updateProgressBar() {
    const pct = getPercentage();
    const bar = document.getElementById('progressBar');
    const label = document.getElementById('progressPercent');
    if (bar) bar.style.width = pct + '%';
    if (label) label.textContent = pct + '%';

    // 100% 时变色
    if (pct >= 100) {
      if (bar) bar.style.background = 'linear-gradient(90deg, #10b981, #00d4ff, #10b981)';
      if (label) label.style.color = 'var(--accent-green)';
    }
  }

  // ==================== 侧边栏 ====================
  function updateSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    const linksHTML = ROADMAP_DATA.stages.map(s => `
      <div class="sidebar-link" data-stage="${s.id}" onclick="App.scrollToStage('${s.id}')">
        <span class="mini-dot" style="background:${s.color}"></span>
        <span>${s.title}</span>
        <span class="s-pct">${getPercentage(s.id)}%</span>
      </div>
    `).join('');

    sidebar.innerHTML = `
      <div class="sidebar-title">📋 学习阶段</div>
      <div class="sidebar-nav">${linksHTML}</div>
      <div class="sidebar-achievements" id="sidebarAchievements"></div>
    `;

    updateAchievements();
  }

  function updateAchievements() {
    const container = document.getElementById('sidebarAchievements');
    if (!container) return;

    const pct = getPercentage();
    container.innerHTML = ROADMAP_DATA.achievements.map(ach => {
      const unlocked = pct >= ach.threshold;
      return `
        <div class="achievement-badge ${unlocked ? 'unlocked' : ''}">
          <i class="${ach.icon}"></i>
          <div>
            <strong>${ach.title}</strong>
            <div style="font-size:10px;color:var(--text-muted)">${ach.desc}</div>
          </div>
          ${unlocked ? '<i class="fa-solid fa-check" style="margin-left:auto;color:var(--accent-green)"></i>' : ''}
        </div>
      `;
    }).join('');
  }

  // ==================== 滚动导航 ====================
  function scrollToStage(stageId) {
    const el = document.getElementById(stageId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // 自动展开
      setTimeout(() => {
        if (!el.classList.contains('expanded')) {
          el.classList.add('expanded');
        }
      }, 400);
    }
  }

  // ==================== 高亮当前阶段 ====================
  function updateActiveNav() {
    let activeId = null;
    const stages = document.querySelectorAll('.stage-section');
    stages.forEach(s => {
      const rect = s.getBoundingClientRect();
      if (rect.top < 200 && rect.bottom > 200) {
        activeId = s.dataset.stage;
      }
    });

    document.querySelectorAll('.nav-link, .sidebar-link').forEach(el => {
      el.classList.toggle('active', el.dataset.stage === activeId);
    });
  }

  // ==================== Confetti 庆祝 ====================
  function launchConfetti() {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);

    const colors = ['#00d4ff', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899', '#ef4444'];

    for (let i = 0; i < 80; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.animationDelay = Math.random() * 2 + 's';
      piece.style.animationDuration = (2 + Math.random() * 3) + 's';
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      container.appendChild(piece);
    }

    setTimeout(() => container.remove(), 5000);
  }

  // ==================== 返回顶部 ====================
  function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    btn.classList.toggle('visible', window.scrollY > 400);
  }

  // ==================== 事件绑定 ====================
  function bindEvents() {
    // 顶部导航跳转
    document.querySelectorAll('.nav-link').forEach(el => {
      el.addEventListener('click', () => {
        const stageId = el.dataset.stage;
        if (stageId) scrollToStage(stageId);
      });
    });

    // 返回顶部
    const bttBtn = document.getElementById('backToTop');
    if (bttBtn) bttBtn.addEventListener('click', backToTop);

    // 滚动监听
    let scrollTimer;
    window.addEventListener('scroll', () => {
      if (scrollTimer) cancelAnimationFrame(scrollTimer);
      scrollTimer = requestAnimationFrame(() => {
        updateActiveNav();
        updateBackToTop();
      });
    }, { passive: true });

    // 键盘快捷键
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        // 优先关闭浮窗
        if (popupVisible) { hidePopup(); return; }
        backToTop();
      }
      // 't' = 返回顶部
      if (e.key === 't' && !e.ctrlKey && !e.metaKey && !e.altKey &&
          !e.target.closest('input,textarea,[contenteditable]')) {
        backToTop();
      }
    });

    // 术语高亮：事件委托
    document.getElementById('stagesContainer').addEventListener('click', handleGlossaryClick);

    // 移动端：点击模块时自动展开 stage
    document.querySelectorAll('.module-header').forEach(header => {
      header.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && !e.target.closest('.module-checkbox')) {
          const stage = this.closest('.stage-section');
          if (stage && !stage.classList.contains('expanded')) {
            stage.classList.add('expanded');
          }
        }
      });
    });
  }

  // ==================== 公开 API ====================
  return {
    init,
    toggleStage,
    toggleModule,
    toggleCheckbox,
    scrollToStage
  };
})();

// 启动
document.addEventListener('DOMContentLoaded', () => App.init());
