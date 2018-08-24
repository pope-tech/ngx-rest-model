export declare class ModelFactory {
    static make(model: any, data: any): any;
    static makeFromArray(model: any, array: any): any[];
    static makeRelated(model: any, related: any, key: any): any;
    static makeRelatedFromRelationship(relationship: any, input: any): any;
}
