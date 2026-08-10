"use client";

import { useEffect } from "react";

const SELECTOR = ".section, .case-block, .project-feature";

export function RevealOnScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(SELECTOR)
    );

    if (reduceMotion) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    elements.forEach((el, i) => {
      el.classList.add("motion-ready");
      el.style.transitionDelay = `${i * 40}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.16 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
