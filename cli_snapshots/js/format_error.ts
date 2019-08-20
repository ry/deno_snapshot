// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
import * as msg from "./msg_generated.ts";
import * as flatbuffers from "./flatbuffers.ts";
import { sendSync } from "./dispatch.ts";
import { assert } from "./util.ts";

export function formatError(errString: string): string {
  const builder = flatbuffers.createBuilder();
  const errString_ = builder.createString(errString);
  const offset = msg.FormatError.createFormatError(builder, errString_);
  const baseRes = sendSync(builder, msg.Any.FormatError, offset);
  assert(baseRes != null);
  assert(msg.Any.FormatErrorRes === baseRes!.innerType());
  const formatErrorResMsg = new msg.FormatErrorRes();
  assert(baseRes!.inner(formatErrorResMsg) != null);
  const formattedError = formatErrorResMsg.error();
  assert(formatError != null);
  return formattedError!;
}
