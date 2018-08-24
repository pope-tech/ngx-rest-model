/**
 * Interface for json->object deserialization.
 * https://stackoverflow.com/questions/22885995/how-do-i-initialize-a-typescript-object-with-a-json-object/22886730#22886730
 */
export interface Serializable {
    deserialize(input: Object): any;
}
