import {
  Component,
  HostListener,
  OnInit,
  OnDestroy,
  signal,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface NavItem {
  id: string;
  label: string;
}

interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  linkText: string;
  linkUrl: string;
  imageAlt: string;
  imageSvgType: 'platform' | 'streaming' | 'iam';
}

interface OtherProject {
  title: string;
  description: string;
  stack: string;
  link: string;
}

@Component({
  standalone: true,
  selector: 'portfolio-landing',
  imports: [CommonModule],
  templateUrl: './portfolio-landing.component.html',
  styleUrls: ['./portfolio-landing.component.css'],
})
export class PortfolioLandingComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  // Nav state
  isScrolled = signal(false);
  isNavHidden = signal(false);
  activeSection = signal('hero');
  mobileMenuOpen = signal(false);
  copiedEmail = signal(false);

  private lastScrollY = 0;
  private copyTimeout: any = null;

  readonly navItems: NavItem[] = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'highlights', label: 'Engineering' },
    { id: 'about', label: 'About' },
  ];

  readonly projects: Project[] = [
    {
      id: 'reals-platform',
      number: '01',
      category: 'Distributed Architecture',
      title: 'Reals Platform — Distributed Social Commerce Ecosystem',
      problem:
        'Tỷ lệ đọc/ghi feed bất đối xứng lớn, áp lực fan-out nghiêm trọng khi creator có hàng chục ngàn follower, và cần đồng bộ trạng thái giữa 6 ứng dụng con độc lập.',
      solution:
        'Thiết kế mô hình Hybrid Fan-out (Push cho người dùng thông thường, Pull cho top creator), kết hợp Transactional Outbox qua Apache Kafka để đảm bảo tính nhất quán cuối cùng.',
      impact: '10,000+ RPS Throughput · P95 Latency < 45ms · Zero Data Loss',
      stack: ['Golang', 'Apache Kafka', 'PostgreSQL', 'Redis Cluster', 'Docker K8s'],
      linkText: 'Xem tài liệu kiến trúc →',
      linkUrl: 'https://github.com/daccuong-uit',
      imageAlt: 'Sơ đồ kiến trúc Reals Distributed Social Platform',
      imageSvgType: 'platform',
    },
    {
      id: 'video-engine',
      number: '02',
      category: 'High-Throughput Media',
      title: 'Video Ingestion & Adaptive HLS Streaming Engine',
      problem:
        'Tệp video dung lượng lớn gây nghẽn băng thông ứng dụng chính, tiêu tốn CPU đột biến khi xử lý mã hóa chuyển đổi nhiều định dạng HD đồng thời.',
      solution:
        'Triển khai kiến trúc Direct S3 Presigned Upload (bypass 100% I/O qua API Gateway), điều phối cụm FFmpeg worker bất đồng bộ để phân đoạn HLS đa độ phân giải thích ứng (360p, 720p, 1080p).',
      impact: '100% I/O Bypassed · 3 Giây sẵn sàng phát video · Giảm 40% băng thông',
      stack: ['Node.js', 'Go Worker', 'HLS.js', 'FFmpeg', 'MinIO / S3', 'BullMQ'],
      linkText: 'Chi tiết luồng xử lý media →',
      linkUrl: 'https://github.com/daccuong-uit',
      imageAlt: 'Sơ đồ đường ống truyền tải video phân tán HLS',
      imageSvgType: 'streaming',
    },
    {
      id: 'reals-iam',
      number: '03',
      category: 'Identity & Security',
      title: 'Reals IAM — Single Sign-On & Centralized Identity Provider',
      problem:
        'Phiên làm việc và phân quyền cần được xác minh tức thì trên toàn bộ mạng lưới vi dịch vụ, yêu cầu thu hồi token (Token Revocation) ngay lập tức khi phát hiện nghi vấn hoặc đăng xuất.',
      solution:
        'Ký mã hóa token bất đối xứng chuẩn RS256 kết hợp OAuth2/OIDC, xoay vòng Refresh Token an toàn, tích hợp Redis Bloom Filter và In-Memory Blacklist để xác thực tức thì mà không chạm Database.',
      impact: '< 5ms Thời gian thẩm định Token · Zero DB queries · Đồng bộ SSO 6 clients',
      stack: ['Golang', 'OAuth2 / OIDC', 'JWT RS256', 'Redis Bloom', 'PostgreSQL'],
      linkText: 'Xem chuẩn bảo mật IAM →',
      linkUrl: 'https://github.com/daccuong-uit',
      imageAlt: 'Sơ đồ xác thực phân tán SSO RS256',
      imageSvgType: 'iam',
    },
  ];

  readonly otherProjects: OtherProject[] = [
    {
      title: 'E-Commerce Distributed Transaction Engine',
      description: 'Điều phối giao dịch phân tán đảm bảo ACID xuyên suốt nhiều service với Saga Orchestrator Pattern & Idempotent Consumer.',
      stack: 'Golang · Kafka · PostgreSQL · gRPC',
      link: 'https://github.com/daccuong-uit',
    },
    {
      title: 'High-Concurrency Real-Time Gateway',
      description: 'Cổng giao tiếp WebSocket phân tán hỗ trợ hàng chục ngàn kết nối đồng thời qua Redis Pub/Sub và Go epoll routines.',
      stack: 'Go (Gorilla/Epoll) · Redis · Docker',
      link: 'https://github.com/daccuong-uit',
    },
    {
      title: 'Distributed Rate Limiter & Circuit Breaker',
      description: 'Module bảo vệ hạ tầng ứng dụng thuật toán Sliding Window Log và Token Bucket phân tán, hạn chế lạm dụng API.',
      stack: 'Go · Redis Lua Script · Envoy',
      link: 'https://github.com/daccuong-uit',
    },
  ];

  ngOnInit(): void {
    if (this.isBrowser) {
      this.lastScrollY = window.scrollY;
      this.initScrollSpy();
    }
  }

  ngOnDestroy(): void {
    if (this.copyTimeout) {
      clearTimeout(this.copyTimeout);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (!this.isBrowser) return;

    const currentScrollY = window.scrollY;

    // Header styling when scrolled
    this.isScrolled.set(currentScrollY > 8);

    // Smart sticky nav: Hide when scrolling down > 80px, show when scrolling up
    if (currentScrollY > 80) {
      if (currentScrollY > this.lastScrollY + 5) {
        // Scrolling down
        this.isNavHidden.set(true);
      } else if (currentScrollY < this.lastScrollY - 5) {
        // Scrolling up
        this.isNavHidden.set(false);
      }
    } else {
      this.isNavHidden.set(false);
    }

    this.lastScrollY = Math.max(0, currentScrollY);
  }

  @HostListener('window:keydown.escape', [])
  onEscapePress(): void {
    if (this.mobileMenuOpen()) {
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
    if (this.isBrowser) {
      document.body.style.overflow = this.mobileMenuOpen() ? 'hidden' : '';
    }
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }

  copyEmail(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    const email = 'daccuong.uit@gmail.com';
    if (this.isBrowser && navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        this.showCopiedFeedback();
      }).catch(() => {
        this.fallbackCopy(email);
      });
    } else {
      this.fallbackCopy(email);
    }
  }

  private fallbackCopy(text: string): void {
    if (!this.isBrowser) return;
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      this.showCopiedFeedback();
    } catch (err) {
      console.error('Failed to copy', err);
    }
    document.body.removeChild(textArea);
  }

  private showCopiedFeedback(): void {
    this.copiedEmail.set(true);
    if (this.copyTimeout) {
      clearTimeout(this.copyTimeout);
    }
    this.copyTimeout = setTimeout(() => {
      this.copiedEmail.set(false);
    }, 1500);
  }

  private initScrollSpy(): void {
    if (!('IntersectionObserver' in window)) return;

    const sections = document.querySelectorAll('section[id], header[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
  }
}
