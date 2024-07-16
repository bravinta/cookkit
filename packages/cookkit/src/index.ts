import { ICookie, ICookieCategory } from "./types";

class Cookkit {
  private categories: ICookieCategory[]
  private cookies: ICookie[]

  constructor(cookies: ICookie[], categories: ICookieCategory[]) {
    this.categories = categories
    this.cookies = cookies
  }

  public getCategories() {
    return this.categories
  }
}

export * from "./types";

export default Cookkit