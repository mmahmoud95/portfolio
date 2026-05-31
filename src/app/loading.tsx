export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-[rgba(139,92,246,0.2)] border-t-violet-500 animate-spin" />
        <p className="text-slate-600 text-sm">Loading…</p>
      </div>
    </div>
  );
}
