import express from "express";

// location is the simple (x, y) coordinates of an entity within the system
// spaceCowboy models a cowboy in our super amazing system
// spaceAnimal models a single animal in our amazing system
type location = { x: number; y: number };
type spaceCowboy = { name: string; lassoLength: number };
type spaceAnimal = { type: "pig" | "cow" | "flying_burger" };

// spaceEntity models an entity in the super amazing (ROUND UPPER 100) system
type spaceEntity =
  | { type: "space_cowboy"; metadata: spaceCowboy; location: location }
  | { type: "space_animal"; metadata: spaceAnimal; location: location };

// === ADD YOUR CODE BELOW :D ===

// === ExpressJS setup + Server setup ===
const spaceDatabase = [] as spaceEntity[];
const app = express();

// the POST /entity endpoint adds an entity to your global space database
app.post("/entity", (req, res) => {
  // TODO: fill me in
  try {
    const entitiesArr = req.body;
    console.log(entitiesArr);
    spaceDatabase.push(...entitiesArr);

    return res.status(200).json({});
  } catch (e) {
    // Just send 400 error for now
    if (typeof e === "string") {
      res.status(400).send({ error: e.toUpperCase() });
    } else if (e instanceof Error) {
      res.status(400).send({ error: e.message });
    }
  }
});

// lasooable returns all the space animals a space cowboy can lasso given their name
app.get("/lassoable", (req, res) => {
  // TODO: fill me in
});

app.listen(8080);
