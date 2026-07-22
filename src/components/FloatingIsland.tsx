import { useState } from "react";
import { Compass, MessageSquare } from "lucide-react";
import { DiscoveryTour } from "./DiscoveryTour";

const FEEDBACK_URL =
  "https://forms.office.com/e/kN3S3BW2ai?embed=true";

export function FloatingIsland() {
  const [tourOpen, setTourOpen] = useState(false);

  const handleFeedback = () => {
    if (FEEDBACK_URL && FEEDBACK_URL !== "#") {
      window.open(FEEDBACK_URL, "_blank", "noopener,noreferrer");
    } else {
      alert("Feedback form coming soon.");
    }
  };

  return (
    <>
      {!tourOpen && (
        <div
          data-tour="island"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 rounded-full border border-black/5 bg-white/90 backdrop-blur-xl shadow-lg px-1.5 py-1.5 transition-all"
        >
          <button
            onClick={() => setTourOpen(true)}
            className="inline-flex items-center gap-1.5 rounded-full bg-navy text-navy-foreground px-3.5 py-2 text-xs sm:text-sm font-medium hover:-translate-y-px hover:shadow-md transition-all"
          >
            <Compass className="size-4" />
            <span className="hidden xs:inline">Discovery Tour</span>
            <span className="xs:hidden sm:inline hidden">Discovery Tour</span>
            <span className="sm:hidden">Tour</span>
          </button>
          <button
            onClick={handleFeedback}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 hover:-translate-y-px transition-all"
          >
            <MessageSquare className="size-4" />
            <span className="hidden sm:inline">Feedback</span>
          </button>
        </div>
      )}
      <DiscoveryTour open={tourOpen} onClose={() => setTourOpen(false)} />
    </>
  );
}
