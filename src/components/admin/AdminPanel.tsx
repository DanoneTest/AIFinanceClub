import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Trash2, X } from "lucide-react";
import { useDynamicTips, useDynamicUseCases } from "@/hooks/useLocalStorageCards";

interface AdminPanelProps {
  open: boolean;
  onClose: () => void;
}

type DynamicNews = {
  id: string;
  tag: string;
  date: string;
  title: string;
  summary: string;
  imageUrl?: string;
};

type DynamicEvent = {
  id: string;
  month: string;
  day: string;
  title: string;
  type: string;
  meta: string;
};

const API_BASE = "http://10.1.192.240:3001";
const TOOL_OPTIONS = ["Copilot", "Excel", "Power BI", "Power Automate", "Prompting", "Automation"];
const CAPABILITY_OPTIONS = ["Copilot", "Power Automate", "Power Apps", "Python", "Vibe Coding"];
const FUNCTION_OPTIONS = ["FP&A", "Controlling", "Reporting", "Treasury", "Audit", "Tax"];
const STATUS_OPTIONS = ["Live", "Pilot", "Scaling", "Idea"];
const MONTH_OPTIONS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

export function AdminPanel({ open, onClose }: AdminPanelProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<"tips" | "usecases" | "news" | "events">("tips");
  const { cards: tips, loading: tipsLoading } = useDynamicTips();
  const { cards: useCases, loading: useCasesLoading } = useDynamicUseCases();
  
  // News and Events state
  const [newsItems, setNewsItems] = useState<DynamicNews[]>([]);
  const [eventsItems, setEventsItems] = useState<DynamicEvent[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [eventsLoading, setEventsLoading] = useState(true);

  // Tip form state
  const [tipTool, setTipTool] = useState(TOOL_OPTIONS[0]);
  const [tipType, setTipType] = useState("PROMPT");
  const [tipTitle, setTipTitle] = useState("");
  const [tipDescription, setTipDescription] = useState("");
  const [tipSuccess, setTipSuccess] = useState(false);

  // Use case form state
  const [ucCapability, setUcCapability] = useState(CAPABILITY_OPTIONS[0]);
  const [ucStatus, setUcStatus] = useState(STATUS_OPTIONS[0]);
  const [ucTitle, setUcTitle] = useState("");
  const [ucProblem, setUcProblem] = useState("");
  const [ucSolution, setUcSolution] = useState("");
  const [ucFunction, setUcFunction] = useState(FUNCTION_OPTIONS[0]);
  const [ucOwner, setUcOwner] = useState("");
  const [ucImpact, setUcImpact] = useState("");
  const [ucSuccess, setUcSuccess] = useState(false);

  // News form state
  const [newsTag, setNewsTag] = useState("");
  const [newsDate, setNewsDate] = useState("");
  const [newsTitle, setNewsTitle] = useState("");
  const [newsSummary, setNewsSummary] = useState("");
  const [newsImageUrl, setNewsImageUrl] = useState("");
  const [newsSuccess, setNewsSuccess] = useState(false);

  // Event form state
  const [eventMonth, setEventMonth] = useState(MONTH_OPTIONS[0]);
  const [eventDay, setEventDay] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventMeta, setEventMeta] = useState("");
  const [eventSuccess, setEventSuccess] = useState(false);

  // Fetch news and events
  useEffect(() => {
    if (open) {
      fetchNews();
      fetchEvents();
    }
  }, [open]);

  const fetchNews = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/news`);
      if (response.ok) {
        const data = await response.json();
        setNewsItems(data);
      }
    } catch (error) {
      console.error("Failed to fetch news:", error);
    } finally {
      setNewsLoading(false);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/events`);
      if (response.ok) {
        const data = await response.json();
        setEventsItems(data);
      }
    } catch (error) {
      console.error("Failed to fetch events:", error);
    } finally {
      setEventsLoading(false);
    }
  };

  if (!open) return null;

  const handleLogout = () => {
    localStorage.removeItem("admin_authenticated");
    onClose();
  };

  const handleAddTip = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tipTitle.trim() || !tipDescription.trim()) return;
    
    try {
      const response = await fetch(`${API_BASE}/api/tips`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: tipTitle,
          tool: tipTool,
          description: tipDescription,
          type: tipType,
        }),
      });

      if (response.ok) {
        setTipTitle("");
        setTipDescription("");
        setTipTool(TOOL_OPTIONS[0]);
        setTipType("PROMPT");
        setTipSuccess(true);
        setTimeout(() => setTipSuccess(false), 2000);
        window.dispatchEvent(new CustomEvent("tips_updated"));
      }
    } catch (error) {
      console.error("Failed to add tip:", error);
    }
  };

  const handleAddUseCase = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ucTitle.trim() || !ucProblem.trim() || !ucSolution.trim()) return;

    try {
      const response = await fetch(`${API_BASE}/api/use-cases`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: ucTitle,
          problem: ucProblem,
          solution: ucSolution,
          capability: ucCapability,
          function: ucFunction,
          status: ucStatus,
          impact: ucImpact,
          owner: ucOwner,
        }),
      });

      if (response.ok) {
        setUcTitle("");
        setUcProblem("");
        setUcSolution("");
        setUcCapability(CAPABILITY_OPTIONS[0]);
        setUcStatus(STATUS_OPTIONS[0]);
        setUcFunction(FUNCTION_OPTIONS[0]);
        setUcOwner("");
        setUcImpact("");
        setUcSuccess(true);
        setTimeout(() => setUcSuccess(false), 2000);
        window.dispatchEvent(new CustomEvent("use_cases_updated"));
      }
    } catch (error) {
      console.error("Failed to add use case:", error);
    }
  };

  const handleDeleteTip = async (id: string) => {
    try {
      const response = await fetch(`${API_BASE}/api/tips/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        window.dispatchEvent(new CustomEvent("tips_updated"));
      }
    } catch (error) {
      console.error("Failed to delete tip:", error);
    }
  };

  const handleDeleteUseCase = async (id: string) => {
    try {
      const response = await fetch(`${API_BASE}/api/use-cases/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        window.dispatchEvent(new CustomEvent("use_cases_updated"));
      }
    } catch (error) {
      console.error("Failed to delete use case:", error);
    }
  };

  const handleAddNews = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitle.trim() || !newsSummary.trim()) return;

    try {
      const response = await fetch(`${API_BASE}/api/news`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tag: newsTag,
          date: newsDate,
          title: newsTitle,
          summary: newsSummary,
          imageUrl: newsImageUrl,
        }),
      });

      if (response.ok) {
        setNewsTag("");
        setNewsDate("");
        setNewsTitle("");
        setNewsSummary("");
        setNewsImageUrl("");
        setNewsSuccess(true);
        setTimeout(() => setNewsSuccess(false), 2000);
        window.dispatchEvent(new CustomEvent("news_updated"));
        fetchNews();
      }
    } catch (error) {
      console.error("Failed to add news:", error);
    }
  };

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventDay.trim() || !eventTitle.trim()) return;

    try {
      const response = await fetch(`${API_BASE}/api/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          month: eventMonth,
          day: eventDay,
          title: eventTitle,
          type: eventType,
          meta: eventMeta,
        }),
      });

      if (response.ok) {
        setEventMonth(MONTH_OPTIONS[0]);
        setEventDay("");
        setEventTitle("");
        setEventType("");
        setEventMeta("");
        setEventSuccess(true);
        setTimeout(() => setEventSuccess(false), 2000);
        window.dispatchEvent(new CustomEvent("events_updated"));
        fetchEvents();
      }
    } catch (error) {
      console.error("Failed to add event:", error);
    }
  };

  const handleDeleteNews = async (id: string) => {
    try {
      const response = await fetch(`${API_BASE}/api/news/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        window.dispatchEvent(new CustomEvent("news_updated"));
        fetchNews();
      }
    } catch (error) {
      console.error("Failed to delete news:", error);
    }
  };

  const handleDeleteEvent = async (id: string) => {
    try {
      const response = await fetch(`${API_BASE}/api/events/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        window.dispatchEvent(new CustomEvent("events_updated"));
        fetchEvents();
      }
    } catch (error) {
      console.error("Failed to delete event:", error);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t shadow-elevated">
      <div className="container-page">
        {/* Header */}
        <div className="flex items-center justify-between py-3 border-b">
          <div className="flex items-center gap-3">
            <h3 className="text-sm font-semibold">Admin Panel</h3>
            <button onClick={() => setCollapsed(!collapsed)} className="rounded-full p-1 hover:bg-muted">
              {collapsed ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleLogout} className="text-xs text-muted-foreground hover:text-foreground">
              Log out
            </button>
            <button onClick={onClose} className="rounded-full p-1 hover:bg-muted">
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        {!collapsed && (
          <div className="py-4 max-h-[70vh] overflow-y-auto">
            {/* Tabs */}
            <div className="flex gap-2 border-b overflow-x-auto">
              <button
                onClick={() => setActiveTab("tips")}
                className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px whitespace-nowrap ${
                  activeTab === "tips" ? "border-navy text-navy" : "border-transparent text-muted-foreground"
                }`}
              >
                Tips & Tricks
              </button>
              <button
                onClick={() => setActiveTab("usecases")}
                className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px whitespace-nowrap ${
                  activeTab === "usecases" ? "border-navy text-navy" : "border-transparent text-muted-foreground"
                }`}
              >
                Use Cases
              </button>
              <button
                onClick={() => setActiveTab("news")}
                className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px whitespace-nowrap ${
                  activeTab === "news" ? "border-navy text-navy" : "border-transparent text-muted-foreground"
                }`}
              >
                News
              </button>
              <button
                onClick={() => setActiveTab("events")}
                className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px whitespace-nowrap ${
                  activeTab === "events" ? "border-navy text-navy" : "border-transparent text-muted-foreground"
                }`}
              >
                Events
              </button>
            </div>

            {/* Tips Tab */}
            {activeTab === "tips" && (
              <div className="mt-4 grid md:grid-cols-2 gap-6">
                {/* Add form */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Add New Tip</h4>
                  <form onSubmit={handleAddTip} className="space-y-3">
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Category (tool)</span>
                      <select
                        value={tipTool}
                        onChange={e => setTipTool(e.target.value)}
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      >
                        {TOOL_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </label>
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Type</span>
                      <input
                        type="text"
                        value={tipType}
                        onChange={e => setTipType(e.target.value)}
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Title *</span>
                      <input
                        type="text"
                        value={tipTitle}
                        onChange={e => setTipTitle(e.target.value)}
                        required
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Description *</span>
                      <textarea
                        value={tipDescription}
                        onChange={e => setTipDescription(e.target.value)}
                        required
                        rows={3}
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      />
                    </label>
                    <button type="submit" className="rounded-full bg-navy text-navy-foreground px-4 py-2 text-sm font-medium">
                      Add Tip
                    </button>
                    {tipSuccess && <p className="text-xs text-emerald-600">Tip added successfully!</p>}
                  </form>
                </div>

                {/* Delete list */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Dynamic Tips ({tips.length})</h4>
                  {tipsLoading ? (
                    <p className="text-xs text-muted-foreground">Loading...</p>
                  ) : tips.length === 0 ? (
                    <p className="text-xs text-muted-foreground">No dynamic tips yet.</p>
                  ) : (
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {tips.map(tip => (
                        <div key={tip.id} className="flex items-center justify-between gap-2 p-2 rounded-lg border bg-background">
                          <span className="text-xs flex-1 truncate">{tip.title}</span>
                          <button
                            onClick={() => handleDeleteTip(tip.id)}
                            className="rounded-full p-1 hover:bg-muted text-red-600"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Use Cases Tab */}
            {activeTab === "usecases" && (
              <div className="mt-4 grid md:grid-cols-2 gap-6">
                {/* Add form */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Add New Use Case</h4>
                  <form onSubmit={handleAddUseCase} className="space-y-3">
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Tool (capability)</span>
                      <select
                        value={ucCapability}
                        onChange={e => setUcCapability(e.target.value)}
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      >
                        {CAPABILITY_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </label>
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Status</span>
                      <select
                        value={ucStatus}
                        onChange={e => setUcStatus(e.target.value)}
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      >
                        {STATUS_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </label>
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Title *</span>
                      <input
                        type="text"
                        value={ucTitle}
                        onChange={e => setUcTitle(e.target.value)}
                        required
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Problem *</span>
                      <textarea
                        value={ucProblem}
                        onChange={e => setUcProblem(e.target.value)}
                        required
                        rows={2}
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Solution *</span>
                      <textarea
                        value={ucSolution}
                        onChange={e => setUcSolution(e.target.value)}
                        required
                        rows={2}
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Function</span>
                      <select
                        value={ucFunction}
                        onChange={e => setUcFunction(e.target.value)}
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      >
                        {FUNCTION_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </label>
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Owner</span>
                      <input
                        type="text"
                        value={ucOwner}
                        onChange={e => setUcOwner(e.target.value)}
                        placeholder="e.g., P-A. Cauchois"
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Impact</span>
                      <input
                        type="text"
                        value={ucImpact}
                        onChange={e => setUcImpact(e.target.value)}
                        placeholder="e.g., Single source of truth for Tax"
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      />
                    </label>
                    <button type="submit" className="rounded-full bg-navy text-navy-foreground px-4 py-2 text-sm font-medium">
                      Add Use Case
                    </button>
                    {ucSuccess && <p className="text-xs text-emerald-600">Use case added successfully!</p>}
                  </form>
                </div>

                {/* Delete list */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Dynamic Use Cases ({useCases.length})</h4>
                  {useCasesLoading ? (
                    <p className="text-xs text-muted-foreground">Loading...</p>
                  ) : useCases.length === 0 ? (
                    <p className="text-xs text-muted-foreground">No dynamic use cases yet.</p>
                  ) : (
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {useCases.map(uc => (
                        <div key={uc.id} className="flex items-center justify-between gap-2 p-2 rounded-lg border bg-background">
                          <span className="text-xs flex-1 truncate">{uc.title}</span>
                          <button
                            onClick={() => handleDeleteUseCase(uc.id)}
                            className="rounded-full p-1 hover:bg-muted text-red-600"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* News Tab */}
            {activeTab === "news" && (
              <div className="mt-4 grid md:grid-cols-2 gap-6">
                {/* Add form */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Add New News Item</h4>
                  <form onSubmit={handleAddNews} className="space-y-3">
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Badge</span>
                      <input
                        type="text"
                        value={newsTag}
                        onChange={e => setNewsTag(e.target.value)}
                        placeholder="e.g., AI Tip"
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Date</span>
                      <input
                        type="text"
                        value={newsDate}
                        onChange={e => setNewsDate(e.target.value)}
                        placeholder="e.g., Jun 2025"
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Title *</span>
                      <input
                        type="text"
                        value={newsTitle}
                        onChange={e => setNewsTitle(e.target.value)}
                        required
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Description *</span>
                      <textarea
                        value={newsSummary}
                        onChange={e => setNewsSummary(e.target.value)}
                        required
                        rows={3}
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Image URL (optional)</span>
                      <input
                        type="text"
                        value={newsImageUrl}
                        onChange={e => setNewsImageUrl(e.target.value)}
                        placeholder="Leave empty for default gradient"
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      />
                    </label>
                    <button type="submit" className="rounded-full bg-navy text-navy-foreground px-4 py-2 text-sm font-medium">
                      Add News
                    </button>
                    {newsSuccess && <p className="text-xs text-emerald-600">News added successfully!</p>}
                  </form>
                </div>

                {/* Delete list */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Dynamic News ({newsItems.length})</h4>
                  {newsLoading ? (
                    <p className="text-xs text-muted-foreground">Loading...</p>
                  ) : newsItems.length === 0 ? (
                    <p className="text-xs text-muted-foreground">No dynamic news yet.</p>
                  ) : (
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {newsItems.map(news => (
                        <div key={news.id} className="flex items-center justify-between gap-2 p-2 rounded-lg border bg-background">
                          <span className="text-xs flex-1 truncate">{news.title}</span>
                          <button
                            onClick={() => handleDeleteNews(news.id)}
                            className="rounded-full p-1 hover:bg-muted text-red-600"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Events Tab */}
            {activeTab === "events" && (
              <div className="mt-4 grid md:grid-cols-2 gap-6">
                {/* Add form */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Add New Event</h4>
                  <form onSubmit={handleAddEvent} className="space-y-3">
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Month</span>
                      <select
                        value={eventMonth}
                        onChange={e => setEventMonth(e.target.value)}
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      >
                        {MONTH_OPTIONS.map(m => <option key={m} value={m}>{m}</option>)}
                      </select>
                    </label>
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Day *</span>
                      <input
                        type="number"
                        min="1"
                        max="31"
                        value={eventDay}
                        onChange={e => setEventDay(e.target.value)}
                        required
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Title *</span>
                      <input
                        type="text"
                        value={eventTitle}
                        onChange={e => setEventTitle(e.target.value)}
                        required
                        placeholder="e.g., AI Gate Committee"
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Category</span>
                      <input
                        type="text"
                        value={eventType}
                        onChange={e => setEventType(e.target.value)}
                        placeholder="e.g., AI Governance, FD Call"
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs text-muted-foreground">Time</span>
                      <input
                        type="text"
                        value={eventMeta}
                        onChange={e => setEventMeta(e.target.value)}
                        placeholder="e.g., 14:00 CET"
                        className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm"
                      />
                    </label>
                    <button type="submit" className="rounded-full bg-navy text-navy-foreground px-4 py-2 text-sm font-medium">
                      Add Event
                    </button>
                    {eventSuccess && <p className="text-xs text-emerald-600">Event added successfully!</p>}
                  </form>
                </div>

                {/* Delete list */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Dynamic Events ({eventsItems.length})</h4>
                  {eventsLoading ? (
                    <p className="text-xs text-muted-foreground">Loading...</p>
                  ) : eventsItems.length === 0 ? (
                    <p className="text-xs text-muted-foreground">No dynamic events yet.</p>
                  ) : (
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {eventsItems.map(event => (
                        <div key={event.id} className="flex items-center justify-between gap-2 p-2 rounded-lg border bg-background">
                          <span className="text-xs flex-1 truncate">{event.title} ({event.month} {event.day})</span>
                          <button
                            onClick={() => handleDeleteEvent(event.id)}
                            className="rounded-full p-1 hover:bg-muted text-red-600"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
