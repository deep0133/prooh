"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

const ICON_SIZE = 5;
// eslint-disable-next-line
const FallingIcons = ({ icons = [] }) => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const Composite = Matter.Composite;
    const Bodies = Matter.Bodies;
    const Common = Matter.Common;

    const engine = Engine.create();
    const world = engine.world;

    engine.world.gravity.y = 0.5;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);

    const ground = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight,
      window.innerWidth,
      50,
      {
        isStatic: true,
        render: { fillStyle: "transparent" },
      }
    );

    // eslint-disabled-next-line
    const iconBodies = icons?.map((icon) => {
      const x = Common.random(0, window.innerWidth);
      const y = Common.random(-500, -50);
      // const size = Common.random(30, 60);

      // return Bodies.rectangle(x, y, size, size, {
      //   restitution: 0.8,
      //   friction: 0.005,
      //   render: {
      //     sprite: {
      //       texture: icon,
      //       xScale:  200,
      //       yScale: size / 100,
      //     },
      //   },
      // });
      return Bodies.rectangle(x, y, ICON_SIZE, ICON_SIZE, {
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

    Composite.add(world, [ground, ...iconBodies]);

    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Composite.add(world, mouseConstraint);
    render.mouse = mouse;

    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
      Matter.Body.setPosition(ground, {
        x: window.innerWidth / 2,
        y: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(world);
      Engine.clear(engine);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, [icons]);

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
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default FallingIcons;
