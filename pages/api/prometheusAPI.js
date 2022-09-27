const { RESTDataSource } = require('apollo-datasource-rest');
const dotenv = require("dotenv");

class prometheusAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = process.env.PROMENDPOINT;
  }

  async getPartitionCount() {
    // Send a GET request to the specified endpoint
    const result = await this.get(`api/v1/query?query=confluent_kafka_server_partition_count&time=2022-08-31T16:49:21Z}`)
    const data = result
    return this.formatResponse(data)
  }
}

//Adding some comments into this to add to github 

export default prometheusAPI;