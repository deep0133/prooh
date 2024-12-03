import { useEffect, useRef } from "react";
import Matter from "matter-js";

const ICON_SIZE = 80; // Increased size for better interaction
let CANVAS_WIDTH = window.innerWidth;
let CANVAS_HEIGHT = window.innerHeight;
const FallingIcons = ({ icons = [] }) => {
  const sceneRef = useRef(null);

  // useEffect(() => {
  //   const Engine = Matter.Engine;
  //   const Render = Matter.Render;
  //   const Runner = Matter.Runner;
  //   const Bodies = Matter.Bodies;
  //   const Common = Matter.Common;
  //   const Mouse = Matter.Mouse;
  //   const MouseConstraint = Matter.MouseConstraint;
  //   const World = Matter.World;

  //   const engine = Engine.create();
  //   const world = engine.world;
  //   engine.gravity.y = 0.4;

  //   const render = Render.create({
  //     element: sceneRef.current,
  //     engine: engine,
  //     options: {
  //       width: CANVAS_WIDTH,
  //       height: CANVAS_HEIGHT,
  //       wireframes: false,
  //       background: "transparent",
  //     },
  //   });

  //   Render.run(render);

  //   const runner = Runner.create();
  //   Runner.run(runner, engine);

  //   const ground = Bodies.rectangle(
  //     CANVAS_WIDTH / 2,
  //     CANVAS_HEIGHT,
  //     CANVAS_WIDTH + 100,
  //     50,
  //     {
  //       isStatic: true,
  //       render: { fillStyle: "transparent" },
  //     }
  //   );

  //   const leftWall = Bodies.rectangle(0, CANVAS_HEIGHT / 2, 1, CANVAS_HEIGHT, {
  //     isStatic: true,
  //     render: { fillStyle: "transparent" },
  //   });

  //   const rightWall = Bodies.rectangle(
  //     CANVAS_WIDTH,
  //     CANVAS_HEIGHT / 2,
  //     1,
  //     CANVAS_HEIGHT,
  //     {
  //       isStatic: true,
  //       render: { fillStyle: "transparent" },
  //     }
  //   );

  //   const iconBodies = icons.map((icon) => {
  //     const x = Common.random(0, CANVAS_WIDTH);
  //     const y = Common.random(-500, -50);
  //     return Bodies.circle(x, y, ICON_SIZE / 2, {
  //       restitution: 0.3,
  //       friction: 0.009,
  //       render: {
  //         sprite: {
  //           texture: icon,
  //           xScale: ICON_SIZE / 100,
  //           yScale: ICON_SIZE / 100,
  //         },
  //       },
  //     });
  //   });

  //   World.add(world, [ground, leftWall, rightWall, ...iconBodies]);

  //   const mouse = Mouse.create(render.canvas);
  //   const mouseConstraint = MouseConstraint.create(engine, {
  //     mouse: mouse,
  //     constraint: {
  //       stiffness: 0.2,
  //       render: { visible: false },
  //     },
  //   });

  //   mouseConstraint.mouse.element.removeEventListener(
  //     "mousewheel",
  //     mouseConstraint.mouse.mousewheel
  //   );
  //   mouseConstraint.mouse.element.removeEventListener(
  //     "DOMMouseScroll",
  //     mouseConstraint.mouse.mousewheel
  //   );

  //   World.add(world, mouseConstraint);
  //   render.mouse = mouse;

  //   Render.lookAt(render, {
  //     min: { x: 0, y: 0 },
  //     max: { x: CANVAS_WIDTH, y: CANVAS_HEIGHT },
  //   });

  //   const handleResize = () => {
  //     render.canvas.width = window.innerWidth;
  //     render.canvas.height = window.innerHeight;
  //     Matter.Body.setPosition(ground, {
  //       x: window.innerWidth / 2,
  //       y: window.innerHeight,
  //     });
  //     Matter.Body.setPosition(rightWall, {
  //       x: window.innerWidth,
  //       y: window.innerHeight / 2,
  //     });
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // Wrap icons when they go off-screen
  //   Matter.Events.on(engine, "afterUpdate", function () {
  //     iconBodies.forEach((body) => {
  //       if (body.position.y > CANVAS_HEIGHT + ICON_SIZE) {
  //         Matter.Body.setPosition(body, {
  //           x: Common.random(0, CANVAS_WIDTH),
  //           y: -ICON_SIZE,
  //         });
  //         Matter.Body.setVelocity(body, { x: 0, y: 0 });
  //       }
  //       if (body.position.x < -ICON_SIZE) {
  //         Matter.Body.setPosition(body, {
  //           x: CANVAS_WIDTH + ICON_SIZE,
  //           y: body.position.y,
  //         });
  //       }
  //       if (body.position.x > CANVAS_WIDTH + ICON_SIZE) {
  //         Matter.Body.setPosition(body, {
  //           x: -ICON_SIZE,
  //           y: body.position.y,
  //         });
  //       }
  //     });
  //   });

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     Render.stop(render);
  //     Runner.stop(runner);
  //     World.clear(world);
  //     Engine.clear(engine);
  //     render.canvas.remove();
  //     render.canvas = null;
  //     render.context = null;
  //     render.textures = {};
  //   };
  // }, [icons]);

  useEffect(() => {
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const Bodies = Matter.Bodies;
    const Common = Matter.Common;
    const Mouse = Matter.Mouse;
    const MouseConstraint = Matter.MouseConstraint;
    const World = Matter.World;
    const Events = Matter.Events;

    const engine = Engine.create();
    const world = engine.world;
    engine.gravity.y = 0.4; // Adjust gravity

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
        wireframes: false,
        background: "transparent",
      },
    });

    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);

    // Create boundaries
    const ground = Bodies.rectangle(
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT,
      CANVAS_WIDTH + 100,
      50,
      { isStatic: true, render: { fillStyle: "transparent" } }
    );

    const leftWall = Bodies.rectangle(0, CANVAS_HEIGHT / 2, 1, CANVAS_HEIGHT, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    });

    const rightWall = Bodies.rectangle(
      CANVAS_WIDTH,
      CANVAS_HEIGHT / 2,
      1,
      CANVAS_HEIGHT,
      {
        isStatic: true,
        render: { fillStyle: "transparent" },
      }
    );

    // Create icons
    const iconBodies = icons.map((icon) => {
      const x = Common.random(0, CANVAS_WIDTH);
      const y = Common.random(-500, -50);
      return Bodies.circle(x, y, ICON_SIZE / 2, {
        restitution: 0, // Bounce effect
        friction: 0, // Slight friction
        render: {
          sprite: {
            texture: icon,
            xScale: ICON_SIZE / 100,
            yScale: ICON_SIZE / 100,
          },
        },
      });
    });

    World.add(world, [ground, leftWall, rightWall, ...iconBodies]);

    // Mouse interaction
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.1,
        render: { visible: false },
      },
    });

    World.add(world, mouseConstraint);
    render.mouse = mouse;

    // Handle collisions with walls
    Events.on(engine, "beforeUpdate", () => {
      iconBodies.forEach((body) => {
        // Reverse velocity on collision with left wall
        if (body.position.x - ICON_SIZE / 2 <= 0) {
          Matter.Body.setVelocity(body, {
            x: Math.abs(body.velocity.x), // Reverse to positive velocity
            y: body.velocity.y,
          });
        }

        // Reverse velocity on collision with right wall
        if (body.position.x + ICON_SIZE / 2 >= CANVAS_WIDTH) {
          Matter.Body.setVelocity(body, {
            x: -Math.abs(body.velocity.x), // Reverse to negative velocity
            y: body.velocity.y,
          });
        }

        // Reverse velocity on collision with top wall
        if (body.position.y - ICON_SIZE / 2 <= 0) {
          Matter.Body.setVelocity(body, {
            x: body.velocity.x,
            y: Math.abs(body.velocity.y), // Reverse to positive velocity
          });
        }

        // Reset position if icon goes below the canvas
        if (body.position.y > CANVAS_HEIGHT + ICON_SIZE) {
          Matter.Body.setPosition(body, {
            x: Common.random(0, CANVAS_WIDTH),
            y: -ICON_SIZE,
          });
          Matter.Body.setVelocity(body, { x: 0, y: 0 });
        }
      });
    });

    // Handle canvas resizing
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      render.canvas.width = newWidth;
      render.canvas.height = newHeight;

      // Update boundary positions
      Matter.Body.setPosition(ground, { x: newWidth / 2, y: newHeight });
      Matter.Body.setPosition(rightWall, { x: newWidth, y: newHeight / 2 });

      CANVAS_WIDTH = newWidth;
      CANVAS_HEIGHT = newHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world);
      Engine.clear(engine);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, [icons]);

  useEffect(() => {
    const handleWheel = (e) => {
      window.scrollBy(0, e.deltaY);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: 9999,
      }}
    />
  );
};

export default FallingIcons;
