import { getSync } from "stacktrace-js";

export function unimplemented(description?: string): never {
  const callerInfo = getSync()[1];
  throw new Error(
    `${
      description || callerInfo.functionName
    } hasn't been implemeneted yet! Find it at ${callerInfo.fileName}:${
      callerInfo.lineNumber
    }:${callerInfo.columnNumber}`
  );
}

export function $unimplemented(description?: string): (...args: any[]) => never {
  return () => {
    unimplemented(description);
  }
}