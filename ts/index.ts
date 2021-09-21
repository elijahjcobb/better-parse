/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as Parse from "parse";

function notImplemented(): Error {
	return new Error("Not implemented.");
}

// https://parseplatform.org/Parse-SDK-JS/api/master/Parse.Object.html
export class ParseObject {

	private object: Parse.Object<{name?: string, age: number}>;

	public constructor(className: string) {
		this.object = new Parse.Object(className);
		this.object.get("name")
	}


	public addAllUnique(key: string, ...items: any[]): void {}
	public addUnique(key: string, item: any): void {}
	public clear(): void {}
	public clone(): void {}
	public decrement(key: string, amount: number = 1): void {}
	public async destroy(): Promise<void> {}
	public dirty(key?: string): boolean { throw notImplemented(); }
	public dirtyKeys(): string[] { throw notImplemented(); }
	public equals(other: ParseObject): boolean { throw notImplemented(); }
	public async exists(): Promise<boolean> { throw notImplemented(); }
	public async fetch(): Promise<void> {}
	public async fetchFromLocalDatastore(): Promise<void> {}
	public get(key: string): void {}
	public getACL(): Parse.ACL { throw notImplemented(); }
	public has(key: string): boolean { throw notImplemented(); }
	public increment(key: string, amount: number = 1): void {}
	public async isPinned(): Promise<boolean> { throw notImplemented(); }
	public async pin(): Promise<void> {}
	public async pinWithName(name: string): Promise<void> {}
	public setACL(acl: Parse.ACL): void {}
	public toJSON(): void {}
	public async unPin(): Promise<void> {}
	public async unPinWithName(name: string): Promise<void> {}
	public parseObject(): Parse.Object { return this.object; }

}
