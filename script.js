const DATA_CONFIG = {
    profile: {
        firstName: "Muhammad",
        lastName: "Salman",
        brandFirst: "Ryhmny",
        brandLast: "Rin",
        role: "Full-stack Developer & Designer",
        location: "Bandung, Indonesia",
        email: "muhammad.salman.tif425@polban.ac.id",
        phone: "6281214958617",
        aboutTitle: "Menciptakan solusi digital yang bermakna.",
        aboutDesc1: "Saya adalah seorang pengembang yang bersemangat dalam menggabungkan estetika desain dengan performa kode yang optimal.",
        aboutDesc2: "Dengan pengalaman lebih dari 3 tahun, saya telah membantu berbagai klien membangun identitas digital mereka melalui website yang responsif.",
        image: "./IMG_20260225_204241_884.jpg.jpeg",
        stats: [
            { label: "Proyek Selesai", value: "25+" },
            { label: "Klien Puas", value: "18" }
        ]
    },
    socials: [
        { name: "Github", icon: "github", url: "https://github.com/RyhmnyRin" },
        { name: "Instagram", icon: "instagram", url: "https://instagram.com/mslmnalf" }
    ],
    navItems: [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills & Hobby' },
        { id: 'projects', label: 'Projects' },
        { id: 'assignment', label: 'Assignment' },
        { id: 'contact', label: 'Contact' }
    ],
    skills: [
        { name: 'Frontend', icon: 'globe', items: ['React', 'Next.js', 'Tailwind', 'JS'] },
        { name: 'Backend', icon: 'terminal', items: ['Node.js', 'Express', 'MySQL', 'Prisma'] },
        { name: 'Lainnya', icon: 'cpu', items: ['Git', 'Figma', 'Docker', 'Vercel'] }
    ],
    projects: [
        {
            title: "Modern E-Commerce",
            desc: "Toko online dengan sistem keranjang belanja dan pembayaran real-time.",
            tech: ["Next.js", "Stripe"],
            img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600",
            url: "#"
        },
        {
            title: "SaaS Dashboard",
            desc: "Panel manajemen data untuk perusahaan skala menengah.",
            tech: ["React", "Charts.js"],
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
            url: "#"
        }
    ],
    assignments: [
        {
            title: "Penugasan 2",
            subject: "Penugasan Kegiatan",
            status: "Selesai",
            date: "25 Feb 2026",
            desc: "Tujuan: memahami alur pembuatan tor dan menyelesaikan studi kasus.",
            type: "pdf", // 'pdf', 'video', atau 'image'
            previewImg: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600",
            fileUrl: "./TOR-LKMMTH.pdf", // Ganti dengan link GDrive atau file lokal (.pdf)
            fileName: "TOR-LKMMTH.pdf"
        },
        {
            title: "Penugasan 3",
            subject: "Infografis Informatif",
            status: "Belum Selesai",
            date: "-",
            desc: "Tujuan: -",
            type: "png",
            previewImg: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600",
            fileUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Ganti dengan link video YouTube/MP4/GDrive
            fileName: "Demo_Penugasan_3.mp4"
        },
        {
            title: "Penugasan 4",
            subject: "Video Kreatif",
            status: "belum selesai",
            date: "-",
            desc: "Tujuan: -",
            type: "video",
            previewImg: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
            fileUrl: "./hasil_penugasan_4.mp4", // Ganti dengan gambar lokal png/jpg
            fileName: "Hasil_Penugasan_4.mp4"
        }
    ]
};

// 2. RENDER LOGIC
function init() {
    // Check Theme Preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        updateThemeIcon(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateThemeIcon(false);
    }

    // Render Brand
    document.getElementById('nav-brand-first').innerText = DATA_CONFIG.profile.brandFirst;
    document.getElementById('nav-brand-last').innerText = DATA_CONFIG.profile.brandLast;
    document.getElementById('footer-brand').innerHTML = `${DATA_CONFIG.profile.brandFirst}<span class="text-white">${DATA_CONFIG.profile.brandLast}</span>`;

    // Render Hero
    document.getElementById('hero-role').innerText = `Halo! Saya adalah ${DATA_CONFIG.profile.role} yang berfokus pada pembuatan aplikasi yang cepat dan estetik.`;

    // Render Nav
    const navContainer = document.getElementById('desktop-menu');
    const mobileNavContainer = document.getElementById('mobile-menu');
    navContainer.innerHTML = '';
    mobileNavContainer.innerHTML = '';

    DATA_CONFIG.navItems.forEach(item => {
        const btn = `<button onclick="scrollToSection('${item.id}')" class="text-sm font-medium capitalize text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">${item.label}</button>`;
        navContainer.innerHTML += btn;
        mobileNavContainer.innerHTML += `<button onclick="scrollToSection('${item.id}')" class="text-left text-lg font-medium text-slate-600 dark:text-slate-300 border-b border-slate-50 dark:border-slate-800 pb-2">${item.label}</button>`;
    });

    // Render Socials
    const heroSocials = document.getElementById('hero-socials');
    const footerSocials = document.getElementById('footer-socials');
    heroSocials.innerHTML = '';
    footerSocials.innerHTML = '';

    DATA_CONFIG.socials.forEach(s => {
        const link = `<a href="${s.url}" target="_blank" class="p-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:shadow-md transition-all border border-transparent dark:border-slate-700"><i data-lucide="${s.icon}"></i></a>`;
        heroSocials.innerHTML += link;
        footerSocials.innerHTML += `<a href="${s.url}" target="_blank" class="text-slate-400 hover:text-white transition-colors"><i data-lucide="${s.icon}"></i></a>`;
    });

    // Render About
    document.getElementById('about-img').src = DATA_CONFIG.profile.image;
    document.getElementById('about-title').innerText = DATA_CONFIG.profile.aboutTitle;
    document.getElementById('about-desc1').innerText = DATA_CONFIG.profile.aboutDesc1;
    document.getElementById('about-desc2').innerText = DATA_CONFIG.profile.aboutDesc2;

    const statsContainer = document.getElementById('about-stats');
    statsContainer.innerHTML = '';
    DATA_CONFIG.profile.stats.forEach(s => {
        statsContainer.innerHTML += `<div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700"><div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">${s.value}</div><div class="text-sm text-slate-500 dark:text-slate-400 font-medium">${s.label}</div></div>`;
    });

    // Render Skills
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = '';
    DATA_CONFIG.skills.forEach(skill => {
        skillsContainer.innerHTML += `
                    <div class="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <div class="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6"><i data-lucide="${skill.icon}"></i></div>
                        <h4 class="text-xl font-bold mb-4 dark:text-white">${skill.name}</h4>
                        <div class="flex flex-wrap gap-2">${skill.items.map(i => `<span class="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-full border border-slate-100 dark:border-slate-700">${i}</span>`).join('')}</div>
                    </div>`;
    });

    // Render Projects
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = '';
    DATA_CONFIG.projects.forEach(p => {
        projectsContainer.innerHTML += `
                    <div class="group bg-slate-50 dark:bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-blue-100 dark:hover:border-blue-900 transition-all">
                        <div class="relative aspect-video overflow-hidden">
                            <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <a href="${p.url}" class="bg-white text-slate-900 px-6 py-2 rounded-full font-bold flex items-center gap-2">Detail <i data-lucide="external-link" class="w-4 h-4"></i></a>
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="flex gap-2 mb-3">${p.tech.map(t => `<span class="text-[10px] font-bold uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded">${t}</span>`).join('')}</div>
                            <h4 class="text-xl font-bold dark:text-white">${p.title}</h4>
                            <p class="text-slate-600 dark:text-slate-400 text-sm mt-2">${p.desc}</p>
                        </div>
                    </div>`;
    });

    // Render Assignments
    const assignmentsContainer = document.getElementById('assignments-container');
    assignmentsContainer.innerHTML = '';
    DATA_CONFIG.assignments.forEach(a => {
        // Tentukan Ikon berdasarkan tipe file
        let iconType = a.type === 'video' ? 'play' : (a.type === 'pdf' ? 'file-text' : 'image');
        let iconMargin = a.type === 'video' ? 'ml-1' : '';

        assignmentsContainer.innerHTML += `
                    <div class="assignment-card bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all group">
                        <div class="flex flex-col lg:flex-row">
                            <div class="lg:w-2/5 relative bg-slate-900 aspect-video lg:aspect-auto min-h-[200px] flex items-center justify-center overflow-hidden">
                                <img src="${a.previewImg}" class="preview-img absolute inset-0 w-full h-full object-cover opacity-60">
                                <a href="${a.fileUrl}" target="_blank" title="Preview File" class="relative z-10 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg">
                                    <i data-lucide="${iconType}" class="fill-current ${iconMargin}"></i>
                                </a>
                                <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90 text-[10px] font-medium z-10">
                                    <span class="flex items-center gap-1"><i data-lucide="${iconType}" class="w-3 h-3"></i> ${a.fileName}</span>
                                </div>
                            </div>
                            <div class="lg:w-3/5 p-8 flex flex-col justify-between">
                                <div>
                                    <div class="flex justify-between items-center mb-4">
                                        <span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${a.status === 'Selesai' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'}">${a.status}</span>
                                        <div class="flex items-center gap-1 text-slate-400 dark:text-slate-500 text-xs"><i data-lucide="clock" class="w-3 h-3"></i> ${a.date}</div>
                                    </div>
                                    <h4 class="text-2xl font-bold mb-1 dark:text-white">${a.title}</h4>
                                    <div class="text-blue-600 dark:text-blue-400 font-bold text-sm mb-4">${a.subject}</div>
                                    <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 whitespace-pre-line">${a.desc}</p>
                                </div>
                                <div class="flex gap-4">
                                    <a href="${a.fileUrl}" download="${a.fileName}" class="flex-grow bg-slate-900 dark:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-blue-700 transition-all shadow-md active:scale-95"><i data-lucide="download" class="w-4 h-4"></i> Unduh Tugas</a>
                                    <a href="${a.fileUrl}" target="_blank" class="p-3 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all"><i data-lucide="external-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>`;
    });

    // Render Contact Info
    const contactContainer = document.getElementById('contact-info');
    contactContainer.innerHTML = `
                <div class="flex items-center gap-4 text-left">
                    <div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400"><i data-lucide="mail"></i></div>
                    <div><div class="text-sm text-slate-400">Email</div><div class="font-bold text-white break-all">${DATA_CONFIG.profile.email}</div></div>
                </div>
                <div class="flex items-center gap-4 text-left">
                    <div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-green-400"><i data-lucide="phone"></i></div>
                    <div><div class="text-sm text-slate-400">WhatsApp</div><div class="font-bold text-white">+${DATA_CONFIG.profile.phone}</div></div>
                </div>
                <div class="flex items-center gap-4 text-left">
                    <div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400"><i data-lucide="globe"></i></div>
                    <div><div class="text-sm text-slate-400">Lokasi</div><div class="font-bold text-white">${DATA_CONFIG.profile.location}</div></div>
                </div>`;

    document.getElementById('copyright').innerText = `© ${new Date().getFullYear()} ${DATA_CONFIG.profile.firstName} ${DATA_CONFIG.profile.lastName}. Seluruh hak cipta dilindungi.`;

    lucide.createIcons();
}

// 3. UTILITY FUNCTIONS
function sendMessageWA() {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    if (!name || !message) {
        alert("Mohon isi nama dan pesan Anda terlebih dahulu.");
        return;
    }

    const text = encodeURIComponent(`Halo, saya ${name} (${email}).\n\n${message}`);
    const waUrl = `https://wa.me/${DATA_CONFIG.profile.phone}?text=${text}`;
    window.open(waUrl, '_blank');
}

function sendMessageEmail() {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    if (!name || !message) {
        alert("Mohon isi nama dan pesan Anda terlebih dahulu.");
        return;
    }

    const subject = encodeURIComponent(`Pesan dari Portofolio - ${name}`);
    const body = encodeURIComponent(`Halo, nama saya ${name}.\nEmail: ${email}\n\nPesan:\n${message}`);
    const mailUrl = `mailto:${DATA_CONFIG.profile.email}?subject=${subject}&body=${body}`;
    window.location.href = mailUrl;
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.theme = isDark ? 'dark' : 'light';
    updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
    const icon = document.getElementById('theme-icon');
    icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
    lucide.createIcons();
}

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    const isOpen = !menu.classList.contains('hidden');

    if (isOpen) {
        menu.classList.add('hidden');
        icon.setAttribute('data-lucide', 'menu');
    } else {
        menu.classList.remove('hidden');
        icon.setAttribute('data-lucide', 'x');
    }
    lucide.createIcons();
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        document.getElementById('mobile-menu').classList.add('hidden');
        const icon = document.getElementById('menu-icon');
        icon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    }
}

window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 30) {
        nav.classList.add('glass-nav', 'shadow-sm', 'py-3');
        nav.classList.remove('py-5');
    } else {
        nav.classList.remove('glass-nav', 'shadow-sm', 'py-3');
        nav.classList.add('py-5');
    }
});

document.addEventListener('DOMContentLoaded', init);