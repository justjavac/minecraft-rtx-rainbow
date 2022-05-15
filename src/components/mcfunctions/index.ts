import { addToBehaviorPack } from "/src/components/_state.ts";
import fishTree from "/src/components/mcfunctions/fishTree.ts";
import {
  entityTrailFunction as entityTrail,
  rainbowTrailFunction as rainbowTrail,
} from "/src/components/mcfunctions/trails.ts";

export default function createFunctions() {
  const tickers: string[] = [];

  const fnResults: Array<[string, string] | [string, string, boolean]> = [
    fishTree(),
    rainbowTrail(),
    entityTrail(),
  ];

  fnResults.forEach(([fnName, contents, isTicker]) => {
    if (isTicker === true) {
      tickers.push(fnName);
    }

    addToBehaviorPack(`functions/${fnName}`, contents);
  });

  if (tickers.length) {
    addToBehaviorPack(
      "functions/tick.json",
      JSON.stringify({
        "values": tickers,
      }),
    );
  }
}