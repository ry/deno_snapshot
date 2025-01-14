// Because we're bootstrapping the TS compiler without dependencies on Node,
// this is written in JS.

const ASSETS = "$asset$";

function main(configText, rootNames) {
  println(`>>> ts version ${ts.version}`);
  println(`>>> rootNames ${rootNames}`);
  const host = new Host();

  assert(rootNames.length > 0);

  let { options, diagnostics } = configure(configText);
  handleDiagnostics(host, diagnostics);

  println(`>>> TS config: ${JSON.stringify(options)}`);

  const program = ts.createProgram(rootNames, options, host);

  diagnostics = ts.getPreEmitDiagnostics(program).filter(({ code }) => {
    // TS2691: An import path cannot end with a '.ts' extension. Consider
    // importing 'bad-module' instead.
    if (code === 2691) return false;
    // TS5009: Cannot find the common subdirectory path for the input files.
    if (code === 5009) return false;
    /*
    // TS5055: Cannot write file
    // 'http://localhost:4545/tests/subdir/mt_application_x_javascript.j4.js'
    // because it would overwrite input file.
    if (code === 5055) return false;
    // TypeScript is overly opinionated that only CommonJS modules kinds can
    // support JSON imports.  Allegedly this was fixed in
    // Microsoft/TypeScript#26825 but that doesn't seem to be working here,
    // so we will ignore complaints about this compiler setting.
    if (code === 5070) return false;
    */
    return true;
  });
  handleDiagnostics(host, diagnostics);

  const emitResult = program.emit();
  handleDiagnostics(host, emitResult.diagnostics);

  dispatch("setEmitResult", emitResult);
}

function println(...s) {
  Deno.core.print(s.join(" ") + "\n");
}

function unreachable() {
  throw Error("unreachable");
}

function assert(cond) {
  if (!cond) {
    throw Error("assert");
  }
}

// decode(Uint8Array): string
function decodeAscii(ui8) {
  let out = "";
  for (let i = 0; i < ui8.length; i++) {
    out += String.fromCharCode(ui8[i]);
  }
  return out;
}

function encode(str) {
  const charCodes = str.split("").map(c => c.charCodeAt(0));
  const ui8 = new Uint8Array(charCodes);
  // println(`encode ${ui8}`);
  return ui8;
}

const ops = {
  readFile: 49,
  exit: 50,
  writeFile: 51,
  resolveModuleNames: 52,
  setEmitResult: 53
};

// interface CompilerHost extends ModuleResolutionHost {
class Host {
  // fileExists(fileName: string): boolean;
  fileExists(fileName) {
    println(`fileExists ${fileName}`);
    return true;
    // unreachable();
  }

  // readFile(fileName: string): string | undefined;
  readFile() {
    unreachable();
  }

  // trace?(s: string): void;
  // directoryExists?(directoryName: string): boolean;
  // realpath?(path: string): string;
  // getCurrentDirectory?(): string;
  // getDirectories?(path: string): string[];

  // useCaseSensitiveFileNames(): boolean;
  useCaseSensitiveFileNames() {
    return false;
  }

  // getDefaultLibFileName(options: CompilerOptions): string;
  getDefaultLibFileName(options) {
    return "lib.deno_core.d.ts";
  }

  // getDefaultLibLocation?(): string;
  getDefaultLibLocation() {
    return ASSETS;
  }

  /*
  getDefaultLibFileName(_options) {
    return ASSETS + "/deno_core.d.ts";
  }
*/

  // getCurrentDirectory(): string;
  getCurrentDirectory() {
    return ".";
  }

  // getCanonicalFileName(fileName: string): string
  getCanonicalFileName(fileName) {
    unreachable();
  }

  // getSourceFile(fileName: string, languageVersion: ScriptTarget, onError?:
  // (message: string) => void, shouldCreateNewSourceFile?: boolean): SourceFile
  // | undefined;
  getSourceFile(fileName, languageVersion, onError, shouldCreateNewSourceFile) {
    assert(!shouldCreateNewSourceFile); // We haven't yet encountered this.

    // This hacks around the fact that TypeScript tries to magically guess the
    // d.ts filename.
    if (fileName.startsWith("$typeRoots$")) {
      assert(fileName.startsWith("$typeRoots$/"));
      assert(fileName.endsWith("/index.d.ts"));
      fileName = fileName
        .replace("$typeRoots$/", "")
        .replace("/index.d.ts", "");
    }

    const { sourceCode, moduleName } = dispatch("readFile", {
      fileName,
      languageVersion,
      shouldCreateNewSourceFile
    });
    let sourceFile = ts.createSourceFile(fileName, sourceCode, languageVersion);
    sourceFile.moduleName = moduleName;
    return sourceFile;
  }

  /*
    writeFile(
      fileName: string,
      data: string,
      writeByteOrderMark: boolean,
      onError?: (message: string) => void,
      sourceFiles?: ReadonlyArray<ts.SourceFile>
    ): void
  */
  writeFile(
    fileName,
    data,
    writeByteOrderMark,
    onError = null,
    sourceFiles = null
  ) {
    const moduleName = sourceFiles[sourceFiles.length - 1].moduleName;
    return dispatch("writeFile", { fileName, moduleName, data });
  }

  // getSourceFileByPath?(fileName: string, path: Path, languageVersion: ScriptTarget, onError?: (message: string) => void, shouldCreateNewSourceFile?: boolean): SourceFile | undefined;
  getSourceFileByPath(
    fileName,
    path,
    languageVersion,
    onError,
    shouldCreateNewSourceFile
  ) {
    unreachable();
  }

  // getCancellationToken?(): CancellationToken;
  getCancellationToken() {
    unreachable();
  }

  // getCanonicalFileName(fileName: string): string;
  getCanonicalFileName(fileName) {
    return fileName;
  }

  // getNewLine(): string
  getNewLine() {
    return "\n";
  }

  // readDirectory?(rootDir: string, extensions: ReadonlyArray<string>, excludes: ReadonlyArray<string> | undefined, includes: ReadonlyArray<string>, depth?: number): string[];
  readDirectory() {
    unreachable();
  }

  // resolveModuleNames?(
  //   moduleNames: string[],
  //   containingFile: string,
  //   reusedNames?: string[],
  //   redirectedReference?: ResolvedProjectReference
  // ): (ResolvedModule | undefined)[];
  resolveModuleNames(moduleNames, containingFile) {
    const resolvedNames = dispatch("resolveModuleNames", {
      moduleNames,
      containingFile
    });
    const r = resolvedNames.map(resolvedFileName => {
      const extension = getExtension(resolvedFileName);
      return { resolvedFileName, extension };
    });
    return r;
  }

  // resolveTypeReferenceDirectives?(typeReferenceDirectiveNames: string[], containingFile: string, redirectedReference?: ResolvedProjectReference): (ResolvedTypeReferenceDirective | undefined)[];
  /*
  resolveTypeReferenceDirectives() {
    unreachable();
  }
  */

  // getEnvironmentVariable?(name: string): string | undefined;
  getEnvironmentVariable() {
    unreachable();
  }

  // createHash?(data: string): string;
  createHash() {
    unreachable();
  }

  // getParsedCommandLine?(fileName: string): ParsedCommandLine | undefined;
  getParsedCommandLine() {
    unreachable();
  }
}

function configure(configurationText) {
  const { config, error } = ts.parseConfigFileTextToJson(
    "tsconfig.json",
    configurationText
  );
  if (error) {
    return { diagnostics: [error] };
  }
  const { options, errors } = ts.convertCompilerOptionsFromJson(
    config.compilerOptions,
    ""
  );
  return {
    options,
    diagnostics: errors.length ? errors : undefined
  };
}

function dispatch(opName, obj) {
  const s = JSON.stringify(obj);
  const msg = encode(s);
  const resUi8 = Deno.core.dispatch(ops[opName], msg);
  const resStr = decodeAscii(resUi8);
  const res = JSON.parse(resStr);
  if (!res["ok"]) {
    throw Error(`${opName} failed ${res["err"]}. Args: ${JSON.stringify(obj)}`);
  }
  return res["ok"];
}

function exit(code) {
  dispatch("exit", { code });
  unreachable();
}

// Maximum number of diagnostics to display.
const MAX_ERRORS = 5;

function handleDiagnostics(host, diagnostics) {
  if (diagnostics && diagnostics.length) {
    let rest = 0;
    if (diagnostics.length > MAX_ERRORS) {
      rest = diagnostics.length - MAX_ERRORS;
      diagnostics = diagnostics.slice(0, MAX_ERRORS);
    }
    const msg = ts.formatDiagnosticsWithColorAndContext(diagnostics, host);
    println(msg);
    if (rest) {
      println(`And ${rest} other errors.`);
    }
    exit(1);
  }
}

/** Returns the TypeScript Extension enum for a given media type. */
function getExtension(fileName) {
  if (fileName.endsWith(".d.ts")) {
    return ts.Extension.Dts;
  } else if (fileName.endsWith(".ts")) {
    return ts.Extension.Ts;
  } else if (fileName.endsWith(".js")) {
    return ts.Extension.Js;
  } else {
    // return  msg.MediaType.Unknown:
    throw TypeError("Cannot resolve extension.");
  }
}
