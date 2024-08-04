---
date: 2024-07-02T12:00:00.000+10:00
tags: [ "azure", "graphql", "javascript", "typescript" ]
title: Sending Emails with the Microsoft Graph API
description: A guide on how to send emails programmatically using the Microsoft Graph API.
slug: sending-emails-with-ms-graph
---

Recently I have been exploring options for sending emails programmatically for my contact form and found that most
email services are expensive and include a lot of marketing focused features that I don't need.

<!--endintro-->

## Introduction

## Prerequisites

- Microsoft 365 account with an active Exchange mailbox.
- Microsoft 365 account with administrator access to the [Azure Portal](https://portal.azure.com).

Information about Exchange Online plans can be
found [here](https://www.microsoft.com/en-au/microsoft-365/exchange/compare-microsoft-exchange-online-plans).

## Azure Setup

In order for your application to send emails using the Microsoft Graph API you need to generate credentials in Azure
that will allow it to authenticate and send emails.

### 1. Create an Enterprise Application

In order for your application to authenticate and integrate with Azure services you will need to create an Enterprise
Application in Entra ID. The Enterprise Application will represent your application in Azure and will be used to assign
permissions and generate credentials.

Log in to the **[Azure Portal](https://portal.azure.com)** and navigate to **Entra ID** > **Enterprise Applications**.

![](/data/blog/sending-emails-with-ms-graph/images/azure-01.png)

Click **New application**.

![](/data/blog/sending-emails-with-ms-graph/images/azure-02.png)

Click **Create your own application**, give your application a name, select the option **Register an application to
integrate with Microsoft Entra ID**, and
click **Create**.

![](/data/blog/sending-emails-with-ms-graph/images/azure-03.png)

Select the option **Accounts in this organizational directory only** and click **Register**.

![](/data/blog/sending-emails-with-ms-graph/images/azure-04.png)

### 2. Grant Permissions

The Enterprise Application should now be created in Azure, but it will not be able to do anything useful until it is
granted
permissions. You will need to grant the it the **Mail.ReadWrite** and **Mail.Send** permissions in order to send
emails.

> For security reasons, only ever grant the minimum permissions required.

Navigate to **Entra ID** > **App registrations** > **All applications** and open the application you just created.

![](/data/blog/sending-emails-with-ms-graph/images/azure-05.png)

Navigate to **API permissions**, click **Add a permission**, then click **Microsoft Graph**.

![](/data/blog/sending-emails-with-ms-graph/images/azure-06.png)

Search for the permission **Mail.ReadWrite** and **Mail.Send** and select them, then click **Add permissions**.

![](/data/blog/sending-emails-with-ms-graph/images/azure-07.png)

Click **Grant admin consent** to activate the permissions.

![](/data/blog/sending-emails-with-ms-graph/images/azure-08.png)

### 3. Generate a Client Secret

The final step in setting up your Enterprise Application is to generate a client secret, which can be thought of as a
password. This password will be used by your application to authenticate with the Microsoft Graph API and
send emails.

Multiple client secrets can be generated for an Enterprise Application, which can be used to rotate credentials or
revoke access.

Navigate to **Certificates & secrets** and click **New client secret**.

![](/data/blog/sending-emails-with-ms-graph/images/azure-09.png)

Give your client secret a description, set the expiry date, and click **Add**.

> The client secret will only be displayed once and cannot be retrieved again.

## Application Setup

With the Azure setup complete we can move on to the code, which in this case is the easy part. Microsoft maintains
clients for the Microsoft Graph API in most common languages. In this example I will be using the TypeScript client.

### 1. Gather Secrets

In order to authenticate your application you will need three secrets:

- Tenant ID
- Client ID
- Client Secret

You should already have your client secret from the previous step. To find the remaining secrets navigate to
**Entra ID** > **App registrations** > **All applications** and open the Enterprise Application you just created.

![](/data/blog/sending-emails-with-ms-graph/images/azure-10.png)

### 2. Install Packages

```bash
npm install @azure/identity
npm install @microsoft/microsoft-graph-client
```

### 3. Create a Client

```typescript
import { ClientSecretCredential } from '@azure/identity';
import { Client } from '@microsoft/microsoft-graph-client';
import {
	TokenCredentialAuthenticationProvider,
	type TokenCredentialAuthenticationProviderOptions
} from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials';

export async function getGraphClient(tenantId: string, clientId: string, clientSecret: string) {
	const tokenCredential = new ClientSecretCredential(tenantId, clientId, clientSecret);
	const options: TokenCredentialAuthenticationProviderOptions = { scopes: ["https://graph.microsoft.com/.default"] };

	//Create an instance of the TokenCredentialAuthenticationProvider by passing the tokenCredential instance and options to the constructor
	const authProvider = new TokenCredentialAuthenticationProvider(tokenCredential, options);
	return Client.initWithMiddleware({
		debugLogging: false,
		authProvider: authProvider,
	});
}
```

### 4. Send an Email

```typescript
const client = await getGraphClient(TENANT_ID, CLIENT_ID, CLIENT_SECRET);

const payload = {
	message: {
		subject: 'Hello from the Microsoft Graph API',
		body: {
			contentType: 'Text',
			content: 'This is a test email sent from the Microsoft Graph API.'
		},
		toRecipients: [
			{
				emailAddress: {
					address: 'me@jackreimers.dev'
				}
			}
		]
	},
	//This will not save the email to the sent items folder
	saveToSentItems: 'false'
};

await client.api('https://graph.microsoft.com/v1.0/me/sendMail').post(payload);
```

> Do not run this code on the client side as it will expose your secret keys.

## Considerations

Due to application permissions being used, the credentials generated for this application are able to read the emails of
any user in your tenant and send emails as them without their knowledge.
Consider the security implications of this and in cases where you only need to send emails on behalf of a specific user
it may be better to use delegated permissions.

## Conclusion
