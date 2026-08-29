import React from "react";
import CountUp from "react-countup";
import Reveal from "../motion/Reveal";

interface Figure {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
}

const FIGURES: Figure[] = [
  { value: 24, suffix: "/7", label: "Online booking — members reserve courts any hour, without a phone call." },
  { value: 15, suffix: "+ hrs", label: "Admin time given back to venue staff every week through automation." },
  { value: 10, suffix: "+", label: "Disconnected tools replaced by a single connected operating system." },
  { value: 100, suffix: "%", label: "Automated billing, waivers and confirmations — no manual chasing." },
  // Non-breaking space: a plain leading space collapses in HTML and the
  // number would render jammed against the word ("9sports").
  { value: 9, suffix: " sports", label: "Cricket, padel, tennis, futsal, basketball, badminton and more." },
  { value: 1, suffix: "", label: "Dashboard for every court, coach, member and transaction you run." },
];

const KeyFigures: React.FC = () => (
  <section className="ed-section">
    <div className="ed-container">
      <Reveal direction="up">
        <span className="ed-label">Key figures</span>
      </Reveal>

      <div className="ed-figures">
        {FIGURES.map((figure, idx) => (
          <Reveal
            key={figure.label}
            direction="up"
            distance={24}
            delay={Math.min(idx * 0.07, 0.35)}
            className="ed-figure"
          >
            <div className="ed-figure-value">
              <CountUp
                end={figure.value}
                decimals={figure.decimals || 0}
                duration={2.2}
                enableScrollSpy
                scrollSpyOnce
                prefix={figure.prefix}
              />
              <span>{figure.suffix}</span>
            </div>
            <p className="ed-figure-label">{figure.label}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default KeyFigures;
