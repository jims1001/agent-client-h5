declare module '*.json' {
  const value: any
  export default value
}

declare namespace NodeModule {
  // eslint-disable-next-line no-var
  var id: string
}

declare const require: NodeRequire

interface NodeRequire {
  context(
    directory: string,
    useSubdirectories?: boolean,
    regExp?: RegExp
  ): {
    (key: string): any
    keys(): string[]
  }
}

declare const __webpack_public_path__: string

declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}

// src/types/geetest.d.ts
declare function initGeetest4(
  config: any,
  callback: (captchaObj: any) => void
): void

// 定义全局 navigateTo 函数类型
interface NavigateOptions {
  replace?: boolean
  state?: any
}

declare function navigateTo(path: any, options?: NavigateOptions): void

// worker.d.ts
declare module '*.worker.ts' {
  class Worker extends globalThis.Worker {
    constructor()
  }
  export default Worker
}
