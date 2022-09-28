const { RESTDataSource } = require('apollo-datasource-rest');
const dotenv = require("dotenv");

// Trying new type of export, 9/26/2022 // 

export class PrometheusAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = "http://34.162.127.11:9090/";
  }

  // NEW getPartitionCount code// 
  async getPartitionCount() {
    // Send a GET request to the specified endpoint
    let date = Math.floor((new Date().getTime()/1000)) - 180;
    return this.get(`api/v1/query?query=confluent_kafka_server_partition_count&time=${date}`)  
  }
}
