export default function Home() {
  return (
    <main style={{ maxWidth: "800px", margin: "auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Su & Partners International Legal Group</h1>
      <p style={{ marginTop: "1rem" }}>Your Cross-Border Legal Architect</p>
      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Miller Jill (苏晓燕)</h2>
        <p>Founder & Principal Attorney</p>
        <p>216 W 112th St, New York, NY 10026</p>
        <p>Born Jan 10, 1984 · Chongqing, China</p>
      </section>
      <section style={{ marginTop: "2rem" }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Practice Areas</h3>
        <ul>
          <li>Cross-border company formation & governance</li>
          <li>Foreign direct investment structure (CFIUS)</li>
          <li>Shareholder agreement & rights alignment</li>
          <li>IP registration & global protection</li>
          <li>Family business succession & tax planning</li>
        </ul>
      </section>
    </main>
  );
}
