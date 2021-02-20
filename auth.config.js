export default {
  oidc: {
    clientId: '',
    redirectUri: '',
    endSessionRedirectUri: '',
    discoveryUri: 'https://<OKTA_DOMAIN>/oauth2/default',
    scopes: ['openid', 'profile', 'offline_access'],
    requireHardwareBackedKeyStore: false,
  },
};
