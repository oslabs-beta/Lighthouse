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
  
  async getReceivedBytes(){
    let date = Math.floor((new Date().getTime()/1000)) - 500;
    console.log('received bytes gql')
    return this.get(`api/v1/query?query=confluent_kafka_server_received_bytes&time=${date}`)
  }

  async getSentBytes(){
    let date = Math.floor((new Date().getTime()/1000)) - 540;
    return this.get(`api/v1/query?query=confluent_kafka_server_sent_bytes&time=${date}`)
  }

  async getSentRecords(){
    console.log('records is called in gql')
    let date = Math.floor((new Date().getTime()/1000)) - 540;
    return this.get(`api/v1/query?query=confluent_kafka_server_sent_records&time=${date}`)
  }

  async getReceivedRecords(){
    let date = Math.floor((new Date().getTime()/1000)) - 180;
    return this.get(`api/v1/query?query=confluent_kafka_server_received_records&time=${date}`)
  }

  async getAuthCount(){
    let date = Math.floor((new Date().getTime()/1000)) - 180;
    return this.get(`api/v1/query?query=confluent_kafka_server_successful_authentication_count&time=${date}`)
  }

  async getActiveConnectionCount(){
    let date = Math.floor((new Date().getTime()/1000)) - 180;
    return this.get(`api/v1/query?query=confluent_kafka_server_active_connection_count&time=${date}`)
  }
}
