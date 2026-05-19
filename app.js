// 1. 定義路由組件

// 首頁組件
const HomeView = {
    template: `
        <div>
            <div class="ts-container is-padded">
                <div class="premium-flat-card" style="padding: 2.5rem; border-radius: 16px;">
                    <!-- 穩定且防呆的 CSS Flexbox 左右並排版面 -->
                    <div style="display: flex; flex-wrap: wrap; gap: 3rem; align-items: center;">
                        <!-- Left Column: Hero Image (Flex Ratio 8) -->
                        <div style="flex: 8; min-width: 300px;">
                            <div class="ts-image" style="border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-flat); height: 100%;">
                                <img src="./asset/internal_resource/img/Github_Cover.png" alt="RumamiDev Cover" style="display: block; width: 100%; height: 100%; object-fit: cover;">
                            </div>
                        </div>

                        <!-- Right Column: Introduction Text (Flex Ratio 9) -->
                        <div style="flex: 9; min-width: 320px;">
                            <div style="display: flex; flex-direction: column; justify-content: center; padding: 1rem 0;">
                                <!-- Welcome Badge -->
                                <div style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0.8rem; background: var(--hover-bg); border-radius: 20px; width: fit-content; margin-bottom: 1.5rem; border: 1px solid var(--border-color);">
                                    <span class="ts-icon is-code-icon" style="color: var(--primary-color);"></span>
                                    <span style="font-size: 0.875rem; font-weight: 600; color: var(--text-primary); font-family: 'JetBrains Mono', monospace;">Hello World!</span>
                                </div>

                                <!-- Main Title -->
                                <div class="ts-header is-huge is-heavy" style="margin-bottom: 0.5rem; line-height: 1.2;">
                                    <span style="color: var(--primary-color);">I'm Wen-Yu, Huang</span>
                                </div>
                                
                                <!-- Subtitle -->
                                <div class="ts-text is-large" style="color: var(--text-secondary); font-weight: 500; margin-bottom: 1.5rem; font-family: 'Outfit', sans-serif;">
                                    Software Developer & Student based in Taiwan 🇹🇼
                                </div>

                                <!-- Description Paragraph -->
                                <p class="justify-text" style="color: var(--text-secondary); margin-bottom: 2rem; line-height: 1.8; font-size: 1rem;">
                                    您好，我是黃文煜！目前就讀於<a href="https://csie.nptu.edu.tw/" target="_blank" rel="noreferrer noopener" style="color: var(--text-primary); font-weight: 600; text-decoration: underline; text-underline-offset: 4px;">國立屏東大學 資訊工程學系</a>碩士班。我是一位充滿熱情的開發者，專注於現代化的軟體工程與網路全端開發（Full-Stack Development）。我熱衷於將複雜的邏輯轉化為優雅的程式碼，並打造具有出色體驗的數位產品。
                                    <br><br>
                                    如果您對我的技術專案感興趣，歡迎探索<router-link to="/about" style="color: var(--primary-color); font-weight: 600; text-decoration: none;">我的個人介紹</router-link>，或是前往<router-link to="/work" style="color: var(--primary-color); font-weight: 600; text-decoration: none;">作品一覽</router-link>了解更多！
                                </p>

                                <!-- Social Links -->
                                <div class="ts-wrap" style="gap: 1rem;">
                                    <a href="https://github.com/rumamitw01" target="_blank" rel="noreferrer noopener" class="ts-icon is-github-icon is-circular is-large" style="border: 1px solid var(--border-color); background: var(--bg-main); color: var(--text-primary); transition: all 0.3s ease; text-decoration: none;" onmouseover="this.style.borderColor='var(--primary-color)'; this.style.color='var(--primary-color)';" onmouseout="this.style.borderColor='var(--border-color)'; this.style.color='var(--text-primary)';"></a>
                                    <a href="https://www.linkedin.com/in/rumami/" target="_blank" rel="noreferrer noopener" class="ts-icon is-linkedin-icon is-circular is-large" style="border: 1px solid var(--border-color); background: var(--bg-main); color: var(--text-primary); transition: all 0.3s ease; text-decoration: none;" onmouseover="this.style.borderColor='var(--primary-color)'; this.style.color='var(--primary-color)';" onmouseout="this.style.borderColor='var(--border-color)'; this.style.color='var(--text-primary)';"></a>
                                    <a href="https://threads.net/@danhaitw01" target="_blank" rel="noreferrer noopener" class="ts-icon is-at-icon is-circular is-large" style="border: 1px solid var(--border-color); background: var(--bg-main); color: var(--text-primary); transition: all 0.3s ease; text-decoration: none;" onmouseover="this.style.borderColor='var(--primary-color)'; this.style.color='var(--primary-color)';" onmouseout="this.style.borderColor='var(--border-color)'; this.style.color='var(--text-primary)';"></a>
                                    <a href="https://fb.com/RumamiTW" target="_blank" rel="noreferrer noopener" class="ts-icon is-facebook-icon is-circular is-large" style="border: 1px solid var(--border-color); background: var(--bg-main); color: var(--text-primary); transition: all 0.3s ease; text decoration: none;" onmouseover="this.style.borderColor='var(--primary-color)'; this.style.color='var(--primary-color)';" onmouseout="this.style.borderColor='var(--border-color)'; this.style.color='var(--text-primary)';"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style="height: 2.5rem;"></div>
        </div>
    `
};

// 個人介紹組件
const AboutView = {
    template: `
        <div>


            <div class="ts-container is-padded" v-if="loadingData">
                <div class="premium-flat-card" style="padding: 5rem 1.5rem; text-align: center;">
                    <span class="ts-icon is-spinner-icon is-loading is-huge" style="color: var(--primary-color);"></span>
                    <div style="margin-top: 1.5rem; color: var(--text-secondary); font-family: 'JetBrains Mono', 'Outfit', 'Noto Sans TC', sans-serif; font-weight: 500;">正在讀取履歷資料...</div>
                </div>
            </div>

            <div v-else>
                <div class="ts-container is-padded">
                    <div class="premium-flat-card" style="padding: 3rem 1.5rem;">
                    <div class="ts-header is-big is-heavy" style="text-align: center; margin-bottom: 2.5rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                        <span class="ts-icon is-map-signs-icon" style="color: var(--text-primary);"></span>
                        <span>經歷與現任</span>
                        <!-- Invisible spacer to perfectly center the text with the timeline axis -->
                        <span class="ts-icon is-map-signs-icon" style="opacity: 0; visibility: hidden; pointer-events: none;"></span>
                    </div>

                    <div class="premium-timeline">
                        <div class="timeline-row" v-for="(item, index) in mergedTimeline" :key="index" :class="item.type === 'past' ? 'is-left' : 'is-right'">
                            <!-- Spacer for forcing right layout -->
                            <div class="timeline-spacer" v-if="item.type === 'present'"></div>

                            <div class="timeline-content-wrapper">
                                <div class="timeline-date">{{ item.displayDate }}</div>
                                <div class="timeline-title">{{ item.company }}</div>
                                <div class="timeline-role" v-if="item.role">{{ item.role }}</div>
                            </div>
                            
                            <div class="timeline-indicator">
                                <span class="ts-icon" :class="item.icon"></span>
                            </div>

                            <!-- Spacer for forcing left layout -->
                            <div class="timeline-spacer" v-if="item.type === 'past'"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div style="height: 2.5rem;"></div>

            <div class="ts-container is-padded">
                <div class="ts-header is-big is-heavy" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span class="ts-icon is-trophy-icon" style="color: var(--text-primary);"></span>
                    <span>榮譽與獎項</span>
                </div>
                <div class="minimal-table-wrapper">
                    <table class="minimal-table">
                        <thead>
                            <tr>
                                <th style="width: 80px;">#</th>
                                <th style="width: 120px;">年份</th>
                                <th>名稱</th>
                                <th style="width: 150px;">獎項</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(honor, index) in honors" :key="index">
                                <td class="text-mono">{{ index + 1 }}</td>
                                <td class="text-mono" style="font-weight: 500; color: var(--text-secondary);">{{ honor.year }}</td>
                                <td style="color: var(--text-primary); font-weight: 500;">{{ honor.name }}</td>
                                <td>
                                    <span class="ts-badge" style="background-color: var(--hover-bg); color: var(--text-primary); border: 1px solid var(--border-color);">
                                        {{ honor.award }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colspan="4" style="text-align: right;">統計筆數：{{ honors.length }} 筆</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            <div style="height: 2.5rem;"></div>

            <div class="ts-container is-padded">
                <div class="ts-header is-big is-heavy" style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span class="ts-icon is-certificate-icon" style="color: var(--text-primary);"></span>
                    <span>證照</span>
                </div>
                <div class="minimal-table-wrapper">
                    <table class="minimal-table">
                        <thead>
                            <tr>
                                <th style="width: 80px;">#</th>
                                <th style="width: 120px;">年份</th>
                                <th>名稱</th>
                                <th style="width: 150px;">級別</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(cert, index) in certifications" :key="index">
                                <td class="text-mono">{{ index + 1 }}</td>
                                <td class="text-mono" style="font-weight: 500; color: var(--text-secondary);">{{ cert.year }}</td>
                                <td style="color: var(--text-primary); font-weight: 500;">{{ cert.name }}</td>
                                <td>
                                    <span v-if="cert.level" class="ts-badge" style="background-color: var(--hover-bg); color: var(--text-primary); border: 1px solid var(--border-color);">
                                        {{ cert.level }}
                                    </span>
                                    <span v-else style="color: var(--text-secondary); font-size: 0.85rem;">-</span>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colspan="4" style="text-align: right;">統計筆數：{{ certifications.length }} 筆</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            </div> <!-- End of v-else block -->
            
            <div style="height: 2.5rem;"></div>
        </div>
    `,
    data() {
        return {
            experiences: [],
            honors: [],
            certifications: [],
            loadingData: true
        };
    },
    async mounted() {
        try {
            const response = await fetch('./asset/internal_resource/data/about.json');
            if (!response.ok) throw new Error('Failed to fetch data');
            const data = await response.json();
            this.experiences = data.experiences || [];
            this.honors = data.honors || [];
            this.certifications = data.certifications || [];
        } catch (error) {
            console.error("Error loading about.json:", error);
        } finally {
            this.loadingData = false;
        }
    },
    computed: {
        mergedTimeline() {
            const combined = [...this.experiences];

            return combined.map(item => {
                const parts = item.period.split('~');
                const startYear = parseInt(parts[0], 10);
                const endYear = parts[1] && parts[1].trim() !== '' ? parts[1] : '至今';

                const titleParts = item.title.split(' / ');
                const company = titleParts[0] ? titleParts[0].trim() : '';
                const role = titleParts[1] ? titleParts[1].trim() : '';
                
                // 自動判斷：如果沒有結束年份（至今），就是「現任(present)」，否則就是「過去(past)」
                const type = (endYear === '至今') ? 'present' : 'past';

                return {
                    ...item,
                    type,
                    startYear,
                    endYear,
                    company,
                    role,
                    displayDate: `${startYear} — ${endYear}`
                };
            }).sort((a, b) => {
                // Sort by start year ascending (oldest first)
                return a.startYear - b.startYear;
            });
        }
    }
};

// 作品一覽組件
const WorkView = {
    template: `
        <div>


            <div class="ts-container is-padded">
                <div class="premium-flat-card" style="padding: 2rem;">
                    <div class="ts-grid is-relaxed is-middle-aligned">
                        <div class="column is-wide" style="width: 100%;">
                            <div class="ts-header is-big is-heavy" style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                                <span class="ts-icon is-activity-icon" style="color: var(--primary-color);"></span>
                                <span>我在 GitHub 上的最新動態</span>
                            </div>
                            <div style="background-color: var(--bg-main); border: 1px solid var(--border-color); border-radius: 8px; padding: 1.25rem 1.5rem; display: flex; align-items: center; gap: 0.75rem;">
                                <span v-if="loadingEvents" class="ts-icon is-spinner-icon is-loading" style="color: var(--primary-color);"></span>
                                <span v-else class="ts-icon is-github-icon" style="color: var(--text-primary);"></span>
                                
                                <span v-if="loadingEvents" style="color: var(--text-secondary); font-family: 'JetBrains Mono', monospace;">正在同步最新動態...</span>
                                <span v-else-if="eventsError" style="color: var(--text-secondary); font-family: 'JetBrains Mono', monospace;">無法載入最新動態</span>
                                <span v-else style="color: var(--text-primary); font-family: 'JetBrains Mono', monospace; font-weight: 500; word-break: break-all;">{{ recentActivity }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style="height: 2.5rem;"></div>

            <div class="ts-container is-padded">
                <div class="ts-header is-big is-heavy" style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <span class="ts-icon is-folder-open-icon" style="color: var(--accent-color);"></span>
                    <span>我在 GitHub 上的開源專案</span>
                </div>
                <div style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center;">
                    <span>專案總數：{{ repos.length }} 個</span>
                </div>

                <div v-if="loadingRepos" style="text-align: center; padding: 4rem 0;">
                    <span class="ts-icon is-spinner-icon is-loading" style="font-size: 2rem; color: var(--primary-color); display: block; margin-bottom: 1rem;"></span>
                    <span style="color: var(--text-secondary); font-family: 'JetBrains Mono', monospace;">正在載入開源專案清單...</span>
                </div>
                
                <div v-else-if="reposError" style="text-align: center; padding: 4rem 0; border: 1px solid var(--border-color); border-radius: 12px; background: var(--bg-card);">
                    <span style="color: var(--text-secondary); font-family: 'JetBrains Mono', monospace;">無法載入專案清單，請稍後再試。</span>
                </div>
                
                <div v-else class="repo-flat-grid">
                    <div v-for="repo in repos" :key="repo.id" class="repo-flat-card">
                        <div>
                            <div class="repo-title">{{ repo.name }}</div>
                            <div class="repo-desc">{{ repo.description || '這個專案尚未添加任何描述文字。' }}</div>
                        </div>
                        <div class="repo-footer">
                            <div class="repo-lang" v-if="repo.language">
                                <span class="lang-dot" :style="{ backgroundColor: getLangColor(repo.language) }"></span>
                                <span>{{ repo.language }}</span>
                            </div>
                            <div class="repo-lang" v-else>
                                <span class="lang-dot" style="background-color: var(--border-color);"></span>
                                <span>Plain Text</span>
                            </div>
                            <a :href="repo.svn_url" target="_blank" rel="noreferrer noopener" class="repo-link">
                                專案連結
                                <span class="ts-icon is-external-link-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style="height: 2.5rem;"></div>
        </div>
    `,
    data() {
        return {
            repos: [],
            loadingRepos: true,
            reposError: false,
            recentActivity: '載入中...',
            loadingEvents: true,
            eventsError: false
        };
    },
    mounted() {
        this.fetchRepos();
        this.fetchEvents();
    },
    methods: {
        getLangColor(language) {
            // All colors removed to enforce 100% monochrome layout
            return 'var(--text-secondary)';
        },
        async fetchRepos() {
            try {
                const response = await fetch("https://api.github.com/users/rumamitw01/repos");
                if (!response.ok) throw new Error("Failed to fetch repos");
                this.repos = await response.json();
                this.loadingRepos = false;
            } catch (error) {
                console.error("Repos fetch error:", error);
                this.reposError = true;
                this.loadingRepos = false;
            }
        },
        async fetchEvents() {
            try {
                const response = await fetch("https://api.github.com/users/rumamitw01/events");
                if (!response.ok) throw new Error("Failed to fetch events");
                const data = await response.json();
                if (data && data.length > 0) {
                    const latest = data[0];
                    if (latest.type === "PullRequestEvent") {
                        this.recentActivity = `${latest.payload.pull_request.title} @ ${latest.repo.name}`;
                    } else if (latest.type === "IssuesEvent" || latest.type === "IssueCommentEvent") {
                        this.recentActivity = `Issue: ${latest.payload.issue.title} @ ${latest.repo.name}`;
                    } else if (latest.type === "CreateEvent") {
                        this.recentActivity = `Create ${latest.repo.name}`;
                    } else if (latest.payload && latest.payload.commits && latest.payload.commits.length > 0) {
                        this.recentActivity = `${latest.payload.commits[0].message} @ ${latest.repo.name}`;
                    } else {
                        this.recentActivity = `Event: ${latest.type} @ ${latest.repo.name}`;
                    }
                } else {
                    this.recentActivity = '尚無最新動態';
                }
                this.loadingEvents = false;
            } catch (error) {
                console.error("Events fetch error:", error);
                this.eventsError = true;
                this.loadingEvents = false;
            }
        }
    }
};

// 2. 定義路由配置
const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/work', component: WorkView },
    // 預設跳轉回首頁
    { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
});

// 3. 建立並掛載 Vue 實例
const app = Vue.createApp({
    data() {
        return {
            isDrawerVisible: false,
            isSidebarCollapsed: localStorage.getItem('isSidebarCollapsed') === 'true'
        };
    },
    methods: {
        toggleDrawer(visible) {
            this.isDrawerVisible = visible;
        },
        toggleSidebar() {
            this.isSidebarCollapsed = !this.isSidebarCollapsed;
            localStorage.setItem('isSidebarCollapsed', this.isSidebarCollapsed);
        },
        toggleTheme() {
            if (typeof Theme_Switch === 'function') {
                Theme_Switch();
            }
        }
    }
});

app.use(router);
app.mount('#app');
