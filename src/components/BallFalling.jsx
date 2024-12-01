import { useEffect, useRef } from "react";
import Matter from "matter-js";

const ICON_SIZE = 50; // Increased size for better interaction
const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;
const FallingIcons = ({ icons = [] }) => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const Bodies = Matter.Bodies;
    const Common = Matter.Common;
    const Mouse = Matter.Mouse;
    const MouseConstraint = Matter.MouseConstraint;
    const World = Matter.World;

    const engine = Engine.create();
    const world = engine.world;
    engine.world.gravity.y = 0.5;

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

    const ground = Bodies.rectangle(
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT,
      CANVAS_WIDTH + 100,
      50,
      {
        isStatic: true,
        render: { fillStyle: "transparent" },
      }
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

    const iconBodies = icons.map((icon) => {
      const x = Common.random(0, CANVAS_WIDTH);
      const y = Common.random(-500, -50);
      return Bodies.circle(x, y, ICON_SIZE / 2, {
        restitution: 0.8,
        friction: 0.005,
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

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    mouseConstraint.mouse.element.removeEventListener(
      "mousewheel",
      mouseConstraint.mouse.mousewheel
    );
    mouseConstraint.mouse.element.removeEventListener(
      "DOMMouseScroll",
      mouseConstraint.mouse.mousewheel
    );

    World.add(world, mouseConstraint);
    render.mouse = mouse;

    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: CANVAS_WIDTH, y: CANVAS_HEIGHT },
    });

    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
      Matter.Body.setPosition(ground, {
        x: window.innerWidth / 2,
        y: window.innerHeight,
      });
      Matter.Body.setPosition(rightWall, {
        x: window.innerWidth,
        y: window.innerHeight / 2,
      });
    };

    window.addEventListener("resize", handleResize);

    // Wrap icons when they go off-screen
    Matter.Events.on(engine, "afterUpdate", function () {
      iconBodies.forEach((body) => {
        if (body.position.y > CANVAS_HEIGHT + ICON_SIZE) {
          Matter.Body.setPosition(body, {
            x: Common.random(0, CANVAS_WIDTH),
            y: -ICON_SIZE,
          });
          Matter.Body.setVelocity(body, { x: 0, y: 0 });
        }
        if (body.position.x < -ICON_SIZE) {
          Matter.Body.setPosition(body, {
            x: CANVAS_WIDTH + ICON_SIZE,
            y: body.position.y,
          });
        }
        if (body.position.x > CANVAS_WIDTH + ICON_SIZE) {
          Matter.Body.setPosition(body, {
            x: -ICON_SIZE,
            y: body.position.y,
          });
        }
      });
    });

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
  // useEffect(() => {
  //   const Engine = Matter.Engine;
  //   const Render = Matter.Render;
  //   const Runner = Matter.Runner;
  //   const Composite = Matter.Composite;
  //   const Bodies = Matter.Bodies;
  //   const Common = Matter.Common;
  //   const Mouse = Matter.Mouse;
  //   const MouseConstraint = Matter.MouseConstraint;

  //   const engine = Engine.create();
  //   const world = engine.world;
  //   engine.world.gravity.y = 0.5; // Reduced gravity for slower falling

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

  //   const iconBodies = icons.map((icon) => {
  //     const x = Common.random(0, CANVAS_WIDTH);
  //     const y = Common.random(-500, -50);
  //     return Bodies.circle(x, y, ICON_SIZE / 2, {
  //       restitution: 0.8,
  //       friction: 0.005,
  //       render: {
  //         sprite: {
  //           texture: icon,
  //           xScale: ICON_SIZE / 100,
  //           yScale: ICON_SIZE / 100,
  //         },
  //       },
  //     });
  //   });

  //   Composite.add(world, [
  //     ground,
  //     ...iconBodies,
  //     Bodies.polygon(200, 460, 3, 60),
  //   ]);

  //   // Create mouse constraint
  //   const mouse = Mouse.create(render.canvas);
  //   const mouseConstraint = MouseConstraint.create(engine, {
  //     mouse: mouse,
  //     constraint: {
  //       stiffness: 0.2,
  //       render: { visible: false },
  //     },
  //   });

  //   Composite.add(world, mouseConstraint);

  //   // Sync the mouse with the renderer
  //   render.mouse = mouse;

  //   const handleResize = () => {
  //     console.log("----------mouse Event ---------:");
  //     render.canvas.width = window.innerWidth;
  //     render.canvas.height = window.innerHeight;
  //     Matter.Body.setPosition(ground, {
  //       x: window.innerWidth / 2,
  //       y: window.innerHeight,
  //     });
  //   };

  //   // Fit the render viewport to the scene
  //   Render.lookAt(render, {
  //     min: { x: 0, y: 0 },
  //     max: { x: CANVAS_WIDTH, y: CANVAS_HEIGHT },
  //   });

  //   // window.addEventListener("resize", handleResize);
  //   // Add wrapping to bodies
  //   const allBodies = Composite.allBodies(world);
  //   for (let i = 0; i < allBodies.length; i += 1) {
  //     allBodies[i].plugin.wrap = {
  //       min: { x: render.bounds.min.x - 100, y: render.bounds.min.y },
  //       max: { x: render.bounds.max.x + 100, y: render.bounds.max.y },
  //     };
  //   }

  //   return () => {
  //     // window.removeEventListener("resize", handleResize);
  //     Render.stop(render);
  //     Runner.stop(runner);
  //     Composite.clear(world);
  //     Engine.clear(engine);
  //     render.canvas.remove();
  //     render.canvas = null;
  //     render.context = null;
  //     render.textures = {};
  //   };
  // }, [icons]);

  // useEffect(() => {
  //   const Engine = Matter.Engine;
  //   const Render = Matter.Render;
  //   const Runner = Matter.Runner;
  //   const Composite = Matter.Composite;
  //   const Composites = Matter.Composites;
  //   const Common = Matter.Common;
  //   const MouseConstraint = Matter.MouseConstraint;
  //   const Mouse = Matter.Mouse;
  //   const Bodies = Matter.Bodies;

  //   const engine = Engine.create();
  //   const world = engine.world;

  //   const render = Render.create({
  //     element: sceneRef.current,
  //     engine: engine,
  //     options: {
  //       width: CANVAS_WIDTH,
  //       height: CANVAS_HEIGHT,
  //       wireframes: false,
  //       background: "transparent",
  //       showAngleIndicator: true,
  //     },
  //   });

  //   Render.run(render);

  //   const runner = Runner.create();
  //   Runner.run(runner, engine);

  //   // Add ground
  //   Composite.add(world, [
  //     Bodies.rectangle(
  //       CANVAS_WIDTH / 2,
  //       CANVAS_HEIGHT,
  //       CANVAS_WIDTH + 100,
  //       50,
  //       {
  //         isStatic: true,
  //         render: { fillStyle: "#060a19" },
  //       }
  //     ),
  //   ]);

  //   // Create stack of icons
  //   const stack = Composites.stack(100, 0, 10, 8, 10, 10, (x, y) => {
  //     const size = Common.random(30, 50);
  //     return Bodies.circle(x, y, size / 2, {
  //       restitution: 0.6,
  //       friction: 0.1,
  //       render: {
  //         sprite: {
  //           texture: icons[Math.floor(Math.random() * icons.length)],
  //           xScale: size / 100,
  //           yScale: size / 100,
  //         },
  //       },
  //     });
  //   });

  //   Composite.add(world, [
  //     stack,
  //     Bodies.polygon(200, 460, 3, 60),
  //     Bodies.polygon(400, 460, 5, 60),
  //     Bodies.rectangle(600, 460, 80, 80),
  //   ]);

  //   // Add mouse control
  //   const mouse = Mouse.create(render.canvas);
  //   const mouseConstraint = MouseConstraint.create(engine, {
  //     mouse: mouse,
  //     constraint: {
  //       stiffness: 0.2,
  //       render: {
  //         visible: false,
  //       },
  //     },
  //   });

  //   Composite.add(world, mouseConstraint);

  //   // Keep the mouse in sync with rendering
  //   render.mouse = mouse;

  //   // Fit the render viewport to the scene
  //   Render.lookAt(render, {
  //     min: { x: 0, y: 0 },
  //     max: { x: CANVAS_WIDTH, y: CANVAS_HEIGHT },
  //   });

  //   // Add wrapping to bodies
  //   const allBodies = Composite.allBodies(world);
  //   for (let i = 0; i < allBodies.length; i += 1) {
  //     allBodies[i].plugin.wrap = {
  //       min: { x: render.bounds.min.x - 100, y: render.bounds.min.y },
  //       max: { x: render.bounds.max.x + 100, y: render.bounds.max.y },
  //     };
  //   }

  //   return () => {
  //     Render.stop(render);
  //     Runner.stop(runner);
  //     if (render.canvas) {
  //       render.canvas.remove();
  //     }
  //     if (render.canvas) {
  //       render.canvas.remove();
  //     }
  //     if (render.context) {
  //       // @ts-ignore
  //       render.context = null;
  //     }
  //     // @ts-ignore
  //     render.textures = {};
  //   };
  // }, [icons]);
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
