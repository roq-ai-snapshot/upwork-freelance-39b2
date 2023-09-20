const mapping: Record<string, string> = {
  companies: 'company',
  contracts: 'contract',
  jobs: 'job',
  projects: 'project',
  proposals: 'proposal',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
