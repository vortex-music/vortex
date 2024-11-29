export interface IVortexAPI {
  platform: string,
  getAppPath(): Promise<string>,
  windowControls: {
    close(): void,
    minimize(): void,
    restore(): void
  }
}

declare global {
  interface Window {
    vortexAPI: IVortexAPI
  }
}