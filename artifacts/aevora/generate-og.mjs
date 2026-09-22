import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Read Inter fonts from local @fontsource/inter package (WOFF format)
function loadFont(weight) {
  const candidates = [
    resolve(__dirname, `../../node_modules/@fontsource/inter/files/inter-latin-${weight}-normal.woff`),
    resolve(__dirname, `node_modules/@fontsource/inter/files/inter-latin-${weight}-normal.woff`),
  ];
  for (const p of candidates) {
    try { return readFileSync(p); } catch (_) {}
  }
  throw new Error(`Could not find Inter ${weight} font`);
}

const pages = [
  {
    file: "og-home.png",
    title: "Ahmed Khaled Mahmoud",
    subtitle: "Software Engineer",
    tag: "Portfolio",
    url: "aevora.replit.app",
  },
  {
    file: "og-about.png",
    title: "About Me",
    subtitle: "Software Engineer · BFCAI",
    tag: "About",
    url: "aevora.replit.app/about",
  },
  {
    file: "og-services.png",
    title: "Services",
    subtitle: "Software · Cybersecurity · AI",
    tag: "Services",
    url: "aevora.replit.app/services",
  },
  {
    file: "og-projects.png",
    title: "Projects",
    subtitle: "Engineering · Security · Research",
    tag: "Projects",
    url: "aevora.replit.app/projects",
  },
  {
    file: "og-contact.png",
    title: "Get In Touch",
    subtitle: "Open for collaborations & opportunities",
    tag: "Contact",
    url: "aevora.replit.app/contact",
  },
];

const CYAN = "#00F5FF";
const PURPLE = "#6C3BFF";
const BG = "#070B14";
const CARD_BG = "rgba(255,255,255,0.04)";

function buildCard({ title, subtitle, tag, url }) {
  return {
    type: "div",
    props: {
      style: {
        width: 1200,
        height: 630,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: BG,
        padding: "60px 72px",
        fontFamily: "Inter",
        position: "relative",
      },
      children: [
        // Top row — brand + tag badge
        {
          type: "div",
          props: {
            style: { display: "flex", justifyContent: "space-between", alignItems: "center" },
            children: [
              // Brand mark
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          width: 48,
                          height: 48,
                          borderRadius: "50%",
                          background: `linear-gradient(135deg, ${PURPLE}, ${CYAN})`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 18,
                          fontWeight: 700,
                          color: "#fff",
                        },
                        children: "AKM",
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: { color: "rgba(255,255,255,0.55)", fontSize: 18, fontWeight: 500, letterSpacing: "0.08em" },
                        children: "AEVORA",
                      },
                    },
                  ],
                },
              },
              // Tag pill
              {
                type: "div",
                props: {
                  style: {
                    padding: "8px 22px",
                    borderRadius: 999,
                    border: `1.5px solid ${CYAN}40`,
                    background: `${CYAN}10`,
                    color: CYAN,
                    fontSize: 15,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                  },
                  children: tag.toUpperCase(),
                },
              },
            ],
          },
        },

        // Center — main text
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column", gap: 20 },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    fontSize: 72,
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  },
                  children: title,
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    fontSize: 28,
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "0.01em",
                  },
                  children: subtitle,
                },
              },
            ],
          },
        },

        // Bottom — URL + neon accent line
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column", gap: 20 },
            children: [
              // Divider line
              {
                type: "div",
                props: {
                  style: {
                    height: 2,
                    background: `linear-gradient(90deg, ${CYAN}, ${PURPLE}, transparent)`,
                    borderRadius: 999,
                  },
                },
              },
              // URL row
              {
                type: "div",
                props: {
                  style: { display: "flex", alignItems: "center", gap: 10 },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: CYAN,
                        },
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: { color: "rgba(255,255,255,0.4)", fontSize: 18 },
                        children: url,
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
}

async function main() {
  console.log("Loading fonts from local packages...");
  const interRegular = loadFont(400);
  const interBold = loadFont(700);

  const fonts = [
    { name: "Inter", data: interRegular, weight: 400, style: "normal" },
    { name: "Inter", data: interBold, weight: 700, style: "normal" },
  ];

  for (const page of pages) {
    console.log(`Generating ${page.file}...`);
    const svg = await satori(buildCard(page), {
      width: 1200,
      height: 630,
      fonts,
    });

    const resvg = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } });
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    writeFileSync(join(__dirname, "public", page.file), pngBuffer);
    console.log(`  ✓ public/${page.file} (${Math.round(pngBuffer.length / 1024)}kb)`);
  }

  console.log("Done! All OG images generated.");
}

main().catch(console.error);
