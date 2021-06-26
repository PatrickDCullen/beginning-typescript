/**
 * THE NEVER TYPE
 * Anytime we are doing checks on a 'Discriminated Union' https://www.typescriptlang.org/docs/handbook/2/narrowind.html#discriminated-unions
 * we can use this for exhaustiveness checking. It essentially gives us compile time checks for unhandled cases.
 */
const unreachableCaseError = (x: never): never => {
  throw Error(x);
};

interface UserUpdatedEvent {
  eventType: "USER_UPDATED";
  params: {
    id: string;
    name: string;
    email: string;
    someThingElse: string;
  };
}
type EvenBetterUserEvent =
  | UserCreatedEvent
  | UserDeletedEvent
  | UserUpdatedEvent;

const handleEvenBetterUserEvent = (event: EvenBetterUserEvent) => {
  if (event.eventType === "USER_CREATED") {
    console.log(event.parameters.name);
    return;
  }

  if (event.eventType === "USER_DELETED") {
    console.log(event.parameters.id);
    return;
  }

  //   Take out this block and then we will get an error due to not exhaustively narrowing the union
  if (event.eventType === "USER_UPDATED") {
    console.log(event.params.someThingElse);
    return;
  }

  unreachableCaseError(event);
};
