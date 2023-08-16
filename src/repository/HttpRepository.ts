export default interface HttpRepository {
  get(url: string): Promise<String>;

  post(): null;

  update(): null;

  delete(): null;
}
