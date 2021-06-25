const userCreatedEvent = {
  eventType: "USER_CREATED",
  parameters: {
    id: "uuid-1",
    name: "Michael",
    email: "hello@email.com",
  },
};

const userDeletedEvent = {
  eventType: "USER_DELETED",
  parameters: {
    id: "1",
  },
};

// HOW WOULD WE TYPE THESE?
interface UserEvent {
  eventType: "USER_CREATED" | "USER_DELETED";
  parameters: {
    id: string;
    name?: string;
    email?: string;
  };
}

// IT BECOMES REALLY HARD TO DISCRIMINATE ON A PARTICULAR EVENT
const handleUserEvent = (event: UserEvent) => {
  if (event.eventType === "USER_CREATED") {
    // Do something with a USER_CREATED event
    console.log(event.parameters.name);
    return;
  }

  if (event.eventType === "USER_DELETED") {
    // Do something with a USER_DELETED event
    console.log(event.parameters.id);
    // No error despite the fact that there will never be a name on a USER_DELETED event
    console.log(event.parameters.name);
    return;
  }
};

interface UserCreatedEvent {
  eventType: "USER_CREATED";
  parameters: {
    id: string;
    name: string;
    email: string;
  };
}

interface UserDeletedEvent {
  eventType: "USER_DELETED";
  parameters: {
    id: string;
  };
}

type BetterUserEvent = UserCreatedEvent | UserDeletedEvent;

const handleBetterUserEvent = (event: BetterUserEvent) => {
  if (event.eventType === "USER_CREATED") {
    console.log(event.parameters.name);
    return;
  }

  if (event.eventType === "USER_DELETED") {
    console.log(event.parameters.id);
    // Throws an error as we want it
    console.log(event.parameters.name);
    return;
  }
};
