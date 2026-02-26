'use client'

import { useEffect, useRef } from "react";

export function BallFollower() {
  const ballRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationId: number;
    const animate = () => {
      // Easing: ajuste o fator para mais/menos suavidade
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;
      if (ballRef.current) {
        ballRef.current.style.left = `${pos.current.x - 10}px`;
        ballRef.current.style.top = `${pos.current.y - 10}px`;
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <span 
      className="text-xl"
      ref={ballRef}
      style={{ 
        position: 'fixed', 
        left: 0,
        top: 0,
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        pointerEvents: "none",
        transition: "left 0.05s, top 0.05s"
      }}
    >👽</span>
  )
}