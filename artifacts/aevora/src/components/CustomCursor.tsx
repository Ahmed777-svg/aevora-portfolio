import { useEffect, useRef } from "react";

const CYAN = "#00F5FF";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let hovered = false;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot follows instantly via direct style
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

      // Detect interactive element
      const target = e.target as HTMLElement;
      hovered = !!target.closest("a, button, [role='button'], input, textarea, select, label, [data-testid]");
    };

    const onDown = () => {
      dot.style.width = "5px";
      dot.style.height = "5px";
    };

    const onUp = () => {
      dot.style.width = "7px";
      dot.style.height = "7px";
    };

    // Lerp loop for the ring
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);

      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

      if (hovered) {
        ring.style.width = "42px";
        ring.style.height = "42px";
        ring.style.opacity = "0.8";
        ring.style.boxShadow = `0 0 14px ${CYAN}, 0 0 28px rgba(0,245,255,0.4)`;
        ring.style.borderColor = CYAN;
      } else {
        ring.style.width = "30px";
        ring.style.height = "30px";
        ring.style.opacity = "0.45";
        ring.style.boxShadow = `0 0 8px rgba(0,245,255,0.5)`;
        ring.style.borderColor = CYAN;
      }

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Trailing ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          border: `1.5px solid ${CYAN}`,
          boxShadow: `0 0 8px rgba(0,245,255,0.5)`,
          opacity: 0.45,
          pointerEvents: "none",
          zIndex: 9998,
          willChange: "transform, width, height",
          transition: "width 0.18s ease, height 0.18s ease, opacity 0.18s ease, box-shadow 0.18s ease",
        }}
      />

      {/* Core dot — follows instantly */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          background: CYAN,
          boxShadow: `0 0 8px ${CYAN}, 0 0 16px rgba(0,245,255,0.6)`,
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
          transition: "width 0.1s ease, height 0.1s ease",
        }}
      />
    </>
  );
}
