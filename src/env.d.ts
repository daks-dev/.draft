// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

/*
type Astro = import('astro').AstroGlobal;
declare const Astro: Readonly<Astro>;
*/

declare type Metadata = Record<
  string,
  string | string[] | number | boolean | Metadata | Metadata[] | null | undefined
>;

/*
declare type Meta = string | number | boolean | null | undefined;
declare interface Metadata {
  [x: string]: Meta;
}
*/

declare type ClassName = string | false | 0 | ClassName[] | null | undefined;

declare namespace App {
  // interface Locals {}
}

declare module 'canvas-confetti';
