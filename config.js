// CloudSploit config file

module.exports = {
    credentials: {
	alibaba: {
            // OPTION 1: If using a credential JSON file, enter the path below
            // credential_file: '/path/to/file.json',
            // OPTION 2: If using hard-coded credentials, enter them below
            //   access_key_id: process.env.ALIBABA_ACCESS_KEY_ID || '',
             //access_key_secret: process.env.ALIBABA_ACCESS_KEY_SECRET || '',
        },
        aws: {
            // OPTION 1: If using a credential JSON file, enter the path below
            // credential_file: '/path/to/file.json',
            // OPTION 2: If using hard-coded credentials, enter them below
            // access_key: process.env.AWS_ACCESS_KEY_ID || '',
            // secret_access_key: process.env.AWS_SECRET_ACCESS_KEY || '',
            // session_token: process.env.AWS_SESSION_TOKEN || '',
            // plugins_remediate: ['bucketEncryptionInTransit']
        },
        aws_remediate: {
            // OPTION 1: If using a credential JSON file, enter the path below
            // credential_file: '/path/to/file.json',
            // OPTION 2: If using hard-coded credentials, enter them below
            // access_key: process.env.AWS_ACCESS_KEY_ID || '',
            // secret_access_key: process.env.AWS_SECRET_ACCESS_KEY || '',
            // session_token: process.env.AWS_SESSION_TOKEN || '',
        },
        azure: {
            // OPTION 1: If using a credential JSON file, enter the path below
            // credential_file: '/path/to/file.json',
            // OPTION 2: If using hard-coded credentials, enter them below
            // application_id: process.env.AZURE_APPLICATION_ID || '',
            // key_value: process.env.AZURE_KEY_VALUE || '',
            // directory_id: process.env.AZURE_DIRECTORY_ID || '',
            // subscription_id: process.env.AZURE_SUBSCRIPTION_ID || '',
            // storage_connection: process.env.AZURE_STORAGE_CONNECTION || '',
            // blob_container: process.env.AZURE_BLOB_CONTAINER || '',
            // govcloud: process.env.AZURE_GOV_CLOUD || ''
        },
        azure_remediate: {
            // OPTION 1: If using a credential JSON file, enter the path below
            // credential_file: '/path/to/file.json',
            // OPTION 2: If using hard-coded credentials, enter them below
            // application_id: process.env.AZURE_APPLICATION_ID || '',
            // key_value: process.env.AZURE_KEY_VALUE || '',
            // directory_id: process.env.AZURE_DIRECTORY_ID || '',
            // subscription_id: process.env.AZURE_SUBSCRIPTION_ID || ''
        },
        google_remediate: {
            // OPTION 1: If using a credential JSON file, enter the path below
            // credential_file: process.env.GOOGLE_APPLICATION_CREDENTIALS || '/path/to/file.json',
            // OPTION 2: If using hard-coded credentials, enter them below
            // project: process.env.GOOGLE_PROJECT_ID || 'my-project',
            // client_email: process.env.GOOGLE_CLIENT_EMAIL || 'cloudsploit@your-project-name.iam.gserviceaccount.com',
            // private_key: process.env.GOOGLE_PRIVATE_KEY || '-----BEGIN PRIVATE KEY-----\nYOUR-PRIVATE-KEY-GOES-HERE\n-----END PRIVATE KEY-----\n'
        },
        google: {
            // OPTION 1: If using a credential JSON file, enter the path below
            // credential_file: process.env.GOOGLE_APPLICATION_CREDENTIALS || '/path/to/file.json',
            // OPTION 2: If using hard-coded credentials, enter them below
            // project: process.env.GOOGLE_PROJECT_ID || '',
            // client_email: process.env.GOOGLE_CLIENT_EMAIL || '',
            // private_key: process.env.GOOGLE_PRIVATE_KEY || ''
        },
        oracle: {
            // OPTION 1: If using a credential JSON file, enter the path below
            // credential_file: '/path/to/file.json',
            // OPTION 2: If using hard-coded credentials, enter them below
            // tenancy_id: process.env.ORACLE_TENANCY_ID || 'ocid1.tenancy.oc1..',
            // compartment_id: process.env.ORACLE_COMPARTMENT_ID || 'ocid1.compartment.oc1..',
            // user_id: process.env.ORACLE_USER_ID || 'ocid1.user.oc1..',
            // key_fingerprint: process.env.ORACLE_KEY_FINGERPRINT || 'YOURKEYFINGERPRINT',
            // key_value: process.env.ORACLE_KEY_VALUE || '-----BEGIN PRIVATE KEY-----\nYOUR-PRIVATE-KEY-GOES-HERE\n-----END PRIVATE KEY-----\n'
        },
        github: {
            // OPTION 1: If using a credential JSON file, enter the path below
            // credential_file: '/path/to/file.json',
            // OPTION 2: If using hard-coded credentials, enter them below
            // token: process.env.GITHUB_TOKEN || '',
            // url: process.env.GITHUB_URL || 'https://api.github.com',
            // login: process.env.GITHUB_LOGIN || 'myusername',
            // organization: process.env.GITHUB_ORG || false
        },
	huawei: {
        	access_key: process.env.HUAWEI_ACCESS_KEY || '',
        	secret_access_key: process.env.HUAWEI_SECRET_KEY || '',
		regions: {
            	    'cn-north-4': {
                        projectId: '',
                        endpoint: 'https://vpc.cn-north-4.myhuaweicloud.com'
                    },
                    'ap-southeast-1': {
                        projectId: '',
                        endpoint: 'https://vpc.ap-southeast-1.myhuaweicloud.com'
                    },
                    'ap-southeast-3': {
                        projectId: '',
                        endpoint: 'https://vpc.ap-southeast-3.myhuaweicloud.com',
			region: 'ap-southeast-3'
                    },
                    'ap-southeast-2': {
                        projectId: '',
                        endpoint: 'https://vpc.ap-southeast-2.myhuaweicloud.com'
                    },
                    'cn-east-3': {
                        projectId: '',
                        endpoint: 'https://vpc.cn-east-3.myhuaweicloud.com'
                    }
                }

    	}
    }
};
