// register plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {
    //console.log('Dom loaded');
    

    // wait until images, links, fonts, stylesheets, and js is loaded
    window.addEventListener("load", function(e) {

        // ******************************************* Anchor Links Scrolling *******************************************/
let currentScrollTween = null;

// Detect if a link's href goes to the current page
function getSamePageAnchor(link) {
    if (
        link.protocol !== window.location.protocol ||
        link.host !== window.location.host ||
        link.pathname !== window.location.pathname ||
        link.search !== window.location.search
    ) {
        return false;
    }

    return link.hash;
}

// Scroll to a given hash, preventing the default event
function scrollToHash(hash, e) {
    const elem = hash ? document.querySelector(hash) : false;
    if (elem) {
        if (e) e.preventDefault();

        // Kill any existing scroll animation before starting a new one
        if (currentScrollTween) {
            currentScrollTween.kill();
        }

        currentScrollTween = gsap.to(window, {
            scrollTo: {
                y: elem,
                offsetY: 120,
                autoKill: false // Fully disabled inside GSAP to eliminate cross-browser quirks
            },
            ease: 'power4.out',
            duration: 1.5,
            onComplete: () => {
                currentScrollTween = null;
            },
            onInterrupt: () => {
                currentScrollTween = null;
            }
        });
    }
}

// -----------------------------------------------------------------------------
// Explicit User Interrupt Handlers (Replaces GSAP's native autoKill)
// -----------------------------------------------------------------------------

// Function to cancel the tween on genuine user interaction
const cancelScrollOnInteraction = () => {
    if (currentScrollTween) {
        currentScrollTween.kill();
        currentScrollTween = null;
    }
};

// 1. Desktop: Mouse wheel scroll instantly cancels the animation (100% reliable on Firefox/Chrome/PC)
window.addEventListener('wheel', cancelScrollOnInteraction, { passive: true });

// 2. Desktop: Mouse drag on scrollbar or page cancel
window.addEventListener('mousedown', cancelScrollOnInteraction, { passive: true });

// 3. Mobile (iOS/Android): ONLY cancel if the user actively DRAGS/SWIPES their finger while scrolling
// Using 'touchmove' instead of 'touchstart' prevents tap gestures or iOS viewport resizes from killing the animation
window.addEventListener('touchmove', cancelScrollOnInteraction, { passive: true });

// -----------------------------------------------------------------------------
// Link Listeners & On-Load Trigger
// -----------------------------------------------------------------------------

document.querySelectorAll('a[href]').forEach(a => {
    a.addEventListener('click', e => {
        scrollToHash(getSamePageAnchor(a), e);
    });
});

// Scroll to the element in the URL's hash on load
scrollToHash(window.location.hash);
        
        // ***************************************************************************************************************/


        // ******************************************* Logo animations **************************************************/
        const parent = document.querySelector(".header .logo");
        const child = gsap.utils.selector(parent);
        const duration = 1;
        const ease = 'power4.out';

        // 1. Define the Enter Timeline (Scroll Down)
        function createEnterTL() {
            let tl = gsap.timeline();
            tl
            .to(parent, { y: -30, height: '80px', transformOrigin: 'left top', duration: duration, ease: ease }, 0)
            .to(child("svg"), { height: '75px', background: 'transparent', width: '100%', transformOrigin: 'left top', duration: duration, ease: ease }, 0)
            .to(child("svg #icf"), { x: '-25%', y: '-21%', scale: 2.5, duration: duration, ease: ease }, 0)
            .to(child("svg #icfl"), { x: '240%', y: '15%', scale: 2.2, transformOrigin: 'left bottom', duration: duration, ease: ease }, 0)
            .to(child("svg #leicester"), { fill: '#121826', duration: duration, ease: ease }, 0);
            return tl;
        }

        // 2. Define the Leave Timeline (Scroll Back Up)
        // Customize timing, durations, or eases independently here
        function createLeaveTL() {
            let tl = gsap.timeline({
                onComplete: () => {
                    // Remove inline style overrides when back at the top so responsive Tailwind CSS takes control
                    gsap.set([parent, child("svg #icf"), child("svg #icfl")], { clearProps: "all" });
                }
            });

            const leaveDuration = 0;
            const leaveEase = 'power4.out';

            tl
            .to(parent, { opacity: 0, duration: 0.2, ease: 'power4.in'}, 0)
            .to(parent, { y: 0, height: '', duration: leaveDuration, ease: leaveEase }, 0.2)
            .to(child("svg"), { height: '', background: '#0066ff', duration: leaveDuration}, 0.2)
            .to(child("svg #icf"), { x: '0%', y: '0%', scale: 1, duration: leaveDuration }, 0.2)
            .to(child("svg #icfl"), { x: '0%', y: '0%', scale: 1, duration: leaveDuration }, 0.2)
            .to(child("svg #leicester"), { fill: '#0066ff', duration: leaveDuration }, 0.2)
            .to(parent, { opacity: 1, duration: 0.4, ease: 'power4.out'}, 0.21)
            return tl;
        }

        // Store active timeline instances
        let currentTL = null;

        // 3. ScrollTrigger Controller
        ScrollTrigger.create({
            trigger: 'body',
            start: 'top top',
            onEnter: () => {
                // Kill existing animation to prevent state conflicts
                if (currentTL) currentTL.kill();
                // Instantiate and play the Enter Timeline
                currentTL = createEnterTL();
            },
            onLeaveBack: () => {
                // Kill existing animation mid-flight if user reverses quickly
                if (currentTL) currentTL.kill();
                // Instantiate and play the Leave Timeline
                currentTL = createLeaveTL();
            }
        });

        // ***************************************************************************************************************/

        // ****************************************** Standard Fades *****************************************************/

        //fade and move from left
        gsap.utils.toArray('.fadeUp').forEach((element) => {
            gsap.set(element, { autoAlpha: 1 });
            gsap.from(element, 
            {
                autoAlpha: 0,
                duration: 2,
                x: -50,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 90%',
                    end: 'bottom 10%',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        //fade and move from left
        gsap.utils.toArray('.fadeUpReverse').forEach((element) => {
            gsap.set(element, { autoAlpha: 1 });
            gsap.from(element, 
            {
                autoAlpha: 0,
                duration: 2,
                x: 50,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 90%',
                    end: 'bottom 10%',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        //fade and move from left
        gsap.utils.toArray('.logoFade').forEach((element) => {
            gsap.from(element, 
            {
                opacity: 0,
                duration: 2,
                x: -50,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 90%',
                    end: 'bottom 10%'
                }
            });
        });

        gsap.utils.toArray('.fadeVert').forEach((element) => {
            gsap.set(element, { autoAlpha: 1 });
            gsap.from(element, 
            {
                autoAlpha: 0,
                duration: 2,
                y: 50,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 90%',
                    end: 'bottom 10%',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        gsap.set('.animated-menu', { autoAlpha: 1 });
        gsap.from('.animated-menu', {
            autoAlpha: 0,
            y: 50,
            duration: 1,
            ease: 'power4.out',
            stagger: 0.2,
        });

        gsap.set('.social-icons a', { autoAlpha: 1 });
        gsap.from('.social-icons a', {
            autoAlpha: 0,
            y: 50,
            duration: 1,
            ease: 'power4.out',
            stagger: 0.2,
        });



        

        // split chars
        const splitChars = gsap.utils.toArray(".splitChars");
        splitChars.forEach((element) => {
            const split = SplitText.create(element, { type: "chars" });
            gsap.set(element, { autoAlpha: 1 });
            gsap.from(split.chars, {
                duration: 0.75,
                y: 50,
                autoAlpha: 0,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 90%',
                    end: 'bottom 10%',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        const splitWords = gsap.utils.toArray(".splitWords");
        splitWords.forEach((element) => {
            const split = SplitText.create(element, { type: "words" });
            gsap.set(element, { autoAlpha: 1 });
            gsap.from(split.words, {
                duration: 1,
                y: 50,
                autoAlpha: 0,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 90%',
                    end: 'bottom 10%',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        const splitLines = gsap.utils.toArray(".splitLines");
        splitLines.forEach((element) => {
            const split = SplitText.create(element, { type: "lines" });
            gsap.set(element, { autoAlpha: 1 });
            gsap.from(split.lines, {
                duration: 1.5,
                y: 50,
                autoAlpha: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 90%',
                    end: 'bottom 10%',
                    toggleActions: 'play none none reverse'
                },
                onComplete: () => {
                    split.revert(); // Restores the original unsplit HTML structure
                }
            });
        });

        gsap.utils.toArray('.fees-wrapper').forEach((parent) => {
            const children = parent.querySelectorAll('.fee');
            gsap.set(children, { autoAlpha: 1 });
            gsap.from(children, {
                autoAlpha: 0,
                y: 50,
                duration: 2,
                ease: 'power4.out',
                stagger: 0.35,
                scrollTrigger: {
                    trigger: parent,
                    start: 'top 90%',
                    end: 'bottom 10%',
                    toggleActions: 'play none none reverse'
                }
            });
        });


        gsap.utils.toArray('.promoters-wrapper').forEach((parent) => {
            const children = parent.querySelectorAll('.promoter');
            gsap.set(children, { autoAlpha: 1 });
            gsap.from(children, {
                autoAlpha: 0,
                y: 50,
                duration: 2,
                ease: 'power4.out',
                stagger: 0.35,
                scrollTrigger: {
                    trigger: parent,
                    start: 'top 90%',
                    end: 'bottom 10%',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        gsap.utils.toArray('.widgets-wrapper').forEach((parent) => {
            const children = parent.querySelectorAll('.widget');
            gsap.set(children, { autoAlpha: 1 });
            gsap.from(children, {
                autoAlpha: 0,
                y: 50,
                duration: 2,
                ease: 'power4.out',
                stagger: 0.35,
                scrollTrigger: {
                    trigger: parent,
                    start: 'top 90%',
                    end: 'bottom 10%',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        gsap.utils.toArray('.fadeUpParagraphs').forEach((parent) => {
            const children = parent.querySelectorAll('p');
            gsap.set(children, { autoAlpha: 1 });
            gsap.from(children, {
                autoAlpha: 0,
                duration: 2,
                y: 50,
                ease: 'power4.out',
                stagger: 0.5,
                scrollTrigger: {
                    trigger: parent,
                    start: 'top 90%',
                    end: 'bottom 10%',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        /*const sections = gsap.utils.toArray("section");
        const navLinks = gsap.utils.toArray(".header .navigation a");
        sections.forEach((section, index) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top 121px", // Adjust trigger points to match your design
                end: "bottom 121px",
                toggleClass: {
                    targets: navLinks[index - 1], 
                    className: "active"
                }
            });
        });*/

        const navLinks = gsap.utils.toArray(".header .navigation a");

        // Extract ONLY the final ID slug regardless of protocol, domain, path, or hash format
        const getTargetId = (link) => {
            const href = link.getAttribute("href");
            if (!href || href === "#" || href === "/") return null;

            try {
                // Parses "http://localhost:3000/#who", "/take-part", or "#who" relative to current window
                const parsedUrl = new URL(href, window.location.origin);

                // 1. If link contains a hash (e.g. "http://localhost:3000/#who" -> "who")
                if (parsedUrl.hash) {
                    return parsedUrl.hash.replace(/^#/, "").trim().toLowerCase();
                }

                // 2. If link is a path without hash (e.g. "http://localhost:3000/take-part" -> "take-part")
                if (parsedUrl.pathname) {
                    const pathSlug = parsedUrl.pathname.split("/").filter(Boolean).pop();
                    return pathSlug ? pathSlug.toLowerCase() : null;
                }
            } catch (e) {
                return null;
            }

            return null;
        };

        // Group links by their resolved ID target
        const linksByTarget = {};

        navLinks.forEach((link) => {
            const targetId = getTargetId(link);
            if (targetId) {
                if (!linksByTarget[targetId]) linksByTarget[targetId] = [];
                linksByTarget[targetId].push(link);
            }
        });

        // Create ScrollTriggers for matching IDs on current page
        Object.keys(linksByTarget).forEach((targetId) => {
            const targetElem = document.getElementById(targetId);

            if (!targetElem) {
                return;
            }

            const matchingLinks = linksByTarget[targetId];

            ScrollTrigger.create({
                trigger: targetElem,
                start: "top 30%",
                end: "bottom 30%",
                onToggle: (self) => {
                    matchingLinks.forEach((link) => {
                        if (self.isActive) {
                            link.classList.add("active");
                        } else {
                            link.classList.remove("active");
                        }
                    });
                }
            });
        });

        ScrollTrigger.refresh();


        gsap.utils.toArray('.contact-us form').forEach((parent) => {
            const children = parent.querySelectorAll('.wpcf7-form-control-wrap');
            gsap.set(children, { autoAlpha: 1 });
            gsap.from(children, {
                autoAlpha: 0,
                duration: 2,
                ease: 'power4.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: parent,
                    start: 'top 90%',
                    end: 'bottom 10%',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        
        
       console.log("window.loaded");
    }, false)
})