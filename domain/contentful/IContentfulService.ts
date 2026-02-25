import { HomePage } from "./HomePage";

export interface IContentfulService {
  getHomePage(): Promise<HomePage>;
}

