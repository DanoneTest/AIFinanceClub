import { useState } from "react";
import { X } from "lucide-react";

interface AdminLoginProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const ADMIN_PASSWORD = "danone2025";

export function AdminLogin({ open, onClose, onSuccess }: AdminLoginProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("admin_authenticated", "true");
      setPassword("");
      setError("");
      onSuccess();
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-md flex items-center justify-center p-4" onClick={onClose}>
      <div onClick={e => e.stopPropagation()} className="bg-card border rounded-3xl max-w-sm w-full p-6 shadow-elevated">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight">Admin Access</h3>
          <button onClick={onClose} className="rounded-full p-1.5 hover:bg-muted">
            <X className="size-4" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <label className="block">
            <span className="text-sm text-muted-foreground">Password</span>
            <input
              type="password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
                setError("");
              }}
              className="mt-1 w-full rounded-xl border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40"
              autoFocus
            />
          </label>
          {error && (
            <p className="mt-2 text-xs text-red-600">{error}</p>
          )}
          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-navy text-navy-foreground px-4 py-2 text-sm font-medium"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
