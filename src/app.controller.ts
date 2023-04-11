import { Controller, Get, Render, Header } from "@nestjs/common";
import axios from "axios";

@Controller()
export class AppController {
  @Get()
  @Header("Cache-Control", "none")
  @Render("index")
  async root() {
    var url =
      "https://newsapi.org/v2/everything?" +
      "q=Apple&" +
      "sortBy=popularity&" +
      "apiKey=" +
      process.env.NEWSAPIKEY;
    const response = await axios({
      method: "GET",
      url,
    });
    
    return {
      data: JSON.stringify(response?.data?.articles)
    };
  }
}
