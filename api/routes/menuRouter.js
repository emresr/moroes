const express = require('express');
const router = express.Router();
const pool = require(".././dbconn")

router.get("/meals", async (req,res) => {
  try {
    const allMeals = await pool.query("SELECT * FROM meals");
    res.json(allMeals.rows)
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/meals/:id", async (req,res) => {
  try {
    const { id } =req.params;
    const Meal = await  pool.query("SELECT * FROM meals WHERE meal_id = $1", [id]);
    res.json(Meal.rows[0]); 
  } catch (err) {
    console.error(err.message);
  }
})

router.delete("/meals/:id",async (req,res) => {
  try {
    const {id} = req.params;
   const deleteMeal = await  pool.query("DELETE FROM meals WHERE meal_id = $1",[id])
   res.json("Meal deleted!");
   
  } catch (err) {
    console.error(err.message);
  }
})

router.post("/meals", async (req,res) =>{
  try {
    const { title , option } = req.body;
    const newMeal = await pool.query(
      "INSERT INTO meals (title,option) VALUES ( $1,$2) RETURNING *", [ title, option] );

     res.json(newMeal.rows[0]);

  } catch (err) {
      console.error(err.message);
  }
});

module.exports = router;
