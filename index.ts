type Directions = "N" | "S" | "W" | "E";

type CurrentPosition = {
  x: number;
  y: number;
};

const executeCommand = (
  indCommands: Directions[],
  currentPosition: CurrentPosition
) => {
  const result = indCommands.map((cmd) => {
    switch (cmd) {
      case "N":
        if (!(currentPosition.y < 5)) {
          console.log("out of boundary", currentPosition);
          throw Error("Out of Boundary");
        }
        const positionNY = currentPosition.y + 1;
        currentPosition = {
          x: currentPosition.x,
          y: positionNY,
        };
        return currentPosition;

      case "E":
        if (!(currentPosition.x < 5)) {
          console.log("out of boundary", currentPosition);
          throw Error("Out of Boundary");
        }
        const positionEX = currentPosition.x + 1;
        currentPosition = {
          x: positionEX,
          y: currentPosition.y,
        };
        return currentPosition;
      case "S":
        if (!(currentPosition.y > -5)) {
          console.log("out of boundary", currentPosition);
          throw Error("Out of Boundary");
        }

        const positionSY = currentPosition.y - 1;
        currentPosition = {
          x: currentPosition.x,
          y: positionSY,
        };
        return currentPosition;
      case "W":
        if (!(currentPosition.x > -5)) {
          console.log("out of boundary", currentPosition);
          throw Error("Out of Boundary");
        }
        const positionWX = currentPosition.x - 1;
        currentPosition = {
          x: positionWX,
          y: currentPosition.y,
        };
        return currentPosition;

      default:
        throw Error("incorrect command");
    }
  });

  console.log("Final path", result);
  return result[result.length - 1];
};

export function main(args: string[]) {
  if (args.length < 3) {
    console.log(
      "not specified all the arguments, command is node --loader ts-node/esm index.ts [command] [startPosition1] [startPosition2]"
    );
    return null;
  }

  let currentPosition: CurrentPosition = {
    x: parseInt(args[1]), // no need to do this if not command line args
    y: parseInt(args[2]),
  };

  const commands = args[0].split(" ").filter((i): i is Directions => !!i);

  return executeCommand(commands, currentPosition);
}

const args = process.argv.slice(2);

main(args);
