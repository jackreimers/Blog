import { ClientSecretCredential } from '@azure/identity';
import { Client } from '@microsoft/microsoft-graph-client';
import {
	TokenCredentialAuthenticationProvider,
	type TokenCredentialAuthenticationProviderOptions
} from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials';

export async function getGraphClient(tenantId: string, clientId: string, clientSecret: string) {
	const tokenCredential = new ClientSecretCredential(tenantId, clientId, clientSecret);
	const options: TokenCredentialAuthenticationProviderOptions = {
		scopes: ['https://graph.microsoft.com/.default']
	};

	//Create an instance of the TokenCredentialAuthenticationProvider by passing the tokenCredential instance and options to the constructor
	const authProvider = new TokenCredentialAuthenticationProvider(tokenCredential, options);
	return Client.initWithMiddleware({
		debugLogging: false,
		authProvider: authProvider
	});
}
