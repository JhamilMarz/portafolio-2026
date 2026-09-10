import { Component, OnInit, OnDestroy, inject, signal, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Section {
  id: string;
  label: string;
  icon: string;
}

interface Social {
  name: string;
  icon: string;
  url: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  stack: string[];
}

interface Venture {
  name: string;
  tag: string;
  description: string;
  status: string;
  url: string;
}

interface TechGroup {
  category: string;
  items: string[];
}

interface Project {
  name: string;
  year: string;
  description: string;
  tags: string[];
  url: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  year = new Date().getFullYear();

  sections: Section[] = [
    { id: 'about', label: 'Acerca de mí', icon: 'bi-person' },
    { id: 'experience', label: 'Experiencia', icon: 'bi-briefcase' },
    { id: 'ventures', label: 'Emprendimientos', icon: 'bi-rocket-takeoff' },
    { id: 'tech', label: 'Tecnologías', icon: 'bi-stack' },
    { id: 'projects', label: 'Proyectos', icon: 'bi-code-square' },
  ];

  activeSection = signal<string>('about');

  profile = {
    name: 'Yamil Marzana',
    initials: 'YM',
    role: 'Full Stack Developer',
    location: 'La Paz, Bolivia',
    email: 'jhamilmaper93@gmail.com',
    // Reemplaza con el enlace real de tu CV en Drive
    cvUrl: 'https://drive.google.com/file/d/REEMPLAZA-CON-TU-ID-DE-DRIVE/view?usp=sharing',
    bio: 'Diseño y construyo productos digitales end-to-end. Más de 7 años traduciendo ideas ambiciosas en sistemas escalables, interfaces precisas y experiencias que la gente realmente quiere usar.',
  };

  socials: Social[] = [
    { name: 'GitHub', icon: 'bi-github', url: 'https://github.com/' },
    { name: 'LinkedIn', icon: 'bi-linkedin', url: 'https://linkedin.com/in/' },
    { name: 'Twitter / X', icon: 'bi-twitter-x', url: 'https://x.com/' },
    { name: 'Email', icon: 'bi-envelope', url: 'mailto:hola@alexmoreno.dev' },
  ];

  experience: ExperienceItem[] = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Nexora Labs',
      period: '2023 — Presente',
      location: 'Madrid, ES · Remoto',
      description:
        'Lidero el diseño técnico de una plataforma SaaS B2B con +200k usuarios activos. Responsable de la arquitectura de microservicios, el sistema de diseño compartido y la estrategia de rendimiento del frontend.',
      stack: ['Angular', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    },
    {
      role: 'Full Stack Developer',
      company: 'Fintech Solutions',
      period: '2021 — 2023',
      location: 'Barcelona, ES',
      description:
        'Desarrollo de APIs de pagos de alto tráfico y dashboards analíticos en tiempo real. Reduje el tiempo de carga del frontend en un 62% y lideré la migración a una arquitectura event-driven.',
      stack: ['React', '.NET', 'MongoDB', 'Redis', 'Azure'],
    },
    {
      role: 'Frontend Developer',
      company: 'Studio Kinetik',
      period: '2019 — 2021',
      location: 'Valencia, ES',
      description:
        'Construcción de interfaces para clientes de retail y banca. Colaboración directa con diseño para llevar sistemas visuales complejos a producción con foco en accesibilidad.',
      stack: ['Vue', 'TypeScript', 'SASS', 'Storybook'],
    },
  ];

  ventures: Venture[] = [
    {
      name: 'DevFlow',
      tag: 'SaaS · 2024',
      description:
        'Plataforma de productividad para equipos de ingeniería con foco en automatización de code reviews y métricas de calidad.',
      status: 'Activo · +1.2k usuarios',
      url: '#',
    },
    {
      name: 'CodeCollab',
      tag: 'Herramienta · 2023',
      description:
        'Editor colaborativo en tiempo real para pair programming remoto, con integración nativa a GitHub y CRDTs.',
      status: 'Beta cerrada',
      url: '#',
    },
    {
      name: 'Pulse Analytics',
      tag: 'Producto · 2022',
      description:
        'Analytics privacy-first para sitios estáticos. Sin cookies, sin tracking, con métricas realmente accionables.',
      status: 'Adquirido · 2023',
      url: '#',
    },
    {
      name: 'Nómada',
      tag: 'Open Source · 2021',
      description:
        'Librería de componentes accesibles para Angular, mantenida por la comunidad y usada en más de 40 proyectos.',
      status: 'Open Source',
      url: '#',
    },
  ];

  techGroups: TechGroup[] = [
    {
      category: 'Frontend',
      items: ['Angular', 'React', 'Vue', 'TypeScript', 'RxJS', 'Tailwind'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'NestJS', '.NET', 'Python', 'Go', 'GraphQL'],
    },
    {
      category: 'Datos',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Elasticsearch'],
    },
    {
      category: 'DevOps & Cloud',
      items: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GitHub Actions'],
    },
  ];

  projects: Project[] = [
    {
      name: 'Atlas Design System',
      year: '2024',
      description:
        'Sistema de diseño open-source con +40 componentes accesibles y tokens multi-marca.',
      tags: ['Angular', 'Storybook', 'SCSS'],
      url: '#',
    },
    {
      name: 'Orbit API Gateway',
      year: '2023',
      description:
        'Gateway de APIs de alto rendimiento con rate limiting, cache y observabilidad built-in.',
      tags: ['Go', 'Redis', 'Prometheus'],
      url: '#',
    },
    {
      name: 'Nomad Travel App',
      year: '2023',
      description: 'PWA de planificación de viajes offline-first con sincronización conflict-free.',
      tags: ['React', 'IndexedDB', 'PWA'],
      url: '#',
    },
    {
      name: 'Ledger CLI',
      year: '2022',
      description:
        'CLI para gestión de finanzas personales con reportes en terminal y export a CSV.',
      tags: ['Node.js', 'TypeScript'],
      url: '#',
    },
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onScroll);
      this.onScroll();
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('resize', this.onScroll);
    }
  }

  private onScroll = (): void => {
    const probe = window.innerHeight * 0.35;
    let current = this.sections[0].id;

    for (const s of this.sections) {
      const el = document.getElementById(s.id);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= probe) {
        current = s.id;
      }
    }

    if (current !== this.activeSection()) {
      this.activeSection.set(current);
    }
  };

  scrollTo(event: Event, id: string): void {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const isMobile = window.innerWidth < 900;
    const offset = isMobile ? 140 : 40;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: 'smooth' });
  }
}
