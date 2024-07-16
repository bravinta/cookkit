import { ICookieOption } from "./types";

class Cookkit {
  private options: ICookieOption[]

  constructor(options: ICookieOption[]) {
    this.options = options
  }

  public get() {
    return this.options
  }
}

export * from "./types";

export default Cookkit