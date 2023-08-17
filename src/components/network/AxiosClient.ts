import axios from "axios";
import { singleton } from "tsyringe";
import HttpRepository from "../../repository/HttpRepository";

@singleton()
export default class AxiosClient implements HttpRepository {
  public client = axios.create({
    timeout: 5000,
  });

  getUser(): Promise<String> {
    return Promise.resolve("");
  }
  get(url: string): Promise<String> {
    return Promise.resolve("");
  }

  post(): null {
    return null;
  }

  update(): null {
    return null;
  }

  delete(): null {
    return null;
  }
}
