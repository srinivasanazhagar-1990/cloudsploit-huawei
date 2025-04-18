const { EcsClient, ListServersDetailsRequest } = require('@huaweicloud/huaweicloud-sdk-ecs');
const { BasicCredentials } = require('@huaweicloud/huaweicloud-sdk-core');

(async () => {
    try {
        // Initialize credentials
        const credentials = new BasicCredentials()
            .withAk('HPUA3YLC8FL6R7IRJ33T')
            .withSk('qgtZA6fZvrUl7Jd2cu3Rrk7sW4OfmPSOdNJfPkzk')
            .withProjectId('9ccdf7519e874d9394809d16c6091c35'); // Optional, but required for some regions

        // Create the ECS client
        const client = EcsClient.newBuilder()
            .withCredential(credentials)
            .withEndpoint('https://ecs.ap-southeast-3.myhuaweicloud.com')
            .build();

        // Create the request for ListServersDetails
        const request = new ListServersDetailsRequest();

        // Call the API
        const result = await client.listServersDetails(request);
        console.log('ECS Instances:', JSON.stringify(result, null, 2));
    } catch (err) {
        console.error('Error fetching ECS instances:', err.message);
        console.error('Full error details:', JSON.stringify(err, null, 2));
    }
})();
