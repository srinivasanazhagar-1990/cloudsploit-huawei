'use strict';

const HuaweiCloud = require('@huaweicloud/huaweicloud-sdk-core');
const VPC = require('@huaweicloud/huaweicloud-sdk-vpc');

async function test() {
    console.log('Starting test...');

    const auth = new HuaweiCloud.BasicCredentials()
        .withAk('HPUA3YLC8FL6R7IRJ33T')
        .withSk('qgtZA6fZvrUl7Jd2cu3Rrk7sW4OfmPSOdNJfPkzk')
        .withProjectId('bd17cfef8df8471ba0abef73278089b7');

    const client = VPC.VpcClient.newBuilder()
        .withCredential(auth)
        .withEndpoint('https://vpc.cn-north-4.myhuaweicloud.com')
        .build();

    const request = new VPC.ListVpcsRequest();
    console.log('Sending request...');
    try {
        const result = await client.listVpcs(request);
        console.log('Result:', result);
    } catch (err) {
        console.error('Error:', err);
    }
}

test();
