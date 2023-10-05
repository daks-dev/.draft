// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare type Metadata = Record<
  string,
  string | string[] | number | boolean | Metadata | Metadata[] | null | undefined
>;

declare type ClassName = string | false | 0 | ClassName[] | undefined;

declare module 'canvas-confetti';
