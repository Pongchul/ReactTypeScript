import axios, { AxiosInstance } from "axios";
import AxiosClient from "../components/network/AxiosClient";
import { inject, singleton } from "tsyringe";
import type HttpRepository from "./HttpRepository";

@singleton()
export default class UserRepository {
  private readonly client: HttpRepository;
  public constructor(@inject(AxiosClient) client: HttpRepository) {
    this.client = client;
  }

  public getUser(): Promise<String> {
    return this.client.get("http://localhost:3000");
  }
}
