export type SiteReleasePhase = "full" | "prelaunch_operates_x";

const PRELAUNCH_OPERATES_X: SiteReleasePhase = "prelaunch_operates_x";

export function getSiteReleasePhase(): SiteReleasePhase {
  return process.env.SITE_RELEASE_PHASE === PRELAUNCH_OPERATES_X ? PRELAUNCH_OPERATES_X : "full";
}

export function isPrelaunchOperatesX(): boolean {
  return getSiteReleasePhase() === PRELAUNCH_OPERATES_X;
}
