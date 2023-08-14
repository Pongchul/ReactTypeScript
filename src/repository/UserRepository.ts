import axios, { AxiosInstance } from "axios";
import AxiosClient from "../components/network/AxiosClient";
import { singleton } from "tsyringe";

@singleton()
export default class UserRepository {
  private readonly client: AxiosClient;
  public constructor(client: AxiosClient) {
    this.client = client;
  }

  public getUser() {
    return this.client.get("http://localhost:3000");
  }
}
