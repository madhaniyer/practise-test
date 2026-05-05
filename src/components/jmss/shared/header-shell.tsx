interface HeaderShellProps {
  badge: string;
  title: string;
  subtitle: string;
  rightSlot?: React.ReactNode;
}

export function HeaderShell({ badge, title, subtitle, rightSlot }: HeaderShellProps) {
  return (
    <div className="flex flex-col gap-4 rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-calm md:flex-row md:items-center md:justify-between">
      <div>
        <span className="mb-3 inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">{badge}</span>
        <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
        <p className="mt-2 max-w-3xl text-slate-600">{subtitle}</p>
      </div>
      {rightSlot}
    </div>
  );
}
