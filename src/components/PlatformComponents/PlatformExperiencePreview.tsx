import React from "react";
import {
  LuSwords,
  LuRocket,
  LuPuzzle,
  LuTrophy,
  LuUsers,
  LuClock,
} from "react-icons/lu";
import { IconType } from "react-icons";
import { Icon } from "../common/Icon";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";
import "./PlatformExperiencePreview.css";

interface PreviewSession {
  title: string;
  tag: string;
  desc: string;
  players: string;
  duration: string;
  icon: IconType;
  accent: string;
}

const sessions: PreviewSession[] = [
  {
    title: "Combat Zone",
    tag: "Multiplayer VR Action",
    desc: "Team-based VR combat sessions for groups and corporate bookings.",
    players: "Up to 5 players",
    duration: "20–30 min",
    icon: LuSwords,
    accent: "linear-gradient(135deg, #ff5f6d, #7c3aed)",
  },
  {
    title: "Space Explorer",
    tag: "Family VR Adventure",
    desc: "A family-friendly VR adventure built for younger players and first-timers.",
    players: "All ages",
    duration: "20 min",
    icon: LuRocket,
    accent: "linear-gradient(135deg, #00d4ff, #0088ff)",
  },
  {
    title: "Escape Protocol",
    tag: "Co-op VR Puzzle",
    desc: "A co-op puzzle-and-strategy session that rewards groups who communicate.",
    players: "Up to 4 players",
    duration: "30 min",
    icon: LuPuzzle,
    accent: "linear-gradient(135deg, #22c55e, #0ea5e9)",
  },
  {
    title: "Sports Arena VR",
    tag: "Competitive Mini-Games",
    desc: "Fast, competitive VR mini-games ideal for birthdays and team events.",
    players: "Up to 5 players",
    duration: "20–30 min",
    icon: LuTrophy,
    accent: "linear-gradient(135deg, #f59e0b, #ef4444)",
  },
];

const PlatformExperiencePreview: React.FC = () => {
  return (
    <section className="platform-section experience-preview-section">
      <div className="container">
        <div className="experience-preview-intro">
          <span className="platform-sub-title">See What You're Booking</span>
          <MaskText
            as="h2"
            className="platform-sec-title"
            lines={["VR & Activity Previews,", "Built Into Every Booking"]}
          />
          <Reveal direction="up" delay={0.15}>
            <p className="platform-sec-desc">
              VenueGlide's VR and activity booking pages don't stop at a time
              slot. Every session shows the customer exactly what they're
              stepping into — preview imagery, a short description, player
              counts and pricing, side by side — so they can compare
              experiences and book their VR session, escape room or arcade
              activity online with confidence, in one visit, on any device.
            </p>
          </Reveal>
        </div>

        <div className="experience-preview-grid">
          {sessions.map((session, idx) => (
            <Reveal
              key={session.title}
              direction="up"
              delay={Math.min(idx * 0.08 + 0.1, 0.4)}
              className="experience-preview-card"
            >
              <div
                className="experience-preview-thumb"
                style={{ background: session.accent }}
              >
                <Icon icon={session.icon} size={32} color="#ffffff" />
              </div>
              <span className="experience-preview-tag">{session.tag}</span>
              <h4>{session.title}</h4>
              <p>{session.desc}</p>
              <div className="experience-preview-meta">
                <span>
                  <Icon icon={LuUsers} size={13} /> {session.players}
                </span>
                <span>
                  <Icon icon={LuClock} size={13} /> {session.duration}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={0.4}>
          <p className="experience-preview-note">
            Illustrative examples — each venue's own VR games, escape rooms
            and activities are configured and previewed on their own
            VenueGlide booking page.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default PlatformExperiencePreview;
