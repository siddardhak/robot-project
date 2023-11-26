type Directions = "N" | "S" | "W" | "E";

type CurrentPosition = {
  x: number;
  y: number;
};

const executeCommand = (
  indCommands: Directions[],
  currentPosition: CurrentPosition
) => {
  const result = indCommands.reduce((currentPos, cmd) => {
    let newPosition: CurrentPosition;

    switch (cmd) {
      case "N":
        newPosition = { x: currentPos.x, y: currentPos.y + 1 };
        break;
      case "E":
        newPosition = { x: currentPos.x + 1, y: currentPos.y };
        break;
      case "S":
        newPosition = { x: currentPos.x, y: currentPos.y - 1 };
        break;
      case "W":
        newPosition = { x: currentPos.x - 1, y: currentPos.y };
        break;
      default:
        throw new Error("Incorrect command");
    }

    if (
      newPosition.x < -5 ||
      newPosition.x > 5 ||
      newPosition.y < -5 ||
      newPosition.y > 5
    ) {
      console.log("Out of boundary", newPosition);
      throw new Error("Out of boundary");
    }

    return newPosition;
  }, currentPosition);

  console.log("Final path", result);
  return result;
};

const isNumber = (value: any) => typeof value === "number" && value === value;

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

  if (!(isNumber(currentPosition.x) && isNumber(currentPosition.y))) {
    console.log("x and y co-ordinates must be numbers");

    throw new Error("x and y co-ordinates must be numbers");
  }

  const commands = args[0].split(" ").filter((i): i is Directions => !!i);

  return executeCommand(commands, currentPosition);
}

const args = process.argv.slice(2);

main(args);
