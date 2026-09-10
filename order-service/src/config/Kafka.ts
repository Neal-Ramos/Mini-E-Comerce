import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: "order-service",
    brokers: [process.env.KAFKA_BROKER!]
})
const producer = kafka.producer()
const consumer = kafka.consumer({groupId: "order-group"})
export async function KafkaInit(){
    producer.connect()
    consumer.connect()
    consumer.subscribe({
        topic: "gateway-req",
        fromBeginning: false
    })
}