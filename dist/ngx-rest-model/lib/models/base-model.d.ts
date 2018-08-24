import { Serializable } from './serializable.interface';
import { Model } from './model.interface';
export declare class BaseModel implements Model, Serializable {
    modelConfig: {
        key: string;
        uri: string;
        hidden: any[];
        relationships: {};
    };
    constructor();
    setConfig(config: any): void;
    getConfig(): {
        key: string;
        uri: string;
        hidden: any[];
        relationships: {};
    };
    getUri(): string;
    getSelfUri(): string;
    setUri(uri: any): void;
    getKey(): string;
    getRelationship(key: any): any;
    deserialize(input: any): this;
    snakeToCamel(string: any): any;
}
