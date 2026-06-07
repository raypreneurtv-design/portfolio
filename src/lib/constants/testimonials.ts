export interface ProblemSolution {
  icon: string;
  problem: string;
  problemDetail: string;
  solution: string;
  solutionDetail: string;
}

export const problemSolutions: ProblemSolution[] = [
  {
    icon: '📵',
    problem: "The 'Missed Calls' Problem",
    problemDetail: "62% of small business calls go unanswered. Every missed call is a missed opportunity — and your competitors are just a Google search away.",
    solution: "24/7 AI Receptionist",
    solutionDetail: "Never miss another lead. Our AI answers every call, qualifies prospects, and captures their info — even at 2 AM on a Sunday.",
  },
  {
    icon: '⏳',
    problem: "The 'Slow Quote' Problem",
    problemDetail: "Speed to lead is everything. 78% of customers go with the first business to respond. If you're slow, you lose.",
    solution: "Instant AI-Powered Quoting",
    solutionDetail: "Deliver accurate estimates in seconds, not hours. Customers get pricing immediately while their intent is hot — no waiting, no friction.",
  },
  {
    icon: '😩',
    problem: "The 'Admin Fatigue' Problem",
    problemDetail: "You didn't start a business to be stuck behind a desk. But scheduling, follow-ups, and paperwork eat up your day.",
    solution: "Automated Appointment Booking",
    solutionDetail: "Let AI handle the back-and-forth. Appointments get booked, reminders get sent, and you stay focused on the work that pays.",
  },
];

export const metrics = [
  { value: "24/7", label: "Always answering" },
  { value: "<60s", label: "To an instant quote" },
  { value: "7 days", label: "From signup to live" },
  { value: "0", label: "Calls missed" },
];
