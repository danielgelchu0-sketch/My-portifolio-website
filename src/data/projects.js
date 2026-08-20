/**
 * Projects data file.
 * Contains confirmed details for featured projects.
 * Unconfirmed details for projects 2-4 are strictly left without fabrication as requested.
 */

export const projects = [
  {
    id: "church-choir-management",
    title: "Church Choir Management Platform",
    role: "Solo Full-Stack Developer",
    summary:
      "A complete end-to-end management platform and portal for church choir operations, media distribution, and community engagement.",
    features: [
      "Public pages featuring choir history, upcoming events, donations, and membership application forms",
      "Private member portal with role-based access to sheet music PDFs, audio recordings, and member photo gallery (unlocked upon admin approval)",
      "Comprehensive admin dashboard to review membership requests, post announcements, and manage leadership profiles with bio, images, audio, and video",
      "Automated Telegram bot integration that syndicates announcements and updates directly to a Telegram community group",
      "Direct integration with YouTube and Telegram channels for media and community access"
    ],
    techStack: ["React", "Tailwind CSS", "Node.js", "Prisma ORM", "PostgreSQL"],
    liveUrl: "https://ych-choir-site.horbabicho.workers.dev/",
    // TODO: user to provide repository URL if public
    repoUrl: null,
    status: "Production"
  },
  {
    id: "qr-attendance-tracking",
    title: "QR Attendance Tracking System",
    role: "Full-Stack Developer",
    summary:
      "A digital attendance tracking application that streamlines student check-ins via QR code scanning and automatically determines Present, Late, and Absent attendance status.",
    features: [
      "Fast QR code scanning for immediate student attendance verification",
      "Automated calculation and status assignment: Present, Late, or Absent based on timetable parameters",
      "Deployed and actively usable tracking workflow"
    ],
    // TODO: user to provide exact tech stack
    techStack: [],
    // TODO: user to provide live URL
    liveUrl: null,
    // TODO: user to provide repository URL
    repoUrl: null,
    status: "Deployed"
  },
  {
    id: "visit-wolaita",
    title: "Visit Wolaita",
    role: "Frontend / Full-Stack Developer",
    summary:
      "A dedicated tourism and cultural discovery platform presenting the rich heritage, historical landmarks, and cultural sites of Wolaita.",
    features: [
      "Curated showcase of Wolaita's cultural sites, heritage locations, and visitor landmarks",
      "Rich visual and informational presentation designed to promote regional tourism"
    ],
    // TODO: user to provide exact tech stack
    techStack: [],
    // TODO: user to provide live URL
    liveUrl: null,
    // TODO: user to provide repository URL
    repoUrl: null,
    status: "Completed"
  },
  {
    id: "quiz-exam-prep",
    title: "Quiz / Exam Preparation App",
    role: "Full-Stack Developer",
    summary:
      "An educational preparation platform that allows students to practice and prepare for examinations using past question sets with predefined answers.",
    features: [
      "Exam practice engine featuring past exam question sets",
      "Predefined answer verification and structured study assessment"
    ],
    // TODO: user to provide exact tech stack
    techStack: [],
    // TODO: user to provide live URL
    liveUrl: null,
    // TODO: user to provide repository URL
    repoUrl: null,
    status: "Completed"
  }
];
