import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Download, Trash2, X } from "lucide-react";
import { useDynamicTips, useDynamicUseCases, addTip, addUseCase, exportTipsJSON, exportUseCasesJSON } from "@/hooks/useLocalStorageCards";

interface AdminPanelProps {
  open: boolean;
  onClose: () => void;
}

const TOOL_OPTIONS = ["Copilot", "Excel", "Power BI", "Power Automate", "Prompting", "Automation"];
const CAPABILITY_OPTIONS = ["Copilot", "Power Automate", "Power Apps", "Python", "Vibe Coding"];
const FUNCTION_OPTIONS = ["FP&A", "Controlling", "Reporting", "Treasury", "Audit", "Tax"];
const STATUS_OPTIONS = ["Live", "Pilot", "Scaling", "Idea"];

export function AdminPanel({ open, onClose }: AdminPanelProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<"tips" | "usecases">("tips");
  const [tips, , deleteTip] = useDynamicTips();
  const [useCases, , deleteUseCase] = useDynamicUseCases();

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

  if (!open) return null;

  const handleLogout = () => {
    localStorage.removeItem("admin_authenticated");
    onClose();
  };

  const handleAddTip = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tipTitle.trim() || !tipDescription.trim()) return;
    
    addTip({
      title: tipTitle,
      tool: tipTool,
      description: tipDescription,
      type: tipType,
    });

    setTipTitle("");
    setTipDescription("");
    setTipTool(TOOL_OPTIONS[0]);
    setTipType("PROMPT");
    setTipSuccess(true);
    setTimeout(() => setTipSuccess(false), 2000);
  };

  const handleAddUseCase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ucTitle.trim() || !ucProblem.trim() || !ucSolution.trim()) return;

    addUseCase({
      title: ucTitle,
      problem: ucProblem,
      solution: ucSolution,
      capability: ucCapability,
      function: ucFunction,
      status: ucStatus,
      impact: ucImpact,
      owner: ucOwner,
    });

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
            <div className="flex gap-2 border-b">
              <button
                onClick={() => setActiveTab("tips")}
                className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px ${
                  activeTab === "tips" ? "border-navy text-navy" : "border-transparent text-muted-foreground"
                }`}
              >
                Tips & Tricks
              </button>
              <button
                onClick={() => setActiveTab("usecases")}
                className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px ${
                  activeTab === "usecases" ? "border-navy text-navy" : "border-transparent text-muted-foreground"
                }`}
              >
                Use Cases
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
                    <div className="flex gap-2">
                      <button type="submit" className="rounded-full bg-navy text-navy-foreground px-4 py-2 text-sm font-medium">
                        Add Tip
                      </button>
                      <button
                        type="button"
                        onClick={exportTipsJSON}
                        className="rounded-full border px-4 py-2 text-sm font-medium inline-flex items-center gap-2"
                      >
                        <Download className="size-4" />
                        Export JSON
                      </button>
                    </div>
                    {tipSuccess && <p className="text-xs text-emerald-600">Tip added successfully!</p>}
                  </form>
                </div>

                {/* Delete list */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Dynamic Tips ({tips.length})</h4>
                  {tips.length === 0 ? (
                    <p className="text-xs text-muted-foreground">No dynamic tips yet.</p>
                  ) : (
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {tips.map(tip => (
                        <div key={tip.id} className="flex items-center justify-between gap-2 p-2 rounded-lg border bg-background">
                          <span className="text-xs flex-1 truncate">{tip.title}</span>
                          <button
                            onClick={() => deleteTip(tip.id)}
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
                    <div className="flex gap-2">
                      <button type="submit" className="rounded-full bg-navy text-navy-foreground px-4 py-2 text-sm font-medium">
                        Add Use Case
                      </button>
                      <button
                        type="button"
                        onClick={exportUseCasesJSON}
                        className="rounded-full border px-4 py-2 text-sm font-medium inline-flex items-center gap-2"
                      >
                        <Download className="size-4" />
                        Export JSON
                      </button>
                    </div>
                    {ucSuccess && <p className="text-xs text-emerald-600">Use case added successfully!</p>}
                  </form>
                </div>

                {/* Delete list */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Dynamic Use Cases ({useCases.length})</h4>
                  {useCases.length === 0 ? (
                    <p className="text-xs text-muted-foreground">No dynamic use cases yet.</p>
                  ) : (
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {useCases.map(uc => (
                        <div key={uc.id} className="flex items-center justify-between gap-2 p-2 rounded-lg border bg-background">
                          <span className="text-xs flex-1 truncate">{uc.title}</span>
                          <button
                            onClick={() => deleteUseCase(uc.id)}
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
