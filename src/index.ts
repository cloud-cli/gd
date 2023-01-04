import { Http, Get, Post } from "./http.js";

Http.when(Get, "/", (_, response) => response.send("OK"));
