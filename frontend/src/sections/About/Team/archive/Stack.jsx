import { useState, useRef } from "react";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Matt Watson",
    title: "CEO\nFOUNDER",
    description: "Matt co-founded the company with a vision to transform the industry. He brings 15+ years of entrepreneurial leadership.",
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    id: 2,
    name: "Atul Kakkar",
    title: "CHIEF\nPRODUCT\nOFFICER",
    description: "Atul leads product strategy and development, bringing deep expertise in building customer-centric products at scale.",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    id: 3,
    name: "Wallis Finger",
    title: "GENERAL\nCOUNSEL",
    description: "Wallis oversees all legal and compliance matters, ensuring the company operates with integrity and sound governance.",
    image: "https://i.pravatar.cc/300?img=5",
  },
  {
    id: 4,
    name: "Paul Meister",
    title: "CHIEF\nFINANCIAL\nOFFICER",
    description: "Paul drives the company's financial strategy, investor relations, and operational efficiency with precision.",
    image: "https://i.pravatar.cc/300?img=15",
  },
  {
    id: 1,
    name: "Matt Watson",
    title: "CEO\nFOUNDER",
    description: "Matt co-founded the company with a vision to transform the industry. He brings 15+ years of entrepreneurial leadership.",
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    id: 2,
    name: "Atul Kakkar",
    title: "CHIEF\nPRODUCT\nOFFICER",
    description: "Atul leads product strategy and development, bringing deep expertise in building customer-centric products at scale.",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    id: 3,
    name: "Wallis Finger",
    title: "GENERAL\nCOUNSEL",
    description: "Wallis oversees all legal and compliance matters, ensuring the company operates with integrity and sound governance.",
    image: "https://i.pravatar.cc/300?img=5",
  },
  {
    id: 4,
    name: "Paul Meister",
    title: "CHIEF\nFINANCIAL\nOFFICER",
    description: "Paul drives the company's financial strategy, investor relations, and operational efficiency with precision.",
    image: "https://i.pravatar.cc/300?img=15",
  },
  {
    id: 1,
    name: "Matt Watson",
    title: "CEO\nFOUNDER",
    description: "Matt co-founded the company with a vision to transform the industry. He brings 15+ years of entrepreneurial leadership.",
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    id: 2,
    name: "Atul Kakkar",
    title: "CHIEF\nPRODUCT\nOFFICER",
    description: "Atul leads product strategy and development, bringing deep expertise in building customer-centric products at scale.",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    id: 3,
    name: "Wallis Finger",
    title: "GENERAL\nCOUNSEL",
    description: "Wallis oversees all legal and compliance matters, ensuring the company operates with integrity and sound governance.",
    image: "https://i.pravatar.cc/300?img=5",
  },
  {
    id: 4,
    name: "Paul Meister",
    title: "CHIEF\nFINANCIAL\nOFFICER",
    description: "Paul drives the company's financial strategy, investor relations, and operational efficiency with precision.",
    image: "https://i.pravatar.cc/300?img=15",
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');


  .lt-section {
    background-color: #1a5f6a;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 64px 48px;
    font-family: 'DM Sans', sans-serif;
  }

  .lt-inner {
    max-width: 1100px;
    width: 100%;
  }

  .lt-eyebrow {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 18px;
  }

  .lt-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #7ed8cb;
  }

  .lt-eyebrow-text {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #a8ddd6;
  }

  .lt-heading {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(36px, 5vw, 56px);
    color: #ffffff;
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 48px;
  }

  .lt-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  @media (max-width: 900px) {
    .lt-cards { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 540px) {
    .lt-cards { grid-template-columns: 1fr; }
    .lt-section { padding: 48px 24px; }
  }

  .lt-card {
    background: #f5efe0;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    min-height: 340px;
  }

  .lt-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 48px rgba(0,0,0,0.25);
  }

  .lt-card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px 18px 0;
    position: relative;
    z-index: 2;
  }

  .lt-name {
    font-family: 'DM Serif Display', serif;
    font-size: 18px;
    font-weight: 400;
    color: #1a3a3a;
    line-height: 1.2;
  }

  .lt-title {
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 0.08em;
    color: #7a9090;
    text-align: right;
    white-space: pre-line;
    line-height: 1.4;
    padding-top: 2px;
  }

  .lt-image-wrap {
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    margin-top: 8px;
  }

  .lt-image {
    width: 100%;
    height: 240px;
    object-fit: cover;
    object-position: top center;
    display: block;
  }

  .lt-tooltip {
    position: absolute;
    inset: 0;
    background: rgba(26, 95, 106, 0.93);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 28px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 10;
  }

  .lt-card:hover .lt-tooltip {
    opacity: 1;
  }

  .lt-tooltip-text {
    font-size: 14px;
    line-height: 1.65;
    color: #e0f4f2;
    text-align: center;
    font-weight: 300;
  }

  .lt-divider {
    border: none;
    border-top: 1px solid rgba(255,255,255,0.15);
    margin-top: 48px;
  }
`;

export default function LeadershipTeam() {
  return (
    <>
      <style>{styles}</style>
      <section className="lt-section">
        <div className="lt-inner">
          <div className="lt-eyebrow">
            <span className="lt-dot" />
            <span className="lt-eyebrow-text">Team</span>
          </div>
          <h2 className="lt-heading">Meet our leadership team</h2>
          <div className="lt-cards">
            {TEAM_MEMBERS.map((member) => (
              <div className="lt-card" key={member.id}>
                {/* Hover overlay */}
                <div className="lt-tooltip">
                  <p className="lt-tooltip-text">{member.description}</p>
                </div>

                <div className="lt-card-header">
                  <div className="lt-name">{member.name}</div>
                  <div className="lt-title">{member.title}</div>
                </div>

                <div className="lt-image-wrap">
                  <img
                    className="lt-image"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
              </div>
            ))}
          </div>
          <hr className="lt-divider" />
        </div>
      </section>
    </>
  );
}