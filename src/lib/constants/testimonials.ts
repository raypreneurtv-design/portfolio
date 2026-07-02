export interface ProblemSolution {
  icon: string;
  problem: string;
  problemDetail: string;
  solution: string;
  solutionDetail: string;
}

export const problemSolutions: ProblemSolution[] = [
  {
    icon: '🔒',
    problem: "The 'Whose data is it?' problem",
    problemDetail: "Every prompt, file, and customer record you feed a cloud AI gets processed on someone else's servers, under someone else's terms. For a lot of businesses that is a dealbreaker they haven't priced in yet.",
    solution: "AI inside your own walls",
    solutionDetail: "I install open models on hardware you own. Your files, your customers, your numbers never leave the building. You can unplug the internet and it still works.",
  },
  {
    icon: '💸',
    problem: "The 'Renting forever' problem",
    problemDetail: "Per-seat subscriptions stack up fast, and the provider can raise prices, change limits, or retire the model you built your workflow on. You keep paying and you still own nothing.",
    solution: "Own the stack instead",
    solutionDetail: "One setup on your own machines instead of a forever bill. I spec what to run and what to buy, honestly, including when a cloud tool is still the right call for a specific job.",
  },
  {
    icon: '🧰',
    problem: "The 'Nobody uses it' problem",
    problemDetail: "Most business AI fails at adoption, not capability. Tools get bought, the team never gets trained, and six months later it is shelf-ware with a monthly invoice.",
    solution: "Training plus automations",
    solutionDetail: "I train your team in plain language around your actual work, then wire in the automations that run without them: AI receptionist, speed-to-lead follow-up, lead routing, custom n8n pipelines.",
  },
];

export const metrics = [
  { value: '100%', label: 'Of your data stays in-house' },
  { value: '$0', label: 'Per-seat cloud AI fees' },
  { value: '1-2 wks', label: 'From call to live setup' },
  { value: 'Yours', label: 'The hardware, the models, the stack' },
];
