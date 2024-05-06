import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "23a126d6660d4e33afc8fda0d8a1a1e7",
  },
});
