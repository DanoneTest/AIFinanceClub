export type Resource = {
  id: number;
  title: string;
  type: string;
  provider: string;
  timeMinutes: number;
  link: string;
  mustDo: boolean;
};

export type Pathway = {
  key: "discover" | "apply" | "lead";
  label: string;
  resources: Resource[];
};

export const pathways: Pathway[] = [
  {
    key: "discover",
    label: "Discover",
    resources: [
      { id: 1, title: "Fundamentals for All: Understanding AI & GenAI", type: "eLearning Pathway", provider: "Datacamp", timeMinutes: 60, link: "https://danone.edcast.com/insights/understanding-ai-genai-card-d72083a2-f926-4763-a2ff-f614fbebbaa5", mustDo: true },
      { id: 2, title: "Danone AI Podcast Series", type: "Podcast", provider: "Danone", timeMinutes: 27, link: "https://danone.edcast.com/journey/ECL-aed408f5-63e0-4e6a-8bda-fb9ee918a834", mustDo: false },
      { id: 3, title: "Introduction to Danone AI Governance", type: "Video", provider: "Danone", timeMinutes: 3, link: "https://danone.edcast.com/pathways/introduction-to-danone-ai-governance-ai/cards/117354571", mustDo: false },
      { id: 4, title: "Danone GenAI Policy", type: "Document", provider: "Danone", timeMinutes: 15, link: "https://danone.edcast.com/insights/danone-policy-on-use-of-generative-artificial-intelligence-t", mustDo: false },
      { id: 5, title: "Responsible AI", type: "eLearning Module", provider: "Danone", timeMinutes: 34, link: "https://danone.edcast.com/pathways/responsible-ai-card-100ebbe2-d323-47a1-9ba8-655f85410812", mustDo: true },
      { id: 6, title: "Introduction to Data Literacy", type: "eLearning Pathway", provider: "Datacamp", timeMinutes: 120, link: "https://danone.edcast.com/insights/introduction-to-data-literacy-card-910eaa3d-0c39-4782-9512-06a689baef5e", mustDo: true },
      { id: 7, title: "Copilot Chat & the Art of Prompting", type: "eLearning Module", provider: "Danone", timeMinutes: 34, link: "https://danone.edcast.com/insights/copilot-chat-and-the-art-of-prompting", mustDo: true },
    ],
  },
  {
    key: "apply",
    label: "Apply",
    resources: [
      { id: 8, title: "Copilot M365", type: "eLearning Module", provider: "Danone", timeMinutes: 19, link: "https://danone.edcast.com/journey/everyday-ai-tools-green-belt-copilot-m-copilot-is", mustDo: false },
      { id: 9, title: "How to Measure Anything in AI: Quantitative Techniques for Decision-Making", type: "eLearning Module", provider: "LinkedIn Learning", timeMinutes: 46, link: "https://danone.edcast.com/insights/ECL-10b90c1c-4d1c-40c3-ae9b-4bd9917a4422", mustDo: false },
      { id: 10, title: "Critical Thinking", type: "eLearning Module", provider: "LinkedIn Learning", timeMinutes: 69, link: "https://danone.edcast.com/insights/card-da8fe17c-8884-4d91-b769-2fc92c8b3a9d", mustDo: false },
      { id: 11, title: "Decision Intelligence", type: "eLearning Module", provider: "LinkedIn Learning", timeMinutes: 85, link: "https://danone.edcast.com/insights/ECL-0da5a8bc-ff9d-4e77-ba7d-4460d7a59cda", mustDo: false },
      { id: 12, title: "What is Causal AI", type: "Article", provider: "Datacamp", timeMinutes: 10, link: "https://danone.edcast.com/insights/ECL-16fa3f37-18e7-4c9a-88c9-322964726642", mustDo: false },
      { id: 13, title: "Conquering Data Bias", type: "eLearning Pathway", provider: "Datacamp", timeMinutes: 120, link: "https://danone.edcast.com/insights/ECL-36d51674-1ed2-4196-a089-adc33555c3e4", mustDo: false },
      { id: 14, title: "Introduction to Statistics", type: "eLearning Pathway", provider: "Datacamp", timeMinutes: 240, link: "https://danone.edcast.com/insights/ECL-6952eeb7-0021-4728-910b-156e3a45a674", mustDo: false },
      { id: 15, title: "Understanding Data Visualization", type: "eLearning Pathway", provider: "Datacamp", timeMinutes: 49, link: "https://danone.edcast.com/insights/ECL-10e663f9-9774-499a-90b3-9eb6d43450a6", mustDo: false },
    ],
  },
  {
    key: "lead",
    label: "Lead",
    resources: [
      { id: 16, title: "Artificial Intelligence (AI) Leadership", type: "eLearning Pathway", provider: "Datacamp", timeMinutes: 360, link: "https://danone.edcast.com/insights/artificial-intelligence-leadership-card-777121be-e761-43cc-9064-d33220ba2898", mustDo: false },
      { id: 17, title: "Implementing AI Solutions in Business", type: "eLearning Pathway", provider: "Datacamp", timeMinutes: 120, link: "https://danone.edcast.com/insights/ECL-9c666323-d701-4800-9f27-99b005bf3c67", mustDo: false },
      { id: 18, title: "Explainable Artificial Intelligence (XAI) Concepts", type: "eLearning Pathway", provider: "Datacamp", timeMinutes: 60, link: "https://danone.edcast.com/insights/ECL-d275ad7c-d625-48a6-b521-48ea34b79a27", mustDo: false },
      { id: 19, title: "Databricks Concepts", type: "eLearning Pathway", provider: "Datacamp", timeMinutes: 240, link: "https://danone.edcast.com/insights/ECL-ffecb02e-8921-40e5-ba29-abfe23cf04d4", mustDo: false },
    ],
  },
];
