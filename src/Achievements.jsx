import { useState } from "react";

function Achievements({ goHome, isMobile }) {

  // ✅ SWIPE LOGIC
  const [touchStartY, setTouchStartY] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;

    if (touchEndY - touchStartY > 80) {
      goHome();
    }
  };

  return (
    <div
      onClick={!isMobile ? goHome : undefined}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "black",
        zIndex: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <img
          src="/cert.png"
          alt="certificate"
          style={{
            maxWidth: "90vw",
            maxHeight: "85vh",
            borderRadius: "10px",
            boxShadow: "0 0 20px rgba(255,255,255,0.2)"
          }}
        />
      </div>
    </div>
  );
}

export default Achievements;