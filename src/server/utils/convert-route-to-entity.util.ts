const mapping: Record<string, string> = {
  organizations: 'organization',
  players: 'player',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
