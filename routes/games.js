     // routes/games.js
     const gamesRouter = require("express").Router(); // Создали роутер
     const { readData, writeData } = require("../utils/data"); // Чтение и запись данных в JSON-файл
     const {getAllGames, deleteGames} = require(../controllers/games.js)
     gamesRouter.get("/games", getAllGames)
     gamesRouter.delete("/games/:id", deleteGame);
     
     module.exports = gamesRouter;
     