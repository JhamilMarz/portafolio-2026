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
    /* { id: 'projects', label: 'Proyectos', icon: 'bi-code-square' }, */
  ];

  activeSection = signal<string>('about');

  profile = {
    name: 'Hola, Soy Yamil',
    initials: 'YM',
    avatar: 'profile.jpg',
    role: 'Full Stack Developer',
    location: 'La Paz, Bolivia',
    email: 'jhamilmaper93@gmail.com',
    // Reemplaza con el enlace real de tu CV en Drive
    cvUrl: 'https://drive.google.com/file/d/13L6nPggJedyf9x-1B7MqdKUgnnfS_vmP/view?usp=sharing',
    bio: 'Ingeniero electrónico, entusiasta de las nuevas tecnologías, gran parte de mi tiempo la dedico a la investigación y desarrollo, más de 5 años de experiencia desarrollando, aprendiendo y trabajando con diversas tecnologías relacionadas al mundo del desarrollo de aplicaciones y gestión de datos.',
  };

  socials: Social[] = [
    { name: 'GitHub', icon: 'bi-github', url: 'https://github.com/JhamilMarz' },
    { name: 'LinkedIn', icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/yamil-m-7b9411387' },
    /* { name: 'Twitter / X', icon: 'bi-twitter-x', url: 'https://x.com/' }, */
    /* { name: 'Email', icon: 'bi-envelope', url: '' }, */
  ];

  experience: ExperienceItem[] = [
    {
      role: 'Analista de software',
      company: 'Exalogics SRL',
      period: 'Mayo 2024 — Enero 2026',
      location: 'La Paz, Presencial',
      description:
        'Lideré el desarrollo de aplicaciones web utilizando Angular y React para el frontend, y Node.js y .NET/C# para el backend, garantizando una integración fluida con SQL Server. Modernicé sistemas heredados mediante la migración de arquitecturas monolíticas a microservicios RESTful, reduciendo la deuda técnica y mejorando la estabilidad del sistema en un 30%.',
      stack: ['Angular', '.NET', 'Node.js', 'PostgreSQL', 'Docker'],
    },
    {
      role: 'Analista de software',
      company: 'Kerkus Corredores',
      period: 'Mayo 2023 — Abril 2024',
      location: 'La Paz, Presencial',
      description:
        'Diseñé e implementé un almacén de datos (Data Warehouse) centralizado en SQL Server para consolidar datos de producción de seguros, pólizas, conciliación bancaria y operaciones. Desarrollé flujos de trabajo ETL utilizando procedimientos almacenados de SQL Server y servicios web/API para la extracción, transformación, estandarización y carga de datos. Integré fuentes de datos heterogéneas, incluyendo informes de conciliación bancaria, un sistema transaccional heredado (legacy) y registros operativos internos basados ​​en Excel. Procesé y consolidé aproximadamente 150.000 registros mensuales, implementando reglas de negocio, estados de validación, conciliación y controles de calidad de datos para garantizar la integridad, trazabilidad y auditabilidad. Desarrollé aplicaciones empresariales utilizando Angular, Node.js y TypeScript, incluyendo la integración con un núcleo bancario (core bancario) mediante API SOAP.',
      stack: ['Angular', '.NET', 'Node.js', 'Python', 'Azure', 'SQL Server'],
    },
    {
      role: 'Analista de software',
      company: 'Saffiro SRL',
      period: 'Septiembre 2020 — Abril 2023',
      location: 'La Paz, Presencial',
      description:
        'Desarrollé y optimicé aplicaciones web empresariales utilizando Angular para el frontend y .NET/C# para los servicios de backend, garantizando alta disponibilidad y rendimiento. Modernicé sistemas heredados mediante la migración de arquitecturas monolíticas a microservicios RESTful, reduciendo la deuda técnica y mejorando la estabilidad del sistema en un 30%.',
      stack: ['Angular', '.NET', 'Oracle'],
    },
  ];

  ventures: Venture[] = [
    {
      name: 'CrmDent',
      tag: 'SaaS · 2026',
      description: 'Plataforma de gestión de clientes y gestor de citas médicas.',
      status: 'Activo',
      url: '#',
    },
    {
      name: 'InventariosVentas',
      tag: 'SaaS · 2025',
      description: 'Plataforma de gestión de inventarios y ventas para pequeñas empresas.',
      status: 'Activo',
      url: '#',
    },
    /* {
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
    }, */
  ];

  techGroups: TechGroup[] = [
    {
      category: 'Frontend',
      items: ['Angular', 'React'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'NestJS', '.NET'],
    },
    {
      category: 'Datos',
      items: ['PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      category: 'DevOps & Cloud',
      items: ['Docker', 'AWS', 'Azure', 'GitHub Actions'],
    },
    {
      category: 'Data & Analytics Languages',
      items: ['Python (Pandas, Numpy)', 'Data Warehouse MOdeling', 'Sql (T-SQL, PLSQL)'],
    },
    {
      category: 'Tools & Methods',
      items: [
        'Github',
        'Postman',
        'AI Agents Integration (Claide Code)',
        'SDD Specification Driven Development',
        'Agile/Scrum',
      ],
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

  private readonly user = 'jhamilmaper93';
  private readonly domain = 'gmail';
  private readonly tld = 'com';

  readonly email = signal(`${this.user}@${this.domain}.${this.tld}`);
  readonly isCopied = signal(false);

  async copyToClipboard(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email());
      this.isCopied.set(true);

      setTimeout(() => {
        this.isCopied.set(false);
      }, 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  }
}
