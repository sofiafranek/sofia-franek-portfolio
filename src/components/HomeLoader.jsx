"use client";

import { useEffect, useState } from "react";

export default function HomeLoader() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const mountTimer = window.setTimeout(() => {
      setMounted(true);

      const hasSeenLoader = window.sessionStorage.getItem(
        "portfolio-loader-seen"
      );

      if (!hasSeenLoader) {
        setVisible(true);
      }
    }, 0);

    return () => window.clearTimeout(mountTimer);
  }, []);

  useEffect(() => {
    if (!mounted || !visible) return;

    const leaveTimer = window.setTimeout(() => {
      setLeaving(true);
    }, 1200);

    const removeTimer = window.setTimeout(() => {
      window.sessionStorage.setItem(
        "portfolio-loader-seen",
        "true"
      );

      setVisible(false);
    }, 1800);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, [mounted, visible]);

  if (!mounted || !visible) return null;

  return (
    <div
      className={`home-loader ${
        leaving ? "home-loader-leaving" : ""
      }`}
      aria-hidden="true"
    >
      <div className="home-loader-line">
        <span />
      </div>
    </div>
  );
}