import useData from "./useData";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  slug: string;
  name: string;
  // image:string
}

const usePlatforms = () => ({ data: platforms, error: null });

export default usePlatforms;
