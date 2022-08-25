import { haks } from "./request";

export function getMultiData() {
  return haks({
    url: "/home/multidata",
  });
}
