// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
import * as msg from "./msg_generated.ts";
import * as flatbuffers from "./flatbuffers.ts";
import * as dispatch from "./dispatch.ts";

function req(
  path: string,
  recursive: boolean,
  mode: number
): [flatbuffers.Builder, msg.Any, flatbuffers.Offset] {
  const builder = flatbuffers.createBuilder();
  const path_ = builder.createString(path);
  const inner = msg.Mkdir.createMkdir(builder, path_, recursive, mode);
  return [builder, msg.Any.Mkdir, inner];
}

/** Creates a new directory with the specified path synchronously.
 * If `recursive` is set to true, nested directories will be created (also known
 * as "mkdir -p").
 * `mode` sets permission bits (before umask) on UNIX and does nothing on
 * Windows.
 *
 *       Deno.mkdirSync("new_dir");
 *       Deno.mkdirSync("nested/directories", true);
 */
export function mkdirSync(path: string, recursive = false, mode = 0o777): void {
  dispatch.sendSync(...req(path, recursive, mode));
}

/** Creates a new directory with the specified path.
 * If `recursive` is set to true, nested directories will be created (also known
 * as "mkdir -p").
 * `mode` sets permission bits (before umask) on UNIX and does nothing on
 * Windows.
 *
 *       await Deno.mkdir("new_dir");
 *       await Deno.mkdir("nested/directories", true);
 */
export async function mkdir(
  path: string,
  recursive = false,
  mode = 0o777
): Promise<void> {
  await dispatch.sendAsync(...req(path, recursive, mode));
}
