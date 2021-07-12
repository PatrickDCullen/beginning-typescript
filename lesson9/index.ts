interface Serializable {
  serialize(x: unknown): string;
}

interface Identifiable {
  uuid: string;
}

const something: Serializable & Identifiable = {
  uuid: "uuid-1",
  serialize(x: unknown): string {
    return JSON.stringify(x);
  },
};

type Dictionary = {
  [key: string]: string;
};

type OtherDictionary = Record<string, string>;

type UnknownRecord = Record<PropertyKey, unknown>;
