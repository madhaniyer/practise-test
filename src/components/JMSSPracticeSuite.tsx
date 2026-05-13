import Link from "next/link";

export default function JMSSPracticeSuite() {
  return (
    <div className="grid min-h-[85vh] items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="space-y-6">
        <span className="inline-flex rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">JMSS Practice Test Suite</span>
        <div className="flex items-center gap-4">
          <img
            src="/shaunak.jpg"
            alt="Shaunak Madhan"
            className="h-24 w-24 flex-shrink-0 rounded-full object-cover shadow-md ring-2 ring-white md:h-32 md:w-32"
          />
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">A calming, intelligent exam experience designed for my son Shaunak Madhan.</h1>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-slate-600">Complete practice suite with 7 short tests (45 min) and 7 full tests (150 min), featuring 1400+ unique questions with zero duplicates.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/login" className="rounded-2xl bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-800">Open login</Link>
          <Link href="/student/dashboard" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 hover:bg-slate-50">Student preview</Link>
          <Link href="/admin/dashboard" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 hover:bg-slate-50">Admin preview</Link>
        </div>
      </section>
      <section className="card-shell p-6">
        <h2 className="text-2xl font-semibold text-slate-900">What is in this build?</h2>
        <ul className="mt-4 space-y-3 text-slate-700">
          <li>• 2 trial tests (15 min each)</li>
          <li>• 7 short tests (45 min each)</li>
          <li>• 7 full tests (150 min each)</li>
          <li>• 1400+ unique questions with zero duplicates</li>
          <li>• AI-powered feedback and coaching</li>
          <li>• Complete auth + role protection</li>
        </ul>
      </section>
    </div>
  );
}
