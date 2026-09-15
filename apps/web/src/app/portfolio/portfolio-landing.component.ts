import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'portfolio-landing',
  imports: [CommonModule],
  template: `
    <div class="portfolio-root">
      <!-- Ambient Glows -->
      <div class="glow-orb orb-1"></div>
      <div class="glow-orb orb-2"></div>

      <!-- Navigation -->
      <header class="portfolio-nav">
        <div class="nav-brand">
          <span class="brand-monogram">DC</span>
          <div class="brand-details">
            <span class="brand-name">Đắc Cường</span>
            <span class="brand-sub">Backend Engineer · UIT</span>
          </div>
        </div>

        <nav class="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Work & Case Studies</a>
          <a href="#experience">Journey</a>
          <a href="#principles">Philosophy</a>
        </nav>

        <div class="nav-ctas">
          <a href="#contact" class="btn-contact-nav">Get In Touch</a>
        </div>
      </header>

      <main>
        <!-- Hero Section -->
        <section class="hero-section" id="hero">
          <div class="hero-badge">
            <span class="pulse-indicator"></span>
            Senior Backend Engineer · Distributed Systems Architect
          </div>

          <h1 class="hero-title">
            Architecting <span class="gradient-text">resilient</span>,<br />
            high-throughput distributed platforms.
          </h1>

          <p class="hero-lead">
            Xin chào! Tôi là <strong>Đắc Cường</strong> (Alumnus UIT - ĐHQG TP.HCM). Tôi chuyên sâu về
            thiết kế kiến trúc vi dịch vụ (Microservices), hệ thống phân tán chịu tải cao (High Concurrency),
            Event-Driven Architecture, cơ sở dữ liệu quy mô lớn và tối ưu hóa hạ tầng Cloud-native.
          </p>

          <div class="hero-actions">
            <a href="#projects" class="btn-primary">
              Khám phá Case Studies <span>↓</span>
            </a>
            <a href="#contact" class="btn-secondary">
              Liên hệ hợp tác <span>↗</span>
            </a>
          </div>

          <div class="hero-metrics">
            <div class="metric-card">
              <span class="metric-value">10k+</span>
              <span class="metric-label">RPS Throughput Handled</span>
            </div>
            <div class="metric-card">
              <span class="metric-value">&lt; 50ms</span>
              <span class="metric-label">P99 Query Latency Target</span>
            </div>
            <div class="metric-card">
              <span class="metric-value">99.99%</span>
              <span class="metric-label">High Availability Target</span>
            </div>
            <div class="metric-card">
              <span class="metric-value">6+</span>
              <span class="metric-label">Micro-Clients Orchestrated</span>
            </div>
          </div>
        </section>

        <!-- Tech Stack / Skills Section -->
        <section class="section skills-section" id="skills">
          <div class="section-header">
            <span class="section-tag">Core Capabilities</span>
            <h2 class="section-title">Kỹ năng chuyên môn & Công nghệ</h2>
            <p class="section-desc">Bộ công cụ và nền tảng tôi sử dụng hàng ngày để xây dựng các giải pháp đáng tin cậy.</p>
          </div>

          <div class="skills-grid">
            <div class="skill-category-card">
              <div class="category-icon">⚙️</div>
              <h3>Backend Languages & Frameworks</h3>
              <p>Ngôn ngữ biên dịch hiệu năng cao, concurrency primitives mạnh mẽ và frameworks hiện đại.</p>
              <div class="tags-row">
                <span class="tech-tag highlight">Golang</span>
                <span class="tech-tag highlight">Java (Spring Boot)</span>
                <span class="tech-tag">Node.js (NestJS / Express)</span>
                <span class="tech-tag">Python</span>
                <span class="tech-tag">TypeScript</span>
              </div>
            </div>

            <div class="skill-category-card">
              <div class="category-icon">🔄</div>
              <h3>Distributed Systems & Messaging</h3>
              <p>Kiến trúc hướng sự kiện, streaming dữ liệu thời gian thực và giao tiếp phi đồng bộ an toàn.</p>
              <div class="tags-row">
                <span class="tech-tag highlight">Apache Kafka</span>
                <span class="tech-tag highlight">RabbitMQ</span>
                <span class="tech-tag">gRPC / Protocol Buffers</span>
                <span class="tech-tag">Event Sourcing & CQRS</span>
                <span class="tech-tag">Transactional Outbox</span>
              </div>
            </div>

            <div class="skill-category-card">
              <div class="category-icon">💾</div>
              <h3>Databases & Caching</h3>
              <p>Lưu trữ dữ liệu quan hệ, NoSQL, in-memory caching và phân tầng lưu trữ tối ưu hóa I/O.</p>
              <div class="tags-row">
                <span class="tech-tag highlight">PostgreSQL</span>
                <span class="tech-tag highlight">Redis Cluster</span>
                <span class="tech-tag">MySQL</span>
                <span class="tech-tag">MongoDB</span>
                <span class="tech-tag">Elasticsearch</span>
                <span class="tech-tag">MinIO / S3</span>
              </div>
            </div>

            <div class="skill-category-card">
              <div class="category-icon">☁️</div>
              <h3>Cloud, DevOps & Infra</h3>
              <p>Đóng gói container hóa, điều phối tự động, CI/CD pipeline và hệ thống giám sát toàn diện.</p>
              <div class="tags-row">
                <span class="tech-tag highlight">Docker & Compose</span>
                <span class="tech-tag highlight">Kubernetes (K8s)</span>
                <span class="tech-tag">AWS (ECS, S3, RDS)</span>
                <span class="tech-tag">GitHub Actions CI/CD</span>
                <span class="tech-tag">Prometheus & Grafana</span>
                <span class="tech-tag">Nginx Reverse Proxy</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Selected Projects & Case Studies -->
        <section class="section projects-section" id="projects">
          <div class="section-header">
            <span class="section-tag">Featured Engineering</span>
            <h2 class="section-title">Dự án tiêu biểu & Case Studies</h2>
            <p class="section-desc">Phân tích chuyên sâu về vấn đề, kiến trúc giải pháp và kết quả định lượng đạt được.</p>
          </div>

          <div class="case-studies-list">
            <!-- Project 1 -->
            <article class="case-card">
              <div class="case-header">
                <div class="case-badge">Case Study 01</div>
                <div class="case-role">Lead Backend Architect</div>
              </div>
              <h3 class="case-title">Reals Platform — Distributed Social Commerce Ecosystem</h3>
              <p class="case-summary">
                Hệ sinh thái mạng xã hội và thương mại điện tử đa không gian gồm 6 client độc lập (Social, Video, Shop, Stories, IAM, Portfolio) giao tiếp qua API Gateway trung tâm.
              </p>
              <div class="case-details-grid">
                <div class="detail-block">
                  <h4>Thách thức</h4>
                  <p>Tỷ lệ đọc/ghi feed không đồng đều, áp lực fan-out lớn khi người dùng có lượng follow cao, cần đồng bộ token xác thực trên nhiều ứng dụng con.</p>
                </div>
                <div class="detail-block">
                  <h4>Giải pháp kiến trúc</h4>
                  <p>Áp dụng mô hình Hybrid Fan-out (Push cho người dùng bình thường, Pull cho creator), tích hợp Kafka Outbox Pattern để đồng bộ bất đồng bộ, Redis Cache Aside phân tầng.</p>
                </div>
                <div class="detail-block">
                  <h4>Kết quả định lượng</h4>
                  <p>Thời gian tải feed trung bình &lt; 45ms (P95), chịu tải trên 10,000 RPS, khả năng mở rộng độc lập từng miền nghiệp vụ không gây ảnh hưởng lẫn nhau.</p>
                </div>
              </div>
              <div class="case-stack">
                <span class="stack-pill">Golang</span>
                <span class="stack-pill">Apache Kafka</span>
                <span class="stack-pill">PostgreSQL</span>
                <span class="stack-pill">Redis</span>
                <span class="stack-pill">Angular Monorepo</span>
                <span class="stack-pill">Docker K8s</span>
              </div>
            </article>

            <!-- Project 2 -->
            <article class="case-card">
              <div class="case-header">
                <div class="case-badge">Case Study 02</div>
                <div class="case-role">System & Media Engineer</div>
              </div>
              <h3 class="case-title">High-Throughput Video Ingestion & HLS Streaming Engine</h3>
              <p class="case-summary">
                Đường ống xử lý video quy mô lớn cho ứng dụng Reals Video & Reels, hỗ trợ tải lên trực tiếp, phân đoạn HLS adaptive bitrate và phát mượt mà độ trễ cực thấp.
              </p>
              <div class="case-details-grid">
                <div class="detail-block">
                  <h4>Thách thức</h4>
                  <p>Tệp video dung lượng lớn gây nghẽn băng thông server, tài nguyên CPU bị chiếm dụng khi chuyển mã đồng thời nhiều video HD.</p>
                </div>
                <div class="detail-block">
                  <h4>Giải pháp kiến trúc</h4>
                  <p>Triển khai quy trình Direct S3 Presigned Upload (bypass app server), hàng đợi xử lý phân tán FFmpeg worker nodes, đóng gói HLS đa độ phân giải (360p, 720p, 1080p).</p>
                </div>
                <div class="detail-block">
                  <h4>Kết quả định lượng</h4>
                  <p>Giảm 100% tải I/O video trên server ứng dụng, video sẵn sàng phát trong 3 giây sau khi upload hoàn tất, tiết kiệm 40% chi phí băng thông.</p>
                </div>
              </div>
              <div class="case-stack">
                <span class="stack-pill">Node.js</span>
                <span class="stack-pill">Go Worker</span>
                <span class="stack-pill">HLS.js</span>
                <span class="stack-pill">FFmpeg</span>
                <span class="stack-pill">MinIO / S3</span>
                <span class="stack-pill">Redis BullMQ</span>
              </div>
            </article>

            <!-- Project 3 -->
            <article class="case-card">
              <div class="case-header">
                <div class="case-badge">Case Study 03</div>
                <div class="case-role">Identity & Security Architect</div>
              </div>
              <h3 class="case-title">Reals IAM — Single Sign-On & Centralized Identity Provider</h3>
              <p class="case-summary">
                Hệ thống xác thực và cấp quyền tập trung chuẩn OAuth2/OIDC, bảo vệ toàn bộ mạng lưới microservices và cung cấp trải nghiệm đăng nhập một lần (SSO).
              </p>
              <div class="case-details-grid">
                <div class="detail-block">
                  <h4>Thách thức</h4>
                  <p>Phiên làm việc người dùng cần được đồng bộ tức thì trên 6 web client, yêu cầu thu hồi token (Token Revocation) ngay lập tức khi đăng xuất.</p>
                </div>
                <div class="detail-block">
                  <h4>Giải pháp kiến trúc</h4>
                  <p>Ký token bằng thuật toán bất đối xứng RS256, xoay vòng Refresh Token an toàn, kết hợp Redis Blacklist với Bloom Filter để kiểm tra thu hồi token cực nhanh.</p>
                </div>
                <div class="detail-block">
                  <h4>Kết quả định lượng</h4>
                  <p>Xác thực token dưới 5ms không cần gọi DB, hỗ trợ SSO xuyên suốt toàn bộ hệ sinh thái mà không có lỗ hổng bảo mật.</p>
                </div>
              </div>
              <div class="case-stack">
                <span class="stack-pill">Golang</span>
                <span class="stack-pill">JWT RS256</span>
                <span class="stack-pill">OAuth2 / OIDC</span>
                <span class="stack-pill">Redis Bloom</span>
                <span class="stack-pill">PostgreSQL</span>
              </div>
            </article>
          </div>
        </section>

        <!-- Journey / Experience Section -->
        <section class="section experience-section" id="experience">
          <div class="section-header">
            <span class="section-tag">Career Journey</span>
            <h2 class="section-title">Hành trình phát triển sự nghiệp</h2>
            <p class="section-desc">Từ nền tảng học thuật vững chắc tại UIT đến thực chiến xây dựng các hệ thống quy mô lớn.</p>
          </div>

          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-date">2024 — Hiện tại</div>
              <div class="timeline-content">
                <h3>Senior Backend Engineer & Lead Architect</h3>
                <span class="timeline-org">Reals Ecosystem & Core Platform</span>
                <p>
                  Chịu trách nhiệm thiết kế kiến trúc toàn diện cho nền tảng đa ứng dụng. Định hình mô hình vi dịch vụ,
                  thiết kế schema cơ sở dữ liệu phân tán, thiết lập quy chuẩn API, chuẩn CI/CD và giám sát hệ thống thời gian thực.
                </p>
                <div class="timeline-tags">
                  <span>Distributed Architecture</span>
                  <span>System Scalability</span>
                  <span>Team Leadership</span>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-date">2022 — 2024</div>
              <div class="timeline-content">
                <h3>Backend Software Engineer</h3>
                <span class="timeline-org">Cloud & Microservices Projects</span>
                <p>
                  Thiết kế và tối ưu các RESTful/gRPC APIs, xử lý các truy vấn PostgreSQL phức tạp, triển khai caching
                  Redis đa lớp, xây dựng hệ thống thanh toán và tích hợp các dịch vụ bên thứ ba.
                </p>
                <div class="timeline-tags">
                  <span>Golang</span>
                  <span>PostgreSQL Optimization</span>
                  <span>Kafka Streaming</span>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-date">2018 — 2022</div>
              <div class="timeline-content">
                <h3>Kỹ sư Công Nghệ Thông Tin / Khoa Học Máy Tính</h3>
                <span class="timeline-org">Đại học Công nghệ Thông tin — ĐHQG TP.HCM (UIT)</span>
                <p>
                  Tốt nghiệp chuyên ngành Kỹ thuật Phần mềm. Nghiên cứu sâu về Cấu trúc dữ liệu & Giải thuật nâng cao,
                  Mạng máy tính, Hệ quản trị cơ sở dữ liệu, Hệ điều hành và Hệ thống tính toán phân tán.
                </p>
                <div class="timeline-tags">
                  <span>UIT VNU-HCM</span>
                  <span>Computer Science</span>
                  <span>Distributed Computing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Principles Section -->
        <section class="section principles-section" id="principles">
          <div class="section-header">
            <span class="section-tag">Engineering Values</span>
            <h2 class="section-title">Triết lý thiết kế hệ thống</h2>
            <p class="section-desc">Những nguyên tắc cốt lõi định hình mọi quyết định kỹ thuật của tôi.</p>
          </div>

          <div class="principles-grid">
            <div class="principle-card">
              <div class="principle-num">01</div>
              <h3>Correctness & Data Integrity</h3>
              <p>
                Độ chính xác dữ liệu luôn là ưu tiên số một. Mọi giao dịch tài chính hay cập nhật trạng thái
                phải tuân thủ tính nhất quán, sử dụng Idempotency Keys và kiểm thử trường hợp biên nghiêm ngặt.
              </p>
            </div>

            <div class="principle-card">
              <div class="principle-num">02</div>
              <h3>Fault Tolerance & Graceful Degradation</h3>
              <p>
                Sự cố hệ thống là điều chắc chắn xảy ra. Thiết kế luôn có cơ chế Circuit Breaker, Retries with Exponential
                Backoff, và suy giảm tính năng duyên dáng để giữ cho hệ thống luôn phản hồi người dùng.
              </p>
            </div>

            <div class="principle-card">
              <div class="principle-num">03</div>
              <h3>Observability First</h3>
              <p>
                Hệ thống không thể cải thiện nếu không đo lường được. Luôn trang bị đầy đủ Structured Logging,
                Metrics (RED method) và Distributed Tracing ngay từ ngày đầu tiên triển khai.
              </p>
            </div>

            <div class="principle-card">
              <div class="principle-num">04</div>
              <h3>Simplicity Over Complexity</h3>
              <p>
                Tránh over-engineering. Chọn giải pháp đơn giản nhất nhưng có thể giải quyết tốt bài toán thực tế,
                giữ cho codebase dễ bảo trì, dễ mở rộng và dễ dàng onboard thành viên mới.
              </p>
            </div>
          </div>
        </section>

        <!-- About Section -->
        <section class="section about-section" id="about">
          <div class="about-container">
            <div class="about-content">
              <span class="section-tag">About Me</span>
              <h2 class="section-title">Đam mê chiều sâu kỹ thuật & giá trị thực tế</h2>
              <p>
                Tôi tin rằng một kỹ sư phần mềm xuất sắc không chỉ viết mã nguồn chạy được, mà còn tạo ra những kiến trúc
                bền vững trước thời gian, tiết kiệm tài nguyên hạ tầng và mang lại trải nghiệm mượt mà cho hàng triệu người dùng cuối.
              </p>
              <p>
                Khi không thiết kế hệ thống, tôi thường đọc tài liệu RFC, nghiên cứu internals của database engines,
                viết tài liệu kỹ thuật và tham gia đóng góp cho các dự án mã nguồn mở.
              </p>
              <div class="about-stats-row">
                <div>
                  <strong>UIT</strong>
                  <span>Alma Mater</span>
                </div>
                <div>
                  <strong>Backend</strong>
                  <span>Core Discipline</span>
                </div>
                <div>
                  <strong>Distributed</strong>
                  <span>Architecture Mindset</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact CTA Section -->
        <section class="section contact-section" id="contact">
          <div class="contact-box">
            <span class="contact-chip">Open for Opportunities</span>
            <h2 class="contact-title">Sẵn sàng đồng hành cùng dự án của bạn</h2>
            <p class="contact-desc">
              Bạn đang xây dựng một hệ thống quy mô lớn, cần tư vấn kiến trúc vi dịch vụ hoặc tìm kiếm
              một Senior Backend Engineer tâm huyết? Hãy liên hệ ngay hôm nay.
            </p>

            <div class="contact-methods">
              <a href="mailto:daccuong.uit@gmail.com" class="contact-item">
                <span class="contact-icon">✉</span>
                <div class="contact-info">
                  <small>Email</small>
                  <strong>daccuong.uit&#64;gmail.com</strong>
                </div>
              </a>

              <a href="https://github.com/daccuong-uit" target="_blank" rel="noopener" class="contact-item">
                <span class="contact-icon">⌨</span>
                <div class="contact-info">
                  <small>GitHub</small>
                  <strong>github.com/daccuong-uit</strong>
                </div>
              </a>

              <a href="https://linkedin.com/in/daccuong-uit" target="_blank" rel="noopener" class="contact-item">
                <span class="contact-icon">💼</span>
                <div class="contact-info">
                  <small>LinkedIn</small>
                  <strong>Đắc Cường (UIT)</strong>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <!-- Footer -->
      <footer class="portfolio-footer">
        <div class="footer-left">
          <span class="footer-brand">Đắc Cường</span>
          <span class="footer-copy">© 2024 · Senior Software / Backend Engineer</span>
        </div>
        <div class="footer-links">
          <a href="#hero">Back to Top ↑</a>
          <a href="https://github.com/daccuong-uit" target="_blank" rel="noopener">GitHub</a>
          <a href="mailto:daccuong.uit@gmail.com">Contact</a>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      background: #090a0d;
      color: #f1f5f9;
      font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      overflow-x: hidden;
      line-height: 1.6;
    }

    .portfolio-root {
      position: relative;
      min-height: 100vh;
      width: 100%;
    }

    /* Ambient Lighting */
    .glow-orb {
      position: absolute;
      width: 650px;
      height: 650px;
      border-radius: 50%;
      filter: blur(140px);
      pointer-events: none;
      z-index: 0;
      opacity: 0.15;
    }

    .orb-1 {
      top: 0;
      left: 20%;
      background: #38bdf8;
    }

    .orb-2 {
      top: 800px;
      right: 10%;
      background: #ec654c;
      opacity: 0.1;
    }

    /* Navigation */
    .portfolio-nav {
      position: sticky;
      top: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 76px;
      padding: 0 48px;
      background: rgba(9, 10, 13, 0.85);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }

    .nav-brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-monogram {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      background: linear-gradient(135deg, #10b981, #06b6d4);
      display: grid;
      place-items: center;
      font-weight: 800;
      color: #042f2e;
      font-size: 1.1rem;
      letter-spacing: -0.05em;
    }

    .brand-details {
      display: flex;
      flex-direction: column;
    }

    .brand-name {
      font-size: 1.05rem;
      font-weight: 700;
      color: #ffffff;
      line-height: 1.2;
    }

    .brand-sub {
      font-size: 0.72rem;
      color: #94a3b8;
    }

    .nav-links {
      display: flex;
      gap: 28px;
    }

    .nav-links a {
      color: #94a3b8;
      text-decoration: none;
      font-size: 0.88rem;
      font-weight: 500;
      transition: color 0.2s;
    }

    .nav-links a:hover {
      color: #ffffff;
    }

    .btn-contact-nav {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #f1f5f9;
      text-decoration: none;
      font-size: 0.84rem;
      font-weight: 600;
      padding: 8px 18px;
      border-radius: 9999px;
      transition: all 0.2s;
    }

    .btn-contact-nav:hover {
      background: rgba(16, 185, 129, 0.15);
      border-color: #10b981;
      color: #10b981;
    }

    /* Sections Shared */
    .section {
      max-width: 1160px;
      margin: 0 auto;
      padding: 100px 32px;
      position: relative;
      z-index: 1;
    }

    .section-header {
      margin-bottom: 56px;
      max-width: 680px;
    }

    .section-tag {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #10b981;
      margin-bottom: 12px;
    }

    .section-title {
      font-size: clamp(2rem, 3.5vw, 2.6rem);
      font-weight: 800;
      letter-spacing: -0.03em;
      margin: 0 0 12px;
      color: #ffffff;
      line-height: 1.18;
    }

    .section-desc {
      font-size: 1.05rem;
      color: #94a3b8;
      margin: 0;
    }

    /* Hero */
    .hero-section {
      max-width: 1160px;
      margin: 0 auto;
      padding: 100px 32px 80px;
      position: relative;
      z-index: 1;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.25);
      color: #34d399;
      font-size: 0.82rem;
      font-weight: 600;
      padding: 6px 16px;
      border-radius: 9999px;
      margin-bottom: 28px;
    }

    .pulse-indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #10b981;
      box-shadow: 0 0 12px #10b981;
    }

    .hero-title {
      font-size: clamp(2.8rem, 5.8vw, 4.6rem);
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 1.1;
      margin: 0 0 24px;
      max-width: 950px;
    }

    .gradient-text {
      background: linear-gradient(135deg, #34d399, #38bdf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero-lead {
      font-size: 1.18rem;
      color: #94a3b8;
      max-width: 760px;
      margin: 0 0 36px;
      line-height: 1.7;
    }

    .hero-lead strong {
      color: #f1f5f9;
    }

    .hero-actions {
      display: flex;
      gap: 16px;
      margin-bottom: 64px;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #10b981;
      color: #042f2e;
      text-decoration: none;
      font-weight: 700;
      padding: 14px 28px;
      border-radius: 12px;
      font-size: 0.95rem;
      box-shadow: 0 8px 24px rgba(16, 185, 129, 0.25);
      transition: all 0.2s;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      background: #059669;
      color: white;
    }

    .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #ffffff;
      text-decoration: none;
      font-weight: 600;
      padding: 14px 28px;
      border-radius: 12px;
      font-size: 0.95rem;
      transition: all 0.2s;
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .hero-metrics {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.06);
      padding: 24px 32px;
      border-radius: 20px;
    }

    .metric-card {
      display: flex;
      flex-direction: column;
    }

    .metric-value {
      font-size: 2rem;
      font-weight: 800;
      color: #ffffff;
      letter-spacing: -0.03em;
    }

    .metric-label {
      font-size: 0.78rem;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 4px;
    }

    /* Skills Grid */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }

    .skill-category-card {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.06);
      padding: 32px;
      border-radius: 18px;
      transition: transform 0.2s, border-color 0.2s;
    }

    .skill-category-card:hover {
      transform: translateY(-4px);
      border-color: rgba(16, 185, 129, 0.3);
    }

    .category-icon {
      font-size: 1.8rem;
      margin-bottom: 16px;
    }

    .skill-category-card h3 {
      font-size: 1.25rem;
      font-weight: 700;
      margin: 0 0 8px;
      color: #ffffff;
    }

    .skill-category-card p {
      font-size: 0.9rem;
      color: #94a3b8;
      margin: 0 0 20px;
    }

    .tags-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .tech-tag {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 5px 12px;
      border-radius: 6px;
      font-size: 0.8rem;
      color: #cbd5e1;
    }

    .tech-tag.highlight {
      background: rgba(16, 185, 129, 0.1);
      border-color: rgba(16, 185, 129, 0.3);
      color: #34d399;
      font-weight: 600;
    }

    /* Case Studies */
    .case-studies-list {
      display: flex;
      flex-direction: column;
      gap: 36px;
    }

    .case-card {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: 24px;
      padding: 40px;
      transition: border-color 0.2s;
    }

    .case-card:hover {
      border-color: rgba(16, 185, 129, 0.35);
    }

    .case-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }

    .case-badge {
      font-size: 0.75rem;
      font-weight: 800;
      color: #10b981;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .case-role {
      font-size: 0.82rem;
      color: #94a3b8;
      background: rgba(255, 255, 255, 0.04);
      padding: 4px 10px;
      border-radius: 6px;
    }

    .case-title {
      font-size: 1.6rem;
      font-weight: 800;
      color: #ffffff;
      margin: 0 0 12px;
    }

    .case-summary {
      font-size: 1rem;
      color: #94a3b8;
      margin: 0 0 28px;
    }

    .case-details-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-bottom: 28px;
      background: rgba(0, 0, 0, 0.25);
      padding: 24px;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.04);
    }

    .detail-block h4 {
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #38bdf8;
      margin: 0 0 8px;
    }

    .detail-block p {
      font-size: 0.88rem;
      color: #cbd5e1;
      margin: 0;
      line-height: 1.5;
    }

    .case-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .stack-pill {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 0.78rem;
      padding: 4px 10px;
      border-radius: 6px;
      color: #94a3b8;
    }

    /* Timeline */
    .timeline {
      position: relative;
      padding-left: 36px;
      border-left: 2px solid rgba(255, 255, 255, 0.08);
      display: flex;
      flex-direction: column;
      gap: 48px;
    }

    .timeline-item {
      position: relative;
    }

    .timeline-dot {
      position: absolute;
      left: -44px;
      top: 4px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #10b981;
      border: 3px solid #090a0d;
      box-shadow: 0 0 10px #10b981;
    }

    .timeline-date {
      font-size: 0.8rem;
      font-weight: 700;
      color: #10b981;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 6px;
    }

    .timeline-content h3 {
      font-size: 1.3rem;
      font-weight: 700;
      color: #ffffff;
      margin: 0 0 4px;
    }

    .timeline-org {
      display: block;
      font-size: 0.9rem;
      color: #38bdf8;
      margin-bottom: 12px;
    }

    .timeline-content p {
      font-size: 0.95rem;
      color: #94a3b8;
      margin: 0 0 16px;
      max-width: 720px;
    }

    .timeline-tags {
      display: flex;
      gap: 8px;
    }

    .timeline-tags span {
      background: rgba(255, 255, 255, 0.04);
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 0.75rem;
      color: #94a3b8;
    }

    /* Principles */
    .principles-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }

    .principle-card {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.06);
      padding: 32px;
      border-radius: 20px;
    }

    .principle-num {
      font-size: 1.4rem;
      font-weight: 800;
      color: #10b981;
      margin-bottom: 12px;
    }

    .principle-card h3 {
      font-size: 1.2rem;
      font-weight: 700;
      color: #ffffff;
      margin: 0 0 10px;
    }

    .principle-card p {
      font-size: 0.92rem;
      color: #94a3b8;
      margin: 0;
      line-height: 1.6;
    }

    /* About */
    .about-container {
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.04), rgba(56, 189, 248, 0.04));
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 56px 48px;
      border-radius: 28px;
    }

    .about-content p {
      font-size: 1.05rem;
      color: #94a3b8;
      margin-bottom: 20px;
      max-width: 820px;
    }

    .about-stats-row {
      display: flex;
      gap: 48px;
      margin-top: 36px;
      padding-top: 28px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }

    .about-stats-row div {
      display: flex;
      flex-direction: column;
    }

    .about-stats-row strong {
      font-size: 1.5rem;
      font-weight: 800;
      color: #ffffff;
    }

    .about-stats-row span {
      font-size: 0.8rem;
      color: #64748b;
      text-transform: uppercase;
    }

    /* Contact Section */
    .contact-box {
      background: radial-gradient(circle at 50% 30%, rgba(16, 185, 129, 0.1), transparent 70%);
      border: 1px solid rgba(16, 185, 129, 0.2);
      border-radius: 28px;
      padding: 64px 48px;
      text-align: center;
      max-width: 880px;
      margin: 0 auto;
    }

    .contact-chip {
      display: inline-block;
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: #34d399;
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 6px 14px;
      border-radius: 9999px;
      margin-bottom: 20px;
    }

    .contact-title {
      font-size: clamp(2rem, 3.8vw, 2.8rem);
      font-weight: 800;
      color: #ffffff;
      margin: 0 0 16px;
    }

    .contact-desc {
      font-size: 1.05rem;
      color: #94a3b8;
      max-width: 620px;
      margin: 0 auto 40px;
    }

    .contact-methods {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    .contact-item {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      padding: 20px;
      display: flex;
      align-items: center;
      gap: 14px;
      text-decoration: none;
      transition: all 0.2s;
    }

    .contact-item:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(16, 185, 129, 0.4);
      transform: translateY(-2px);
    }

    .contact-icon {
      font-size: 1.4rem;
    }

    .contact-info {
      text-align: left;
      display: flex;
      flex-direction: column;
    }

    .contact-info small {
      font-size: 0.72rem;
      color: #64748b;
      text-transform: uppercase;
    }

    .contact-info strong {
      font-size: 0.88rem;
      color: #ffffff;
      word-break: break-all;
    }

    /* Footer */
    .portfolio-footer {
      max-width: 1160px;
      margin: 0 auto;
      padding: 40px 32px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer-left {
      display: flex;
      flex-direction: column;
    }

    .footer-brand {
      font-weight: 700;
      color: #ffffff;
      font-size: 0.95rem;
    }

    .footer-copy {
      font-size: 0.78rem;
      color: #64748b;
    }

    .footer-links {
      display: flex;
      gap: 24px;
    }

    .footer-links a {
      color: #94a3b8;
      text-decoration: none;
      font-size: 0.85rem;
    }

    .footer-links a:hover {
      color: #ffffff;
    }

    @media (max-width: 900px) {
      .nav-links { display: none; }
      .hero-metrics { grid-template-columns: repeat(2, 1fr); }
      .skills-grid, .principles-grid, .case-details-grid, .contact-methods { grid-template-columns: 1fr; }
      .portfolio-nav { padding: 0 24px; }
      .section { padding: 60px 20px; }
    }
  `],
})
export class PortfolioLandingComponent {}
