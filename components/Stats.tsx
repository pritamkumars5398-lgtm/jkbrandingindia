"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Briefcase, Users, Clock, Trophy } from "lucide-react";

const stats = [
  { icon: Clock, value: 10, suffix: "+", label: "Years of Experience" },
  { icon: Briefcase, value: 40000, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 35000, suffix: "+", label: "Happy Clients" },
  { icon: Trophy, value: 50, suffix: "+", label: "Awards Won" },
];

export default function Stats() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      style={{ padding: "56px 0", background: "#ffffff", position: "relative", overflow: "hidden" }}
    >
      {/* Top gold stripe */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent, #f58220, transparent)" }} />

      <div className="site-wrap">
        <div style={{ display: "grid", gap: "14px" }} className="grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                padding: "20px 14px",
                borderRadius: "0",
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.07)", opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
                position: "relative",
                overflow: "hidden",
              }}
              className="card-hover"
            >
              {/* Bottom gold accent */}
              <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "40px", height: "3px", background: "#f58220", borderRadius: "2px 2px 0 0" }} />

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  borderRadius: "0",
                  background: "#fff5eb",
                  marginBottom: "14px",
                }}
              >
                <stat.icon size={20} style={{ color: "#f58220" }} />
              </div>

              <div style={{ fontSize: "clamp(1.9rem, 5vw, 2.5rem)", fontWeight: 800, color: "#1a1a1a", lineHeight: 1 }}>
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} delay={i * 0.2} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <p style={{ color: "#888", fontSize: "12px", fontWeight: 500, marginTop: "8px" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
