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
      title: 'Reals Platform',
      problem:
        'Khi một người có nhiều người theo dõi đăng bài, hệ thống cần cập nhật tin tức cho rất nhiều người cùng lúc mà không bị chậm hoặc mất dữ liệu.',
      solution:
        'Tôi thiết kế lại cách hệ thống phân phối bài đăng, đảm bảo dữ liệu luôn được ghi nhận đầy đủ kể cả khi có sự cố.',
      impact: 'Hệ thống xử lý ổn định với lượng truy cập lớn, không bị mất dữ liệu.',
      stack: ['Golang', 'Apache Kafka', 'PostgreSQL', 'Redis Cluster', 'Docker K8s'],
      linkText: 'Xem chi tiết dự án →',
      linkUrl: 'https://github.com/daccuong-uit',
      imageAlt: 'Sơ đồ kiến trúc Reals Distributed Social Platform',
      imageSvgType: 'platform',
    },
    {
      id: 'video-engine',
      number: '02',
      category: 'High-Throughput Media',
      title: 'Xử lý và phát video trực tuyến',
      problem:
        'Video dung lượng lớn làm chậm hệ thống chính, và việc chuyển sang nhiều độ phân giải khác nhau tốn nhiều thời gian xử lý.',
      solution:
        'Tôi tách phần xử lý video ra khỏi hệ thống chính, giúp video sẵn sàng phát nhanh hơn.',
      impact: 'Video sẵn sàng phát chỉ sau vài giây tải lên.',
      stack: ['Node.js', 'Go Worker', 'HLS.js', 'FFmpeg', 'MinIO / S3', 'BullMQ'],
      linkText: 'Xem chi tiết dự án →',
      linkUrl: 'https://github.com/daccuong-uit',
      imageAlt: 'Sơ đồ đường ống truyền tải video phân tán HLS',
      imageSvgType: 'streaming',
    },
    {
      id: 'reals-iam',
      number: '03',
      category: 'Identity & Security',
      title: 'Hệ thống đăng nhập và xác thực tập trung',
      problem:
        'Người dùng cần đăng nhập một lần và dùng chung cho nhiều sản phẩm, hệ thống cũng phải nhận biết ngay khi một phiên đăng nhập bị thu hồi.',
      solution:
        'Tôi xây dựng hệ thống xác thực có thể kiểm tra hợp lệ ngay lập tức, không cần truy vấn cơ sở dữ liệu mỗi lần.',
      impact: 'Xác thực gần như tức thì, dùng chung cho toàn bộ hệ thống.',
      stack: ['Golang', 'OAuth2 / OIDC', 'JWT RS256', 'Redis Bloom', 'PostgreSQL'],
      linkText: 'Xem chi tiết dự án →',
      linkUrl: 'https://github.com/daccuong-uit',
      imageAlt: 'Sơ đồ xác thực phân tán SSO RS256',
      imageSvgType: 'iam',
    },
  ];

  readonly otherProjects: OtherProject[] = [
    {
      title: 'Xử lý giao dịch phân tán cho thương mại điện tử',
      description:
        'Đảm bảo giao dịch được xử lý đúng và đầy đủ dù đi qua nhiều dịch vụ khác nhau.',
      stack: 'Golang · Kafka · PostgreSQL · gRPC',
      link: 'https://github.com/daccuong-uit',
    },
    {
      title: 'Cổng kết nối thời gian thực',
      description:
        'Duy trì hàng loạt kết nối trực tuyến cùng lúc mà không làm chậm hệ thống.',
      stack: 'Go (Gorilla/Epoll) · Redis · Docker',
      link: 'https://github.com/daccuong-uit',
    },
    {
      title: 'Giới hạn truy cập & bảo vệ hệ thống',
      description:
        'Ngăn chặn lượng truy cập bất thường để bảo vệ hệ thống khỏi quá tải.',
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
