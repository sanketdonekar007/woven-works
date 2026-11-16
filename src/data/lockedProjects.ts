// Home page cards that always ask for a password. Their case studies live in src/private
// and only exist in the local dev build; on the live site no password opens them.
export const lockedProjects: Record<string, { accentColor: string }> = {
  checkalt: { accentColor: "#3B6FD8" },
  accurest: { accentColor: "#3B74E0" },
};
