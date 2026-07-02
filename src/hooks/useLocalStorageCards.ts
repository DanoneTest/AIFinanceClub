import { useState, useEffect } from "react";

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

const TIPS_KEY = "admin_tips";
const USECASES_KEY = "admin_use_cases";

export function useLocalStorageCards<T>(key: string, eventName: string): [T[], (items: T[]) => void, (id: string) => void] {
  const [items, setItems] = useState<T[]>([]);

  const loadItems = () => {
    try {
      const stored = localStorage.getItem(key);
      setItems(stored ? JSON.parse(stored) : []);
    } catch {
      setItems([]);
    }
  };

  useEffect(() => {
    loadItems();
    
    const handler = () => loadItems();
    window.addEventListener(eventName, handler);
    
    return () => window.removeEventListener(eventName, handler);
  }, [key, eventName]);

  const saveItems = (newItems: T[]) => {
    localStorage.setItem(key, JSON.stringify(newItems));
    setItems(newItems);
    window.dispatchEvent(new CustomEvent(eventName));
  };

  const deleteItem = (id: string) => {
    const filtered = items.filter((item: any) => item.id !== id);
    saveItems(filtered);
  };

  return [items, saveItems, deleteItem];
}

export function useDynamicTips() {
  return useLocalStorageCards<DynamicTip>(TIPS_KEY, "admin_tips_updated");
}

export function useDynamicUseCases() {
  return useLocalStorageCards<DynamicUseCase>(USECASES_KEY, "admin_use_cases_updated");
}

export function addTip(tip: Omit<DynamicTip, "id">) {
  const stored = localStorage.getItem(TIPS_KEY);
  const items = stored ? JSON.parse(stored) : [];
  const newTip = { ...tip, id: `tip-${Date.now()}` };
  items.push(newTip);
  localStorage.setItem(TIPS_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent("admin_tips_updated"));
}

export function addUseCase(useCase: Omit<DynamicUseCase, "id">) {
  const stored = localStorage.getItem(USECASES_KEY);
  const items = stored ? JSON.parse(stored) : [];
  const newUseCase = { ...useCase, id: `uc-${Date.now()}` };
  items.push(newUseCase);
  localStorage.setItem(USECASES_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent("admin_use_cases_updated"));
}

export function exportTipsJSON() {
  const stored = localStorage.getItem(TIPS_KEY);
  const items = stored ? JSON.parse(stored) : [];
  const blob = new Blob([JSON.stringify(items, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "tips.json";
  a.click();
  URL.revokeObjectURL(url);
}

export function exportUseCasesJSON() {
  const stored = localStorage.getItem(USECASES_KEY);
  const items = stored ? JSON.parse(stored) : [];
  const blob = new Blob([JSON.stringify(items, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "use_cases.json";
  a.click();
  URL.revokeObjectURL(url);
}
