// JavaScript for Champtron Systems LLC Website

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  const mobileMenu = document.getElementById("mobile-menu")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")
    })
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]')
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const headerHeight = 80 // Account for fixed header
        const targetPosition = targetSection.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })

        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden")
        }
      }
    })
  })

  // Contact form handling
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form data
      const formData = new FormData(this)
      const name = formData.get("name")
      const email = formData.get("email")
      const company = formData.get("company")
      const message = formData.get("message")

      // Basic validation
      if (!name || !email || !message) {
        alert("Please fill in all required fields.")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.")
        return
      }

      // Show loading state
      const submitBtn = this.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent
      submitBtn.textContent = "Sending..."
      submitBtn.disabled = true

      // Simulate form submission (replace with actual form handling)
      setTimeout(() => {
        // Reset form
        this.reset()

        // Show success message
        showSuccessMessage("Thank you for your message! We will get back to you soon.")

        // Reset button
        submitBtn.textContent = originalText
        submitBtn.disabled = false
      }, 2000)
    })
  }

  // Infrastructure graphic animations
  initInfrastructureAnimations()

  // Header scroll effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header")
    if (window.scrollY > 100) {
      header.classList.add("shadow-lg")
    } else {
      header.classList.remove("shadow-lg")
    }
  })
})

// Show success message
function showSuccessMessage(message) {
  // Remove existing success message
  const existingMessage = document.querySelector(".success-message")
  if (existingMessage) {
    existingMessage.remove()
  }

  // Create new success message
  const successDiv = document.createElement("div")
  successDiv.className = "success-message show"
  successDiv.textContent = message

  // Add to contact form
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.appendChild(successDiv)

    // Remove after 5 seconds
    setTimeout(() => {
      successDiv.remove()
    }, 5000)
  }
}

// Infrastructure graphic animations
function initInfrastructureAnimations() {
  const graphic = document.getElementById("infrastructure-graphic")
  if (!graphic) return

  // Add connection lines animation
  const systemNodes = graphic.querySelectorAll(".system-node")
  systemNodes.forEach((node, index) => {
    // Add staggered animation delay
    node.style.animationDelay = `${index * 0.5}s`
  })

  // Add data flow animation
  setInterval(() => {
    const dataFlowIndicators = graphic.querySelectorAll(".animate-pulse")
    dataFlowIndicators.forEach((indicator, index) => {
      setTimeout(() => {
        indicator.style.opacity = "1"
        setTimeout(() => {
          indicator.style.opacity = "0.5"
        }, 200)
      }, index * 100)
    })
  }, 3000)
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in")
    }
  })
}, observerOptions)

// Observe service cards for animation
document.addEventListener("DOMContentLoaded", () => {
  const serviceCards = document.querySelectorAll("#services .bg-white")
  serviceCards.forEach((card) => {
    observer.observe(card)
  })
})

// Add fade-in animation class
const style = document.createElement("style")
style.textContent = `
    .animate-fade-in {
        animation: fadeIn 0.6s ease-out forwards;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`
document.head.appendChild(style)
