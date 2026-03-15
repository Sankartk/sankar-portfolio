import Navbar from "../../../components/Navbar"

export const metadata = {
  title: 'FleetPulse — Sankar Kalyanakumar',
  description: 'Fleet operations platform that keeps a fleet off the side of the road — built with Java 21, Spring Boot 3.2, Flyway, and a live Chart.js ops dashboard.',
  openGraph: {
    title: 'FleetPulse',
    description: 'Fleet operations platform that keeps a fleet off the side of the road — built with Java 21, Spring Boot 3.2, Flyway, and a live Chart.js ops dashboard.',
    url: 'https://sankartk.dev/projects/fleetpulse',
  },
}

export default function FleetPulse() {
  return (
    <main className="bg-white text-gray-900 min-h-screen font-sans">
      <Navbar />

      {/* HEADER */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-screen-xl mx-auto px-6 pt-10 pb-9">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-2">
              <a href="/" className="text-slate-500 text-xs hover:text-slate-300 transition-colors">&larr; Back</a>
              <h1 className="text-4xl font-extrabold tracking-tight leading-none">FleetPulse</h1>
              <p className="text-slate-200 text-base font-semibold mt-1">One dashboard. Every truck. No more surprises on the road.</p>
              <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
                Fleet dispatchers lose time cross-referencing a maintenance spreadsheet, a driver roster, and a route board that don&apos;t talk to each other.
                FleetPulse puts vehicles, drivers, maintenance records, and alerts in one place — and automatically surfaces anything overdue before someone has to go looking.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {["Java 21","Spring Boot 3.2","Spring Data JPA","Flyway","H2 / PostgreSQL","Hibernate 6","Thymeleaf","Chart.js","Swagger / OpenAPI","JUnit 5","Mockito","Docker"].map(t => (
                  <span key={t} className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-xs font-mono">{t}</span>
                ))}
              </div>
            </div>
            <a href="https://github.com/Sankartk/fleetpulse" className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-4 py-2 rounded-lg text-sm flex-shrink-0 transition-colors mt-6" target="_blank" rel="noopener noreferrer">GitHub &rarr;</a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 flex flex-col gap-5">
            <div>
              <p className="text-xs font-mono text-gray-400 mb-1">// dispatch.log — 07:42:11</p>
              <h2 className="text-xl font-bold text-gray-900">The problem</h2>
            </div>
            <div className="bg-slate-950 rounded-xl p-5 font-mono text-sm leading-relaxed border border-slate-800">
              <p className="text-red-400">[ALERT] Vehicle FP-TRK-003 — engine service OVERDUE</p>
              <p className="text-slate-500 mt-1">last service: 89,200 km &nbsp;|&nbsp; current: 102,450 km</p>
              <p className="text-yellow-300 mt-3">dispatcher: when did this happen?</p>
              <p className="text-slate-500">dispatcher: checking spreadsheet...</p>
              <p className="text-slate-500">dispatcher: cross-referencing driver logs...</p>
              <p className="text-slate-500">dispatcher: calling maintenance yard...</p>
              <p className="text-slate-600 mt-3 italic">truck already out on a 400-mile run.</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              The typical fleet runs on three disconnected systems: a maintenance spreadsheet in the shop, a driver roster in HR, and a route board with the dispatcher. None of them update the others.
              An overdue oil change on truck FP-TRK-003 stays invisible until the truck calls in from the highway.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              FleetPulse solves the coordination problem by making everything a first-class data entity. Vehicles, drivers, maintenance records, telematics readings, and alerts all live in one database with proper foreign keys and validation — not separate files with no connection between them.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              A scheduler runs every hour, finds any maintenance task that&apos;s past its due date, marks it <code className="bg-gray-100 px-1 rounded text-xs">OVERDUE</code>, and raises an alert on the dashboard — exactly once, no matter how many times it runs. The operations dashboard refreshes its KPIs automatically; alerts can be resolved with one click.
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="rounded-xl border border-orange-100 bg-orange-50 p-5">
              <h4 className="font-bold text-orange-800 text-xs uppercase tracking-wide mb-3">What changed</h4>
              <ul className="flex flex-col gap-2 text-sm text-orange-900">
                {[
                  "Overdue maintenance caught before the truck leaves the yard",
                  "One source of truth instead of three disconnected files",
                  "Alerts fire once — no repeated noise for known issues",
                  "Full service history with cost tracking and audit trail",
                  "Dashboard KPIs refresh live; resolve alerts without reloading",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5 flex-shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5">
              <h4 className="font-bold text-emerald-800 text-xs uppercase tracking-wide mb-3">Java design highlights</h4>
              <ul className="flex flex-col gap-2 text-sm text-emerald-900">
                {[
                  "Java 21 records as immutable DTOs",
                  "Text blocks for multi-line JPQL queries",
                  "Service-interface / Impl separation (DIP)",
                  "@Transactional(readOnly) default strategy",
                  "Idempotent alert generation with repo guard",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded font-mono mt-0.5 flex-shrink-0">01</div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Domain model & data layer</h2>
            <p className="text-gray-500 text-sm mt-1">Five JPA entities, five Spring Data repositories, Flyway versioned schema with full seed data</p>
          </div>
        </div>

        {/* entity diagram */}
        <div className="bg-slate-950 rounded-xl border border-slate-800 p-6 mb-6">
          <p className="text-xs font-mono text-slate-500 mb-4">// entity relationships</p>
          <svg viewBox="0 0 640 180" width="100%" className="overflow-visible">
            <defs>
              <marker id="arr" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 L1,3 z" fill="#475569"/>
              </marker>
            </defs>
            {/* Vehicle — center */}
            <rect x="240" y="60" width="160" height="60" rx="8" fill="#1e293b" stroke="#f97316" strokeWidth="1.5"/>
            <text x="320" y="84" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="bold">Vehicle</text>
            <text x="320" y="99" textAnchor="middle" fontSize="9" fill="#94a3b8">id · regNumber · make · model</text>
            <text x="320" y="112" textAnchor="middle" fontSize="9" fill="#94a3b8">status · fuelType · mileage</text>

            {/* Driver — left */}
            <rect x="30" y="60" width="140" height="60" rx="8" fill="#1e293b" stroke="#60a5fa" strokeWidth="1.5"/>
            <text x="100" y="84" textAnchor="middle" fontSize="11" fill="#60a5fa" fontWeight="bold">Driver</text>
            <text x="100" y="99" textAnchor="middle" fontSize="9" fill="#94a3b8">id · employeeId · name</text>
            <text x="100" y="112" textAnchor="middle" fontSize="9" fill="#94a3b8">licenseExpiry · status</text>
            <line x1="170" y1="90" x2="240" y2="90" stroke="#475569" strokeWidth="1.2" markerEnd="url(#arr)"/>
            <text x="205" y="83" textAnchor="middle" fontSize="8" fill="#64748b">assigned</text>

            {/* MaintenanceRecord — top */}
            <rect x="240" y="0" width="160" height="48" rx="8" fill="#1e293b" stroke="#4ade80" strokeWidth="1.5"/>
            <text x="320" y="20" textAnchor="middle" fontSize="11" fill="#4ade80" fontWeight="bold">MaintenanceRecord</text>
            <text x="320" y="35" textAnchor="middle" fontSize="9" fill="#94a3b8">type · status · scheduledDate</text>
            <text x="320" y="48" textAnchor="middle" fontSize="9" fill="#94a3b8">cost · technicianName</text>
            <line x1="320" y1="48" x2="320" y2="60" stroke="#475569" strokeWidth="1.2" markerEnd="url(#arr)"/>

            {/* TelematicsReading — bottom-left */}
            <rect x="30" y="140" width="160" height="36" rx="8" fill="#1e293b" stroke="#a78bfa" strokeWidth="1.5"/>
            <text x="110" y="160" textAnchor="middle" fontSize="11" fill="#a78bfa" fontWeight="bold">TelematicsReading</text>
            <text x="110" y="173" textAnchor="middle" fontSize="9" fill="#94a3b8">mileage · fuelLevel · speed</text>
            <line x1="240" y1="110" x2="190" y2="140" stroke="#475569" strokeWidth="1.2" markerEnd="url(#arr)"/>

            {/* Alert — bottom-right */}
            <rect x="450" y="140" width="140" height="36" rx="8" fill="#1e293b" stroke="#f87171" strokeWidth="1.5"/>
            <text x="520" y="160" textAnchor="middle" fontSize="11" fill="#f87171" fontWeight="bold">Alert</text>
            <text x="520" y="173" textAnchor="middle" fontSize="9" fill="#94a3b8">type · severity · resolved</text>
            <line x1="400" y1="110" x2="450" y2="140" stroke="#475569" strokeWidth="1.2" markerEnd="url(#arr)"/>
          </svg>
        </div>

        {/* service layer */}
        <div className="flex items-start gap-4 mb-6 mt-10">
          <div className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded font-mono mt-0.5 flex-shrink-0">02</div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Service layer & scheduler</h2>
            <p className="text-gray-500 text-sm mt-1">Interface/Impl separation enforces DIP. Scheduler runs hourly — idempotent by design.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-950 rounded-xl border border-slate-800 p-5">
            <p className="text-xs font-mono text-slate-500 mb-3">// MaintenanceService.markOverdueRecords()</p>
            <pre className="text-xs text-slate-300 leading-relaxed overflow-x-auto">{`@Transactional
public int markOverdueRecords() {
  LocalDate today = LocalDate.now();
  List<MaintenanceRecord> overdue =
    repository.findOverdueRecords(today);
  overdue.forEach(r ->
    r.setStatus(OVERDUE));
  return overdue.size(); // batch updated
}`}</pre>
          </div>
          <div className="bg-slate-950 rounded-xl border border-slate-800 p-5">
            <p className="text-xs font-mono text-slate-500 mb-3">// AlertService.generateMaintenanceAlerts()</p>
            <pre className="text-xs text-slate-300 leading-relaxed overflow-x-auto">{`public void generateMaintenanceAlerts() {
  repository.findOverdue().forEach(r -> {
    // idempotency guard — no duplicate alerts
    var existing = alertRepo
      .findActiveAlertsForVehicleAndType(
        r.getVehicle().getId(), MAINTENANCE_DUE);
    if (existing.isEmpty()) {
      alertRepo.save(buildAlert(r)); // fire once
    }
  });
}`}</pre>
          </div>
        </div>
      </section>

      {/* DASHBOARD SECTION */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded font-mono mt-0.5 flex-shrink-0">03</div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Operations dashboard</h2>
            <p className="text-gray-500 text-sm mt-1">Thymeleaf + Chart.js — KPI cards, maintenance cost trend (6 months), fleet status doughnut, live alerts table</p>
          </div>
        </div>

        {/* mock dashboard preview */}
        <div className="rounded-xl border border-slate-800 bg-[#0f172a] overflow-hidden">
          {/* top bar */}
          <div className="flex items-center justify-between px-5 py-3 bg-slate-900 border-b border-slate-800">
            <span className="text-xs font-mono text-orange-400 font-bold">⬡ FleetPulse</span>
            <span className="text-xs font-mono text-slate-500">Operations Dashboard</span>
            <span className="text-xs text-slate-600">localhost:8080</span>
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-slate-800 border-b border-slate-800">
            {[
              { label: "Total Vehicles", value: "8", color: "#f97316" },
              { label: "Active",         value: "5", color: "#4ade80" },
              { label: "In Maintenance", value: "2", color: "#fbbf24" },
              { label: "Overdue Tasks",  value: "1", color: "#f87171" },
              { label: "Upcoming 30d",   value: "4", color: "#60a5fa" },
              { label: "Open Alerts",    value: "3", color: "#c084fc" },
            ].map(({ label, value, color }) => (
              <div key={label} className="bg-slate-950 p-3 text-center">
                <p className="text-[9px] text-slate-500 uppercase tracking-widest leading-tight">{label}</p>
                <p className="text-2xl font-extrabold leading-none mt-1" style={{ color }}>{value}</p>
              </div>
            ))}
          </div>

          {/* charts row */}
          <div className="grid md:grid-cols-3 gap-0">
            {/* cost trend — 2/3 */}
            <div className="md:col-span-2 p-5 border-r border-slate-800">
              <p className="text-[10px] font-mono text-slate-500 mb-3">// maintenance cost trend — last 6 months</p>
              <svg viewBox="0 0 340 80" width="100%">
                {/* grid lines */}
                {[10, 30, 50, 70].map(y => (
                  <line key={y} x1="30" y1={y} x2="340" y2={y} stroke="#1e293b" strokeWidth="0.8"/>
                ))}
                {/* y labels */}
                {[["$4k",10],["$3k",30],["$2k",50],["$1k",70]].map(([l,y]) => (
                  <text key={String(y)} x="26" y={Number(y)+3} textAnchor="end" fontSize="7" fill="#475569">{l}</text>
                ))}
                {/* bars */}
                {[
                  [50,  45, "Oct"],
                  [95,  25, "Nov"],
                  [130, 55, "Dec"],
                  [165, 40, "Jan"],
                  [200, 30, "Feb"],
                  [235, 20, "Mar"],
                ].map(([x, h, lbl]) => (
                  <g key={String(lbl)}>
                    <rect x={Number(x)} y={80 - Number(h)} width="22" height={Number(h)} rx="2" fill="#f97316" opacity="0.75"/>
                    <text x={Number(x)+11} y="79" textAnchor="middle" fontSize="7" fill="#475569">{lbl}</text>
                  </g>
                ))}
                {/* trend line */}
                <polyline points="61,35 106,15 141,45 176,30 211,20 246,10" fill="none" stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="3 2"/>
              </svg>
            </div>

            {/* fleet status doughnut — 1/3 */}
            <div className="p-5">
              <p className="text-[10px] font-mono text-slate-500 mb-3">// fleet status</p>
              <div className="flex flex-col items-center gap-2">
                <svg viewBox="0 0 80 80" width="80" height="80">
                  {/* doughnut: active=5/8, maint=2/8, retired=1/8 */}
                  <circle cx="40" cy="40" r="28" fill="none" stroke="#4ade80" strokeWidth="12"
                    strokeDasharray="110 65" strokeDashoffset="0" transform="rotate(-90 40 40)"/>
                  <circle cx="40" cy="40" r="28" fill="none" stroke="#fbbf24" strokeWidth="12"
                    strokeDasharray="44 131" strokeDashoffset="-110" transform="rotate(-90 40 40)"/>
                  <circle cx="40" cy="40" r="28" fill="none" stroke="#f87171" strokeWidth="12"
                    strokeDasharray="22 153" strokeDashoffset="-154" transform="rotate(-90 40 40)"/>
                  <text x="40" y="44" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f97316">8</text>
                </svg>
                <div className="flex flex-col gap-1 w-full">
                  {[["Active","#4ade80","5"],["In Maint","#fbbf24","2"],["Retired","#f87171","1"]].map(([l,c,n]) => (
                    <div key={String(l)} className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: String(c) }}/>
                      <span className="text-[10px] text-slate-400 flex-1">{l}</span>
                      <span className="text-[10px] font-bold" style={{ color: String(c) }}>{n}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* alerts table */}
          <div className="border-t border-slate-800 p-5">
            <p className="text-[10px] font-mono text-slate-500 mb-3">// unresolved alerts</p>
            <div className="rounded-lg border border-slate-800 overflow-hidden">
              <div className="grid grid-cols-4 bg-slate-900 px-3 py-1.5">
                {["Vehicle","Type","Severity","Message"].map(h => (
                  <span key={h} className="text-[9px] font-bold text-slate-500 uppercase tracking-wide">{h}</span>
                ))}
              </div>
              {[
                ["FP-TRK-003","MAINTENANCE_DUE","CRITICAL","Engine service overdue by 13,250 km"],
                ["FP-VAN-007","LICENSE_EXPIRY","HIGH","Driver license expires in 12 days"],
                ["FP-SUV-002","FUEL_LOW","MEDIUM","Fuel level at 12% — schedule refuel"],
              ].map(([vehicle,type,sev,msg]) => {
                const sevColor = sev === "CRITICAL" ? "#f87171" : sev === "HIGH" ? "#fbbf24" : "#60a5fa"
                return (
                  <div key={vehicle} className="grid grid-cols-4 px-3 py-2 border-t border-slate-800 hover:bg-slate-900 transition-colors">
                    <span className="text-[10px] font-mono text-orange-400">{vehicle}</span>
                    <span className="text-[10px] font-mono text-slate-400">{type}</span>
                    <span className="text-[10px] font-bold" style={{ color: sevColor }}>{sev}</span>
                    <span className="text-[10px] text-slate-400">{msg}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* API SECTION */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded font-mono mt-0.5 flex-shrink-0">04</div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">REST API & Swagger</h2>
            <p className="text-gray-500 text-sm mt-1">25+ endpoints across 4 controllers — all annotated with OpenAPI 3 descriptions, auto-documented at&nbsp;
              <code className="text-xs bg-gray-100 px-1 rounded">/swagger-ui.html</code></p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { tag: "Vehicles", color: "#f97316", endpoints: [
              ["GET",    "/api/vehicles",                          "List all with driver info"],
              ["POST",   "/api/vehicles",                          "Create with validation"],
              ["PATCH",  "/api/vehicles/{id}/assign-driver/{dId}", "Assign driver (status check)"],
              ["DELETE", "/api/vehicles/{id}",                     "Retire vehicle"],
            ]},
            { tag: "Maintenance", color: "#4ade80", endpoints: [
              ["POST",  "/api/maintenance",                    "Schedule with date validation"],
              ["PATCH", "/api/maintenance/{id}/complete",      "Mark complete, update mileage"],
              ["GET",   "/api/maintenance/overdue",            "All OVERDUE records"],
              ["GET",   "/api/maintenance/upcoming",           "Next 30 days"],
            ]},
            { tag: "Alerts", color: "#f87171", endpoints: [
              ["GET",   "/api/alerts/unresolved",  "Unresolved, newest first"],
              ["GET",   "/api/alerts/count",       "Count by resolved flag"],
              ["PATCH", "/api/alerts/{id}/resolve","Resolve and timestamp"],
            ]},
            { tag: "Drivers", color: "#60a5fa", endpoints: [
              ["GET",  "/api/drivers/available", "Active, unassigned drivers"],
              ["POST", "/api/drivers",           "Create with uniqueness checks"],
              ["PUT",  "/api/drivers/{id}",      "Update license / status"],
            ]},
          ].map(({ tag, color, endpoints }) => (
            <div key={tag} className="bg-slate-950 rounded-xl border border-slate-800 p-5">
              <p className="text-xs font-bold mb-3" style={{ color }}>{tag}</p>
              <div className="flex flex-col gap-1.5">
                {endpoints.map(([method, path, desc]) => (
                  <div key={path} className="flex items-start gap-2">
                    <span className="text-[9px] font-mono font-bold w-10 flex-shrink-0 mt-0.5" style={{
                      color: method === "GET" ? "#4ade80" : method === "POST" ? "#60a5fa" : method === "PATCH" ? "#fbbf24" : "#f87171"
                    }}>{method}</span>
                    <span className="text-[10px] font-mono text-slate-400 flex-1 leading-tight">{path}</span>
                    <span className="text-[9px] text-slate-600 text-right leading-tight hidden md:block">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTING & BUILD */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded font-mono mt-0.5 flex-shrink-0">05</div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Testing & build</h2>
            <p className="text-gray-500 text-sm mt-1">16 tests across 4 suites — <strong className="text-gray-700">0 failures</strong></p>
          </div>
        </div>

        <div className="bg-slate-950 rounded-xl border border-slate-800 p-5 font-mono text-xs">
          <p className="text-slate-500 mb-3">$ mvn clean verify</p>
          <div className="flex flex-col gap-1.5">
            {[
              { suite: "FleetPulseApplicationTest",  n: 1,  note: "full Spring context loads with Flyway migrations + seed data" },
              { suite: "VehicleServiceTest",         n: 6,  note: "create, duplicate-reg guard, assignDriver status validation, 404 paths" },
              { suite: "MaintenanceServiceTest",     n: 5,  note: "past-date guard, schedule→complete lifecycle, markOverdue batch" },
              { suite: "VehicleApiControllerTest",   n: 4,  note: "@WebMvcTest MockMvc — 200/201/400/404 response contracts" },
            ].map(({ suite, n, note }) => (
              <div key={suite} className="flex items-baseline gap-3">
                <span className="text-emerald-400 flex-shrink-0">✓</span>
                <span className="text-slate-300 w-64 flex-shrink-0">{suite}</span>
                <span className="text-emerald-400 flex-shrink-0">{n} passed</span>
                <span className="text-slate-600 hidden md:block">{note}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-800">
            <span className="text-emerald-400 font-bold">BUILD SUCCESS</span>
            <span className="text-slate-500 ml-3">Tests run: 16, Failures: 0, Errors: 0, Skipped: 0</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="rounded-xl border border-gray-100 p-4">
            <h4 className="font-bold text-gray-800 text-sm mb-2">Run locally</h4>
            <pre className="text-xs text-gray-600 leading-relaxed">{`git clone github.com/Sankartk/fleetpulse
cd fleetpulse
mvn spring-boot:run`}</pre>
            <p className="text-xs text-gray-400 mt-2">H2 in-memory DB, seeded automatically. No setup required.</p>
          </div>
          <div className="rounded-xl border border-gray-100 p-4">
            <h4 className="font-bold text-gray-800 text-sm mb-2">Explore the app</h4>
            <div className="flex flex-col gap-1 text-xs text-gray-600">
              <a className="text-blue-600 hover:underline font-mono">localhost:8080/</a>
              <span className="text-gray-400 ml-2">Operations Dashboard</span>
              <a className="text-blue-600 hover:underline font-mono">localhost:8080/swagger-ui.html</a>
              <span className="text-gray-400 ml-2">Interactive API docs</span>
              <a className="text-blue-600 hover:underline font-mono">localhost:8080/h2-console</a>
              <span className="text-gray-400 ml-2">Database console</span>
            </div>
          </div>
          <div className="rounded-xl border border-gray-100 p-4">
            <h4 className="font-bold text-gray-800 text-sm mb-2">Docker</h4>
            <pre className="text-xs text-gray-600 leading-relaxed">{`docker compose up -d`}</pre>
            <p className="text-xs text-gray-400 mt-2">Starts the app + PostgreSQL. Switch profiles via <code className="bg-gray-100 px-1 rounded">SPRING_PROFILES_ACTIVE=postgres</code>.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-screen-xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-gray-400">
        <span>Newark, DE &middot; karthicks399@gmail.com</span>
        <div className="flex gap-6">
          <a href="https://linkedin.com/in/sankartk11" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Sankartk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </main>
  )
}
