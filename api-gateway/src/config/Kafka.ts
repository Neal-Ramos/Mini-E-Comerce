import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: "api-gateway",
    brokers: [process.env.KAFKA_BROKER!]
})
const producer = kafka.producer()
const consumer = kafka.consumer({groupId: "gateway-group"})
export async function KafkaInit(){
    producer.connect()
    consumer.connect()
    consumer.subscribe({
        topic: "order-service",
        fromBeginning: false
    })
}