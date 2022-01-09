import { IOC } from "dic-ioc";
import { injectRepositories } from "./repositories.injection";
import { injectTweetUseCases } from "./tweetUseCases.injection";
import { injectUtils } from "./utils.injection";

export class DIC {
  private static _instance: DIC;
  public container: IOC = new IOC();

  private constructor() {
    this.buildContainer();
  }

  public static instance(): DIC {
    if (!DIC._instance) {
      DIC._instance = new DIC();
    }

    return DIC._instance;
  }

  private buildContainer() {
    // inject repositories
    injectRepositories(this.container);

    // inject utils
    injectUtils(this.container);

    // inject tweet use cases
    injectTweetUseCases(this.container);
  }
}
