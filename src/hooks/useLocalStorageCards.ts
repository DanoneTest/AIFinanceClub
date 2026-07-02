import { useState, useEffect } from "react";

const API_BASE = "http://10.1.192.240:3001";
const POLL_INTERVAL = 60000; // 60 seconds

export type DynamicTip = {
  id: string;
  title: string;
  tool: string;
  description: string;
  prompt?: string;
  type?: string;
};

export type DynamicUseCase = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  capability: string;
  function: string;
  status: string;
  impact: string;
  owner: string;
};

export function useDynamicCards<T>(endpoint: string, eventName: string) {
  const [cards, setCards] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCards = async () => {
    try {
      const response = await fetch(`${API_BASE}${endpoint}`);
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setCards(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch cards");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();

    // Listen for custom events
    const handler = () => fetchCards();
    window.addEventListener(eventName, handler);

    // Poll every 60 seconds
    const interval = setInterval(fetchCards, POLL_INTERVAL);

    return () => {
      window.removeEventListener(eventName, handler);
      clearInterval(interval);
    };
  }, [endpoint, eventName]);

  return { cards, loading, error };
}

export function useDynamicTips() {
  return useDynamicCards<DynamicTip>("/api/tips", "tips_updated");
}

export function useDynamicUseCases() {
  return useDynamicCards<DynamicUseCase>("/api/use-cases", "use_cases_updated");
}

