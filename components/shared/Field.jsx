import { Label } from "@/components/ui/label";

export default function Field({
  label,
  error,
  children,
}) {
  return (
    <div>
      <Label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
        {label}
      </Label>

      <div className="mt-1.5">
        {children}
      </div>

      {error && (
        <p className="mt-1 text-xs text-rose-500">
          {error}
        </p>
      )}
    </div>
  );
}