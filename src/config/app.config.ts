interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Freelancer'],
  customerRoles: ['Guest'],
  tenantRoles: ['Freelancer', 'Client', 'Agency Owner', 'Agency Member', 'Guest'],
  tenantName: 'Company',
  applicationName: 'Upwork freelancer site',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read company information',
    'Read project information',
    'Read job information',
  ],
  ownerAbilities: [
    'Read job postings',
    'Submit proposals for jobs',
    'Edit their own proposals',
    'Delete their own proposals',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/f4dea764-fe8a-41cc-af48-d1e3621d7505',
};
