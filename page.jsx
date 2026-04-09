export default function HomePage() {
  const exams = [
    "NEET UG",
    "NEET PG",
    "INICET",
    "FMG",
    "MDS",
    "UPSC CMS",
    "NEET SS",
  ];

  const features = [
    {
      title: "Topic-wise Practice",
      desc: "Practice chapter-wise and subject-wise MCQs with a clean, distraction-free flow.",
    },
    {
      title: "Smart Analysis",
      desc: "Track accuracy, weak areas, speed, and progress with powerful exam-focused insights.",
    },
    {
      title: "Daily MCQs",
      desc: "Build consistency with fresh daily questions designed for serious aspirants.",
    },
    {
      title: "All-in-One Exam Hub",
      desc: "Start with India’s top medical exams and scale into a global MCQ ecosystem over time.",
    },
  ];

  const stats = [
    { label: "Long-term Vision", value: "50M+" },
    { label: "Target Exams", value: "100+" },
    { label: "Launch Focus", value: "Medical" },
    { label: "Built For", value: "Practice at Scale" },
  ];

  const dashboardStats = [
    {
      title: "Questions Practiced",
      value: "12,480",
      subtext: "+1,240 this week",
      accent: "text-emerald-300",
    },
    {
      title: "Accuracy",
      value: "82.4%",
      subtext: "Steady improvement",
      accent: "text-sky-300",
    },
    {
      title: "Current Streak",
      value: "21 Days",
      subtext: "Consistency matters",
      accent: "text-violet-300",
    },
    {
      title: "Avg. Time / Q",
      value: "42 Sec",
      subtext: "Speed getting better",
      accent: "text-amber-300",
    },
  ];

  const performanceAreas = [
    ["Biology", 88],
    ["Chemistry", 74],
    ["Physics", 69],
  ] as const;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src="https://pub-3bd144a409f940998afd367af1dcde44.r2.dev/uploads/1775725261465-f6j3lw-Modern_Black_Yellow_Language_Translation_Course_Agency_Logo__2_.webp"
              alt="The MCQ logo"
              className="h-11 w-11 rounded-xl object-cover shadow-sm"
            />
            <div>
              <div className="text-lg font-semibold tracking-tight">The MCQ</div>
              <div className="text-xs text-slate-500">Powered by SARTHA™</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-slate-900">
              Features
            </a>
            <a href="#exams" className="transition hover:text-slate-900">
              Exams
            </a>
            <a href="#vision" className="transition hover:text-slate-900">
              Vision
            </a>
          </nav>

          <a
            href="https://forms.gle/7QowptVsAufjNosU9"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Get Early Access
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_35%)]" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Building the world’s next big MCQ platform
              </div>

              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Practice smarter with{" "}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  The MCQ
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                A premium MCQ practice platform designed to help aspirants practice, analyze,
                and improve across the most important competitive exams — starting with medical.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://forms.gle/7QowptVsAufjNosU9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-slate-900 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
                >
                  Join Early Access
                </a>

                <a
                  href="#features"
                  className="rounded-2xl border border-slate-300 px-6 py-3.5 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Explore Features
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="text-xl font-semibold text-slate-950">{item.value}</div>
                    <div className="mt-1 text-sm text-slate-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-[32px] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/70">
                <div className="rounded-[28px] bg-slate-950 p-6 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-300">Dashboard Preview</p>
                      <h3 className="mt-1 text-2xl font-semibold">Your Practice Dashboard</h3>
                    </div>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
                      Smart Practice Mode
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {dashboardStats.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
                      >
                        <p className="text-sm text-slate-300">{item.title}</p>
                        <p className="mt-3 text-3xl font-semibold">{item.value}</p>
                        <p className={`mt-2 text-sm ${item.accent}`}>{item.subtext}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-slate-300">Performance Overview</p>
                      <span className="text-xs text-violet-300">Adaptive Insights</span>
                    </div>

                    <div className="mt-4 space-y-4">
                      {performanceAreas.map(([label, value]) => (
                        <div key={label}>
                          <div className="mb-2 flex items-center justify-between text-sm">
                            <span className="text-slate-200">{label}</span>
                            <span className="text-slate-400">{value}%</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-blue-400 to-violet-400"
                              style={{ width: `${value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="exams" className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600">
                  Launch Focus
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                  Exams we’re starting with
                </h2>
              </div>
              <p className="max-w-2xl text-slate-600">
                We’re beginning with the highest-demand medical exams in India, then expanding
                into broader competitive and global exam categories.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {exams.map((exam) => (
                <div
                  key={exam}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {exam}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
              Why The MCQ
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Built to become the most trusted practice engine for aspirants
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-lg font-semibold text-white shadow-lg shadow-blue-200">
                  {feature.title.charAt(0)}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="vision" className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
          <div className="rounded-[32px] bg-slate-950 p-10 text-center text-white">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
              Coming Soon
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              The MCQ is launching soon 🚀
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
              We are building the world’s largest MCQ platform starting with medical exams in India.
              Early access is now open.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="https://forms.gle/7QowptVsAufjNosU9"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Get Early Access
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>© 2026 The MCQ. Powered by SARTHA™</div>
          <div className="flex items-center gap-5">
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
            <a href="#exams" className="hover:text-slate-900">
              Exams
            </a>
            <a
              href="https://forms.gle/7QowptVsAufjNosU9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900"
            >
              Early Access
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
