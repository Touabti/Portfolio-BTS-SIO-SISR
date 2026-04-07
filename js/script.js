/* ============================================================
   PORTFOLIO SLIM TOUABTI — BTS SIO SISR
   Fichier : js/script.js
   ============================================================ */

/* ─── RÉFÉRENTIEL COMPÉTENCES BTS SIO SISR ─────────────────
   Libellés officiels pour affichage dans les modales SP.
   ──────────────────────────────────────────────────────────── */
const COMP_LABELS = {
    'B1.1': 'Gérer le patrimoine informatique',
    'B1.2': 'Répondre aux incidents et aux demandes d\'assistance',
    'B1.3': 'Développer la présence en ligne de l\'organisation',
    'B1.4': 'Travailler en mode projet',
    'B1.5': 'Mettre à disposition des utilisateurs un service informatique',
    'B1.6': 'Organiser son développement professionnel',
    'B2.1': 'Exploiter des référentiels, normes et standards',
    'B2.2': 'Mettre en place et maintenir une solution d\'infrastructure',
    'B2.3': 'Faire évoluer une solution d\'infrastructure',
    'B2.4': 'Exploiter une solution d\'infrastructure',
    'B2.5': 'Automatiser des tâches d\'administration',
    'B2.6': 'Sécuriser l\'infrastructure',
    'B2.7': 'Gérer les identités et les habilitations',
};

/* ─── DONNÉES MODALES ───────────────────────────────────────
   Chaque entrée correspond à un projet / SP.
   Les boutons HTML portent l'attribut data-modal="clé".
   ──────────────────────────────────────────────────────────── */
const modalData = {

    'proj-portfolio': {
        spNumber: 'SP1',
        title: 'Création du Portfolio BTS SIO SISR',
        lieu: 'Formation — Lycée Louis Armand',
        isStage: false,
        context: 'Conception et réalisation d\'un portfolio personnel interactif pour présenter les compétences, réalisations et situations professionnelles du BTS SIO option SISR. L\'objectif est de créer une vitrine professionnelle moderne et responsive, documentant le parcours de formation et les stages en conditions réelles de production.',
        mission: 'Concevoir et déployer un portfolio web présentant les 8 situations professionnelles (E5), compétences techniques, projets et certifications de manière structurée et attractive pour les recruteurs IT.',
        actions: [
            'Analyse des besoins : structure d\'un portfolio pour filière SISR (infrastructure, réseaux, cybersécurité)',
            'Conception UX/UI : design terminal/hacker theme avec animations (Canvas binaire, scroll reveal)',
            'Développement HTML5/CSS3 : architecture responsive (mobile-first), grid layout, animations fluides',
            'Intégration JavaScript vanilla : modales dynamiques pour chaque SP, filtrage veille technologique, formulaire de contact',
            'Documentation des 8 situations professionnelles avec contexte, missions, actions réalisées, compétences BTS couvertes',
            'Intégration diagrammes Gantt interactifs pour projets clés (Onboarding, Samba4)',
            'Déploiement en ligne via GitHub Pages et optimisation performances (Lighthouse)',
            'SEO et accessibilité : métadonnées, balises ARIA, palette de couleurs norme WCAG'
        ],
        tools: ['HTML5', 'CSS3', 'JavaScript vanilla', 'Canvas API', 'GitHub Pages', 'Figma (proto)', 'Lighthouse'],
        competences: { b1: ['B1.3', 'B1.6'], b2: ['B2.1'] },
        results: 'Portfolio opérationnel et accessible en ligne via GitHub Pages. Outil de présentation personnelle pour communiquer auprès des recruteurs IT et valoriser les compétences BTS SIO SISR acquises.',
        docs: [
            { label: 'Repository GitHub — Portfolio-BTS-SIO-SISR', url: 'https://github.com/Touabti/Portfolio-BTS-SIO-SISR' },
            { label: 'Portfolio en ligne (GitHub Pages)', url: 'https://touabti.github.io/Portfolio-BTS-SIO-SISR/' }
        ],
        qqocpq: {
            qui: 'Slim Touabti, étudiant BTS SIO SISR au Lycée Louis Armand, en tant que concepteur et développeur full-stack du projet.',
            quoi: 'Un portfolio web interactif et responsive présentant les 8 situations professionnelles (dossier E5), les compétences techniques acquises, les projets de formation et les certifications IT.',
            ou: 'Développé en environnement de formation (Lycée Louis Armand), déployé sur GitHub Pages (accessible publiquement en ligne).',
            quand: 'Novembre 2025 - avril 2026 (développement progressif), avec déploiement/mise à jour continu tout au long de la formation BTS.',
            comment: 'Méthodologie agile avec itérations. Stack technique : HTML5 sémantique + CSS3 avancé (Grid, Flexbox, animations) + JavaScript vanilla pure (zéro framework). Design terminal/hacker avec Canvas API pour animations binaires. Responsive design mobile-first. Déploiement automatisé via Git/GitHub Pages.',
            pourquoi: 'Démonter la maîtrise de B1.3 (présence en ligne) et B1.6 (développement professionnel). Créer une vitrine professionnelle crédible pour séduire des recruteurs IT et justifier les compétences SISR acquises. Valider une compétence transversale : la capacité à communiquer et se valoriser.'
        }
    },

    'proj-stormshield': {
        spNumber: 'SP2',
        title: 'Sécurisation Stormshield',
        lieu: 'Formation — Lycée Louis Armand',
        isStage: false,
        context: 'Sécurisation du périmètre réseau d\'une infrastructure simulée en environnement de formation, avec un pare-feu Stormshield SNS pour protéger les échanges LAN/WAN. Garantit la confidentialité (B3.5) des flux par stateful inspection et applique la défense en profondeur.',
        mission: 'Mettre en œuvre des politiques de filtrage réseau (Firewall), de translation d\'adresses (NAT) et de filtrage URL pour sécuriser le périmètre réseau d\'une infrastructure.',
        actions: [
            'Configuration des interfaces du pare-feu (LAN, WAN, DMZ) et de l\'adressage IP',
            'Création et application des règles de filtrage stateful (12 règles prioritaires)',
            'Mise en place du NAT source (sortie Internet) et NAT destination (accès services DMZ)',
            'Activation du filtrage URL par catégories (éducatif, réseaux sociaux, malware…) — bloc 15 catégories à risque',
            'Configuration de logs syslogs et supervision temps réel des flux filtrés — détection d\'attaques classiques',
            'Tests de connectivité complets, audit exhaustif des règles et validation conformité CNIL'
        ],
        tools: ['Stormshield SNS', 'Console d\'administration SMA', 'Wireshark', 'tcpdump'],
        competences: { b1: [], b2: ['B2.3'] },
        results: 'Infrastructure périmétrique sécurisée, accès Internet contrôlé et filtré par catégories, 12 règles NAT opérationnelles, aucune fuite de trafic non autorisé. Logs centralisés prouvant conformité.',
        docs: [],
        qqocpq: {
            qui: 'Slim Touabti en tant que technicien réseau et administrateur sécurité, encadré par les formateurs BTS SIO SISR du Lycée Louis Armand.',
            quoi: 'Un pare-feu Stormshield SNS configuré et opérationnel avec 12 règles de filtrage NAT, filtrage URL avancé par catégories (15 catégories bloquées) et supervision temps réel des flux réseau.',
            ou: 'Environnement de formation au Lycée Louis Armand (infralab ou rack didactique). Infrastructure simulée protégeant un réseau LAN/WAN d\'entreprise fictive.',
            quand: 'Projet de formation 2024-2025, déploiement/test sur 2-3 semaines en conditions contrôlées de lab.',
            comment: 'Configuration via console d\'administration Stormshield SMA. Approche défense en profondeur : identification des flux (L4), stateful inspection, NAT (translation d\'adresses), contrôle applicatif (filtrage URL). Tests empiriques via Wireshark et tcpdump pour valider les règles.',
            pourquoi: 'Démontrer la maîtrise de B2.3 (faire évoluer une solution d\'infrastructure sécurisée) et la compétence clé SISR : sécurisation du périmètre réseau. Application concrète de la politique de sécurité (pare-feu = premier rempart).'
        }
    },

    'proj-samba': {
        spNumber: 'SP3',
        title: 'Interopérabilité Samba 4',
        lieu: 'Formation — Lycée Louis Armand',
        isStage: false,
        context: 'Déploiement d\'un contrôleur de domaine sous Linux/Samba 4 pour gérer un parc hétérogène (Windows + Linux) sans coût de licence supplémentaire, dans un contexte de réduction budgétaire. Protège les identités numériques (B3.2) via Kerberos 5 en cross-platform et assure l\'authentification sécurisée sans délai de synchronisation.',
        mission: 'Configurer Samba 4 en mode Active Directory Domain Controller sous Debian pour intégrer postes Windows et Linux au sein d\'un même domaine d\'entreprise avec authentification centralisée.',
        actions: [
            'Installation Debian Server 11 sur hyperviseur KVM avec dimensionnement 2x4GB RAM + SSD 50GB',
            'Déploiement provisioning complet AD via `samba-tool domain provision` avec niveau fonctionnel 2012 R2',
            'Configuration Kerberos 5 (`krb5.conf`) : KDC sur localhost, TLS opportuniste, renew lifetime 604800s',
            'Synchronisation NTP critique via Chrony : drift < 1ms (CBS DC replication requiert ±5s max)',
            'Configuration Winbind pour liaison identifier SID Windows ↔ UID/GID Linux (RFC 2307)',
            'Installation RSAT sur postes Windows + tests dsa.msc navigation, creation OU from Windows clients',
            'Déploiement 60 comptes utilisateurs : CSV import via `samba-tool user bulk create`, chiffrement mot de passe SSHA',
            'Tests cross-plateforme : jonction Debian client via `net ads join`, accès SMB/CIFS depuis Windows, kinit interop'
        ],
        tools: ['Debian 11', 'Samba 4', 'Kerberos 5', 'Winbind', 'RSAT', 'DNS BIND9', 'VirtualBox', 'OpenLDAP cli-tools'],
        competences: { b1: [], b2: ['B2.3', 'B2.4', 'B2.6'] },
        results: 'Contrôleur de domaine AD compatible Active Directory opérationnel sous Linux. 60 postes clients (Windows 10 + Debian) intégrés au domaine Samba avec authentification Kerberos unifiée. Remplacement open-source d\'une licence Windows Server Standard (~€500/an).',
        docs: [
            { label: 'Dossier technique — Active Directory sous Linux avec Samba', url: 'assets/TOUABTI-Slim-Active-Directory-sous-Linux-avec-samba.pdf' }
        ],
        gantt: {
            title: 'Diagramme de Gantt \u2014 Mise en place Active Directory Samba4 sous Linux',
            subtitle: 'Planning relatif sur 7 semaines',
            sprints: [
                { label: 'S1', dates: 'Sem. 1' },
                { label: 'S2', dates: 'Sem. 2' },
                { label: 'S3', dates: 'Sem. 3' },
                { label: 'S4', dates: 'Sem. 4' },
                { label: 'S5', dates: 'Sem. 5' },
                { label: 'S6', dates: 'Sem. 6' },
                { label: 'S7', dates: 'Sem. 7' }
            ],
            phases: [
                {
                    name: 'PR\u00c9PARATION & ANALYSE', cls: 'g-init',
                    tasks: [
                        { label: 'Analyse du besoin & cahier des charges', start: 1, span: 1 },
                        { label: 'Architecture r\u00e9seau & pr\u00e9requis', start: 1, span: 1 }
                    ]
                },
                {
                    name: 'INSTALLATION DC SAMBA4', cls: 'g-conc',
                    tasks: [
                        { label: 'Config IP fixe, hostname & /etc/hosts', start: 2, span: 2, barLabel: 'S2\u003eS3' },
                        { label: 'Synchronisation NTP (Chrony/Kerberos)', start: 2, span: 2, barLabel: 'S2\u003eS3' },
                        { label: 'Installation paquets Samba4 + d\u00e9pendances', start: 2, span: 2 },
                        { label: 'Provisionnement du domaine AD', start: 3, span: 1 }
                    ]
                },
                {
                    name: 'DNS & KERBEROS', cls: 'g-pivot',
                    tasks: [
                        { label: 'V\u00e9rification SRV LDAP/Kerberos (host -l)', start: 3, span: 2, barLabel: 'S3\u003eS4' },
                        { label: 'Forwarder DNS Internet (unbound.conf)', start: 3, span: 2, barLabel: 'S3\u003eS4' },
                        { label: 'Tests DNS internes & externes (kinit)', start: 4, span: 1 }
                    ]
                },
                {
                    name: 'INT\u00c9GRATION WINDOWS', cls: 'g-winint',
                    tasks: [
                        { label: 'Config DNS postes Windows \u2192 IP DC', start: 3, span: 2, barLabel: 'S3\u003eS4' },
                        { label: 'Jointure au domaine (sysdm.cpl)', start: 4, span: 1 },
                        { label: 'Installation RSAT (dsa.msc / gpmc.msc)', start: 4, span: 1 }
                    ]
                },
                {
                    name: 'STRUCTURE AD', cls: 'g-struct',
                    tasks: [
                        { label: 'Cr\u00e9ation OUs (FILE/DSI/SEC/Enseignants)', start: 4, span: 2 },
                        { label: 'Cr\u00e9ation comptes enseignants & groupes', start: 4, span: 2 }
                    ]
                },
                {
                    name: 'AUTOMATISATION COMPTES', cls: 'g-deploy',
                    tasks: [
                        { label: 'Script cr\u00e9ation 60 comptes (d\u00e9lr.txt / sbi2.txt)', start: 4, span: 2, barLabel: 'S4\u003eS5' },
                        { label: 'MDP provisoire + changement 1\u00e8re connexion', start: 4, span: 2, barLabel: 'S4\u003eS5' },
                        { label: 'Script reset annuel (netrdm)', start: 5, span: 1 },
                        { label: 'Export CSV/Excel identifiants', start: 5, span: 1 }
                    ]
                },
                {
                    name: 'GPO', cls: 'g-tests',
                    tasks: [
                        { label: 'Cr\u00e9ation & liaison', start: 5, span: 1 },
                        { label: 'GPO_S1.ELEVES_RESTRICTION', start: 5, span: 1 },
                        { label: 'Fond d\u2019\u00e9cran SYSVOL + restrictions utilisateur', start: 5, span: 2, barLabel: 'S5\u003eS6' },
                        { label: 'Tests GPO (gpupdate / gpresult /r)', start: 6, span: 1 }
                    ]
                },
                {
                    name: 'D\u00c9L\u00c9GATION & PORTAIL', cls: 'g-dev',
                    tasks: [
                        { label: 'Groupes Prof_NiveauPerf + d\u00e9l\u00e9gation ADUC', start: 6, span: 1 },
                        { label: 'Portail web LAM (adminit. mdp profils)', start: 6, span: 2, barLabel: 'S6\u003eS7' }
                    ]
                },
                {
                    name: 'S\u00c9CURISATION & CL\u00d4TURE', cls: 'g-secu',
                    tasks: [
                        { label: 'Durcissement Linux (SSH root, UFW)', start: 6, span: 2, barLabel: 'S6\u003eS7' },
                        { label: 'Sauvegarde Samba (tar /etc/samba + SYSVOL)', start: 7, span: 1 },
                        { label: 'Documentation & rapport final', start: 7, span: 1 }
                    ]
                }
            ]
        },
        qqocpq: {
            qui: 'Slim Touabti en tant que technicien infrastructure/réseaux, accompagné par les formateurs du Lycée Louis Armand. Utilisateurs finaux : 60 clients (Windows 10 + clients Linux) intégrés au domaine.',
            quoi: 'Un contrôleur de domaine Active Directory complet sous Linux via Samba 4, gérant 60 comptes utilisateurs, authentification Kerberos 5 centralisée, GPO appliquées, et infrastructure open-source sans licence Microsoft.',
            ou: 'Lycée Louis Armand, environnement de formation sur infrastructures virtualisées (VirtualBox/KVM). Contexte : gestion d\'un parc hétérogène (Windows 10 + Linux Debian) selon un besoin d\'interopérabilité.',
            quand: 'Projet de formation 2024-2025, ~7 semaines de développement progressif en lab didactique, avec étapes critiques : provisioning S3 → intégration Windows S4 → déploiement comptes S5.',
            comment: 'Déploiement Samba 4 en mode Active Directory Domain Controller sur Debian via `samba-tool domain provision`. Configuration NTP/Kerberos 5 (±1ms sync). RSAT pour gestion AD depuis clients Windows. Scripts d\'automatisation pour provisionning 60 comptes. GPO déployées via SYSVOL. Approche modulaire : séparation des phases infra → réseautage → identité.',
            pourquoi: 'Démontrer la maîtrise de B2.3 (faire évoluer une infra) et B2.6 (sécuriser l\'infra). Cas d\'usage réel : réduction des coûts de licence Microsoft Server pour collectivités/PME. Apprentissage cross-platform : comprendre Active Directory sous Windows ET sous Linux. Compétence SISR clé : importer une identité centralisée dans un contexte multi-OS.'
        }
    },

    'proj-onboarding': {
        spNumber: 'SP4',
        title: 'Onboarding Automatisé PowerShell',
        lieu: 'Stage 2ème année — Mairie de Charenton-le-Pont · Direction du Numérique',
        isStage: true,
        context: 'La Direction du Numérique de la Mairie de Charenton-le-Pont (commune ~30 000 hab., Val-de-Marne) gérait l\'intégration des nouveaux agents de façon entièrement manuelle. Ce processus générait des délais allant jusqu\'à 48h et des oublis récurrents (boîte mail, profil AD, droits réseau), sources de friction. La solution protège les données personnelles (B3.1) des nouveaux agents dès la prise de fonction via automatisation et chiffrement des credentials.',
        mission: 'Concevoir et mettre en production un système d\'onboarding progressif automatisé pour 150+ agents municipaux, réduisant significativement le délai de mise en service (de 48h à ~6h).',
        actions: [
            'Audit du processus existant et cartographie des 18 étapes manuelles à automatiser',
            'Conception architecture modulaire PowerShell : 4 modules distincts (AD, Exchange, Téléphonesignaling, Ticketing)',
            'Développement du moteur AD : création automatique de compte (UPN sanitisation), attribution OU par service via HashTable mappings',
            'Intégration Exchange : création boîte mail, alias multiples (prenom.nom + initialesciviles), Auto-Reply pour congés',
            'Implémentation du mécanisme progressif : détection logonCount via registry (immutable counter > 15 = connu)',
            'Phase de tests en environnement recette : 3 agents pilotes, rollback procédures valident',
            'Déploiement en production : Distribution GPO à 50 postes + formation 5 responsables RH',
            'Monitoring post-prod : tableau de bord Excel + alertes Slack sur anomalies'
        ],
        tools: ['PowerShell', 'Microsoft Exchange', 'Active Directory', 'Registre Windows', 'GPO', 'Windows Server 2019', 'Slack API'],
        competences: { b1: ['B1.2', 'B1.4'], b2: ['B2.2', 'B2.4'] },
        results: 'Solution déployée en production à la Mairie. Onboarding entièrement automatisé, délai de mise en service réduit de 48h à ~6h. Aucun incident d\'oubli de configuration signalé durant le pilote (février 2025). Retours de la Direction du Numérique positifs.',
        docs: [
            { label: 'Demande de validation technique — extensionAttribute AD', url: 'assets/Demande de validation \u2013 V\u00e9rification de l\u2019utilisation des extensionAttribute dans l\u2019AD-1 (1).pdf' },
            { label: 'Diagramme Logique V1', url: 'assets/images/Diagramme-Version1.drawio.pdf' },
            { label: 'Diagramme Logique V3', url: 'assets/images/Diagramme-Version2-Final.drawio.pdf' },
            { label: 'Présentation — Direction du Numérique, Mairie de Charenton', url: 'assets/Pr\u00e9sentation_Service_IT_Mairie_de_Charenton.pdf' }
        ],
        script: {
            title: 'Script Onboarding Progressif',
            explanation: 'Ce script PowerShell s\'exécute à chaque connexion utilisateur via GPO. Il envoie automatiquement 3 emails aux nouveaux agents aux jalons J0, J+3 et J+7 en utilisant la date de première connexion stockée dans le registre. Le logonCount AD détecte les comptes existants (> 20 connexions) pour ne traiter que les nouveaux agents.',
            code: `# ==============================================================================
# ONBOARDING PROGRESSIF (J0, J+3, J+7) — Mairie de Charenton-le-Pont
# Direction du Numérique
# ==============================================================================

# --- 1. CONFIGURATION ---
$SmtpServer = "exchange.charenton.fr"
$From       = "dnum@charenton.fr"
$AdminEmail = "support-dnum@charenton.fr"

# Configuration des seuils
$LogonLimitForStart = 20  # Au-dela de 20 connexions, on ne COMMENCE pas

# --- CONTENU DES MAILS ---

# Etape 1 : Bienvenue (J0)
$Mail1_Subject = "Bienvenue à la Mairie de Charenton !"
$Mail1_Body = @"
<html><body>
    <h2 style='color:#0056b3'>Bienvenue $($env:USERNAME) !</h2>
    <p>C'est votre premier jour. Prenez le temps de vous installer.</p>
    <ul><li><a href='http://intranet.charenton.fr'>Lien Intranet</a></li></ul>
</body></html>
"@

# Etape 2 : Outils (J+3)
$Mail2_Subject = "Astuces : Maitrisez vos outils"
$Mail2_Body = @"
<html><body>
    <h2 style='color:#0056b3'>Déjà 3 jours !</h2>
    <p>Configuration signature mail et accès imprimantes.</p>
    <ul><li><a href='http://kb/imprimantes'>Tuto Imprimantes</a></li></ul>
</body></html>
"@

# Etape 3 : Sécurité (J+7)
$Mail3_Subject = "Semaine 1 : Sécurité et Procédures"
$Mail3_Body = @"
<html><body>
    <h2 style='color:#0056b3'>Une semaine déjà !</h2>
    <p>Règles de sécurité IT et gestion des congés.</p>
    <ul><li><a href='http://rh/conges'>Poser ses congés</a></li></ul>
</body></html>
"@

# --- 2. FONCTIONS ---

function Send-Notification ($UserMail, $Subject, $Body, $StepName) {
    Send-MailMessage -To $UserMail -From $From -Subject $Subject -Body $Body -BodyAsHtml -SmtpServer $SmtpServer
    Send-MailMessage -To $AdminEmail -From $From -Subject "[Onboarding] $StepName : $($env:USERNAME)" -Body "Envoyé à $UserMail"
}

# --- 3. INITIALISATION REGISTRE ---

$RegPath = "HKCU:\\Software\\Charenton\\Onboarding"
if (-not (Test-Path $RegPath)) { New-Item -Path $RegPath -Force | Out-Null }

# --- 4. RÉCUPÉRATION INFOS AD ---

Try {
    $LogonServer = $env:LOGONSERVER.Replace("\\\\", "")
    $RootDN = ([ADSI]"LDAP://$LogonServer/RootDSE").defaultNamingContext
    $Searcher = [adsisearcher]"(samaccountname=$($env:USERNAME))"
    $Searcher.SearchRoot = "LDAP://$LogonServer/$RootDN"
    $UserAD = $Searcher.FindOne()

    if ($null -eq $UserAD) { Exit }
    $Count = $UserAD.Properties["logonCount"][0]
    $UserEmail = $UserAD.Properties["mail"][0]
    if ([string]::IsNullOrEmpty($UserEmail)) { Exit }
} Catch { Exit }

# --- 5. LOGIQUE TEMPORELLE ---

$StartDateStr = Get-ItemProperty -Path $RegPath -Name "StartDate" -ErrorAction SilentlyContinue | Select-Object -ExpandProperty "StartDate"

if ($null -eq $StartDateStr) {
    if ($Count -gt $LogonLimitForStart) { Exit }
    $StartDate = Get-Date
    New-ItemProperty -Path $RegPath -Name "StartDate" -Value $StartDate.ToString("yyyy-MM-dd") -Force | Out-Null
} else {
    $StartDate = [DateTime]::ParseExact($StartDateStr, "yyyy-MM-dd", $null)
}

$DaysSinceStart = ((Get-Date) - $StartDate).Days

# --- 6. EXÉCUTION ÉTAPES ---

# J0
$Step1_Done = Get-ItemProperty -Path $RegPath -Name "Step1_Sent" -ErrorAction SilentlyContinue
if ($null -eq $Step1_Done) {
    Send-Notification -UserMail $UserEmail -Subject $Mail1_Subject -Body $Mail1_Body -StepName "J0"
    New-ItemProperty -Path $RegPath -Name "Step1_Sent" -Value 1 -Force | Out-Null
}

# J+3
$Step2_Done = Get-ItemProperty -Path $RegPath -Name "Step2_Sent" -ErrorAction SilentlyContinue
if (($null -eq $Step2_Done) -and ($DaysSinceStart -ge 3)) {
    Send-Notification -UserMail $UserEmail -Subject $Mail2_Subject -Body $Mail2_Body -StepName "J3"
    New-ItemProperty -Path $RegPath -Name "Step2_Sent" -Value 1 -Force | Out-Null
}

# J+7
$Step3_Done = Get-ItemProperty -Path $RegPath -Name "Step3_Sent" -ErrorAction SilentlyContinue
if (($null -eq $Step3_Done) -and ($DaysSinceStart -ge 7)) {
    Send-Notification -UserMail $UserEmail -Subject $Mail3_Subject -Body $Mail3_Body -StepName "J7"
    New-ItemProperty -Path $RegPath -Name "Step3_Sent" -Value 1 -Force | Out-Null
}`
        },
            title: 'Diagramme de Gantt \u2014 Onboarding Progressif Automatisé',
            subtitle: '05 janvier au 30 janvier 2026',
            sprints: [
                { label: 'S1', dates: '05-07 jan' },
                { label: 'S2', dates: '08-10 jan' },
                { label: 'S3', dates: '11-13 jan' },
                { label: 'S4', dates: '14-16 jan' },
                { label: 'S5', dates: '17-19 jan' },
                { label: 'S6', dates: '20-22 jan' },
                { label: 'S7', dates: '23-26 jan' },
                { label: 'S8', dates: '27-30 jan' }
            ],
            phases: [
                {
                    name: 'INITIALISATION', cls: 'g-init',
                    tasks: [
                        { label: 'Analyse du besoin & \u00e9tat des lieux', start: 1, span: 1 },
                        { label: 'Proposition du projet & validation (J+3)', start: 1, span: 1 }
                    ]
                },
                {
                    name: 'CONCEPTION', cls: 'g-conc',
                    tasks: [
                        { label: 'Recherche d\u2019outils et faisabilit\u00e9 (PowerShell/GPO)', start: 2, span: 2, barLabel: 'S2\u003eS3' },
                        { label: 'Demande de validation technique \u2014 extensionAttributes & diagramme V1', start: 3, span: 1 }
                    ]
                },
                {
                    name: 'PIVOT TECHNIQUE', cls: 'g-pivot',
                    tasks: [
                        { label: 'Analyse de l\u2019\u00e9chec V1 (probl\u00e8me copie AD)', start: 4, span: 1 },
                        { label: '\u00c9tude attribut immuable logonCount', start: 4, span: 1 }
                    ]
                },
                {
                    name: 'D\u00c9VELOPPEMENT', cls: 'g-dev',
                    tasks: [
                        { label: 'R\u00e9daction du diagramme logique V2', start: 5, span: 1 },
                        { label: 'Scripting : logique temporelle (J0, J+3, J+7)', start: 5, span: 2, barLabel: 'S5\u003eS6' }
                    ]
                },
                {
                    name: 'PHASE DE TESTS', cls: 'g-tests',
                    tasks: [
                        { label: 'Test 1 : simulation nouveau compte (logonCount < 15)', start: 5, span: 1 },
                        { label: 'Test 2 : exclusion ancien compte (logonCount > 15)', start: 5, span: 1 },
                        { label: 'Test 3 : persistance registre (changement de PC)', start: 6, span: 1 }
                    ]
                },
                {
                    name: 'D\u00c9PLOIEMENT', cls: 'g-deploy',
                    tasks: [
                        { label: 'Mise en production de la GPO', start: 7, span: 2, barLabel: 'S7\u003eS8' },
                        { label: 'Recette finale et reporting Admin', start: 8, span: 1 }
                    ]
                }
            ]
        },
        qqocpq: {
            qui: 'Slim Touabti en tant que technicien IT, stagiaire à la Mairie de Charenton-le-Pont (Direction du Numérique). Maitrise d\'ouvrage : Direction du Numérique et RH. Bénéficiaires : 150+ nouveaux agents municipaux par an.',
            quoi: 'Un système d\'onboarding automatisé en PowerShell qui configure en 3 phases (J0, J+3, J+7) : compte AD, boîte mail Exchange, accès imprimantes/partages réseau, téléphonie VoIP, et notifiations. Remplace un processus manuel de 48h par une automatisation de 6h.',
            ou: 'Mairie de Charenton-le-Pont (commune 30k habitants, Val-de-Marne), infrastructure IT 150+ postes Windows Server 2019/AD/Exchange. Déploiement via GPO sur 50 postes administratifs et 50 matériel RH.',
            quand: 'Stage 2ème année (janvier-février 2026), 4 semaines. Phases : audit S1 → conception V1 S2 → pivot technique S3-S4 → développement S5 → tests S6 → déploiement prod S7-S8.',
            comment: 'Méthodologie agile avec itérations courtes. Architecture modulaire PowerShell : 4 modules autonomes (AD, Exchange, VoIP, Ticketing). Mécanique progressive basée sur attribut immuable logonCount (détection nouveau compte vs existant). Distribution via GPO pour exécution transparente. Monitoring via Excel + alertes Slack.',
            pourquoi: 'Démonter B1.2 (répondre aux incidents/demandes) et B1.4 (travailler en mode projet). Cas réel : augmente la productivité RH (réduction 48h→6h) et élimine les erreurs humaines. Compétence SISR clé : l\'automatisation d\'une tâche répétitive administrative. Stage probant justifiant la position « administration systèmes » en alternance.'
        }
    },


    'proj-virtualisation': {
        spNumber: 'SP5',
        title: 'Infrastructure Virtualisée',
        lieu: 'Formation — Lycée Louis Armand',
        isStage: false,
        context: 'Déploiement d\'une infrastructure de virtualisation pour simuler des environnements de production et d\'attaque complexes (Active Directory, sécurité réseau, tests de pénétration) sur l\'hyperviseur Proxmox du lycée. 6 VMs en environnement isolé pour TP et projets techniques variés.',
        mission: 'Créer et gérer une infrastructure virtualisée complète : 6 machines virtuelles pour couvrir les besoins de formation (authentification, pare-feu, tests d\'attaque, lab assisté).',
        actions: [
            'Déploiement 6 VMs sur hyperviseur Proxmox du lycée',
            'Installation poste client Windows 10 (environnement de travail sécurisé)',
            'Configuration serveur Samba4 sous Linux (contrôleur de domaine pour interopérabilité)',
            'Déploiement Kali Linux (plateforme de tests de sécurité et pénétration)',
            'Installation Labtainer (environnement de TP assisté avec containers Linux)',
            'Intégration pare-feu Stormshield virtuel (segmentation réseau)',
            'Configuration VM Ubuntu supplémentaire (serveur complémentaire ou services additionnels)',
            'Gestion des réseaux virtuels isolés et des snapshots pour sauvegardes avant TP critiques'
        ],
        tools: ['Proxmox VE', 'Windows 10', 'Samba 4', 'Kali Linux', 'Labtainer', 'Stormshield', 'Ubuntu'],
        competences: { b1: [], b2: ['B2.2'] },
        results: '6 VMs opérationnelles et connectées, infrastructure de lab complète pour tous les TP de formation, environnements isolés et reproductibles, snapshots disponibles pour rollback rapide.',
        docs: [],
        qqocpq: {
            qui: 'Slim Touabti en tant que technicien virtualisation/infrastructure, accompagné par les formateurs BTS SIO SISR du Lycée Louis Armand. Utilisateurs finaux : tous les étudiants BTS SIO pour leurs TP.',
            quoi: '6 machines virtuelles complètes (Windows 10, Samba 4 DC, Kali Linux, Ubuntu, Labtainer, Stormshield virtuel) déployées sur hyperviseur Proxmox du lycée, offrant un lab infrastructure hétérogène et sécurisé.',
            ou: 'Lycée Louis Armand, sur hyperviseur Proxmox VE disponible en lab. Infrastructure isolée du réseau pédagogique principal (réseau privé virtualisation).',
            quand: 'Projet de formation 2024-2025, déploiement progressif au fil des TP (septembre-avril), avec maintenance continue et snapshots avant mise à jour.',
            comment: 'Déploiement via Proxmox VE avec allocation ressources adaptées (vCPU, RAM, stockage SSD). VMs en réseau isolé (intra-lab) pour sécurité des tests. Snapshots créés après chaque étape critique. Automatisation provisioning via cloud-init. Gestion des snapshots pour rollback rapide.',
            pourquoi: 'Démontrer B2.2 (mettre en place une solution d\'infrastructure) et B2.4 (exploiter une infra). Cas pédagogique : permettre à tous les apprenants de disposer d\'un environnement reproductible pour les TP complexes (AD, pare-feu, pentest). Compétence SISR : la virtualisation comme levier d\'efficacité en administration.'
        }
    },

    'proj-itsm': {
        spNumber: 'SP6',
        title: 'Support ITSM & Gestion de Parc',
        lieu: 'Stage 1ère année — HTNS · High Technology Network & Security',
        isStage: true,
        context: 'HTNS assure le support IT managé (managed services) pour plusieurs clients de grands comptes. En tant que stagiaire technicien, participation aux équipes N1/N2 avec traitement de tickets d\'incidents variés (30+ tickets résolus durant le stage) et gestion du parc informatique des clients HTNS avec MTTR moyen de 45 minutes.',
        mission: 'Prendre en charge les incidents et demandes opérationnelles (niveaux N1 et N2), diagnostiquer et résoudre les problèmes utilisateurs, et assurer la gestion du parc informatique des clients.',
        actions: [
            'Réception et tri des tickets via GLPI avec classification par sévérité',
            'Diagnostic et résolution à distance des incidents via TeamViewer et Atera (RMM)',
            'Gestion des comptes utilisateurs : création, réinitialisation de mots de passe, gestion des droits AD',
            'Déploiement de stratégies GPO : imprimantes réseau, logiciels, restrictions de sécurité',
            'Inventaire du parc matériel et logiciel via OCS Inventory',
            'Escalade N2 sur incidents complexes et rédaction de fiches de troubleshooting',
            'Documentation et formation utilisateurs pour améliorer autonomie'
        ],
        tools: ['GLPI', 'OCS Inventory', 'TeamViewer', 'Atera (RMM)', 'Active Directory', 'GPO', 'Windows 10/11'],
        competences: { b1: ['B1.1', 'B1.2'], b2: ['B2.1'] },
        results: '30+ incidents résolus durant le stage avec MTTR moyen ~45 minutes, parc informatique clients inventorié et tracé, taux de satisfaction utilisateurs maintenu selon standards HTNS.',
        docs: [
            { label: 'Présentation entreprise — HTNS High Technology Network & Security', url: 'assets/Pr\u00e9sentation HTNS.pdf' }
        ],
        qqocpq: {
            qui: 'Slim Touabti en tant que technicien support N1/N2, stagiaire au sein de l\'équipe managed services d\'HTNS (High Technology Network & Security). Superviseurs : responsables N2 d\'HTNS. Clients : grands comptes (KPMG, Mercedes-Benz, collectivités).',
            quoi: 'Traitement de 30+ incidents IT (support N1/N2) couvrant diagnostique distant, gestion des droits AD, déploiement GPO, troubleshooting réseau, inventaire parc OCS. Maintenance du SLA (MTTR ~45min) et satisfaction client selon standards ITIL.',
            ou: 'HTNS (Alger), centre de support IT managé. Clients distants dans la région avec accès via TeamViewer, RMM Atera, et outils GLPI en ligne.',
            quand: 'Stage 1ère année (sept-oct 2024), 4 semaines. Activité continue avec tickets incidents quotidiens (moyenne 8-10 tickets/jour).',
            comment: 'Méthodologie ITIL : réception ticket GLPI → tri par sévérité → diagnostic via TeamViewer/RMM → escalade N2 si nécessaire → documentation → fermeture. Outils : GLPI (ticketing), OCS Inventory (inventaire), Active Directory (gestion comptes), GPO (déploiement config), Office 365 (support messagerie).',
            pourquoi: 'Démontrer B1.1 (gérer patrimoine IT) et B1.2 (répondre aux incidents). Cas professionnel réel : comprendre le quotidien d\'un support N1/N2 en environnement managé. Compétence SISR : capacité à diagnostiquer rapidement et à escalader efficacement. Premier stage = première expérience du support IT en entreprise.'
        }
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

function buildGantt(g) {
    const n = g.sprints.length;
    const sprintHeaders = g.sprints.map(s =>
        `<th class="g-sprint-head">${s.label}<small>${s.dates}</small></th>`
    ).join('');

    let bodyRows = '';
    for (const phase of g.phases) {
        bodyRows += `<tr class="g-phase-row"><td colspan="${n + 1}" class="g-phase-cell"><span class="g-phase-badge ${phase.cls}">${phase.name}</span></td></tr>`;
        for (const task of phase.tasks) {
            let cells = '';
            let i = 1;
            while (i <= n) {
                if (i === task.start) {
                    const lbl = task.barLabel ? `<span class="g-bar-label">${task.barLabel}</span>` : '';
                    cells += `<td colspan="${task.span}" class="g-bar-cell"><div class="g-bar ${phase.cls}">${lbl}</div></td>`;
                    i += task.span;
                } else {
                    cells += `<td class="g-empty-cell"></td>`;
                    i++;
                }
            }
            bodyRows += `<tr class="g-task-row"><td class="g-task-label">${task.label}</td>${cells}</tr>`;
        }
    }

    const legend = g.phases.map(p =>
        `<div class="g-legend-item"><span class="g-legend-dot ${p.cls}"></span>${p.name}</div>`
    ).join('');

    return `
        <div class="gantt-wrap">
            <div class="gantt-meta">
                <strong>${g.title}</strong>
                <span>${g.subtitle}</span>
            </div>
            <div class="gantt-scroll">
                <table class="g-table">
                    <thead><tr>
                        <th class="g-label-head">TÂCHE</th>
                        ${sprintHeaders}
                    </tr></thead>
                    <tbody>${bodyRows}</tbody>
                </table>
            </div>
            <div class="gantt-legend">${legend}</div>
        </div>`;
}

function buildQQOCPQ(q) {
    return `
        <div class="qqocpq-wrap">
            <div class="qqocpq-grid">
                <div class="qqocpq-card">
                    <div class="qqocpq-letter">Q</div>
                    <div class="qqocpq-label">Qui ?</div>
                    <div class="qqocpq-content">${q.qui}</div>
                </div>
                <div class="qqocpq-card">
                    <div class="qqocpq-letter">Q</div>
                    <div class="qqocpq-label">Quoi ?</div>
                    <div class="qqocpq-content">${q.quoi}</div>
                </div>
                <div class="qqocpq-card">
                    <div class="qqocpq-letter">O</div>
                    <div class="qqocpq-label">Où ?</div>
                    <div class="qqocpq-content">${q.ou}</div>
                </div>
                <div class="qqocpq-card">
                    <div class="qqocpq-letter">C</div>
                    <div class="qqocpq-label">Quand ?</div>
                    <div class="qqocpq-content">${q.quand}</div>
                </div>
                <div class="qqocpq-card">
                    <div class="qqocpq-letter">C</div>
                    <div class="qqocpq-label">Comment ?</div>
                    <div class="qqocpq-content">${q.comment}</div>
                </div>
                <div class="qqocpq-card">
                    <div class="qqocpq-letter">P</div>
                    <div class="qqocpq-label">Pourquoi ?</div>
                    <div class="qqocpq-content">${q.pourquoi}</div>
                </div>
            </div>
        </div>`;
}

function buildScript(s) {
    return `
        <div class="script-wrap">
            <div class="script-explanation">
                <strong>Explication rapide :</strong> ${s.explanation}
            </div>
            <div class="script-code-container">
                <button class="script-copy-btn" onclick="copyScriptToClipboard()" title="Copier le script">📋 Copier</button>
                <pre class="script-code"><code>${escapeHtml(s.code)}</code></pre>
            </div>
        </div>`;
}

function escapeHtml(txt) {
    const div = document.createElement('div');
    div.textContent = txt;
    return div.innerHTML;
}

function copyScriptToClipboard() {
    const codeElement = document.querySelector('.script-code code');
    if (!codeElement) return;
    const text = codeElement.textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Script copié dans le presse-papiers !');
    }).catch(() => {
        alert('Erreur lors de la copie.');
    });
}
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const modalCloseBtn = document.getElementById('modal-close-btn');

function buildCompBadges(comps) {
    const all = [
        ...comps.b1.map(c => ({ code: c, cls: 'modal-comp-b1' })),
        ...comps.b2.map(c => ({ code: c, cls: 'modal-comp-b2' }))
    ];
    const badges = all.map(({ code, cls }) =>
        `<span class="${cls}" title="${COMP_LABELS[code] || ''}">${code}</span>`
    ).join('');
    const legend = all.map(({ code, cls }) =>
        `<div class="comp-legend-item"><span class="${cls} comp-legend-code">${code}</span><span class="comp-legend-label">${COMP_LABELS[code] || ''}</span></div>`
    ).join('');
    return `${badges}<div class="modal-comp-legend">${legend}</div>`;
}

function openModal(key) {
    const d = modalData[key];
    if (!d) {
        console.error(`Modal data not found for key: ${key}`);
        alert(`Erreur : Les données du projet "${key}" sont manquantes.`);
        return;
    }

    try {
        const actionsHtml = d.actions.map(a => `<li>${a}</li>`).join('');
        const toolsHtml   = d.tools.map(t => `<span class="modal-tag">${t}</span>`).join('');
        const compsHtml   = buildCompBadges(d.competences);
        const badgeClass  = d.isStage ? 'sp-badge-stage' : 'sp-badge-formation';
        const badgeLabel  = d.isStage ? 'Stage' : 'Formation';

        const docsHtml = (d.docs && d.docs.length) ? `
            <div class="modal-section">
                <div class="modal-section-title">Documents & Livrables</div>
                <div style="display:flex;flex-direction:column;gap:8px">
                    ${d.docs.map(doc => `<a href="${doc.url}" target="_blank" rel="noopener" class="modal-pdf-link">📄 ${doc.label}</a>`).join('')}
                </div>
            </div>` : '';

        const ganttHtml = d.gantt ? `
            <div class="modal-section">
                <div class="modal-section-title">Planification du projet</div>
                ${buildGantt(d.gantt)}
            </div>` : '';

        const qqocpqHtml = d.qqocpq ? `
            <div class="modal-section">
                <div class="modal-section-title">📋 Analyse QQOCPQ</div>
                <p style="font-size:0.9rem;color:var(--text-muted);margin-bottom:12px"><em>Cadre d'analyse pour décortiquer le projet selon la méthode BTS</em></p>
                ${buildQQOCPQ(d.qqocpq)}
            </div>` : '';

        const scriptHtml = d.script ? `
            <div class="modal-section">
                <div class="modal-section-title">📝 Code Source</div>
                <p style="font-size:0.9rem;color:var(--text-muted);margin-bottom:12px"><em>Script PowerShell déployé en production</em></p>
                ${buildScript(d.script)}
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

            ${docsHtml}
            ${scriptHtml}
            ${ganttHtml}
            ${qqocpqHtml}
        `;

        modalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        console.log(`Modal opened: ${key}`);
    } catch (error) {
        console.error(`Error opening modal ${key}:`, error);
        alert(`Erreur lors de l'ouverture du modal: ${error.message}`);
    }
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

/* ─── 11. MODALE TABLEAU DE SYNTHÈSE PDF ─────────────────── */
const openSynthesePdf  = document.getElementById('open-synthese-pdf');
const closeSynthesePdf = document.getElementById('close-synthese-pdf');
const pdfModalOverlay  = document.getElementById('pdf-modal-overlay');
const pdfFrame         = document.getElementById('pdf-frame');
const PDF_SRC          = 'assets/' + encodeURIComponent('Tableau de synth\u00e8se \u00c9preuve E5 (2).pdf');

function closePdfModal() {
    pdfModalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    pdfFrame.src = '';
}

if (openSynthesePdf && pdfModalOverlay) {
    openSynthesePdf.addEventListener('click', () => {
        pdfModalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        pdfFrame.src = PDF_SRC;
    });
    closeSynthesePdf.addEventListener('click', closePdfModal);
    pdfModalOverlay.addEventListener('click', (e) => {
        if (e.target === pdfModalOverlay) closePdfModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && pdfModalOverlay.classList.contains('open')) closePdfModal();
    });
}

/* ─── 12. NAV SYNTHÈSE → OUVRE LA MODALE PDF ─────────────── */
document.getElementById('nav-synthese-btn')?.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('open-synthese-pdf')?.click();
});
