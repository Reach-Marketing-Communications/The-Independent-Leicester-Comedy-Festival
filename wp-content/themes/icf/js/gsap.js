// register plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {
    //console.log('Dom loaded');
    

    // wait until images, links, fonts, stylesheets, and js is loaded
    window.addEventListener("load", function(e) {

        // ******************************************* Anchor Links Scrolling *******************************************/
        // Detect if a link's href goes to the current page
        function getSamePageAnchor (link) {
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

        // Scroll to a given hash, preventing the event given if there is one
        function scrollToHash(hash, e) {
            const elem = hash ? document.querySelector(hash) : false;
            if(elem) {
                if(e) e.preventDefault();
                gsap.to(window, {
                    scrollTo: {
                        y: elem,
                        offsetY: 120,
                        autoKill: true
                    },
                    ease: 'power4.out',
                    duration: 1.5
                });
            }
        }

        // If a link's href is within the current page, scroll to it instead
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
                    end: 'bottom 10%',
                    toggleActions: 'play none none reverse'
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
        const splitElements = gsap.utils.toArray(".splitChars");
        splitElements.forEach((element) => {
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

        const sections = gsap.utils.toArray("section");
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
        });


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