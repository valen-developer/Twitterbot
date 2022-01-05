import { IOC } from "dic-ioc";
import { injectRepositories } from "./repositories.injection";
import { injectTweetUseCases } from "./tweetUseCases.injection";
import { injectUtils } from "./utils.injection";

export const buildContainer = (): IOC => {
  const container = new IOC();

  // inject repositories
  injectRepositories(container);

  // inject utils
  injectUtils(container);

  // inject tweet use cases
  injectTweetUseCases(container);

  return container;
};
