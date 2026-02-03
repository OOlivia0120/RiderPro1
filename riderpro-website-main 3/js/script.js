// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Feature Modal Functionality
  const featureCards = document.querySelectorAll(".feature-card");
  const featureModal = document.getElementById("featureModal");
  const featureModalTitle = document.getElementById("featureModalTitle");
  const featureModalImage = document.getElementById("featureModalImage");
  const featureModalDescription = document.getElementById("featureModalDescription");
  const featureModalClose = document.querySelector(".feature-modal-close");

  // Feature data
  const featureData = {
    scenario: {
      title: "Scenario-based Training",
      image: "image/scenario-training.png",
      description: "This module allows riders to practice real-world delivery challenges in a risk-free environment. Through interactive simulations—such as difficult addresses, frustrated customers, spilled meals, or heavy traffic—riders are asked to make decisions and see the consequences instantly. By repeatedly experiencing high-frequency scenarios, new riders reduce early mistakes, and low-rated riders can quickly correct problematic behaviors. The result is stronger problem-solving skills, better consistency, and fewer service failures during real deliveries."
    },
    "ai-feedback": {
      title: "AI Voice Feedback",
      image: "image/ai-voice-feedback.png",
      description: "This feature focuses on improving riders' communication skills. As riders practice speaking, the AI analyzes their tone, pacing, clarity, and word choice, offering immediate feedback to prevent issues like sounding impatient, indifferent, or overly blunt. It also provides model examples on how to politely explain delays, confirm addresses, or de-escalate complaints. The goal is to help riders communicate more professionally and build trust with customers, reducing negative reviews caused by poor interactions."
    },
    gamification: {
      title: "Gamified Motivation System",
      image: "image/performance.JPG",
      description: "This module uses game mechanics to make training engaging and motivating. Riders earn points, badges, streak bonuses, and level-ups by completing daily exercises, maintaining high service quality, or improving their ratings. These rewards turn continuous learning into a fun challenge rather than an obligation. Over time, this system builds a culture of self-driven improvement and significantly increases training participation rates."
    },
    performance: {
      title: "Performance Tracking & Personalised Learning",
      image: "image/gamification.png",
      description: "This module acts as the platform's intelligence engine. It continuously monitors riders' ratings, complaint patterns, mistake types, and training performance to identify individual weaknesses. Based on the data, the system automatically recommends tailored courses—whether it's communication, address verification, customer service, or handling unexpected issues. This personalized, data-driven approach ensures every rider receives the right training at the right time, improving both individual performance and overall service quality."
    }
  };

  // Open modal function
  function openFeatureModal(featureKey) {
    const feature = featureData[featureKey];
    if (feature && featureModal && featureModalTitle && featureModalImage && featureModalDescription) {
      featureModalTitle.textContent = feature.title;
      featureModalImage.src = feature.image;
      featureModalImage.alt = feature.title;
      featureModalDescription.textContent = feature.description;
      featureModal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  // Close modal function
  function closeFeatureModal() {
    if (featureModal) {
      featureModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  // Add click event to each feature card
  if (featureCards.length > 0) {
    featureCards.forEach((card) => {
      card.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        const featureKey = card.getAttribute("data-feature");
        openFeatureModal(featureKey);
      });
    });
  }

  // Close modal when clicking the close button
  if (featureModalClose) {
    featureModalClose.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeFeatureModal();
    });
  }

  // Close modal when clicking outside the modal content
  if (featureModal) {
    featureModal.addEventListener("click", function(e) {
      if (e.target === featureModal) {
        closeFeatureModal();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && featureModal && featureModal.classList.contains("active")) {
      closeFeatureModal();
    }
  });
});