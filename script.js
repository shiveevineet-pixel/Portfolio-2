/*==============================================================

PREET RAJPUT PORTFOLIO

SCRIPT.JS

PART 1

==============================================================*/



/*==============================================================

REGISTER GSAP

==============================================================*/

if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

/*==============================================================

LENIS SMOOTH SCROLL

==============================================================*/

let lenis = null;

if (typeof Lenis !== "undefined") {
    lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        infinite: false
    });

    if (typeof ScrollTrigger !== "undefined") {
        lenis.on("scroll", ScrollTrigger.update);
    }

    if (typeof gsap !== "undefined") {
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
    }
}











/*==============================================================

LOADER

==============================================================*/

const loader = document.querySelector("#loader");

const loaderBar = document.querySelector(".loader-line span");

const loaderPercent = document.querySelector(".loader-percent");



let progress = 0;



const loading = setInterval(() => {

    progress++;

    loaderBar.style.width = progress + "%";

    loaderPercent.innerHTML = progress + "%";

    if (progress >= 100) {

        clearInterval(loading);

        gsap.to(loader, {

            opacity: 0,

            duration: 1,

            delay: .3,

            pointerEvents: "none",

            onComplete: () => {

                loader.remove();

                heroAnimation();

            }

        });

    }

}, 18);



/*==============================================================

HERO INTRO

==============================================================*/

function heroAnimation() {

    const tl = gsap.timeline();



    tl.from(".navbar", {

        y: -100,

        opacity: 0,

        duration: 1,

        ease: "power4.out"

    })

        .from(".hero-intro", {

            opacity: 0,

            y: 80,

            duration: .8

        }, "-=.5")

        .from(".hero-title span", {

            opacity: 0,

            y: 180,

            stagger: .15,

            duration: 1.1,

            ease: "power4.out"

        }, "-=.4")

        .from(".hero-role", {

            opacity: 0,

            x: -80,

            duration: .8

        }, "-=.6")

        .from(".hero-description", {

            opacity: 0,

            y: 60,

            duration: .9

        }, "-=.5")

        .from(".hero-buttons a", {

            opacity: 0,

            y: 50,

            stagger: .15,

            duration: .7

        }, "-=.5")

        .from(".hero-circle", {

            scale: .5,

            opacity: 0,

            rotate: 90,

            duration: 1.4,

            ease: "back.out(1.7)"

        }, "-=1");

}



/*==============================================================

SCROLL PROGRESS

==============================================================*/

const progressBar = document.querySelector("#progressBar");



window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const height =

        document.documentElement.scrollHeight -

        window.innerHeight;

    const percent =

        (scrollTop / height) * 100;

    progressBar.style.width = percent + "%";

});



/*==============================================================

NAVBAR

==============================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/*==============================================================

SCROLL REVEAL

==============================================================*/

gsap.utils.toArray("section").forEach(section => {

    gsap.from(section, {

        opacity: 0,

        y: 120,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {

            trigger: section,

            start: "top 80%"

        }

    });

});



/*==============================================================

ABOUT

==============================================================*/

gsap.from(".about-content h3", {

    scrollTrigger: {

        trigger: "#about",

        start: "top 70%"

    },

    opacity: 0,

    y: 100,

    duration: 1

});



gsap.from(".about-content p", {

    scrollTrigger: {

        trigger: "#about",

        start: "top 70%"

    },

    opacity: 0,

    y: 70,

    stagger: .2,

    duration: 1

});



gsap.from(".stat-box", {

    scrollTrigger: {

        trigger: ".about-stats",

        start: "top 80%"

    },

    opacity: 0,

    y: 80,

    stagger: .2,

    duration: .8

});



/*==============================================================

SKILLS

==============================================================*/

gsap.from(".skill-card", {

    scrollTrigger: {

        trigger: "#skills",

        start: "top 70%"

    },

    opacity: 0,

    y: 100,

    stagger: .12,

    duration: 1

});



/*==============================================================

SERVICES

==============================================================*/

gsap.from(".service-card", {

    scrollTrigger: {

        trigger: "#services",

        start: "top 75%"

    },

    opacity: 0,

    scale: .8,

    stagger: .18,

    duration: 1

});
/*==============================================================

THREE JS ENGINE

PART 2

==============================================================*/

const canvas = document.querySelector("#webgl");

const scene = new THREE.Scene();



/*==============================================================

SIZES

==============================================================*/

const sizes = {

    width: window.innerWidth,

    height: window.innerHeight

};



/*==============================================================

CAMERA

==============================================================*/

const camera = new THREE.PerspectiveCamera(

    60,

    sizes.width / sizes.height,

    0.1,

    1000

);

camera.position.set(0, 0, 8);

scene.add(camera);



/*==============================================================

RENDERER

==============================================================*/

const renderer = new THREE.WebGLRenderer({

    canvas: canvas,

    alpha: true,

    antialias: true

});

renderer.setSize(sizes.width, sizes.height);

renderer.setPixelRatio(

    Math.min(window.devicePixelRatio, 2)

);



/*==============================================================

LIGHTS

==============================================================*/

const ambientLight = new THREE.AmbientLight(

    0xffffff,

    1.2

);

scene.add(ambientLight);



const pointLight = new THREE.PointLight(

    0xffffff,

    4,

    100

);

pointLight.position.set(

    6,

    6,

    6

);

scene.add(pointLight);



const pointLight2 = new THREE.PointLight(

    0xffffff,

    2,

    100

);

pointLight2.position.set(

    -6,

    -4,

    4

);

scene.add(pointLight2);



/*==============================================================

MAIN GEOMETRY

==============================================================*/

const geometry = new THREE.IcosahedronGeometry(2, 1);

const material = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    wireframe: true,
    transparent: true,
    opacity: 0.18,
    metalness: 1,
    roughness: 0.1
});

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

/*==============================================================

INNER SPHERE

==============================================================*/

const innerGeometry = new THREE.IcosahedronGeometry(1, 4);

const innerMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.06
});

const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial);
scene.add(innerSphere);



/*==============================================================

PARTICLES

==============================================================*/

const particleCount = 3500;



const particleGeometry =

    new THREE.BufferGeometry();



const positions =

    new Float32Array(

        particleCount * 3

    );



for (let i = 0; i < particleCount * 3; i++) {

    positions[i] = (Math.random() - .5) * 50;

}



particleGeometry.setAttribute(

    "position",

    new THREE.BufferAttribute(

        positions,

        3

    )

);



const particleMaterial =

    new THREE.PointsMaterial({

        color: 0xffffff,

        size: .02,

        transparent: true,

        opacity: .8

    });



const particles =

    new THREE.Points(

        particleGeometry,

        particleMaterial

    );



scene.add(particles);



/*==============================================================

MOUSE

==============================================================*/

const mouse = {

    x: 0,

    y: 0

};



window.addEventListener(

    "mousemove",

    (event) => {

        mouse.x =

            (event.clientX /

                window.innerWidth) - 0.5;

        mouse.y =

            (event.clientY /

                window.innerHeight) - 0.5;

    }

);



/*==============================================================

RESIZE

==============================================================*/

window.addEventListener(

    "resize",

    () => {

        sizes.width =

            window.innerWidth;

        sizes.height =

            window.innerHeight;



        camera.aspect =

            sizes.width /

            sizes.height;

        camera.updateProjectionMatrix();



        renderer.setSize(

            sizes.width,

            sizes.height

        );



        renderer.setPixelRatio(

            Math.min(

                window.devicePixelRatio,

                2

            )

        );

    }

);



/*==============================================================

CLOCK

==============================================================*/

const clock =

    new THREE.Clock();
/*==============================================================

ANIMATION LOOP

==============================================================*/

function animate() {

    const elapsed = clock.getElapsedTime();

    /*==========================
      MAIN SPHERE
    ==========================*/

    sphere.rotation.x += 0.0025;
    sphere.rotation.y += 0.0035;

    sphere.position.y =
        Math.sin(elapsed * 0.8) * 0.25;

    sphere.position.x =
        Math.cos(elapsed * 0.5) * 0.15;

    /*==========================
      INNER SPHERE
    ==========================*/

    innerSphere.rotation.x -= 0.002;
    innerSphere.rotation.y -= 0.004;

    innerSphere.position.y =
        Math.cos(elapsed * 1.2) * 0.15;

    /*==========================
      PARTICLES
    ==========================*/

    particles.rotation.y += 0.00035;
    particles.rotation.x += 0.00015;

    /*==========================
      CAMERA PARALLAX
    ==========================*/

    camera.position.x +=
        ((mouse.x * 2) - camera.position.x) * 0.04;

    camera.position.y +=
        ((-mouse.y * 2) - camera.position.y) * 0.04;

    camera.lookAt(scene.position);

    /*==========================
      LIGHT MOVEMENT
    ==========================*/

    pointLight.position.x =
        Math.sin(elapsed) * 7;

    pointLight.position.z =
        Math.cos(elapsed) * 7;

    pointLight2.position.x =
        Math.cos(elapsed * 0.8) * -7;

    pointLight2.position.y =
        Math.sin(elapsed * 0.6) * 5;

    renderer.render(scene, camera);

    requestAnimationFrame(animate);

}

animate();



/*==============================================================

SCROLL ROTATION

==============================================================*/

if (typeof lenis !== "undefined" && lenis) {
    lenis.on("scroll", (e) => {
        if (sphere) {
            sphere.rotation.z = e.scroll * 0.0005;
        }
    });
}



/*==============================================================

MAGNETIC BUTTONS

==============================================================*/

document.querySelectorAll(

    ".primary-btn,.secondary-btn,.resume-btn"

).forEach(button => {

    button.addEventListener(

        "mousemove",

        e => {

            const rect = button.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const moveX = (x - rect.width / 2) * 0.25;

            const moveY = (y - rect.height / 2) * 0.25;

            gsap.to(button, {

                x: moveX,

                y: moveY,

                duration: .35

            });

        }

    );

    button.addEventListener(

        "mouseleave",

        () => {

            gsap.to(button, {

                x: 0,

                y: 0,

                duration: .4,

                ease: "power3.out"

            });

        }

    );

});



/*==============================================================

COUNTERS

==============================================================*/

document.querySelectorAll("[data-count]").forEach(counter => {

    ScrollTrigger.create({

        trigger: counter,

        start: "top 85%",

        once: true,

        onEnter: () => {

            const target = +counter.dataset.count;

            let current = 0;

            const step = Math.max(1, Math.ceil(target / 80));

            const timer = setInterval(() => {

                current += step;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.textContent = current;

            }, 20);

        }

    });

});



/*==============================================================

VANILLA TILT

==============================================================*/

if (typeof VanillaTilt !== "undefined") {
    VanillaTilt.init(
        document.querySelectorAll(
            ".project-card,.skill-card,.service-card"
        ),
        {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.18,
            scale: 1.02
        }
    );
}
/*==============================================================

PART 4

ADVANCED INTERACTIONS

==============================================================*/



/*==============================================================

SPLIT TYPE TEXT

==============================================================*/

if (typeof SplitType !== "undefined") {
    const splitTitles = document.querySelectorAll(
        ".section-header h2"
    );

    splitTitles.forEach(title => {
        const split = new SplitType(title, {
            types: "chars"
        });

        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%"
            },
            opacity: 0,
            y: 120,
            rotateX: 90,
            stagger: .02,
            duration: .8,
            ease: "power4.out"
        });
    });
}







/*==============================================================

SPOTLIGHT

==============================================================*/

const spotlight = document.createElement("div");

spotlight.className = "mouse-light";

document.body.appendChild(spotlight);



window.addEventListener(

    "mousemove",

    e => {

        gsap.to(spotlight, {

            left: e.clientX,

            top: e.clientY,

            duration: .2,

            ease: "power2.out"

        });

    }

);



/*==============================================================

SPOTLIGHT STYLE

==============================================================*/

spotlight.style.position = "fixed";

spotlight.style.width = "420px";

spotlight.style.height = "420px";

spotlight.style.borderRadius = "50%";

spotlight.style.pointerEvents = "none";

spotlight.style.zIndex = "0";

spotlight.style.filter = "blur(130px)";

spotlight.style.opacity = ".08";

spotlight.style.background = "white";

spotlight.style.transform = "translate(-50%,-50%)";



/*==============================================================

MARQUEE SPEED

==============================================================*/

const marquee =

    document.querySelector(".marquee-track");



let marqueeSpeed = 1;



window.addEventListener(

    "wheel",

    () => {

        marqueeSpeed = 3;



        clearTimeout(

            window.marqueeTimeout

        );



        window.marqueeTimeout =

            setTimeout(() => {

                marqueeSpeed = 1;

            }, 250);

    }

);







/*==============================================================

FLOATING SHAPES

==============================================================*/

document.querySelectorAll(

    ".background-gradient"

).forEach((blob, index) => {

    gsap.to(blob, {

        x: 80,

        y: 50,

        repeat: -1,

        yoyo: true,

        duration: 8 + index * 2,

        ease: "sine.inOut"

    });

});



/*==============================================================

PARALLAX

==============================================================*/

window.addEventListener(

    "mousemove",

    e => {

        const x =

            (e.clientX / window.innerWidth - .5);



        const y =

            (e.clientY / window.innerHeight - .5);



        document.querySelectorAll(

            ".image-frame,.hero-circle"

        ).forEach(item => {

            gsap.to(item, {

                x: x * 25,

                y: y * 25,

                duration: 1.2,

                ease: "power3.out"

            });

        });

    });



/*==============================================================

IMAGE SHINE

==============================================================*/

document.querySelectorAll(

    ".project-image"

).forEach(img => {

    img.addEventListener(

        "mouseenter",

        () => {

            gsap.to(img, {

                scale: 1.08,

                duration: .5

            });

        }

    );



    img.addEventListener(

        "mouseleave",

        () => {

            gsap.to(img, {

                scale: 1,

                duration: .6

            });

        }

    );

});



/*==============================================================

RANDOM GLOW

==============================================================*/

setInterval(() => {

    gsap.to(

        ".circle-center",

        {

            boxShadow:

                `0 0 ${40 + Math.random() * 70

                }px rgba(255,255,255,.18)`,

            duration: 2

        }

    );

}, 2200);
/*==============================================================

PART 5

NAVIGATION • FORM • UTILITIES

==============================================================*/

/*==============================================================

MOBILE MENU

==============================================================*/

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

        menuBtn.classList.toggle("active");

    });

    document.querySelectorAll(".mobile-menu a").forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            menuBtn.classList.remove("active");

        });

    });

}

/*==============================================================

SMOOTH NAVIGATION

==============================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", e => {

        const target = document.querySelector(link.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        if (lenis) {
            lenis.scrollTo(target, {
                offset: -60,
                duration: 1.4
            });
        } else {
            target.scrollIntoView({ behavior: "smooth" });
        }

    });

});

/*==============================================================

ACTIVE NAV LINK

==============================================================*/

const navTargetIds = ["hero", "about", "skills", "services", "projects", "contact"];

const targetSections = Array.from(document.querySelectorAll("section")).filter(s => navTargetIds.includes(s.id));

window.addEventListener("scroll", () => {

    let current = "";

    targetSections.forEach(section => {

        const top = section.offsetTop - 180;

        if (window.scrollY >= top) {

            current = section.id;

        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==============================================================

CONTACT FORM

==============================================================*/

const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", async e => {
        e.preventDefault();

        const button = form.querySelector("button");
        const originalText = button.innerHTML;
        button.disabled = true;
        button.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';

        try {
            const formData = new FormData(form);
            const response = await fetch("https://formspree.io/f/mbdnvyjj", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                button.innerHTML = "Message Sent ✓";
                if (typeof gsap !== "undefined") {
                    gsap.fromTo(button,
                        { scale: 0.9 },
                        { scale: 1, duration: 0.5 }
                    );
                }
                form.reset();
            } else {
                button.innerHTML = "Error Sending!";
            }
        } catch (err) {
            button.innerHTML = "Error Sending!";
        }

        setTimeout(() => {
            button.disabled = false;
            button.innerHTML = originalText;
        }, 3000);
    });
}

/*==============================================================

SCROLL DIRECTION

==============================================================*/

let lastScroll = 0;
let headerHidden = false;

window.addEventListener("scroll", () => {

    const current = window.scrollY;

    if (current > lastScroll && current > 150) {

        if (!headerHidden) {
            headerHidden = true;
            gsap.to("header", {
                y: -100,
                duration: .35,
                overwrite: "auto"
            });
        }

    } else {

        if (headerHidden) {
            headerHidden = false;
            gsap.to("header", {
                y: 0,
                duration: .35,
                overwrite: "auto"
            });
        }

    }

    lastScroll = current;

});

/*==============================================================

KEYBOARD SHORTCUTS

==============================================================*/

window.addEventListener("keydown", e => {

    if (e.key === "Home") {
        if (lenis) lenis.scrollTo(0);
        else window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (e.key === "End") {
        if (lenis) lenis.scrollTo(document.body.scrollHeight);
        else window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }

});

/*==============================================================

FPS FRIENDLY RESIZE

==============================================================*/

let resizeTimeout;

window.addEventListener("resize", () => {

    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {

        ScrollTrigger.refresh();

    }, 250);

});

/*==============================================================

PAGE VISIBILITY

==============================================================*/

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        gsap.globalTimeline.pause();

    } else {

        gsap.globalTimeline.resume();

    }

});
/*==============================================================

PART 6

FINAL INITIALIZATION
PERFORMANCE
EASTER EGGS

==============================================================*/


/*==============================================================

FPS MONITOR

==============================================================*/

let fps = 0;
let lastFrame = performance.now();

function updateFPS() {

    const now = performance.now();

    fps = Math.round(1000 / (now - lastFrame));

    lastFrame = now;

    requestAnimationFrame(updateFPS);

}

updateFPS();



/*==============================================================

IDLE CAMERA

==============================================================*/

let idle = true;

let idleTimeout;

window.addEventListener("mousemove", () => {

    idle = false;

    clearTimeout(idleTimeout);

    idleTimeout = setTimeout(() => {

        idle = true;

    }, 3000);

});



gsap.ticker.add(() => {

    if (idle) {

        camera.position.x +=

            (Math.sin(Date.now() * 0.0002) * 0.8 - camera.position.x) * 0.01;

        camera.position.y +=

            (Math.cos(Date.now() * 0.00025) * 0.5 - camera.position.y) * 0.01;

    }

});



/*==============================================================

KEYBOARD EASTER EGG

Type "dream"

==============================================================*/

let secret = "";

window.addEventListener("keydown", (e) => {

    secret += e.key.toLowerCase();

    if (secret.length > 5) {

        secret = secret.slice(-5);

    }

    if (secret === "dream") {

        gsap.timeline()

            .to(".circle-center", {

                scale: 1.4,

                duration: .5

            })

            .to(".circle-center", {

                rotation: 360,

                duration: 1

            })

            .to(".circle-center", {

                scale: 1,

                duration: .5

            });

        console.log("✨ Dream Mode Activated ✨");

    }

});



/*==============================================================

RANDOM PARTICLE PULSE

==============================================================*/

setInterval(() => {

    gsap.to(particleMaterial, {

        size: 0.035,

        duration: .8,

        yoyo: true,

        repeat: 1

    });

}, 5000);



/*==============================================================

SCROLL TOP SHORTCUT

==============================================================*/

window.addEventListener("keydown", (e) => {

    if (e.key.toLowerCase() === "t") {
        if (lenis) lenis.scrollTo(0);
        else window.scrollTo({ top: 0, behavior: "smooth" });
    }

});



/*==============================================================

HERO FLOAT

==============================================================*/

gsap.to(".hero-circle", {

    y: 25,

    duration: 3,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});







/*==============================================================

IMAGE HOVER GLOW

==============================================================*/

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        gsap.to(card, {

            boxShadow: "0 0 80px rgba(255,255,255,.15)",

            duration: .4

        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {

            boxShadow: "0 0 0 rgba(255,255,255,0)",

            duration: .4

        });

    });

});



/*==============================================================

SAFE INITIALIZATION

==============================================================*/

function initPortfolio() {

    console.log("Portfolio Initialized");

    ScrollTrigger.refresh();

}



/*==============================================================

LOAD

==============================================================*/

window.addEventListener("load", () => {

    initPortfolio();

});



/*==============================================================

CONSOLE SIGNATURE

==============================================================*/

console.log(`

██████╗ ██████╗
██╔══██╗██╔══██╗
██████╔╝██████╔╝
██╔═══╝ ██╔══██╗
██║     ██║  ██║
╚═╝     ╚═╝  ╚═╝

PREET RAJPUT

Portfolio 2026

Designed & Developed with ❤️

GSAP • THREE.JS • LENIS

`);

console.log("Thanks for inspecting the code 😄");

/*==============================================================

INTERACTIVE TECH GALAXY & HUD TELEMETRY LOGIC

==============================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* --- 1. Orbital Nodes Layout Engine --- */
    const orbitStage = document.querySelector(".galaxy-orbit-stage");
    const skillOrbs = document.querySelectorAll(".skill-orb");

    if (orbitStage && skillOrbs.length > 0) {
        // Group orbs into 3 concentric rings
        const rings = [
            { radius: 110, count: 4, items: [] },
            { radius: 190, count: 5, items: [] },
            { radius: 250, count: 5, items: [] }
        ];

        let orbIndex = 0;
        rings.forEach(ring => {
            for (let i = 0; i < ring.count && orbIndex < skillOrbs.length; i++) {
                ring.items.push(skillOrbs[orbIndex]);
                orbIndex++;
            }
        });

        // Position each orb around its orbit circle using trigonometry
        rings.forEach(ring => {
            const angleStep = (Math.PI * 2) / ring.items.length;
            ring.items.forEach((orb, i) => {
                const angle = i * angleStep - Math.PI / 2;
                const x = Math.cos(angle) * ring.radius;
                const y = Math.sin(angle) * ring.radius;

                // Base positioning relative to stage center
                orb.dataset.baseX = x;
                orb.dataset.baseY = y;

                gsap.set(orb, {
                    x: x,
                    y: y,
                    xPercent: -50,
                    yPercent: -50,
                    left: "50%",
                    top: "50%"
                });

                // GSAP Floating Physics per Orb
                if (typeof gsap !== "undefined") {
                    gsap.to(orb, {
                        y: `+=${Math.sin(i) * 14 + 8}`,
                        x: `+=${Math.cos(i) * 10 + 6}`,
                        duration: 3 + (i % 3),
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: i * 0.15
                    });
                }
            });
        });

        // Interactive Mouse Parallax Stage Shift
        orbitStage.addEventListener("mousemove", (e) => {
            const rect = orbitStage.getBoundingClientRect();
            const mouseX = e.clientX - rect.left - rect.width / 2;
            const mouseY = e.clientY - rect.top - rect.height / 2;

            if (typeof gsap !== "undefined") {
                gsap.to(".skill-nodes-field", {
                    x: mouseX * 0.05,
                    y: mouseY * 0.05,
                    duration: 0.6,
                    ease: "power2.out"
                });
                gsap.to(".ring-inner", { x: "-50%", y: "-50%", xPercent: mouseX * 0.02, yPercent: mouseY * 0.02, duration: 0.6 });
                gsap.to(".ring-outer", { x: "-50%", y: "-50%", xPercent: mouseX * 0.08, yPercent: mouseY * 0.08, duration: 0.6 });
            }
        });

        orbitStage.addEventListener("mouseleave", () => {
            if (typeof gsap !== "undefined") {
                gsap.to(".skill-nodes-field", { x: 0, y: 0, duration: 0.8, ease: "power2.out" });
            }
        });
    }

    /* --- 2. HUD Telemetry Inspector --- */
    const hudName = document.getElementById("hudName");
    const hudCategory = document.getElementById("hudCategory");
    const hudExp = document.getElementById("hudExp");
    const hudPercentVal = document.getElementById("hudPercentVal");
    const hudGaugeFill = document.getElementById("hudGaugeFill");
    const hudDesc = document.getElementById("hudDesc");
    const hudTags = document.getElementById("hudTags");
    const hudIcon = document.getElementById("hudIcon");

    function updateHudTelemetry(orb) {
        if (!orb) return;

        // Deactivate previous active orb
        document.querySelectorAll(".skill-orb.active").forEach(el => el.classList.remove("active"));
        orb.classList.add("active");

        const name = orb.dataset.name || "Technology";
        const cat = (orb.dataset.cat || "GENERAL").toUpperCase();
        const percent = orb.dataset.percent || "85%";
        const exp = orb.dataset.exp || "3+ Years";
        const desc = orb.dataset.desc || "";
        const iconClass = orb.dataset.icon || "fa-solid fa-code";
        const stackList = (orb.dataset.stack || "").split(",");

        if (hudName) hudName.textContent = name;
        if (hudCategory) hudCategory.textContent = cat;
        if (hudPercentVal) hudPercentVal.textContent = percent;
        if (hudGaugeFill) hudGaugeFill.style.width = percent;
        if (hudExp) hudExp.innerHTML = `<i class="fa-solid fa-clock"></i> ${exp} Experience`;
        if (hudDesc) hudDesc.textContent = desc;
        if (hudIcon) hudIcon.innerHTML = `<i class="${iconClass}"></i>`;

        if (hudTags) {
            hudTags.innerHTML = stackList
                .map(item => item.trim() ? `<span class="hud-tag">${item.trim()}</span>` : "")
                .join("");
        }

        // GSAP Pulse Animation on HUD update
        if (typeof gsap !== "undefined" && document.getElementById("skillsHud")) {
            gsap.fromTo("#skillsHud", 
                { borderColor: "rgba(255, 255, 255, 0.4)" },
                { borderColor: "rgba(255, 255, 255, 0.15)", duration: 0.6, ease: "power2.out" }
            );
        }
    }

    // Attach click and hover listeners to skill orbs
    skillOrbs.forEach(orb => {
        orb.addEventListener("mouseenter", () => updateHudTelemetry(orb));
        orb.addEventListener("click", () => updateHudTelemetry(orb));
    });

    /* --- 3. Skills Category Filter Bar --- */
    const filterBtns = document.querySelectorAll(".skills-filter-bar .filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter || "all";

            skillOrbs.forEach(orb => {
                const cat = orb.dataset.cat;
                if (filter === "all" || cat === filter) {
                    if (typeof gsap !== "undefined") {
                        gsap.to(orb, { opacity: 1, scale: 1, pointerEvents: "auto", duration: 0.4 });
                    } else {
                        orb.style.opacity = "1";
                    }
                } else {
                    if (typeof gsap !== "undefined") {
                        gsap.to(orb, { opacity: 0.15, scale: 0.7, pointerEvents: "none", duration: 0.4 });
                    } else {
                        orb.style.opacity = "0.15";
                    }
                }
            });
        });
    });

    /*==============================================================

    EDITORIAL SERVICES ACCORDION MATRIX

    ==============================================================*/

    const serviceRows = document.querySelectorAll(".editorial-service-row");
    const serviceCounterNum = document.getElementById("serviceCounterNum");
    const serviceSpotlightLabel = document.getElementById("serviceSpotlightLabel");

    serviceRows.forEach(row => {
        row.addEventListener("click", () => {
            const isActive = row.classList.contains("active");

            // Close all rows
            serviceRows.forEach(r => r.classList.remove("active"));

            // Open clicked row if not previously active
            if (!isActive) {
                row.classList.add("active");
                const index = row.dataset.index || "01";
                const label = row.dataset.label || "Service";

                if (serviceCounterNum) {
                    if (typeof gsap !== "undefined") {
                        gsap.fromTo(serviceCounterNum, 
                            { y: -15, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
                        );
                    }
                    serviceCounterNum.textContent = index;
                }

                if (serviceSpotlightLabel) {
                    serviceSpotlightLabel.textContent = label;
                }
            } else {
                // Keep first open by default
                serviceRows[0].classList.add("active");
            }
        });
    });
    /*==============================================================

    BACKGROUND MUSIC ENGINE (#bgAudioPlayer)

    ==============================================================*/

    const bgAudio = document.getElementById("bgAudioPlayer");
    let isAudioEnabled = false;
    const audioToggleBtn = document.getElementById("audioToggleBtn");

    if (bgAudio) {
        bgAudio.volume = 0.6;
    }

    function toggleAudio() {
        if (!bgAudio) return;
        isAudioEnabled = !isAudioEnabled;
        if (isAudioEnabled) {
            bgAudio.play().then(() => {
                if (audioToggleBtn) audioToggleBtn.classList.add("playing");
            }).catch(err => {
                console.error("Audio playback error:", err);
            });
        } else {
            bgAudio.pause();
            if (audioToggleBtn) audioToggleBtn.classList.remove("playing");
        }
    }

    if (audioToggleBtn) {
        audioToggleBtn.addEventListener("click", toggleAudio);
    }

    /*==============================================================

    3. SPOTLIGHT COMMAND PALETTE (CMD + K) ENGINE

    ==============================================================*/

    const cmdModal = document.getElementById("cmd-palette-backdrop");
    const cmdTriggerBtn = document.getElementById("cmdTriggerBtn");
    const cmdSearchInput = document.getElementById("cmdSearchInput");
    const cmdItems = document.querySelectorAll(".cmd-item");

    function openCmdPalette() {
        if (cmdModal) {
            cmdModal.classList.add("active");
            playSwooshSound();
            setTimeout(() => {
                if (cmdSearchInput) cmdSearchInput.focus();
            }, 100);
        }
    }

    function closeCmdPalette() {
        if (cmdModal) {
            cmdModal.classList.remove("active");
            if (cmdSearchInput) cmdSearchInput.value = "";
            filterCmdItems("");
        }
    }

    if (cmdTriggerBtn) {
        cmdTriggerBtn.addEventListener("click", openCmdPalette);
    }

    // Shortcut listener (Cmd + K / Ctrl + K or Esc)
    window.addEventListener("keydown", (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();
            if (cmdModal && cmdModal.classList.contains("active")) {
                closeCmdPalette();
            } else {
                openCmdPalette();
            }
        } else if (e.key === "Escape" && cmdModal && cmdModal.classList.contains("active")) {
            closeCmdPalette();
        }
    });

    // Close on backdrop click
    if (cmdModal) {
        cmdModal.addEventListener("click", (e) => {
            if (e.target === cmdModal) closeCmdPalette();
        });
    }

    // Filter command items & interactive AI prompt response
    function filterCmdItems(query) {
        const q = query.toLowerCase().trim();
        let hasMatch = false;

        cmdItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(q)) {
                item.style.display = "flex";
                hasMatch = true;
            } else {
                item.style.display = "none";
            }
        });

        // AI Assistant chat response simulation if user asks a question
        if (!hasMatch && q.length > 2) {
            const resultsBody = document.querySelector(".cmd-results-body");
            let aiItem = document.getElementById("cmdAiResponseItem");

            if (!aiItem && resultsBody) {
                aiItem = document.createElement("div");
                aiItem.id = "cmdAiResponseItem";
                aiItem.className = "cmd-item active";
                aiItem.style.background = "rgba(16, 185, 129, 0.12)";
                aiItem.style.borderColor = "rgba(16, 185, 129, 0.3)";
                resultsBody.appendChild(aiItem);
            }

            let responseText = "I am Preet's AI Assistant. How can I help you regarding automation, web development, or hiring Preet?";
            if (q.includes("hire") || q.includes("contact") || q.includes("price")) {
                responseText = "Preet is available for custom web, WebGL, & AI automation projects. Click here to jump to Contact!";
            } else if (q.includes("skill") || q.includes("stack") || q.includes("tech")) {
                responseText = "Preet specializes in JavaScript, Python, GSAP, Three.js, OpenAI LLMs, & n8n.";
            }

            if (aiItem) {
                aiItem.innerHTML = `
                    <i class="fa-solid fa-robot" style="color: #10b981;"></i>
                    <div class="cmd-item-info">
                        <span style="color: #10b981;">PREET.AI: "${query}"</span>
                        <small style="color: #e5e7eb;">${responseText}</small>
                    </div>
                `;
                aiItem.onclick = () => {
                    closeCmdPalette();
                    const contactSec = document.querySelector("#contact");
                    if (contactSec) contactSec.scrollIntoView({ behavior: "smooth" });
                };
            }
        } else {
            const aiItem = document.getElementById("cmdAiResponseItem");
            if (aiItem) aiItem.remove();
        }
    }

    if (cmdSearchInput) {
        cmdSearchInput.addEventListener("input", (e) => filterCmdItems(e.target.value));
    }

    // Execute command item on click
    cmdItems.forEach(item => {
        item.addEventListener("click", () => {
            const action = item.dataset.action;
            const target = item.dataset.target;
            const fn = item.dataset.fn;

            closeCmdPalette();

            if (action === "nav" && target) {
                const targetSec = document.querySelector(target);
                if (targetSec) targetSec.scrollIntoView({ behavior: "smooth" });
            } else if (action === "action" && fn) {
                if (fn === "toggleAudio") toggleAudio();
                if (fn === "cycleTheme") cycleTheme();
            }
        });
    });

    /*==============================================================

    4. LIVE TELEMETRY CLOCK (IST NEW DELHI TIME)

    ==============================================================*/

    const navLiveClock = document.getElementById("navLiveClock");

    function updateLiveClock() {
        if (!navLiveClock) return;
        const now = new Date();
        const options = {
            timeZone: "Asia/Kolkata",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        };
        const timeStr = new Intl.DateTimeFormat("en-US", options).format(now);
        navLiveClock.textContent = timeStr;
    }
    updateLiveClock();
    setInterval(updateLiveClock, 1000);

    /*==============================================================

    5. MULTI-THEME AESTHETIC SWITCHER ENGINE

    ==============================================================*/

    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const themes = ["default", "paper", "gold"];
    let currentThemeIndex = 0;

    function cycleTheme() {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        const nextTheme = themes[currentThemeIndex];

        if (nextTheme === "default") {
            document.documentElement.removeAttribute("data-theme");
        } else {
            document.documentElement.setAttribute("data-theme", nextTheme);
        }

        playClickSound();

        // Animate theme switch transition overlay
        if (typeof gsap !== "undefined") {
            gsap.fromTo("body", 
                { filter: "brightness(1.3)" },
                { filter: "brightness(1)", duration: 0.5, ease: "power2.out" }
            );
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", cycleTheme);
    }

});