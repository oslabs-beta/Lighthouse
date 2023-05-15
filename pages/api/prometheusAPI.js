const { RESTDataSource } = require('apollo-datasource-rest');
const dotenv = require("dotenv");

export class PrometheusAPI extends RESTDataSource {
  constructor() {
    super();
    const API_URL = process.env.PROMETHEUS_API
    this.baseURL = API_URL;
  }
  
  async getPartitionCount() {
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
