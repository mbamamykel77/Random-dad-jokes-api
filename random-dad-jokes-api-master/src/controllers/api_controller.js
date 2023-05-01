const axios = require('axios');

class apiController {
  static async randomDadJokes(req, res, next) {
    try {
      const response = await axios.get(
        `https://dad-jokes.p.rapidapi.com/random/joke`,
        {
          headers: {
            "content-type": "application/octet-stream",
            "X-RapidAPI-Key": "c523b8ca45msh8dac543565538a0p1197d0jsnd66d4388e206",
            "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
          },
        //   params: { category: "all", count: "10" },
        }
      );
      const {randomJokes} = response.data.body;
      res.status(200).json({randomJokes});
    } catch (err) {
      console.log(err);
      next(err)
    }
  }
}


module.exports = apiController;

