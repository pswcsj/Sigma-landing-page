import { gsap } from "gsap";

const pageContainer = document.querySelector<HTMLDivElement>(".page-container");
let before: number = 0;

pageContainer.addEventListener("scroll", () => {
  // 만약 스크롤을 올린다면
  let scroll = pageContainer.scrollTop;
  if (scroll < before) {
    if (scroll >= 0 && scroll < innerHeight) {
      setTimeout(() => {
        gsap.to(".board.purple", {
          y: "0",
          rotation: 0,
          duration: 0.8,
        });
        gsap.to(".mobile", {
          duration: 0.8,
          bottom: "-50vh",
          scale: 1,
          x: 0,
          y: 0,
          filter: "drop-shadow(40px 100px 0px #babebe15)",
          boxShadow: "45px 50px 20px #babebe2f",
        });
      }, 0.8);
    } else if (scroll > innerHeight && scroll < 2 * innerHeight) {
      setTimeout(() => {
        gsap.to(".board.purple", {
          y: "-110vh",
          rotation: -4,
          duration: 0.8,
        });
        gsap.to(".mobile", {
          duration: 0.8,
          bottom: "50vh",
          scale: 0.8,
          x: 50,
          y: 50,
          filter: "drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25))",
          boxShadow: "none",
        });
      }, 0.8);
    } else if (scroll > 2 * innerHeight && scroll < 3 * innerHeight) {
      let t = gsap.timeline();
      setTimeout(() => {
        t.to(".board.gray", {
          y: "100vh",
          duration: 0.8,
          onComplete: () => {
            gsap.set(".board.white", {
              // y: "100vh",
              // visibility: "visible",
            });
          },
        });
      }, 0.8);

      // t.to(".board.white", {
      //   y: "100vh",
      //   rotation: -5,
      //   duration: 0.8,
      // });
      // gsap.to(".board.gray", {
      //   y: "100vh",
      //   duration: 0.8,
      // });
    }
    // 스크롤을 내리면
  } else {
    if (scroll >= 0 && scroll <= innerHeight) {
      setTimeout(() => {
        gsap.to(".board.purple", {
          y: "-110vh",
          rotation: -5,
          duration: 0.8,
        });
        gsap.to(".mobile", {
          duration: 0.8,
          bottom: "50vh",
          scale: 0.8,
          x: 50,
          y: 50,
          filter: "drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25))",
          boxShadow: "none",
        });
      }, 0.8);
    } else if (scroll > innerHeight && scroll < 2 * innerHeight) {
      let t2 = gsap.timeline();
      t2.to(".board.purple", {
        y: "-200vh",
        rotation: 0,
        duration: 0.8,
      });
      t2.to(
        ".mobile",
        {
          duration: 0.8,
          bottom: "100vh",
          scale: 0.8,
          x: 50,
          y: 50,
          filter: "drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25))",
          boxShadow: "none",
        },
        "<"
      );
      // t2.to(

      // );
    } else if (scroll > 2 * innerHeight && scroll < 3 * innerHeight) {
      let t3 = gsap.timeline();
      t3.to(".board.gray", {
        y: "-130vh",
        rotation: -5,
        duration: 0.8,
      });
      // t3.fromTo(
      //   ".mobile",
      //   { left: "15vw", bottom: "-100vh" },
      //   { bottom: "-30vh", duration: 0.8 },
      //   "<"
      // );
      // t3.to(".board.white", {
      //   y: "-30vh",
      //   rotation: -5,
      //   duration: 0.8,
      //   onComplete: () => {
      //     gsap.set(".board.white", {
      //       visibility: "hidden",
      //     });
      //   },
      // });
    }
  }
  before = scroll;
});
