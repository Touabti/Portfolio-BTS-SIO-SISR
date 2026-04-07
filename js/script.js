/* ============================================================
   PORTFOLIO SLIM TOUABTI — BTS SIO SISR
   Fichier : js/script.js
   ============================================================ */

/* ─── DONNÉES MODALES ───────────────────────────────────────
   Chaque entrée correspond à un projet / SP.
   Les boutons HTML portent l'attribut data-modal="clé".
   ──────────────────────────────────────────────────────────── */
const modalData = {

    'proj-ad': {
        spNumber: 'SP1',
        title: 'Infrastructure Active Directory',
        lieu: 'Formation — Lycée Louis Armand',
        isStage: false,
        context: 'Dans le cadre de la formation BTS SIO SISR, déploiement d\'un environnement Active Directory complet simulant l\'infrastructure d\'une PME de 50 utilisateurs avec gestion centralisée des accès et des ressources.',
        mission: 'Installer et configurer les rôles AD DS, DNS et DHCP sous Windows Server pour assurer la gestion centralisée des identités, des ressources et des stratégies de groupe.',
        actions: [
            'Installation de Windows Server et promotion du serveur en contrôleur de domaine (AD DS)',
            'Configuration des rôles DNS et DHCP intégrés au domaine',
            'Création des Unités d\'Organisation (OU), groupes de sécurité et comptes utilisateurs',
            'Déploiement de stratégies de groupe (GPO) : politique de mot de passe, redirection de dossiers, restrictions logicielles',
            'Jonction de postes clients Windows 10/11 au domaine',
            'Rédaction de la documentation technique et des procédures d\'administration'
        ],
        tools: ['Windows Server 2019', 'Active Directory DS', 'DNS', 'DHCP', 'Gestionnaire de serveur', 'GPO', 'PowerShell', 'RSAT'],
        competences: { b1: ['B1.5'], b2: ['B2.2', 'B2.4'] },
        results: 'Domaine Active Directory opérationnel, gestion centralisée des 50 comptes utilisateurs, GPO appliquées et documentation technique complète.',
        pdf: 'assets/images/Diagramme-Version1.drawio.pdf'
    },

    'proj-stormshield': {
        spNumber: 'SP2',
        title: 'Sécurisation Stormshield',
        lieu: 'Formation — Lycée Louis Armand',
        isStage: false,
        context: 'Sécurisation du périmètre réseau d\'une infrastructure simulée en environnement de formation, avec un pare-feu Stormshield SNS pour protéger les échanges LAN/WAN.',
        mission: 'Mettre en œuvre des politiques de filtrage réseau (Firewall), de translation d\'adresses (NAT) et de filtrage URL pour sécuriser le périmètre réseau d\'une infrastructure.',
        actions: [
            'Configuration des interfaces du pare-feu (LAN, WAN, DMZ) et de l\'adressage IP',
            'Création et application des règles de filtrage par la politique de sécurité',
            'Mise en place du NAT source (sortie Internet) et NAT destination (accès services)',
            'Activation du filtrage URL par catégories (éducatif, réseaux sociaux, malware…)',
            'Configuration de logs et supervision des flux filtrés',
            'Tests de connectivité, audit des règles et validation de la sécurité'
        ],
        tools: ['Stormshield SNS', 'Console d\'administration SMA', 'Wireshark', 'Cisco Packet Tracer'],
        competences: { b1: [], b2: ['B2.3', 'B2.6', 'B2.7'] },
        results: 'Infrastructure périmétrique sécurisée, accès Internet contrôlé et filtré par catégories, règles NAT opérationnelles, aucune fuite de trafic non autorisé.',
        pdf: null
    },

    'proj-samba': {
        spNumber: 'SP3',
        title: 'Interopérabilité Samba 4',
        lieu: 'Formation — Lycée Louis Armand',
        isStage: false,
        context: 'Déploiement d\'un contrôleur de domaine sous Linux/Samba 4 pour gérer un parc hétérogène (Windows + Linux) sans coût de licence supplémentaire, dans un contexte de réduction budgétaire.',
        mission: 'Configurer Samba 4 en mode Active Directory Domain Controller sous Debian pour intégrer des postes Windows et Linux au sein d\'un même domaine d\'entreprise.',
        actions: [
            'Installation et configuration de Debian Server en environnement virtualisé',
            'Déploiement de Samba 4 en mode Domain Controller (provisioning AD)',
            'Configuration de Kerberos 5 pour l\'authentification sécurisée',
            'Configuration de Winbind pour la résolution des SID Windows sous Linux',
            'Jonction de postes clients Windows 10 au domaine Samba',
            'Gestion des utilisateurs et groupes via RSAT et samba-tool',
            'Tests d\'interopérabilité et validation des authentifications croisées'
        ],
        tools: ['Debian', 'Samba 4', 'Kerberos 5', 'Winbind', 'RSAT', 'DNS', 'VirtualBox'],
        competences: { b1: [], b2: ['B2.3', 'B2.4', 'B2.6'] },
        results: 'Contrôleur de domaine AD fonctionnel sous Linux, postes Windows 10 intégrés au domaine Samba, parc hétérogène unifié sans licence Microsoft Server.',
        pdf: null
    },

    'proj-onboarding': {
        spNumber: 'SP4',
        title: 'Onboarding Automatisé PowerShell',
        lieu: 'Stage 2ème année — Mairie de Charenton-le-Pont · Direction du Numérique',
        isStage: true,
        context: 'La Direction du Numérique de la Mairie de Charenton-le-Pont (commune ~30 000 hab., Val-de-Marne) gérait l\'intégration des nouveaux agents de façon entièrement manuelle. Ce processus générait des délais allant jusqu\'à 48h et des oublis de configuration récurrents (boîte mail, profil AD, droits réseau), sources de friction pour les nouveaux agents.',
        mission: 'Concevoir et mettre en production un système d\'onboarding progressif et automatisé pour les nouveaux agents de la collectivité, depuis la création du compte AD jusqu\'à la configuration complète de l\'environnement de travail.',
        actions: [
            'Audit du processus d\'onboarding existant et cartographie des étapes manuelles',
            'Conception de l\'architecture du script PowerShell modulaire',
            'Développement du script : création automatique du compte AD, attribution des groupes selon le service',
            'Intégration avec Microsoft Exchange : création et configuration de la boîte mail de l\'agent',
            'Implémentation du mécanisme d\'onboarding progressif via le registre local Windows',
            'Phase de tests en environnement de pré-production avec 3 agents pilotes',
            'Déploiement en production et formation des responsables RH à l\'utilisation'
        ],
        tools: ['PowerShell', 'Microsoft Exchange', 'Active Directory', 'Registre Windows', 'GPO', 'Windows Server 2019'],
        competences: { b1: ['B1.2', 'B1.4'], b2: ['B2.2', 'B2.4'] },
        results: 'Solution déployée en production à la Mairie. Onboarding entièrement automatisé, temps de mise en service des nouveaux agents réduit de ~80%, zéro oubli de configuration enregistré après déploiement.',
        pdf: null
    },

    'proj-vlan': {
        spNumber: 'SP5',
        title: 'Configuration VLAN Cisco',
        lieu: 'Formation — Lycée Louis Armand',
        isStage: false,
        context: 'Segmentation d\'un réseau d\'entreprise pour isoler les flux administratifs, techniques et invités, afin de réduire la surface d\'attaque et d\'améliorer les performances réseau.',
        mission: 'Configurer des commutateurs Cisco pour déployer une architecture multi-VLAN sécurisée avec routage inter-VLAN et ACL.',
        actions: [
            'Conception du plan d\'adressage IP et définition des VLANs (Admin, Technique, Invité, Serveurs)',
            'Configuration des VLANs sur les switches Cisco via IOS CLI',
            'Configuration des ports trunk (802.1Q) entre commutateurs et ports access',
            'Mise en place du routage inter-VLAN (Router-on-a-Stick)',
            'Rédaction et application des ACL pour le filtrage inter-VLAN',
            'Tests de connectivité et validation complète de la segmentation'
        ],
        tools: ['Cisco IOS', 'Cisco Catalyst (switches)', 'Cisco Packet Tracer', 'Wireshark'],
        competences: { b1: [], b2: ['B2.3', 'B2.6'] },
        results: 'Réseau segmenté en VLANs distincts, flux isolés, mouvements latéraux bloqués par ACL. Infrastructure conforme aux bonnes pratiques de sécurité réseau.',
        pdf: 'assets/images/Diagramme-Version2-Final.drawio.pdf'
    },

    'proj-milestone': {
        spNumber: 'SP6',
        title: 'Infrastructure Milestone (Caméras IP)',
        lieu: 'Stage 1ère année — HTNS · High Technology Network & Security · Alger, Algérie',
        isStage: true,
        context: 'HTNS (High Technology Network & Security) est un intégrateur de systèmes ICT basé à Alger, spécialisé en solutions LAN/WAN, sécurité, Data Center et vidéosurveillance pour des clients grands comptes (KPMG, Mercedes-Benz, Banque d\'Algérie…). Mission confiée lors du stage de 1ère année dans le cadre du déploiement d\'un système de vidéosurveillance pour un client.',
        mission: 'Installer et mettre en service le système de vidéosurveillance Milestone XProtect : configuration des caméras IP, du serveur d\'enregistrement et des flux vidéo.',
        actions: [
            'Inventaire et réalisation du plan d\'implantation des caméras IP',
            'Paramétrage réseau des caméras IP (adressage statique, VLAN dédié vidéosurveillance)',
            'Installation du serveur d\'enregistrement Milestone XProtect sur Windows Server',
            'Ajout et configuration des caméras dans Milestone (flux RTSP, codecs, résolution)',
            'Définition des zones d\'enregistrement et des règles de déclenchement (mouvement, horaires)',
            'Tests de qualité des flux vidéo, validation finale avec le client HTNS'
        ],
        tools: ['Milestone XProtect', 'Caméras IP (ONVIF)', 'Windows Server', 'Switch PoE', 'Réseau LAN'],
        competences: { b1: ['B1.1'], b2: ['B2.3', 'B2.6'] },
        results: 'Système de vidéosurveillance opérationnel, flux HD enregistrés et consultables à distance via client Milestone, recette client validée.',
        pdf: null
    },

    'proj-virtualisation': {
        spNumber: 'SP7',
        title: 'Infrastructure Virtualisée',
        lieu: 'Formation — Lycée Louis Armand',
        isStage: false,
        context: 'Déploiement d\'une infrastructure de lab virtualisée pour simuler des environnements de production complexes (Active Directory, serveurs web, réseaux segmentés) sur des ressources matérielles limitées en salle de TP.',
        mission: 'Créer et gérer des machines virtuelles sous VMware et VirtualBox pour optimiser les ressources matérielles et simuler des architectures réseau réelles.',
        actions: [
            'Installation et configuration des hyperviseurs VMware Workstation et VirtualBox',
            'Déploiement de VMs : Windows Server 2019, Debian, Kali Linux, Windows 10',
            'Configuration des types de réseau virtuel (NAT, bridgé, host-only, réseau interne)',
            'Gestion des snapshots avant chaque manipulation critique et clonage de VMs',
            'Mise en place d\'une infrastructure AD complète en environnement 100% virtualisé',
            'Optimisation des ressources allouées (RAM, vCPU, stockage partagé)'
        ],
        tools: ['VMware Workstation', 'VirtualBox', 'Windows Server', 'Debian', 'Kali Linux'],
        competences: { b1: [], b2: ['B2.3', 'B2.4'] },
        results: 'Environnements de lab opérationnels et reproductibles, ressources mutualisées sur 2 hôtes physiques, infrastructure complète pour tous les TP de formation.',
        pdf: null
    },

    'proj-itsm': {
        spNumber: 'SP8',
        title: 'Support ITSM & Gestion de Parc',
        lieu: 'Stage 1ère année — HTNS · High Technology Network & Security · Alger, Algérie',
        isStage: true,
        context: 'HTNS assure la maintenance IT managée (managed services) pour plusieurs clients sous contrat. En tant que stagiaire technicien, participation active au support N1/N2 et à la gestion du parc informatique des clients de la société.',
        mission: 'Prendre en charge les incidents et demandes d\'assistance des utilisateurs (niveaux N1 et N2), et assurer la gestion complète du parc informatique des clients HTNS.',
        actions: [
            'Réception, qualification et traitement des tickets via GLPI (incidents et demandes)',
            'Diagnostic et résolution à distance des incidents via TeamViewer et Atera (RMM)',
            'Gestion des comptes utilisateurs, réinitialisation de mots de passe et des droits dans Active Directory',
            'Déploiement de stratégies GPO (imprimantes réseau, logiciels, restrictions)',
            'Inventaire complet du parc matériel et logiciel via OCS Inventory',
            'Rédaction des comptes-rendus d\'intervention et mise à jour de la base de connaissances GLPI'
        ],
        tools: ['GLPI', 'OCS Inventory', 'TeamViewer', 'Atera (RMM)', 'Active Directory', 'GPO', 'Windows 10/11'],
        competences: { b1: ['B1.1', 'B1.2'], b2: ['B2.1'] },
        results: 'Incidents résolus dans les délais SLA contractuels, parc informatique clients inventorié à 100%, taux de satisfaction maintenu selon les KPI HTNS.',
        pdf: null
    }
};

/* ─── 0. CANVAS — PLUIE BINAIRE ─────────────────────────── */
const canvas = document.getElementById('bg-canvas');
const ctx    = canvas.getContext('2d');
const letters  = '01';
const fontSize = 16;

function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

let columns = Math.floor(canvas.width / fontSize);
let drops   = Array(columns).fill(1);

function drawRain() {
    ctx.fillStyle = 'rgba(2, 4, 8, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = fontSize + 'px Consolas';

    const isMobile = window.innerWidth <= 768;
    for (let i = 0; i < drops.length; i++) {
        if (isMobile && Math.random() > 0.35) continue; // réduit sur mobile
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        const rand = Math.random();
        if      (rand > 0.7)  ctx.fillStyle = 'rgba(77, 159, 255, 0.25)';
        else if (rand > 0.4)  ctx.fillStyle = 'rgba(160, 200, 255, 0.15)';
        else                  ctx.fillStyle = 'rgba(224, 238, 255, 0.08)';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
setInterval(drawRain, 50);

window.addEventListener('resize', () => {
    resizeCanvas();
    columns = Math.floor(canvas.width / fontSize);
    drops   = Array(columns).fill(1);
});

/* ─── 1. SCROLL PROGRESS BAR ─────────────────────────────── */
const progressBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
    const scrollTop    = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progressBar.style.width = ((scrollTop / scrollHeight) * 100) + '%';
}, { passive: true });

/* ─── 2. SCROLL REVEAL (avec stagger par grille) ─────────── */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity    = '1';
                entry.target.style.transform  = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            }, idx * 70);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

document.querySelectorAll('.card, .skill-card, .cert-card, .veille-card, .contact-container, .sp-card')
        .forEach(el => revealObserver.observe(el));

/* ─── 3. NAV ACTIVE LINK ON SCROLL ──────────────────────── */
const allSections = document.querySelectorAll('section[id], header[id]');
const navLinks    = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + id);
            });
        }
    });
}, { threshold: 0.25, rootMargin: '-80px 0px -55% 0px' });

allSections.forEach(s => navObserver.observe(s));

/* ─── 4. HAMBURGER MENU ──────────────────────────────────── */
const hamburger    = document.querySelector('.hamburger');
const navLinksList = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinksList.classList.toggle('open');
});

navLinksList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinksList.classList.remove('open');
    });
});

/* ─── 5. SKILL BAR ANIMATION ────────────────────────────── */
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
                bar.style.width = bar.dataset.width;
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.card').forEach(card => {
    card.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.dataset.width = bar.style.width || '0%';
        bar.style.width   = '0';
    });
    if (card.querySelector('.skill-bar-fill')) skillObserver.observe(card);
});

/* ─── 6. TERMINAL ANIMÉ ──────────────────────────────────── */
const commands = [
    { cmd: 'whoami',
      output: 'Slim Touabti — Admin Sys &amp; Réseaux Junior' },
    { cmd: 'cat objectif.txt',
      output: 'Concevoir des architectures résilientes.<br>Automatiser la détection de vulnérabilités.<br>Sécuriser les flux et les données critiques.' },
    { cmd: 'nmap -sV localhost',
      output: 'PORT     STATE  SERVICE<br>22/tcp   open   ssh (OpenSSH 9.x)<br>443/tcp  open   https<br><span class="highlight-output">Résultat : Infrastructure sécurisée ✓</span>' },
    { cmd: './check_skills.sh',
      output: '[OK] Active Directory — Validé<br>[OK] Stormshield / Fortinet — Validé<br>[OK] PowerShell Automation — Validé<br>[OK] Prêt pour l\'entreprise ✓' }
];

const termContent = document.getElementById('terminal-content');
let terminalStarted = false;
let cmdIndex        = 0;

function typeCommand() {
    if (cmdIndex >= commands.length) {
        termContent.innerHTML += `<div><span class="prompt">root@slim-sec:~$ </span><span class="cursor"></span></div>`;
        return;
    }
    const current = commands[cmdIndex];
    const lineDiv = document.createElement('div');
    lineDiv.innerHTML = `<span class="prompt">root@slim-sec:~$ </span><span class="cmd"></span><span class="cursor"></span>`;
    termContent.appendChild(lineDiv);
    const cmdSpan    = lineDiv.querySelector('.cmd');
    const cursorSpan = lineDiv.querySelector('.cursor');
    let charIndex    = 0;

    const typeInterval = setInterval(() => {
        cmdSpan.textContent += current.cmd.charAt(charIndex++);
        if (charIndex >= current.cmd.length) {
            clearInterval(typeInterval);
            cursorSpan.remove();
            setTimeout(() => {
                const outputDiv = document.createElement('div');
                outputDiv.className = 'output';
                outputDiv.innerHTML = current.output;
                termContent.appendChild(outputDiv);
                cmdIndex++;
                setTimeout(typeCommand, 600);
            }, 400);
        }
    }, 50);
}

const terminalObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !terminalStarted) {
        terminalStarted = true;
        setTimeout(typeCommand, 500);
    }
}, { threshold: 0.5 });
terminalObserver.observe(document.getElementById('terminal-trigger'));

/* ─── 7. SYSTÈME MODAL ──────────────────────────────────── */
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const modalCloseBtn = document.getElementById('modal-close-btn');

function buildCompBadges(comps) {
    const b1 = comps.b1.map(c => `<span class="modal-comp-b1">${c}</span>`).join('');
    const b2 = comps.b2.map(c => `<span class="modal-comp-b2">${c}</span>`).join('');
    return b1 + b2;
}

function openModal(key) {
    const d = modalData[key];
    if (!d) return;

    const actionsHtml = d.actions.map(a => `<li>${a}</li>`).join('');
    const toolsHtml   = d.tools.map(t => `<span class="modal-tag">${t}</span>`).join('');
    const compsHtml   = buildCompBadges(d.competences);
    const badgeClass  = d.isStage ? 'sp-badge-stage' : 'sp-badge-formation';
    const badgeLabel  = d.isStage ? 'Stage' : 'Formation';

    const pdfHtml = d.pdf ? `
        <div class="modal-section">
            <div class="modal-section-title">Document technique</div>
            <a href="${d.pdf}" target="_blank" rel="noopener" class="modal-pdf-link">
                📄 Ouvrir le dossier technique (PDF)
            </a>
        </div>` : '';

    modalContent.innerHTML = `
        <div class="modal-header">
            <div class="modal-header-top">
                <span class="modal-sp-number">${d.spNumber}</span>
                <span class="sp-badge ${badgeClass}">${badgeLabel}</span>
            </div>
            <h2>${d.title}</h2>
            <div class="modal-lieu">${d.lieu}</div>
        </div>

        <div class="modal-section">
            <div class="modal-section-title">Contexte</div>
            <p>${d.context}</p>
        </div>

        <div class="modal-section">
            <div class="modal-section-title">Mission confiée</div>
            <p>${d.mission}</p>
        </div>

        <div class="modal-section">
            <div class="modal-section-title">Actions réalisées</div>
            <ul>${actionsHtml}</ul>
        </div>

        <div class="modal-section">
            <div class="modal-section-title">Technologies utilisées</div>
            <div class="modal-tags">${toolsHtml}</div>
        </div>

        <div class="modal-section">
            <div class="modal-section-title">Compétences BTS SIO couvertes</div>
            <div class="modal-comp-tags">${compsHtml}</div>
        </div>

        <div class="modal-section">
            <div class="modal-section-title">Résultats & Livrables</div>
            <p>${d.results}</p>
        </div>

        ${pdfHtml}
    `;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
modalCloseBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.modal));
});

/* ─── 8. FILTRE VEILLE ──────────────────────────────────── */
const filterBtns  = document.querySelectorAll('.veille-filter-btn');
const veilleCards = document.querySelectorAll('.veille-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        veilleCards.forEach(card => {
            const show = filter === 'all' || card.dataset.category === filter;
            card.style.display = show ? '' : 'none';
        });
    });
});

/* ─── 9. FORMULAIRE CONTACT ─────────────────────────────── */
const contactForm = document.getElementById('my-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function handleSubmit(event) {
        event.preventDefault();
        const status = document.getElementById('my-form-status');
        const btn    = document.getElementById('my-form-button');
        const data   = new FormData(event.target);

        btn.textContent    = 'Envoi en cours…';
        btn.style.opacity  = '0.7';
        btn.disabled       = true;

        try {
            const response = await fetch(event.target.action, {
                method: contactForm.method, body: data,
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                status.innerHTML    = '✅ Message envoyé avec succès !';
                status.style.color  = 'var(--accent-neon)';
                contactForm.reset();
            } else {
                status.innerHTML    = '❌ Erreur lors de l\'envoi.';
                status.style.color  = '#ff5f56';
            }
        } catch {
            status.innerHTML   = '❌ Erreur réseau.';
            status.style.color = '#ff5f56';
        } finally {
            btn.textContent   = 'Envoyer le message';
            btn.style.opacity = '1';
            btn.disabled      = false;
        }
    });
}

/* ─── 10. BOUTON RETOUR EN HAUT ──────────────────────────── */
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('show', window.scrollY > 400);
}, { passive: true });
